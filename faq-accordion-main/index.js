function toggle(id) {
    const el = document.getElementById(id);
    const res = (el.getAttribute("data-open") === "true") ? ("false") : ("true");
    el.setAttribute("data-open", res);
}