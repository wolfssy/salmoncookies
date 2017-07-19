'use strict';
//
// ///////////////////////////////////////////
// var customersEachHour =  [];
var cookiesSoldEachHour = [];
// // totalCookiesPerDay: 0;
// // (methods to calculate customer and cookie totals)
// // (method to calculate customers per hour)
//
var timeOfDay = ['0600','0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

var salmonCookiesTable = document.getElementById('salmon');
var cookieShops = [];


function Salmon(name,minCust, maxCust, avgCook){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.customersEachHour = [];
  this.calcCustomersEachHour = function(){
      for(var i = 0; i < timeOfDay.length; i++){
        this.customersEachHour.push(Math.floor(Math.random()* (this.maxCust - this.minCust + 1)) + this.minCust);
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
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
      }

      var tdEl = document.createElement('td');
      tdEl.textContent = this.totalCookiesPerDay;
      trEl.appendChild(tdEl);
      salmonCookiesTable.appendChild(trEl);
  }
  this.calcCookiesSoldEachHour();
};

new Salmon('1st and Pike', 23, 65, 6.3);
new Salmon('SeaTac Airport', 3, 24, 1.2);
new Salmon('Seattle Center', 11, 38, 3.7);
new Salmon('Capitol Hill', 20, 38, 2.3);
new Salmon('Alki', 2, 16, 4.6);

function storesinDom(){
  var storelist = document.getElementById('id');
  for(var i = 0; i < cookieShops.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = cookieShops[i].location;
    storelist.appendChild(liEl);
  }
}

function makeHeaderRow(){

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
    thEl.textContent = 'location';
    trEl.appendChild(thEl);

    for(var i = 0; i < timeOfDay.length; i++){
      var thEl = document.createElement('th');
      thEl.textContent = timeOfDay[i];
      trEl.appendChild(thEl);
    }
  var thEl = document.createElement('th');
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
}
makeHeaderRow();
salmonRows();



// /////////////////////////////////       PIKE      ///////////////////////////////////////

// var pike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCook: 6.3,
//   hourC: [],
//   randomPeeps: function (min,max){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < timeOfDay.length; i++){
//       var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
//       this.hourC.push(cookiesPer);
//     }
//     return this.hourC;
//   },
//   cookiesPD: function(){
//     var total = 0
//     for(var i = 0; i < this.hourC.length; i++){
//       total += this.hourC[i];
//     }
//     return total;
//   },
//   render: function(){
//     var pikeUl = document.getElementById('pike');
//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
//       pikeUl.appendChild(liEl);
//     }
//     var total = document.getElementById('pike');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.cookiesPD(total);
//     total.appendChild(liEl);
//   }
//
// };
//
// pike.randomPeeps();
// pike.cookiesPerHour();
// pike.render();

// //////////////////////////////////   SeaTac Airport     ////////////////////////
//
// var Seatac = {
//   minCust: 3,
//   maxCust: 24,
//   avgCook: 1.2,
//   hourC: [],
//   randomPeeps: function (min,max){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < timeOfDay.length; i++){
//       var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
//       this.hourC.push(cookiesPer);
//     }
//     return this.hourC;
//   },
//   cookiesPD: function(){
//     var total = 0
//     for(var i = 0; i < this.hourC.length; i++){
//       total += this.hourC[i];
//     }
//     return total;
//   },
//   render: function(){
//     var SeatacUl = document.getElementById('Seatac');
//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
//       SeatacUl.appendChild(liEl);
//     }
//     var total = document.getElementById('Seatac');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.cookiesPD(total);
//     total.appendChild(liEl);
//   }
//
// };
//
// Seatac.randomPeeps();
// Seatac.cookiesPerHour();
// Seatac.render();
//
// ///////////////////////////////       center     ///////////////////////
//
// var center= {
//   minCust: 11,
//   maxCust: 38,
//   avgCook: 3.7,
//   hourC: [],
//   randomPeeps: function (min,max){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < timeOfDay.length; i++){
//       var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
//       this.hourC.push(cookiesPer);
//     }
//     return this.hourC;
//   },
//   cookiesPD: function(){
//     var total = 0
//     for(var i = 0; i < this.hourC.length; i++){
//       total += this.hourC[i];
//     }
//     return total;
//   },
//   render: function(){
//     var centerUl = document.getElementById('center');
//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
//       centerUl.appendChild(liEl);
//     }
//     var total = document.getElementById('center');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.cookiesPD(total);
//     total.appendChild(liEl);
//   }
//
// };
//
// center.randomPeeps();
// center.cookiesPerHour();
// center.render();
//
// ///////////////////////////////   Hill    //////////////////////
//
// var hill= {
//   minCust: 20,
//   maxCust: 38,
//   avgCook: 2.3,
//   hourC: [],
//   randomPeeps: function (min,max){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < timeOfDay.length; i++){
//       var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
//       this.hourC.push(cookiesPer);
//     }
//     return this.hourC;
//   },
//   cookiesPD: function(){
//     var total = 0
//     for(var i = 0; i < this.hourC.length; i++){
//       total += this.hourC[i];
//     }
//     return total;
//   },
//   render: function(){
//     var hillUl = document.getElementById('hill');
//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
//       hillUl.appendChild(liEl);
//     }
//     var total = document.getElementById('hill');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.cookiesPD(total);
//     total.appendChild(liEl);
//   }
//
// };
//
// hill.randomPeeps();
// hill.cookiesPerHour();
// hill.render();
//
// //////////////////////        Alki          ////////////////////
// var alki= {
//   minCust: 2,
//   maxCust: 16,
//   avgCook: 4.6,
//   hourC: [],
//   randomPeeps: function (min,max){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < timeOfDay.length; i++){
//       var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
//       this.hourC.push(cookiesPer);
//     }
//     return this.hourC;
//   },
//   cookiesPD: function(){
//     var total = 0
//     for(var i = 0; i < this.hourC.length; i++){
//       total += this.hourC[i];
//     }
//     return total;
//   },
//   render: function(){
//     var alkiUl = document.getElementById('alki');
//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
//       alkiUl.appendChild(liEl);
//     }
//     var total = document.getElementById('alki');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total: ' + this.cookiesPD(total);
//     total.appendChild(liEl);
//   }
//
// };
//
// alki.randomPeeps();
// alki.cookiesPerHour();
// alki.render();
//
// /////////////////////////////





// What could that array for? Why would I need one?  to collect  our data


 //function itself is function declaration, so no need for semicoong except for 35 because of the function for that value of "introduction"...function expression.
