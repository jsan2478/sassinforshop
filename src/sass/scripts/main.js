

const hamburgerButton = document.querySelector(".hamburger-container");
const closeButton = document.querySelector(".x-button-container");
const menu = document.querySelector(".navbar");
const incrementBtnMin = document.querySelector((".fa-angle-up-min"));
const decrementBtnMin = document.querySelector((".fa-angle-down-min"));
const incrementBtnMax = document.querySelector((".fa-angle-up-max"));
const decrementBtnMax = document.querySelector((".fa-angle-down-max"));
const minQuantity = document.querySelector(".input-min");
const maxQuantity = document.querySelector(".input-max");




const toggle = function() {
    hamburgerButton.classList.toggle("active");
    closeButton.classList.toggle("active");
    menu.classList.toggle("open");
}

hamburgerButton.addEventListener("click", toggle)
closeButton.addEventListener("click", toggle)





const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const range = document.querySelector(".slider .progress");
const rangeMinQuantity = document.querySelector('#range-min-quantity')
const rangeMaxQuantity = document.querySelector('#range-max-quantity')

let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value);
        let maxPrice = parseInt(priceInput[1].value);

        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                rangeMinQuantity.textContent = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                rangeMaxQuantity.textContent = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
                rangeMinQuantity.textContent = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
                rangeMaxQuantity.textContent = minVal + priceGap
            }
        }else{
            priceInput[0].value = minVal;
            rangeMinQuantity.textContent = minVal;
            priceInput[1].value = maxVal;
            rangeMaxQuantity.textContent = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});