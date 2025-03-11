import { ElementDescription, WordDescription } from "../types/descriptionInterfaces.js";
import { makeElement } from "./makeElement.js";

export function makeWord(description: WordDescription): HTMLElement {
    // defaults
    description.hieroglyph = description.hieroglyph ?? "";
    description.pinyin = description.pinyin ?? "";
    description.translations = description.translations ?? [];
    description.size = description.size ?? 1;
    description.compact = description.compact ?? true;

    // chinese part
    const hieroglyph: ElementDescription = {
        tagName: "p",
        className: "word_hieroglyph _hieroglyph",
        text: description.hieroglyph,
    };
    const pinyin: ElementDescription = { tagName: "p", className: "word_pinyin", text: description.pinyin };
    const chinese: ElementDescription = {
        tagName: "div",
        className: "word_chinese",
        children: [hieroglyph, description.compact ? null : pinyin],
    };

    // translations
    const describedTranslations: ElementDescription[] = [];
    for (let translation of description.translations) {
        describedTranslations.push({
            tagName: "div",
            className: "word_translation translation",
            children: [
                description.translations.length > 1
                    ? { tagName: "p", className: "translation_list-number", text: `${translation.length + 1}. ` }
                    : null,
                { tagName: "p", className: "translation_text", text: translation },
            ],
        });
    }
    const translations: ElementDescription = {
        tagName: "div",
        className: "word_translations",
        children: [...describedTranslations, description.compact ? pinyin : null],
    };

    // assembly
    return makeElement({
        tagName: "div",
        className: `word word_size-${description.size}`,
        children: [chinese, translations],
    });
}
