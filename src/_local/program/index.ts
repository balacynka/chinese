import { phrasesCategoryDescription } from "./data/phrases.js";
import { ruleCategoryDescription } from "./data/rules.js";
import { wordCategoryDescription } from "./data/words.js";
import { makeWordCategory } from "./makers/makeCategory.js";

const main = document.querySelector("main");
main!.appendChild(makeWordCategory(wordCategoryDescription));
main!.appendChild(makeWordCategory(phrasesCategoryDescription));
main!.appendChild(makeWordCategory(ruleCategoryDescription));
