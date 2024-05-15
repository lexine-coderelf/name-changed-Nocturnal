function findAndMarkElfy() {
  const elements = document.querySelectorAll(".userTagUsernameBase__2bd24");

  for (const element of elements) {
    const textContent = element.textContent.toLowerCase();
    if (textContent.includes("elfynel") || textContent.includes("elfylex")) {
      const hasCutie = element.querySelector("span.cutie"); 

      if (!hasCutie) {
        const cutieSpan = document.createElement("span");
        cutieSpan.textContent = "cutie";
        cutieSpan.style.color = "pink";
        cutieSpan.style.marginLeft = "5px";
        cutieSpan.classList.add("cutie"); 

        element.appendChild(cutieSpan);
      }
    }
  }
}

findAndMarkElfy();

setInterval(findAndMarkElfy, 1000);
