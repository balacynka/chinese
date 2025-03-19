import { makeElement } from "../makers/makeElement.js";
import { CategoryDescription } from "../types/descriptionInterfaces.js";
// import { closeMenu } from "./menu.js";

export function fillNavigationCategory(description: CategoryDescription, type: "word" | "rule"): void {
    const navigationCategory: HTMLElement = document.getElementById(`navigation_category__${type}s`)!;
    for (let sectionDescription of description.sections) {
        navigationCategory.appendChild(
            makeElement({
                tagName: "a",
                className: "navigation_link",
                // onclick: closeMenu,
                text: sectionDescription.title,
                href: `#${sectionDescription.title}`,
            })
        );
    }
}
