import { CategoryDescription } from "../types/descriptionInterfaces.js";

export const ruleCategoryDescription: CategoryDescription = {
    title: "Rules",
    sections: [
        {
            title: "Числа",
            content: [
                { hieroglyph: "⼀", pinyin: "yī", translations: ["1"] },
                { hieroglyph: "⼆", pinyin: "èr", translations: ["2"] },
                { hieroglyph: "三", pinyin: "sān", translations: ["3"] },
                { hieroglyph: "四", pinyin: "sì", translations: ["4"] },
                { hieroglyph: "五", pinyin: "wǔ", translations: ["5"] },
                { hieroglyph: "六", pinyin: "liù", translations: ["6"] },
                { hieroglyph: "七", pinyin: "qī", translations: ["7"] },
                { hieroglyph: "⼋", pinyin: "bā", translations: ["8"] },
                { hieroglyph: "九", pinyin: "jiǔ", translations: ["9"] },
                { hieroglyph: "⼗", pinyin: "shí", translations: ["10"] },
                "Числа от 11 до 100 являются составными. Так, например, 11 состоит из 10 и 1:",
                { hieroglyph: "⼗⼀", pinyin: "shí yī", translations: ["11"] },
                { hieroglyph: "百", pinyin: "bǎi", translations: ["100"] },
            ],
        },
        // { title: "Пусто", content: [] },
    ],
};
