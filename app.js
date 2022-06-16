'use strict';

const hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function generateNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

const seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  custAtEachHour: [],
  totalSales: 0,
  
  genCustPerHour: function() {
    // let results = [];
    
    for (let i = 0; i < hours.length; i++) {
      let number = generateNumberBetween(this.minCust, this.maxCust);
      
      console.log(number);
      this.custAtEachHour.push(number);
    }

    return this.custAtEachHour;
    
  },
  
  genCookiesPerHour: function (custAtEachHour) {
    let result = [];
    let sum = 0;

    for(let i = 0; i < custAtEachHour.length; i++) {
      let totalAtHour = Math.round(custAtEachHour[i] * this.avgCookiePerCust);
      sum = sum + totalAtHour;
      result.push(totalAtHour); 
    }

   
    this.totalSales = sum;
    return result;
  }
};

seattle.genCustPerHour();
let seattleCookiesPerHour = seattle.genCookiesPerHour(seattle.custAtEachHour);
console.log(seattle);
console.log(seattleCookiesPerHour);


function displayHours(sales) {
  let seattleResults = document.getElementById('seattle-results');

  
  let listElement = document.createElement('ul');
  seattleResults.appendChild(listElement);

 
  
  for (let i = 0; i < sales.length; i++) {
   
    let listItemElement = document.createElement('li');
    listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
    // add those elements to our HTML document.
    listElement.appendChild(listItemElement);
  }

  
  let totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + seattle.totalSales + ' cookies';
  listElement.appendChild(totalElement);
}

displayHours(seattleCookiesPerHour);

const tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  genCustPerHour: function () { }
};

// genCustPerHour: function() {
//     // let results = [];
    
//     for (let i = 0; i < hours.length; i++) {
//       let number = generateNumberBetween(this.minCust, this.maxCust);
      
//       console.log(number);
//       this.custAtEachHour.push(number);
//     }

//     return this.custAtEachHour;
    
//   },
  
//   genCookiesPerHour: function (custAtEachHour) {
//     let result = [];
//     let sum = 0;

//     for(let i = 0; i < custAtEachHour.length; i++) {
//       let totalAtHour = Math.round(custAtEachHour[i] * this.avgCookiePerCust);
//       sum = sum + totalAtHour;
//       result.push(totalAtHour); 
//     }

   
//     this.totalSales = sum;
//     return result;
//   }
// };

// tokyo.genCustPerHour();
// let tokyoCookiesPerHour = tokyo.genCookiesPerHour(tokyo.custAtEachHour);
// console.log(seattle);
// console.log(seattleCookiesPerHour);


// function displayHours(sales) {
//   let seattleResults = document.getElementById('seattle-results');

  
//   let listElement = document.createElement('ul');
//   seattleResults.appendChild(listElement);

 
  
//   for (let i = 0; i < sales.length; i++) {
   
//     let listItemElement = document.createElement('li');
//     listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
//     // add those elements to our HTML document.
//     listElement.appendChild(listItemElement);
//   }

  
//   let totalElement = document.createElement('li');
//   totalElement.textContent = 'Total: ' + seattle.totalSales + ' cookies';
//   listElement.appendChild(totalElement);
// }

// displayHours(seattleCookiesPerHour);









































// const paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookiePerCust: 2.3,
//   genCustPerHour: function () { }
// };
// const lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookiePerCust: 4.6,
//   genCustPerHour: function () { }
// };
// const dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookiePerCust: 3.7,
//   genCustPerHour: function () { }
// }; 


