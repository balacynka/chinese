import { Animation, FrameFunction } from "./animationClass.js";
import {
    autoscrollAnimationDuration,
    autoscrollTopPadding,
    links,
    linksElement,
    linksWrapper,
    mobileWidth,
    navElement,
    scrollbarElement,
} from "./init.js";
import { closeMobileNav } from "./utils.js";

// links
let aLinkHasBeenClicked: boolean = false;
links.forEach(link => {
    link.onclick = function (event) {
        event.preventDefault();
        aLinkHasBeenClicked = true;

        const targetSection = document.getElementById(decodeURIComponent(link.href.split("#")[1])) as HTMLElement;
        const frameFunction: FrameFunction = (scrollY: number): void => {
            window.scrollTo(window.scrollX, scrollY);
        };
        new Animation(
            autoscrollAnimationDuration,
            window.scrollY,
            Math.max(0, window.scrollY + targetSection.getBoundingClientRect().top - autoscrollTopPadding),
            Animation.easeInOutQuad,
            frameFunction
        );
    };
});

// links element hover effect
let initialLinksElementOffset: number = 0;
linksWrapper.onmouseenter = function () {
    if (document.body.offsetWidth <= mobileWidth) return;

    aLinkHasBeenClicked = false;
    initialLinksElementOffset = parseFloat(linksElement.style.top);

    // prevent page scrolling
    navElement.dataset.wrapperIsHovered = "true";
    document.body.style.overflowY = "hidden";

    if (linksElement.clientHeight < navElement.clientHeight) {
        linksElement.style.transitionDuration = autoscrollAnimationDuration + "ms";
        linksElement.style.top = "0";
    }

    // stagger animation
    // const activeLink = linksElement.getElementsByClassName(activeLinkClass)[0] as HTMLLinkElement | undefined;
    // if (!activeLink) return;
    // const activeLinkIndex: number = getChildIndex(activeLink, linksElement);
    // links.forEach((link: HTMLLinkElement, index: number) => {
    //     link.style.transitionDelay = Math.abs(activeLinkIndex - index) * 15 + "ms";
    // });
};
linksWrapper.onmouseleave = function () {
    if (document.body.offsetWidth <= mobileWidth) return;

    // restore page scrolling
    navElement.dataset.wrapperIsHovered = "false";
    document.body.style.overflowY = "";

    // stagger animation
    // const activeLink = linksElement.getElementsByClassName(activeLinkClass)[0] as HTMLLinkElement | undefined;
    // if (!activeLink) return;
    // const activeLinkIndex: number = getChildIndex(activeLink, linksElement);
    // links.forEach((link: HTMLLinkElement, index: number) => {
    //     setTimeout(() => {
    //         link.style.transitionDelay = "";
    //     }, Math.abs(activeLinkIndex - index) * 15);
    // });

    if (aLinkHasBeenClicked) {
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
        return;
    }

    linksElement.style.top = initialLinksElementOffset + "px";
    setTimeout(() => {
        linksElement.style.transitionDuration = "";
    }, autoscrollAnimationDuration);
};

// point scroll
linksWrapper.onwheel = function (event) {
    if (document.body.offsetWidth <= mobileWidth) return;
    if (navElement.dataset.wrapperIsHovered !== "true") return;

    const newOffset: number = parseFloat(linksElement.style.top) - event.deltaY;
    const upperLimit: number = scrollbarElement.clientHeight - linksElement.clientHeight;
    const downLimit: number = 0;

    linksElement.style.top = Math.min(downLimit, Math.max(upperLimit, newOffset)) + "px";
};
window.addEventListener("scroll", function () {
    if (document.body.offsetWidth <= mobileWidth) return;

    const scrolledPercentage: number = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const scrollPointOffset: number = scrolledPercentage * navElement.clientHeight;
    navElement.style.setProperty("--point-offset", scrollPointOffset.toFixed(5) + "px");
    navElement.dataset.pointOffset = scrollPointOffset + "";
});

// scrollbar click
let letMouseButtonIsPressed = false;
scrollbarElement.onmousedown = event => (letMouseButtonIsPressed = event.button === 0);
document.body.onmouseup = () => (letMouseButtonIsPressed = false);

scrollbarElement.onmouseover = () => (document.body.style.userSelect = "none");
scrollbarElement.onmouseleave = () => (document.body.style.userSelect = "");

document.body.onmousemove = scrollbarElement.onclick = function (event) {
    if (document.body.offsetWidth <= mobileWidth) return;
    if (!letMouseButtonIsPressed && !(event instanceof PointerEvent)) return;

    const scrollPointOffset: number = Math.max(0, event.clientY - navElement.getBoundingClientRect().y);
    const clickedPercentage: number = Math.min(1, scrollPointOffset / navElement.clientHeight);
    window.scrollTo(window.scrollX, clickedPercentage * (document.body.scrollHeight - window.innerHeight));
};

// mobile nav
navElement.addEventListener("click", closeMobileNav);
