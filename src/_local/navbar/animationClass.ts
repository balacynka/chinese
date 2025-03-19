export type EasingFunction = (t: number) => number;
export type FrameFunction = (lerpedValue: number, animation: Animation) => void;

export class Animation {
    stopAnimation: boolean = false;
    isStopped: boolean = false;
    isEnded: boolean = false;
    startTimestamp: number = NaN;
    elapsedTime: number = 0;
    t: number = 0;
    easedT: number = 0;

    constructor(
        readonly duration: number,
        readonly startValue: number,
        readonly endValue: number,
        readonly easingFunction: EasingFunction,
        readonly frameFunction: FrameFunction
    ) {
        this.start();
    }

    get isRunning(): boolean {
        return !(this.isStopped || this.isEnded);
    }

    protected start(): void {
        const self: Animation = this;

        function animationRoutine(timestamp: number): void {
            // @ts-expect-error
            if (self.stopAnimation) return (self.isStopped = true);

            if (isNaN(self.startTimestamp)) self.startTimestamp = timestamp;

            const elapsedTime: number = timestamp - self.startTimestamp;
            const t = Math.min(1, elapsedTime / self.duration);
            const easedT = self.easingFunction(t);
            const lerpedValue = Animation.lerp(self.startValue, self.endValue, easedT);

            self.frameFunction(lerpedValue, self);

            if (t < 1) requestAnimationFrame(animationRoutine);
            else self.isEnded = true;
        }
        requestAnimationFrame(animationRoutine);
    }

    static lerp(start: number, end: number, t: number): number {
        return start + (end - start) * t;
    }

    static easeInOutQuad: EasingFunction = function (t: number): number {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };
}
