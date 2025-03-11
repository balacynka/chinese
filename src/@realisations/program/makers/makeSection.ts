import { SectionDescription } from "../types/descriptionInterfaces.js";
import { makeElement } from "./makeElement.js";
import { makeWord } from "./makeWord.js";

export function makeWordSection(description: SectionDescription): HTMLElement {
    return makeElement({
        tagName: "section",
        className: "section",
        children: [
            { tagName: "h2", className: "_header-2", text: description.title, id: description.title },
            { tagName: "div", className: "section_words", children: description.words.map(makeWord) },
            // that's OK. if desc is null, it returns null, if desc is a string,
            // it returns an element description. So
            // @ts-ignore
            description.description && {
                tagName: "p",
                classList: "section_description",
                text: description.description,
            },
        ],
    });
}
