const menu: HTMLElement = document.getElementById("menu")!;
const menuOpenButton: HTMLElement = document.getElementById("menu-open-button")!;
const menuCloseButton: HTMLElement = document.getElementById("menu-close-button")!;

function openMenu(): void {
    menu.classList.add("menu__active");
}
export function closeMenu(): void {
    menu.classList.remove("menu__active");
}

menuOpenButton.onclick = openMenu;
menuCloseButton.onclick = closeMenu;
