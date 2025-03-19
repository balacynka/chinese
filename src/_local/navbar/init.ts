import { makeElement } from "../program/makers/makeElement.js";

const sectionTitleQuery = "h1,h2";
export const sectionQuery = "h1,.section";
export const navMobileActiveClass = "nav__mobile-active";
export const linkClass = "nav_link";
export const activeLinkClass = "nav_link__active";
export const instaAnimationLinkClass = "nav_link__insta-animation";
export const categoryLinkClass = "nav_link__category";
export const neddedVisiblePercentage = 0.5;
export const activeLinkChangingDuration = 40; // ms
export const maxActiveLinksChanges = 12; // count
export const autoscrollAnimationDuration = 300; // ms
export const autoscrollTopPadding = 24; // px
export const mobileWidth = 500; // px
const maxLinkLength = 28;

export const navElement: HTMLDivElement = document.querySelector(".nav") as HTMLDivElement;
export const scrollbarElement: HTMLDivElement = document.querySelector(".nav_scrollbar") as HTMLDivElement;
export const linksElement: HTMLDivElement = document.querySelector(".nav_links") as HTMLDivElement;
export const linksShadowElement: HTMLDivElement = document.querySelector(".nav_links__shadow") as HTMLDivElement;
export const linksWrapper: HTMLDivElement = document.querySelector(".nav_links-wrapper") as HTMLDivElement;

// filling with data
Array.from(document.querySelectorAll(sectionTitleQuery) as NodeListOf<HTMLElement>).forEach(
    (target: HTMLElement, index: number): void => {
        const className: string =
            linkClass +
            (index === 0 ? " " + activeLinkClass : "") +
            (target.tagName.toLocaleLowerCase() === "h1" ? " " + categoryLinkClass : "");

        linksElement.appendChild(
            makeElement({
                tagName: "a",
                href: "#" + target.id,
                className: className,
                text: trimIfNeccessary(target.innerText, maxLinkLength),
            })
        );
        linksShadowElement.appendChild(
            makeElement({
                tagName: "a",
                href: "#" + target.id,
                className: className,
                text: trimIfNeccessary(target.innerText, maxLinkLength),
            })
        );
    }
);
export const links = Array.from(linksElement.children) as HTMLLinkElement[];

function trimIfNeccessary(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 1) + "…"; // -1 because of …
}
