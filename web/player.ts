import "@motion-canvas/core";
import "@motion-canvas/player";

// Run this function so that the player can be used with relative paths, such
// as a github pages deployment. Since this is a separate build file, vite
// doesn't know how to add the base url to the player's src attribute.
(function prependBase() {
  const base = import.meta.env.BASE_URL;
  if (!base) {
    return;
  }
  document.querySelectorAll("motion-canvas-player").forEach((player) => {
    let url = player.getAttribute("src");
    if (url?.startsWith("/")) {
      url = base + url.slice(1);
      const newElement = document.createElement("motion-canvas-player");
      newElement.setAttribute("auto", player.getAttribute("auto") ?? "false");
      newElement.setAttribute("src", url);
      player.replaceWith(newElement);
    }
  });
})();
