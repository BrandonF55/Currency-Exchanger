import CurrencyService from './Js/currency-api';



// Business Logic_______________

function getCurrency(currency){
  let promise = CurrencyService.getCurrency(currency)
  promise.then(function(CurrencyDataArray) {
    printElements(CurrencyDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });

  }



  // UI Logic_______________


