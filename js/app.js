'use strict';

var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var Seattle = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales: [],
    dailySales: 0,

    customersRand: function () {
        var range = this.max - this.min;
        var randomCount = Math.random() * range + this.min;
        return Math.ceil(randomCount);
    },

    dailySaleHur: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
            this.hourlySales.push(cookiesNum);
            this.dailySales += cookiesNum;
        }
    },
    sales :function () {
        var totalSales = document.getElementById('theTotalSales')
        var h2 = document.createElement('h2');
        totalSales.appendChild(h2);
        h2.textContent = 'Seattle';
        totalSales.appendChild(h2);
        var list = document.createElement('ul');
        totalSales.appendChild(list);
        for (var i = 0; i < hours.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
            list.appendChild(listItem);
        }
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
        list.appendChild(listItem);

    },
}

Seattle.dailySaleHur();
Seattle.customersRand();
Seattle.sales();
console.log(Seattle);

var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var Tokyo = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookieSale: 1.2,
    hourlySales: [],
    dailySales: 0,

    customersRand: function () {
        var range = this.max - this.min;
        var randomCount = Math.random() * range + this.min;
        return Math.ceil(randomCount);
    },

    dailySaleHur: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
            this.hourlySales.push(cookiesNum);
            this.dailySales += cookiesNum;
        }
    },
    sales: function () {
        var totalSales = document.getElementById('theTotalSales');
        var h2 = document.createElement('h2');
        totalSales.appendChild(h2);
        h2.textContent = 'Tokyo';
        totalSales.appendChild(h2);
        var list = document.createElement('ul');
        totalSales.appendChild(list);
        for (var i = 0; i < hours.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + Tokyo.hourlySales[i] + ' cookies';
            list.appendChild(listItem);
        }
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + Tokyo.dailySales + ' cookies';
        list.appendChild(listItem);

    }
}

Tokyo.dailySaleHur();
Tokyo.customersRand();
Tokyo.sales();
console.log(Tokyo);

var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var Paris = {
    location: 'Paris',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales: [],
    dailySales: 0,

    customersRand: function () {
        var range = this.max - this.min;
        var randomCount = Math.random() * range + this.min;
        return Math.ceil(randomCount);
    },

    dailySaleHur: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
            this.hourlySales.push(cookiesNum);
            this.dailySales += cookiesNum;
        }
    },
    sales: function () {
        var totalSales = document.getElementById('theTotalSales');
        var h2 = document.createElement('h2');
        totalSales.appendChild(h2);
        h2.textContent = 'Paris';
        totalSales.appendChild(h2);
        var list = document.createElement('ul');
        totalSales.appendChild(list);
        for (var i = 0; i < hours.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + Paris.hourlySales[i] + ' cookies';
            list.appendChild(listItem);
        }
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + Paris.dailySales + ' cookies';
        list.appendChild(listItem);

    }
}

Paris.dailySaleHur();
Paris.customersRand();
Paris.sales();
console.log(Paris);        

var Dubai = {
    location: 'Dubai',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales: [],
    dailySales: 0,

    customersRand: function () {
        var range = this.max - this.min;
        var randomCount = Math.random() * range + this.min;
        return Math.ceil(randomCount);
    },

    dailySaleHur: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
            this.hourlySales.push(cookiesNum);
            this.dailySales += cookiesNum;
        }
    },
    sales: function () {
        var totalSales = document.getElementById('theTotalSales');
        var h2 = document.createElement('h2');
        totalSales.appendChild(h2);
        h2.textContent = 'Dubai';
        totalSales.appendChild(h2);
        var list = document.createElement('ul');
        totalSales.appendChild(list);
        for (var i = 0; i < hours.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + Dubai.hourlySales[i] + ' cookies';
            list.appendChild(listItem);
        }
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + Dubai.dailySales + ' cookies';
        list.appendChild(listItem);

    }
}

Dubai.dailySaleHur();
Dubai.customersRand();
Dubai.sales();
console.log(Dubai); 

var Lima = {
    location: 'Lima',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales: [],
    dailySales: 0,

    customersRand: function () {
        var range = this.max - this.min;
        var randomCount = Math.random() * range + this.min;
        return Math.ceil(randomCount);
    },

    dailySaleHur: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesNum = Math.ceil(this.customersRand() * this.avgCookieSale);
            this.hourlySales.push(cookiesNum);
            this.dailySales += cookiesNum;
        }
    },
    sales: function () {
        var totalSales = document.getElementById('theTotalSales');
        var h2 = document.createElement('h2');
        totalSales.appendChild(h2);
        h2.textContent = 'Lima';
        totalSales.appendChild(h2);
        var list = document.createElement('ul');
        totalSales.appendChild(list);
        for (var i = 0; i < hours.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + Lima.hourlySales[i] + ' cookies';
            list.appendChild(listItem);
        }
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + Lima.dailySales + ' cookies';
        list.appendChild(listItem);

    }
}

Lima.dailySaleHur();
Lima.customersRand();
Lima.sales();
console.log(Lima);        