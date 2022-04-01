const indexNav = document.querySelector('.index-navbar');
const navToggle = document.querySelector('#check');

navToggle.addEventListener('click', () => {
    const visibility = indexNav.getAttribute("data-visible");

    if (visibility === "false") {
        indexNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else  if (visibility === "true") {
        indexNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
});