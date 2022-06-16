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
    
    listElement.appendChild(listItemElement);
  }

  
  let totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + seattle.totalSales + ' cookies';
  listElement.appendChild(totalElement);
}

displayHours(seattleCookiesPerHour);




// // displayHours(seattleCookiesPerHour);


const tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookiePerCust: 1.2,
    custAtEachHour: [],
    totalSales: 0,

    genCustPerHour: function () { 
        for (let i = 0; i < hours.length; i++) {
            let number = generateNumberBetween(this.minCust, this.maxCust);
           console.log(number);
            this.custAtEachHour.push(number);
        }
return this.custAtEachHour
    
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

tokyo.genCustPerHour();
let tokyoCookiesPerHour = tokyo.genCookiesPerHour(tokyo.custAtEachHour);
console.log(tokyo);
console.log(tokyoCookiesPerHour);


function displayHours(sales) {
  let tokyoResults = document.getElementById('tokyo-results');

  
  let listElement = document.createElement('ul');
  tokyoResults.appendChild(listElement);

  for (let i = 0; i < sales.length; i++) {
   
    let listItemElement = document.createElement('li');
    listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
listElement.appendChild(listItemElement);
  }

//   let totalElement = document.createElement('li');
//   totalElement.textContent = 'Total: ' + tokyo.totalSales + ' cookies';
//   listElement.appendChild(totalElement);
}
displayHours(tokyoCookiesPerHour);

const dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookiePerCust: 3.7,
    custAtEachHour:[],
    totalSales: 0,

    genCustPerHour: function () { 
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

dubai.genCustPerHour();
let dubaiCookiesPerHour = dubai.genCookiesPerHour(dubai.custAtEachHour);
console.log(dubai);
console.log(dubaiCookiesPerHour);

function displayHours(sales) {
    let dubaiResults = document.getElementById('dubai-results');
   let listElement = document.createElement('ul');
    dubaiResults.appendChild(listElement);
  
    for (let i = 0; i < sales.length; i++) {
      let listItemElement = document.createElement('li');
      listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
      listElement.appendChild(listItemElement);
    }
    // let totalElement = document.createElement('li');
    // totalElement.textContent = 'Total: ' + dubai.totalSales + ' cookies';
    // listElement.appendChild(totalElement);
  }

  displayHours(dubaiCookiesPerHour);

  const paris = {
    minCust: 20,
    maxCust: 38,
    avgCookiePerCust: 2.3,
    custAtEachHour: [],
    totalSales: 0,

    genCustPerHour: function () { 
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
paris.genCustPerHour();
let parisCookiesPerHour = paris.genCookiesPerHour(paris.custAtEachHour);
console.log(paris);
console.log(parisCookiesPerHour);

function displayHours(sales) {
  let parisResults = document.getElementById('paris-results');

  let listElement = document.createElement('ul');
  parisResults.appendChild(listElement);

  for (let i = 0; i < sales.length; i++) {
  
    let listItemElement = document.createElement('li');
    listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies'; 
    listElement.appendChild(listItemElement);
  }
//   let totalElement = document.createElement('li');
//   totalElement.textContent = 'Total: ' + paris.totalSales + ' cookies';
//   listElement.appendChild(totalElement);
}

displayHours(parisCookiesPerHour);

const lima = {
    minCust: 2,
    maxCust: 16,
    avgCookiePerCust: 4.6,
    custAtEachHour: [],
    totalSales: 0,

    genCustPerHour: function () {
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
            result.push(totalAtHour); // typeError if result is not an array.
          }
          this.totalSales = sum;
    return result;
  }
};
lima.genCustPerHour();
let limaCookiesPerHour = lima.genCookiesPerHour(lima.custAtEachHour);
console.log(lima);
console.log(limaCookiesPerHour);

function displayHours(sales) {
    let limaResults = document.getElementById('lima-results');
  
    // create a list element
    let listElement = document.createElement('ul');
    limaResults.appendChild(listElement);

    for (let i = 0; i < sales.length; i++) {
        // list items
        let listItemElement = document.createElement('li');
        listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
        // add those elements to our HTML document.
        listElement.appendChild(listItemElement);
    }
    // let totalElement = document.createElement('li');
    // totalElement.textContent = 'Total: ' + lima.totalSales + ' cookies';
    // listElement.appendChild(totalElement);
  }
  displayHours(limaCookiesPerHour);



