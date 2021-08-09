export const addScrollButtons = (elementId) => {
  const list = document.getElementById(elementId);

  if (!list) return;

  const buttonLeft = document.createElement("button");
  buttonLeft.innerText = "<";
  buttonLeft.classList.add("scroll-button-left");
  buttonLeft.style.position = "absolute";
  buttonLeft.style.left = 0;
  list.appendChild(buttonLeft);
  console.log("📜???");
};
