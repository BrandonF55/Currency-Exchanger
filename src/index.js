import CurrencyService from './Js/currency-api';



// Business Logic_______________

function getCurrency(currency){
  let promise = CurrencyService.getCurrency(currency);
  promise.then(function(CurrencyDataArray) {
    printElements(CurrencyDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });

  }


  // UI Logic_______________


function printElements(){
  document.querySelector("#output").innerHTML = `The exchange in USD to ${conversion_rates.AED} is " " `
} 


function printError(){
  document.querySelector("#output").innerHTML = `there was a error accessing that currency`
}

function handleSubit(event) {
  event.preventDefault();
  const currency = document.getElementById("currency-type").value;
  
  getCurrency(currency);
}

window.addEventListener("load", function() {
this.document.querySelector("form").addEventListener("submit", handleSubit);

});