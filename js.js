const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("contenttt");
content.textContent = "THis is walter and al and steve";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

container.appendChild(heading3);

//black and pink border
const divblackpink = document.createElement("div");
divblackpink.classList.add("blackpink");
let blackPinkStyle = divblackpink.style;
blackPinkStyle.cssText = "background-color: pink;border:1px solid black";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm a div";

container.appendChild(divblackpink);
divblackpink.appendChild(heading1);
