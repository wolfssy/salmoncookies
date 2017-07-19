'use strict';


var cookiesSoldEachHour = []; //eslint-disable-line
var timeOfDay = ['0600','0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

var salmonCookiesTable = document.getElementById('salmon');
var cookieShops = [];

var storeInventory = document.getElementById('inventory');

function Salmon(name,minCust, maxCust, avgCook){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.customersEachHour = [];
  this.calcCustomersEachHour = function(){
    for(var i = 0; i < timeOfDay.length; i++){
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function(){
    this.calcCustomersEachHour();
    for(var i = 0; i < timeOfDay.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCook));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];

      console.log(this.totalCookiesPerDay, ': cookie total');
    }
  };

  this.totalCookiesPerDay = 0;
  cookieShops.push(this);

  this.render = function(){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for(var i = 0; i < timeOfDay.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);
    salmonCookiesTable.appendChild(trEl);
  };
  this.calcCookiesSoldEachHour();
};

new Salmon('1st and Pike', 23, 65, 6.3);
new Salmon('SeaTac Airport', 3, 24, 1.2);
new Salmon('Seattle Center', 11, 38, 3.7);
new Salmon('Capitol Hill', 20, 38, 2.3);
new Salmon('Alki', 2, 16, 4.6);

// function storesinDom(){
//   var storelist = document.getElementById('id');
//   for(var i = 0; i < cookieShops.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = cookieShops[i].location;
//     storelist.appendChild(liEl);
//   }
// }

function makeHeaderRow(){

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);

  for(var i = 0; i < timeOfDay.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = timeOfDay[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  salmonCookiesTable.appendChild(trEl);
}
// function makeRows(){
//   var
// }


function salmonRows(){
  for(var i = 0; i < cookieShops.length; i++){
    cookieShops[i].render();
  }
};

makeHeaderRow();
salmonRows();

function submitForm(event){
  event.preventDefault();
  var name = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCook = event.target.avgCook.value;
  if(name === '' || minCust === '' || maxCust === '' || avgCook === ''){
    alert('Boxes need to have content!');
    return;
  }
  new Salmon (name, minCust, maxCust, avgCook);
  cookieShops[cookieShops.length - 1].render();
}
storeInventory.addEventListener('submit', submitForm);
