"use strict";
//#1

let btn = document.querySelectorAll(".btn");

let total = 0;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    let grand = parseInt(button.getAttribute("data-cost"));
    total += grand;
    let ttlpara = document.querySelector(".total");
    ttlpara.innerText = total;
  });
});

//Mitch's Lab # 1
// let totalParagraph = document.querySelector(".total");
// let buttons = document.querySelectorAll(".btn");
// let totalDue = 0;
// buttons.forEach((snack) => {
//   snack.addEventListener("click", () => {
//     let amount = Number(snack.getAttribute("data-cost"));
//     totalDue += amount;
//     totalParagraph.innerText = `Total: $${totalDue}`;
//   });
// });

//#2 done by Mitch, I couldn't figure it out

let form = document.querySelector(".money-form");

let coinContainer = document.querySelector(".coin-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let number = data.get("amount");
  let type = data.get("type");
  for (let i = 0; i < number; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add(type, "coin");
    newCoin.innerText = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  form.reset();
});

//#3

let bulb = document.querySelector(".bulb");

let onSwitch = document.querySelector(".on");
let offSwitch = document.querySelector(".off");
let toggleSwitch = document.querySelector(".toggle");
let endSwitch = document.querySelector(".end");

onSwitch.addEventListener("click", () => {
  bulb.classList.add("light");
});

offSwitch.addEventListener("click", () => {
  bulb.classList.remove("light");
});

toggleSwitch.addEventListener("click", () => {
  bulb.classList.toggle("light");
});

endSwitch.addEventListener("click", () => {
  bulb.remove();
  let buttons = document.querySelectorAll(".switch");
  buttons.forEach((button) => {
    button.disabled = true;
  });
});

// let lightBulb = document.querySelector(".bulb");

// lightBulb.style.backgroundColor = "grey";
// lightBulb.style.color = "white";

// let onSwitch = document.querySelector(".on");
// onSwitch.addEventListener("click", () => {
//   lightBulb.style.backgroundColor = "lightgrey";
// });

// let offSwitch = document.querySelector(".off");
// offSwitch.addEventListener("click", () => {
//   lightBulb.style.backgroundColor = "grey";
// });

// let toggleSwitch = document.querySelector(".toggle");

// toggleSwitch.addEventListener("click", () => {
//   if (lightBulb.classList.toggle(".on")) {
//     lightBulb.style.backgroundColor = "grey";
//   } else {
//     lightBulb.style.backgroundColor = "lightgrey";
//   }
// });

// let endSwitch = document.querySelector("end");

// endSwitch.document.removeChild("click", lightBulb);
