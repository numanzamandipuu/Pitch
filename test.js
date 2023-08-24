document.addEventListener("DOMContentLoaded", function () {
  const noStylesDiv = document.querySelector("#no-styles-div");

  if (noStylesDiv) {
    const linkTags = document.querySelectorAll("link[rel='stylesheet']");
    linkTags.forEach((link) => {
      if (link.getAttribute("href") === "src/styles.css") {
        link.remove();
      }
    });
  }
});
