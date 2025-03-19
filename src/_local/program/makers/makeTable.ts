import { ElementDescription, TableDescription } from "../types/descriptionInterfaces.js";
import { makeElement } from "./makeElement.js";

export function makeTable(description: TableDescription): HTMLElement {
    return makeElement({
        tagName: "table",
        className: "section_table table",
        children: description.map(calcRowDescription),
    });
}

function calcRowDescription(row: string[], index: number): ElementDescription {
    const isHeader = index === 0;
    const cellsDescriptions: ElementDescription[] = [];
    for (let text of row) {
        if (isHeader) cellsDescriptions.push({ tagName: "th", className: "table_header table_cell _bold-text", text });
        else cellsDescriptions.push({ tagName: "td", className: "table_data table_cell", text });
    }
    return { tagName: "tr", className: "table_row", children: cellsDescriptions };
}
