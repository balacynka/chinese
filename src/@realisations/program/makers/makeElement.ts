import { ElementDescription } from "../types/descriptionInterfaces.js";

export function makeElement(description: ElementDescription): HTMLElement {
    const element: HTMLElement = document.createElement(description.tagName);
    if (description.text != undefined) {
        element.appendChild(document.createTextNode(description.text));
    }
    for (let property of Object.getOwnPropertyNames(description)) {
        if (["tagName", "text", "children"].includes(property)) continue;
        element[property] = description[property];
    }
    for (let child of description.children ?? []) {
        if (child == null) continue;
        if (child instanceof Element || child instanceof Node) element.append(child);
        else element.appendChild(makeElement(child));
    }

    return element;
}
