const SUPPORTED_THEME = {
  light: "light-theme",
  dark: "dark-theme",
};

const searchInputEl = document.querySelector("#search");
const mobileSearchButton = document.querySelector("#search-action");
const themeSwitcherEl = document.querySelectorAll("[data-theme]");
const body = document.querySelector("body");

themeSwitcherEl.forEach((item) =>
  item.addEventListener("click", function (evt) {
    const currentTheme = evt.target.dataset.theme;
    const nextTheme = evt.target.dataset.nextTheme;

    const currentThemeClass = SUPPORTED_THEME[currentTheme];
    const nextThemeClass = SUPPORTED_THEME[nextTheme];
    const nextThemeEl = document.querySelector(`[data-theme="${nextTheme}"]`);

    evt.target.classList.add("hidden");
    nextThemeEl.classList.remove("hidden");

    body.classList.replace(currentThemeClass, nextThemeClass);
  })
);

mobileSearchButton.addEventListener("click", function (evt) {
  searchInputEl.focus();
  searchInputEl.scrollIntoView({
    block: "end",
    inline: "nearest",
    behavior: "smooth",
  });
});
