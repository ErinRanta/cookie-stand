'use strict';


function generateRandom(min, max) {
    min = Math.round(min);
    max = Math.round(max);
    return Math.round(Math.random() * (max - min) + min);
}

function avgHour(min,max,avgCookiesHour) {
    let sales = []
    for (let i = 0; i < 14; i++) {
        let cust = generateRandom(min.max)*avgCookiesHour
        
    }

return sales;
}



let Seattle = {
    name: 'Seattle',
    minCustHour: 23,
    maxCustHour: 65,
    avgCookiesHour: 6.3,
    hoursOpen: 14,
     };

    console.log(avgHour(Seattle.minCustHour,Seattle.maxCustHour,Seattle.avgCookiesHour));


let Tokyo = {
    name: 'Tokyo',
    minCustHour: 3,
    maxCustHour: 24,
    avgCookiesHour: 1.2,
    hoursOpen: 14,
    
};


let Dubai = {
    name: "Dubai",
    minCustHour: 11,
    maxCustHour: 38,
    avgCookiesHour: 3.7,
    hoursOpen: 14,
   

};

let Paris = {
    name: "Paris",
    minCustHour: 20,
    maxCustHour: 38,
    avgCookiesHour: 3.7,
    hoursOpen: 14,
    
};

let Lima = {
    name: "Lima",
    minCustHour: 2,
    maxCustHour: 16,
    avgCookiesHour: 4.6,
    hoursOpen: 14,
    
};
// console.log(avgHour);



