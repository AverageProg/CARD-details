let cardholderNameInput = document.querySelector('#cardholder-name');
let cardNumberInput = document.querySelector('#card-number');
let expirationMonthInput = document.querySelector('#exp-date-mm');
let expirationYearInput = document.querySelector('#exp-date-yy');
let cvcInput = document.querySelector('#cvc');
let correct_wrong = document.querySelector('.correct-wrong')

let savedCardholderName = "Slobodan Drljic";
let savedCardNumber = "4235 5467 2341 4356";
let savedExpirationMonth = "12";
let savedExpirationYear = "26";
let savedCVC = "123";

function validateInput(inputElement, correctValue) {
    if (inputElement.value !== correctValue) {  
        inputElement.style.border = "2px solid red"; 
        
    } else {
        inputElement.style.border = "2px solid green"; 
       
    }
}



let button_clicked = document.querySelector(".button");

button_clicked.addEventListener("click",function(){
    validateInput(cardholderNameInput, savedCardholderName);
    validateInput(cardNumberInput, savedCardNumber);
    validateInput(expirationMonthInput, savedExpirationMonth);
    validateInput(expirationYearInput, savedExpirationYear);
    validateInput(cvcInput, savedCVC);

});

