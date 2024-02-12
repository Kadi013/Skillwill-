// დავალება მეორე

// ინფუთი
const colorInfo = document.createElement("input");
colorInfo.placeholder = "ჩაწერეთ სასურველი ფერი";
colorInfo.classList.add("colorInfo");
colorInfo.type = "text";

// ღილაკი
const colorBtn = document.createElement("button");
colorBtn.innerText = "დაყენება";
colorBtn.classList.add("colorBtn");

// დამატება
document.body.append(colorInfo, colorBtn);

// ფერების მასივი
const colors = ["red", "blue", "green", "black", "white"];

// ფუნქცია
colorBtn.addEventListener("click", () => {
  const enteredColor = colorInfo.value.toLowerCase();

  if (colors.includes(enteredColor)) {
    document.body.style.backgroundColor = enteredColor;
  } else {
    alert("მაგის გარდა რაც გინდა )))");
  }
});
