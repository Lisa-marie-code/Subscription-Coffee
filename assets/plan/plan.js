const toggler = document.getElementsByClassName("toggler"),
  orderCards = document.getElementsByClassName("order-cards"),
  preferences = document.getElementsByClassName("preferences"),
  beanTypes = document.getElementsByClassName("bean-types"),
  quantity = document.getElementsByClassName("quantity"),
  grindOption = document.getElementsByClassName("grind-option"),
  deliveries = document.getElementsByClassName("deliveries");

const capsule = document.getElementById("capsule"),
  grindOptions = document.getElementById("grind-options"),
  grindToggler = document.getElementById("grind-toggler");

const usingOrAs = document.getElementById("using-or-as"),
  preferencesText = document.getElementById("preferences-text"),
  typeText = document.getElementById("type-text"),
  quantityText = document.getElementById("quantity-text"),
  grindOptionsText = document.getElementById("grind-options-text"),
  deliveriesText = document.getElementById("deliveries-text");

let preferencesClicked = false;
let beanTypesClicked = false;
let orderquantitiesClicked = false;
let deliveriesClicked = false;

let pricePerMouthNumber = 0;

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", () => {
    toggler[i].classList.toggle("toggler-rotated");
    orderCards[i].classList.toggle("collapsed");
  });
}

for (let i = 0; i < preferences.length; i++) {
  preferences[i].addEventListener("click", () => {
    for (let j = 0; j < preferences.length; j++) {
      preferences[j].classList.remove("order-card-selected");
    }
    preferences[i].classList.add("order-card-selected");
    if (preferences[i] === capsule) {
      grindToggler.classList.add("toggler-rotated");
      grindToggler.style.pointerEvents = "none";
      grindOptions.classList.add("collapsed");
      usingOrAs.innerText = "using";
      preferencesText.innerText = "Capsule";
      grindOptionsText.style.display = "none";
    } else if (i === 1) {
      usingOrAs.innerText = "as";
      preferencesText.innerText = "Filter";
    } else if (i === 2) {
      usingOrAs.innerText = "as";
      preferencesText.innerText = "Espresso";
    }
    if (preferences[i] !== capsule) {
      grindToggler.style.pointerEvents = "all";
      grindOptionsText.style.display = "inline";
    }

    preferencesClicked = true;
    r = isElementClicked(preferencesClicked);
  });
}

for (let i = 0; i < beanTypes.length; i++) {
  beanTypes[i].addEventListener("click", () => {
    for (let j = 0; j < beanTypes.length; j++) {
      beanTypes[j].classList.remove("order-card-selected");
    }
    beanTypes[i].classList.add("order-card-selected");
    typeText.innerText = i === 0 ? "Single Origin" : i === 1 ? "Decaf" : "Blended";
    beanTypesClicked = true;
  });
}

for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener("click", () => {
    for (let j = 0; j < quantity.length; j++) {
      quantity[j].classList.remove("order-card-selected");
    }
    quantity[i].classList.add("order-card-selected");
    quantityText.innerText = i === 0 ? "250g" : i === 1 ? "500g" : "1000g";
    orderquantitiesClicked = true;
  });
}

for (let i = 0; i < grindOption.length; i++) {
  grindOption[i].addEventListener("click", () => {
    for (let j = 0; j < grindOption.length; j++) {
      grindOption[j].classList.remove("order-card-selected");
    }
    grindOption[i].classList.add("order-card-selected");
    grindOptionsText.innerText = i === 0 ? " Wholebean" : i === 1 ? " Filter" : " Cafetiére";
  });
}

for (let i = 0; i < deliveries.length; i++) {
  deliveries[i].addEventListener("click", () => {
    for (let j = 0; j < deliveries.length; j++) {
      deliveries[j].classList.remove("order-card-selected");
    }
    deliveries[i].classList.add("order-card-selected");
    deliveriesText.innerText = i === 0 ? "Every week" : i === 1 ? "Every 2 weeks" : "Every month";
    deliveriesClicked = true;
  });
}

// Added by Koffi
function isElementClicked(){
  console.log(preferencesClicked ? "clicked" : "not");
  console.log(beanTypesClicked ? "clicked" : "not");
  console.log(orderquantitiesClicked ? "clicked" : "not");
  console.log(deliveriesClicked ? "clicked" : "not");
   if(preferencesClicked === true && beanTypesClicked === true && orderquantitiesClicked === true && deliveriesClicked === true){
    document.getElementById("show").classList.add("create_plan_active");
  }
}
setInterval(isElementClicked, 2000);

// pop-up dialog added by Andrew
document.getElementById("show").addEventListener('click', function(){
  // price calculation
  if(quantityText.innerHTML === "250g"){
    if(deliveriesText.innerHTML === "Every week"){
      pricePerMouthNumber = 7.20 * 4;
    }else if(deliveriesText.innerHTML === "Every 2 weeks"){
      pricePerMouthNumber = 9.60 * 2;
    }else if(deliveriesText.innerHTML === "Every month"){
      pricePerMouthNumber = 12.00;
    }
  }else if(quantityText.innerHTML === "500g"){
    if(deliveriesText.innerHTML === "Every week"){
      pricePerMouthNumber = 13.00 * 4;
    }else if(deliveriesText.innerHTML === "Every 2 weeks"){
      pricePerMouthNumber = 17.50 * 2;
    }else if(deliveriesText.innerHTML === "Every month"){
      pricePerMouthNumber = 22.00;
    }
  }else if(quantityText.innerHTML === "1000g"){
    if(deliveriesText.innerHTML === "Every week"){
      pricePerMouthNumber = 22.00 * 4;
    }else if(deliveriesText.innerHTML === "Every 2 weeks"){
      pricePerMouthNumber = 32.00 * 2;
    }else if(deliveriesText.innerHTML === "Every month"){
      pricePerMouthNumber = 42.00;
    }
  }
  console.log(pricePerMouthNumber.toString());

  document.getElementById("price-per-month").innerHTML = pricePerMouthNumber.toString();
});          
// document.getElementById("open-popup").addEventListener("click", function(){
//     document.getElementsByClassName("popup")[0].classList.add("active");
// });
// document.getElementById("dismiss-popup").addEventListener("click", function(){
//     document.getElementsByClassName("popup")[0].classList.remove("active");
// })