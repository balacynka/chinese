import { CategoryDescription } from "../types/descriptionInterfaces.js";
import { makeElement } from "./makeElement.js";
import { makeSection } from "./makeSection.js";

export function makeWordCategory(description: CategoryDescription): HTMLElement {
    return makeElement({
        tagName: "article",
        className: "category",
        children: [
            { tagName: "h1", className: "_header-1", id: description.title, text: description.title },
            { tagName: "div", className: "category_sections", children: description.sections.map(makeSection) },
        ],
    });
}
