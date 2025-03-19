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
        {
            title: "Lesson 11",
            content: [
                { hieroglyph: "的", pinyin: "de", translations: ["Притяжательная частица"] },
                'When a verb or verb phrase is used as an attributive modifier, "的" should be put between the' +
                    "modifier and the word modifier. For example:",
                [
                    ["Atribute modifier", "的", "Word Modified "],
                    ["新买", "的", "自行车"],
                    ["Недавно купленный", "-", "велосипед"],
                    ["我妈妈做", "的", "饭"],
                    ["Моя мама готовит", "-", "еду"],
                    ["和你一起唱歌", "的", "人"],
                ],
            ],
        },
        // { title: "Пусто", content: [] },
    ],
};
