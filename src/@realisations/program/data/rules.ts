import { CategoryDescription } from "../types/descriptionInterfaces.js";

export const ruleCategoryDescription: CategoryDescription = {
    title: "Rules",
    sections: [
        {
            title: "Complement of result",
            words: [],
            description:
                "Some verbs or adjectives can be used after a verb to add remarks about the result of an action. " +
                "They are called complements of result. 没 (有) is added before the verb to form the negative form of" +
                " a complement of result, in which case 了 cannot appear at the end of the sentence.",
        },
        {
            title: "Question",
            words: [{ hieroglyph: "了…没有" }],
            description: "To form a question, ( 了) 没有 is often added at the end of the sentence.",
        },
        {
            title: "Preposition",
            words: [{ hieroglyph: "从…到" }],
            description:
                "The preposition 从 introduces the starting point of a period of time, a distance, a process or a " +
                "sequence, often used together with 到. For example:",
        },
        {
            title: "Order",
            words: [{ hieroglyph: "第" }],
            description: "第 is often used before a numeral-measure-word phrase to indicate order.",
        },
    ],
};
