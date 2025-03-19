import {
    activeLinkClass,
    instaAnimationLinkClass,
    linkClass,
    linksShadowElement,
    navElement,
    navMobileActiveClass,
    neddedVisiblePercentage,
    scrollbarElement,
    sectionQuery,
} from "./init.js";

export const sections = document.body.querySelectorAll(sectionQuery) as NodeListOf<HTMLElement>;
export function getCurrentSection(): HTMLElement | undefined {
    for (let section of sections) {
        const rect: DOMRect = section.getBoundingClientRect();
        if (
            // if visible area is >= than neddedVisiblePercentage
            (rect.top + rect.height * neddedVisiblePercentage <= window.innerHeight &&
                rect.bottom - rect.height * neddedVisiblePercentage >= 0) ||
            // (for large elements) if space taken at the screen is >= than neddedVisiblePercentage
            (rect.top <= window.innerHeight * (1 - neddedVisiblePercentage) &&
                rect.bottom >= window.innerHeight * neddedVisiblePercentage)
        ) {
            return section;
        }
    }
}

export function calcLinksOffset(targetLinkIndex: number, targetLinkOffset: number): number {
    const shadowLinks = linksShadowElement.getElementsByClassName(linkClass) as HTMLCollectionOf<HTMLLinkElement>;
    const shadowRect: DOMRect = linksShadowElement.getBoundingClientRect();
    const targetLinkRect: DOMRect = getShadowLinkRect(shadowLinks[targetLinkIndex]);

    const linksElementBaseOffset: number = shadowRect.top - targetLinkRect.top + targetLinkOffset - 10;

    const prevLinkOffset: number =
        targetLinkIndex > 0
            ? (+navElement.dataset.pointOffset! || 0) +
              (shadowLinks[targetLinkIndex - 1].getBoundingClientRect().top - targetLinkRect.top) -
              10
            : linksElementBaseOffset + targetLinkRect.top - scrollbarElement.getBoundingClientRect().top;

    const nextLinkOffset: number =
        targetLinkIndex < shadowLinks.length - 1
            ? (+navElement.dataset.pointOffset! || 0) -
              scrollbarElement.offsetHeight +
              (shadowLinks[targetLinkIndex + 1].getBoundingClientRect().top - targetLinkRect.top)
            : 0;

    return linksElementBaseOffset - Math.min(prevLinkOffset, 0) - Math.max(nextLinkOffset, 0);
}

export function getShadowLinkRect(shadowLink: HTMLLinkElement): DOMRect {
    clearActiveLinks(linksShadowElement);
    shadowLink.classList.add(activeLinkClass);
    return shadowLink.getBoundingClientRect();
}

export function clearActiveLinks(parent: HTMLElement, instaAnimation = false): void {
    for (let link of parent.getElementsByClassName(activeLinkClass)) {
        if (instaAnimation) link.classList.add(instaAnimationLinkClass);
        link.classList.remove(activeLinkClass);
    }

    if (!instaAnimation) return;
    setTimeout(() => {
        for (let link of parent.getElementsByClassName(instaAnimationLinkClass)) {
            link.classList.remove(instaAnimationLinkClass);
        }
    }, 0);
}
export function getChildIndex(searchElement: HTMLElement, children: ArrayLike<HTMLElement>): number {
    for (let index = 0; index < children.length; index++) {
        if (children[index] === searchElement) return index;
    }
    return -1;
}

export function openMobileNav(): void {
    // Array.from(linksElement.children as HTMLCollectionOf<HTMLLinkElement>).forEach(
    //     (link: HTMLLinkElement, index: number) => {
    //         link.style.transitionDelay = index * 15 + "ms";
    //     }
    // );

    navElement.style.top = document.querySelector(".header")!.clientHeight + "px";
    navElement.classList.add(navMobileActiveClass);
}
export function closeMobileNav(): void {
    navElement.classList.remove(navMobileActiveClass);
}
// openMobileNav();
const iconOpen = document.querySelector(".header_icon__open")! as HTMLElement;
const iconClose = document.querySelector(".header_icon__close")! as HTMLElement;
iconOpen.onclick = openMobileNav;
iconClose.onclick = closeMobileNav;
