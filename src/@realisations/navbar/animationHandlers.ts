import { Animation, FrameFunction } from "./animationClass.js";
import { activeLinkChangingDuration, activeLinkClass, linkClass, linksElement, maxActiveLinksChanges } from "./init.js";
import { clearActiveLinks } from "./utils.js";

let animation: Animation;
export function initAnimations(
    linkFrom: number,
    linkTo: number,
    linksElementOffsetFrom: number,
    linksElementOffsetTo: number
): Animation {
    if (animation !== undefined) animation.stopAnimation = true;
    const animationFrameHandler: FrameFunction = function (t: number): void {
        animateLinksElement(linksElementOffsetFrom, linksElementOffsetTo, t);
        animateActiveLinkChanging(linkFrom, linkTo, t);
    };
    animation = new Animation(
        Math.min(maxActiveLinksChanges, Math.abs(linkTo - linkFrom)) * activeLinkChangingDuration,
        0,
        1,
        Animation.easeInOutQuad,
        animationFrameHandler
    );
    return animation;
}

let lastIndex: number = -1;
function animateActiveLinkChanging(from: number, to: number, t: number): void {
    const index: number = Math.round(Animation.lerp(from, to, t));
    if (lastIndex === index) return;
    lastIndex = index;

    clearActiveLinks(linksElement);
    const currentLink: HTMLLinkElement = linksElement.getElementsByClassName(linkClass)[index] as HTMLLinkElement;
    currentLink.classList.add(activeLinkClass);
}

function animateLinksElement(from: number, to: number, t: number): void {
    linksElement.style.top = Animation.lerp(from, to, t) + "px";
}
