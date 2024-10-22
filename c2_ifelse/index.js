const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const checkBox = document.getElementById("checkBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submit = document.getElementById("submit");

submit.onclick = function(){

    if(checkBox.checked){
        subResult.textContent = `You are subscribed.`;
    }
    else{
        subResult.textContent = `You are not subscribed.`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa.`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard.`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal.`
    }
    else{
        paymentResult.textContent = `You must select a payment way.`
    }
}