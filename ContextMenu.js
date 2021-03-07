const el = document.getElementById("element");
const contextMenu = document.getElementById("contextMenu");

el.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = el.offsetTop;
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;

  contextMenu.classList.remove("hidden");
  document.addEventListener("click", closeContextMenu);
});
const closeContextMenu = (e) => {
  const isClickedOutside = !contextMenu.contains(e.target);
  if (isClickedOutside) {
    contextMenu.classList.add("hidden");
    document.removeEventListener("click", closeContextMenu);
  }
};
