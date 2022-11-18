
export default class CurrencyService {  
static getCurrency(Currency) {
  return new Promise(function(resolve, reject) {
    let request = XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/4c65401b2928655b81d991c8/latest/USD`
    request.addEventListener("loadend", function() {
      const response = json.parse(this.responseText);
      if ( this.status === 200){
        resolve([response, Currency]);
      } else {
        reject([this, response, Currency]);
      }
    });
request.open("GET", url, true);
request.sent();
    });
  }
