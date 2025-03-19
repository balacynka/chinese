import { CategoryDescription } from "../types/descriptionInterfaces.js";

export const phrasesCategoryDescription: CategoryDescription = {
    title: "Phrases",
    sections: [
        {
            title: "Приветствия",
            content: [
                { hieroglyph: "你好", pinyin: "nǐ hǎo", translations: ["Привет"], size: 1 },
                { hieroglyph: "您好", pinyin: "nǐn hǎo", translations: ["Здравствуйте (уважительно)"], size: 1 },
                { hieroglyph: "你们好", pinyin: "nǐn hǎo", translations: ["Здравствуйте (мн. ч.)"], size: 2 },
            ],
        },
        {
            title: "Как дела?",
            content: [
                { hieroglyph: "你好吗", pinyin: "nǐ hǎo ma", translations: ["Как дела?"], size: 2 },
                { hieroglyph: "你怎么样", pinyin: "nǐ zěnme yàng", translations: ["Как дела?"], size: 2 },
                { hieroglyph: "好", pinyin: "hǎo", translations: ["Хорошо"], size: 1 },
                { hieroglyph: "不好", pinyin: "bù hǎo", translations: ["Плохо"], size: 1 },
                { hieroglyph: "不错", pinyin: "bù cuò", translations: ["Неплохо"], size: 1 },
            ],
        },
        {
            title: "Спросить имя",
            content: [
                {
                    hieroglyph: "你叫什么名字",
                    pinyin: "Nǐ jiào shénme míngzì",
                    translations: ["Как тебя зовут?"],
                    size: 2,
                },
                { hieroglyph: "我叫_", pinyin: "wǒ jiào __", translations: ["Меня зовут __"], size: 2 },
            ],
        },
        {
            title: "Спросить возраст",
            content: [
                { hieroglyph: "你多大(了)", pinyin: "nǐ duōdà (le)", translations: ["Сколько тебе лет?"], size: 2 },
                { hieroglyph: "我_岁(了)", pinyin: "wǒ_suì (le)", translations: ["Мне __ лет"], size: 2 },
            ],
        },
        {
            title: "Соц. принадлежность",
            content: [
                { hieroglyph: "你是谁", pinyin: "nǐ shì shéi", translations: ["Ты кто?"], size: 2 },
                { hieroglyph: "我是_", pinyin: "wǒ shì__", translations: ["Я являюсь __"], size: 2 },
            ],
        },
        {
            title: "Спросить про страну",
            content: [
                {
                    hieroglyph: "你是哪国人",
                    pinyin: "nǐ shì nǎ guórén",
                    translations: ["Ты из какой страны?"],
                    size: 3,
                },
                { hieroglyph: "我是_人", pinyin: "wǒ shì __ rén", translations: ["Я являюсь гражданином __"], size: 3 },
                { hieroglyph: "白俄罗斯", pinyin: "Bái'èluósī", translations: ["Беларусь"], size: 3 },
            ],
        },
        {
            title: "Спросить про семью",
            content: [
                {
                    hieroglyph: "你家有几口人",
                    pinyin: "nǐ jiā yǒu jǐ kǒu rén",
                    translations: ["Сколько в твоей семьей человек?"],
                    size: 3,
                },
                {
                    hieroglyph: "我家有_人",
                    pinyin: "wǒ jiā yǒu __ rén",
                    translations: ["В моей семье есть __ человек."],
                    size: 3,
                },
            ],
        },
        // { title: "Пусто", content: [] },
    ],
};
