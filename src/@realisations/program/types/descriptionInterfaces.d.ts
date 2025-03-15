export interface ElementDescription {
    className?: string;
    [key: string]: any;
    tagName: string;
    text?: string;
    children?: (HTMLElement | ElementDescription | null | undefined)[];
}

export interface WordDescription {
    hieroglyph?: string; // ""
    pinyin?: string; // ""
    translations?: string[]; // []
    size?: 1 | 2 | 3 | 4; // 1
    compact?: boolean; // true
}

export type TableDescription = string[][];

export type SectionContent = (WordDescription | TableDescription | string)[];
export interface SectionDescription {
    title: string;
    content: SectionContent;
}

export type CategoryDescription = {
    title: string;
    sections: SectionDescription[];
};
