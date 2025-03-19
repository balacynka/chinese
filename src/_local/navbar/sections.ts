import { Animation } from "./animationClass.js";
import { initAnimations } from "./animationHandlers.js";
import { activeLinkClass, links, linksElement, maxActiveLinksChanges, mobileWidth, navElement } from "./init.js";
import { calcLinksOffset, clearActiveLinks, getChildIndex, getCurrentSection, sections } from "./utils.js";

let animation: Animation;
let currentSection: HTMLElement = getCurrentSection() ?? sections[0];

const currentSectionElement = document.querySelector(".header_current-section") as HTMLElement;

function processSectionChanges(): void {
    if (navElement.dataset.wrapperIsHovered === "true") return;
    // if (document.body.offsetWidth <= mobileWidth) return;

    // get from
    const activeLink = linksElement.getElementsByClassName(activeLinkClass)[0] as HTMLLinkElement | undefined;
    const from: number = activeLink ? getChildIndex(activeLink, links) : 0;

    // get to
    currentSection = getCurrentSection() ?? currentSection;
    const to: number = getChildIndex(currentSection, sections);
    currentSectionElement.innerText = links[to].innerHTML;

    if (document.body.offsetWidth <= mobileWidth) return;

    // consts
    const direction: -1 | 0 | 1 = Math.sign(to - from) as -1 | 0 | 1;

    if (animation) animation.stopAnimation = true;

    const linksElementOffset: number = calcLinksOffset(to, +navElement.dataset.pointOffset! || 0);
    if (from === to) {
        linksElement.style.top = linksElementOffset + "px";
        return;
    }
    if (Math.abs(to - from) > maxActiveLinksChanges) {
        const substituteOffset: number =
            10 +
            calcLinksOffset(
                to - maxActiveLinksChanges * direction,
                (activeLink ?? linksElement.children[0]).getBoundingClientRect().top -
                    navElement.getBoundingClientRect().top
            );

        // placing substitute element at the place of current active element
        clearActiveLinks(linksElement, true);
        linksElement.children[to - maxActiveLinksChanges * direction].classList.add(activeLinkClass);
        linksElement.style.top = substituteOffset + "px";

        // starting animation
        animation = initAnimations(to - maxActiveLinksChanges * direction, to, substituteOffset, linksElementOffset);
        return;
    }
    animation = initAnimations(from, to, parseFloat(linksElement.style.top) || 0, linksElementOffset);
}

window.addEventListener("scroll", processSectionChanges);
