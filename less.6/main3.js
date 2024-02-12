// დავალება მესამე

// ინფუთ
const averageInfo = document.createElement("input");
averageInfo.placeholder = "შეიყვანეთ რიცხვები";
averageInfo.classList.add("averageInfo");
averageInfo.type = "text";

// ღილაკი
const averageBtn = document.createElement("button");
averageBtn.innerText = "გამოითვალე საშუალო";
averageBtn.classList.add("averageBtn");

// დამატება
document.body.append(averageInfo, averageBtn);

// ფუნქცია
averageBtn.addEventListener("click", () => {
  const numbers = averageInfo.value
    .split(":")
    .map((num) => parseFloat(num.trim()));
  if (numbers.some(isNaN)) {
    alert("შეიყვანეთ ორი წერტილით გამოყოფილი სწორი რიცხვები.");
    return;
  }
  const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  console.log("საშუალო:", avg);
  alert("საშუალო: " + avg);
});
