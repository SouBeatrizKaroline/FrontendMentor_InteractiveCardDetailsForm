const cardNumber = document.getElementById("number");
const numberInput = document.getElementById("card-number");

const cardName = document.getElementById("name");
const nameInput = document.getElementById("card-name");

const cardMonth = document.getElementById("month");
const monthInput = document.getElementById("card-month");

const cardYear = document.getElementById("year");
const yearInput = document.getElementById("card-year")

const cardCvc = document.getElementById("cvc");
const cvcInput = document.getElementById("card-cvc");

const submitBtn = document.querySelector(".submit-btn");

const completed = document.querySelector(".thank");
const form = document.querySelector(".form");

const continueBtn = document.querySelector(".continue-btn");

function setCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e){
    cardName.innerText = e.target.value;
}
function setCardMonth(e){
    cardMonth.innerText = e.target.value;
}
function setCardYear(e){
    cardYear.innerText = e.target.value;
}
function setCardCvc(e){
    cardCvc.innerText = e.target.value;
}
function format(s){
    return  s.toString().replace(/\d{4}(?=.)/g, "$&");
}
function handleSubmit(e) {
    e.preventDefault();
    if(!numberInput.value){
        numberInput.parentElement.classList.add("error");
    }else{
        numberInput.parentElement.classList.remove("error");
    }
    if(!nameInput.value){
        nameInput.parentElement.classList.add("error");
    }else{
        nameInput.parentElement.classList.remove("error");
    }
    if(!monthInput.value){
        monthInput.parentElement.classList.add("error");
    }else{
        monthInput.parentElement.classList.remove("error");
    }
    if(!yearInput.value){
        yearInput.parentElement.classList.add("error");
    }else{
        yearInput.parentElement.classList.remove("error");
    }
    if(!cvcInput.value){
        cvcInput.parentElement.classList.add("error");
    }else{
        cvcInput.parentElement.classList.remove("error");
    }
    if(nameInput.value&&numberInput.value&&monthInput.value&&yearInput.value&&cvcInput.value){
        completed.classList.remove("hidden");
        form.classList.add("hidden");
    }
}

numberInput.addEventListener("keyup", setCardNumber);
nameInput.addEventListener("keyup", setCardName);
monthInput.addEventListener("keyup", setCardMonth);
yearInput.addEventListener("keyup", setCardYear);
cvcInput.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);