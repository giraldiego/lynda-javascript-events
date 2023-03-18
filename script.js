document.querySelector(".grid").addEventListener("click", function (e) {
  const tgt = e.target;
  if (tgt.tagName === "IMG") {
    // only if the clicked element is an image
    const parent = tgt.parentNode; // li
    const grandParent = parent.parentNode; // ul
    // console.log(tgt.alt);
    // console.log(grandParent.children[0].children[0].alt);
    if (grandParent.children.length > 1) {
    //   console.dir(grandParent);
      grandParent.removeChild(parent);
    }
    if (grandParent.children.length === 1) {
      const lastAlt = grandParent.children[0].children[0].alt; 
      document.querySelector("#art p").innerHTML = lastAlt;
    }
  }
});
