import { wordCategoryDescription } from "./data/words.js";
import { makeWordCategory } from "./makers/makeCategory.js";
import { fillNavigationCategory } from "./utils/fillNavigationCategory.js";
import { ruleCategoryDescription } from "./data/rules.js";

const main = document.querySelector("main");
main!.appendChild(makeWordCategory(wordCategoryDescription));
fillNavigationCategory(wordCategoryDescription, "word");
main!.appendChild(makeWordCategory(ruleCategoryDescription));
fillNavigationCategory(ruleCategoryDescription, "rule");
