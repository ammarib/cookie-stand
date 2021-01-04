'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var shops = [];

function Salmon(
    name,
    min,
    max,
    avrg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avrg = avrg;
    this.hourlyArray = [];
    this.total = 0;
    shops.push(this);
    this.cookies();
}
function randomSales(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Salmon.prototype.cookies = function () {
    for (let index = 0; index < hours.length; index++) {
        var cookiesPerHour = Math.floor((randomSales(this.min, this.max) * this.avrg));
        this.hourlyArray.push(cookiesPerHour);
        this.total += this.hourlyArray[index];
    }

};
Salmon.prototype.render = function () {
    var tr1 = document.createElement('tr');
    table1.appendChild(tr1);
    var tData = document.createElement('td');
    tr1.appendChild(tData);
    tData.textContent = this.name;
    for (var x = 0; x < hours.length; x++) {
        tData = document.createElement('td');
        tr1.appendChild(tData);
        tData.textContent = this.hourlyArray[x];
    }
    var tdTotal = document.createElement('td');
    tr1.appendChild(tdTotal);
    tdTotal.textContent = this.total;
};

var container = document.getElementById('theTotalSales');
var table1 = document.createElement('table');
container.appendChild(table1);

var seattle = new Salmon('Seatle', '23', '65', '6.3');
console.log(seattle);
var tokyo = new Salmon('Tokyo', '3', '24', '1.2');
console.log(tokyo);
var dubai = new Salmon('Dubai', '11', '38', '3.7');
console.log(dubai);
var paris = new Salmon('Paris', '20', '38', '2.3');
console.log(paris);
var lima = new Salmon('Lima', '2', '16', '4.6');
console.log(lima);

function headerRend() {
    var tr1 = document.createElement('tr');
    table1.appendChild(tr1);
    var tableHead = document.createElement('th');
    tableHead.textContent = ' ';
    tr1.appendChild(tableHead);
    for (var i = 0; i < hours.length; i++) {
        var tableHou = document.createElement('th');
        tableHou.textContent = hours[i];
        tr1.appendChild(tableHou);
    }
    var theTotals = document.createElement('th');
    theTotals.textContent = 'Total';
    tr1.appendChild(theTotals);

}
function footerRend() {
    var tr1 = document.createElement('tr');
    table1.appendChild(tr1);
    var tData = document.createElement('td');
    tr1.appendChild(tData);
    tData.textContent = 'Total';
    var totalHours;
    var finalTotal = 0;
    for (var h = 0; h < hours.length; h++) {
        totalHours = 0;
        for (var c = 0; c < shops.length; c++) {
            totalHours += shops[c].hourlyArray[h];
        }
        var totalDataTaHou = document.createElement('td');
        totalDataTaHou.textContent = totalHours;
        finalTotal += totalHours;
        tr1.appendChild(totalDataTaHou);
    }
    var tdAllTotals = document.createElement('td');
    tdAllTotals.textContent = finalTotal;
    tr1.appendChild(tdAllTotals);

}
headerRend();
for (var i = 0; i < shops.length; i++) {
    shops[i].render();
}
footerRend();
// var Seattle = {
//     location: 'Seattle',
//     min: 23,
//     max: 65,
//     avgCookieSale: 6.3,
//     hourlySales: [],
//     dailySales: 0,

//     customersRand: function () {
//         var range = this.max - this.min;
//         var randomCount = Math.random() * range + this.min;
//         return Math.ceil(randomCount);
//     },

//     dailySaleHur: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
//             this.hourlySales.push(cookiesNum);
//             this.dailySales += cookiesNum;
//         }
//     },
//     sales :function () {
//         var totalSales = document.getElementById('theTotalSales')
//         var h2 = document.createElement('h2');
//         totalSales.appendChild(h2);
//         h2.textContent = 'Seattle';
//         to=alSales.appendChild(h2);
//         var list = document.createElement('ul');
//         totalSales.appendChild(list);
//         for (var i = 0; i < hours.length; i++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
//             list.appendChild(listItem);
//         }
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
//         list.appendChild(listItem);

//     },
// }

// Seattle.dailySaleHur();
// Seattle.customersRand();
// Seattle.sales();
// console.log(Seattle);

// var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

// var Tokyo = {
//     location: 'Tokyo',
//     min: 3,
//     max: 24,
//     avgCookieSale: 1.2,
//     hourlySales: [],
//     dailySales: 0,

//     customersRand: function () {
//         var range = this.max - this.min;
//         var randomCount = Math.random() * range + this.min;
//         return Math.ceil(randomCount);
//     },

//     dailySaleHur: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
//             this.hourlySales.push(cookiesNum);
//             this.dailySales += cookiesNum;
//         }
//     },
//     sales: function () {
//         var totalSales = document.getElementById('theTotalSales');
//         var h2 = document.createElement('h2');
//         totalSales.appendChild(h2);
//         h2.textContent = 'Tokyo';
//         totalSales.appendChild(h2);
//         var list = document.createElement('ul');
//         totalSales.appendChild(list);
//         for (var i = 0; i < hours.length; i++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = hours[i] + ': ' + Tokyo.hourlySales[i] + ' cookies';
//             list.appendChild(listItem);
//         }
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + Tokyo.dailySales + ' cookies';
//         list.appendChild(listItem);

//     }
// }

// Tokyo.dailySaleHur();
// Tokyo.customersRand();
// Tokyo.sales();
// console.log(Tokyo);

// var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

// var Paris = {
//     location: 'Paris',
//     min: 23,
//     max: 65,
//     avgCookieSale: 6.3,
//     hourlySales: [],
//     dailySales: 0,

//     customersRand: function () {
//         var range = this.max - this.min;
//         var randomCount = Math.random() * range + this.min;
//         return Math.ceil(randomCount);
//     },

//     dailySaleHur: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
//             this.hourlySales.push(cookiesNum);
//             this.dailySales += cookiesNum;
//         }
//     },
//     sales: function () {
//         var totalSales = document.getElementById('theTotalSales');
//         var h2 = document.createElement('h2');
//         totalSales.appendChild(h2);
//         h2.textContent = 'Paris';
//         totalSales.appendChild(h2);
//         var list = document.createElement('ul');
//         totalSales.appendChild(list);
//         for (var i = 0; i < hours.length; i++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = hours[i] + ': ' + Paris.hourlySales[i] + ' cookies';
//             list.appendChild(listItem);
//         }
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + Paris.dailySales + ' cookies';
//         list.appendChild(listItem);

//     }
// }

// Paris.dailySaleHur();
// Paris.customersRand();
// Paris.sales();
// console.log(Paris);        

// var Dubai = {
//     location: 'Dubai',
//     min: 23,
//     max: 65,
//     avgCookieSale: 6.3,
//     hourlySales: [],
//     dailySales: 0,

//     customersRand: function () {
//         var range = this.max - this.min;
//         var randomCount = Math.random() * range + this.min;
//         return Math.ceil(randomCount);
//     },

//     dailySaleHur: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
//             this.hourlySales.push(cookiesNum);
//             this.dailySales += cookiesNum;
//         }
//     },
//     sales: function () {
//         var totalSales = document.getElementById('theTotalSales');
//         var h2 = document.createElement('h2');
//         totalSales.appendChild(h2);
//         h2.textContent = 'Dubai';
//         totalSales.appendChild(h2);
//         var list = document.createElement('ul');
//         totalSales.appendChild(list);
//         for (var i = 0; i < hours.length; i++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = hours[i] + ': ' + Dubai.hourlySales[i] + ' cookies';
//             list.appendChild(listItem);
//         }
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + Dubai.dailySales + ' cookies';
//         list.appendChild(listItem);

//     }
// }

// Dubai.dailySaleHur();
// Dubai.customersRand();
// Dubai.sales();
// console.log(Dubai); 

// var Lima = {
//     location: 'Lima',
//     min: 23,
//     max: 65,
//     avgCookieSale: 6.3,
//     hourlySales: [],
//     dailySales: 0,

//     customersRand: function () {
//         var range = this.max - this.min;
//         var randomCount = Math.random() * range + this.min;
//         return Math.ceil(randomCount);
//     },

//     dailySaleHur: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
//             this.hourlySales.push(cookiesNum);
//             this.dailySales += cookiesNum;
//         }
//     },
//     sales: function () {
//         var totalSales = document.getElementById('theTotalSales');
//         var h2 = document.createElement('h2');
//         totalSales.appendChild(h2);
//         h2.textContent = 'Lima';
//         totalSales.appendChild(h2);
//         var list = document.createElement('ul');
//         totalSales.appendChild(list);
//         for (var i = 0; i < hours.length; i++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = hours[i] + ': ' + Lima.hourlySales[i] + ' cookies';
//             list.appendChild(listItem);
//         }
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + Lima.dailySales + ' cookies';
//         list.appendChild(listItem);

//     }
// }

// Lima.dailySaleHur();
// Lima.customersRand();
// Lima.sales();
// console.log(Lima);        