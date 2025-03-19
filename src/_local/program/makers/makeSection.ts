import {
    ElementDescription,
    SectionContent,
    SectionDescription,
    TableDescription,
    WordDescription,
} from "../types/descriptionInterfaces.js";
import { makeElement } from "./makeElement.js";
import { makeTable } from "./makeTable.js";
import { makeWord } from "./makeWord.js";

export function makeSection(description: SectionDescription): HTMLElement {
    return makeElement({
        tagName: "section",
        className: "section",
        children: [
            { tagName: "h2", className: "_header-2", text: description.title, id: description.title },
            ...calcContentDescriptions(description.content),
        ],
    });
}

function calcContentDescriptions(content: SectionContent): (ElementDescription | HTMLElement)[] {
    const descriptions: (ElementDescription | HTMLElement)[] = [];
    let wordsDescriptionsPool: HTMLElement[] = [];
    for (let entry of content) {
        if (typeof entry === "string") {
            console.log(wordsDescriptionsPool, descriptions);
            processWordsDescriptionsPool(wordsDescriptionsPool, descriptions);
            console.log(wordsDescriptionsPool, descriptions);
            descriptions.push({ tagName: "p", className: "section_paragraph", text: entry });
        } else if (entry instanceof Array) {
            processWordsDescriptionsPool(wordsDescriptionsPool, descriptions);
            descriptions.push(makeTable(entry));
        } else {
            wordsDescriptionsPool.push(makeWord(entry));
            if (entry === content.at(-1)) processWordsDescriptionsPool(wordsDescriptionsPool, descriptions);
        }
    }
    return descriptions;
}

function processWordsDescriptionsPool(pool: HTMLElement[], descriptions: (ElementDescription | HTMLElement)[]): void {
    if (pool.length === 1) descriptions.push(pool[0]);
    else if (pool.length > 1) descriptions.push({ tagName: "div", className: "section_words", children: pool.slice() });
    pool.splice(0, pool.length);
}
