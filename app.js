'use strict';
//
// ///////////////////////////////////////////
// // customersEachHour: [],
// // cookiesEachHour: [],
// // totalCookiesPerDay: 0;
// // (methods to calculate customer and cookie totals)
// // (method to calculate customers per hour)
//
var timeOfDay = ['0600','0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];

// /////////////////////////////////       PIKE      ///////////////////////////////////////
//
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
//
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


var allSalmon = [];

var salmonTable = document.getElementById('salmon');

function Salmon(name,minCust, maxCust, avgCook){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  allSalmon.push(this);
  this.render = function() {
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.minCust;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.maxCust;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.avgCook;
    trEl.appendChild(tdEl);

    salmonTable.appendChild(trEl);
  }
}
  new Salmon('1st and Pike', 23, 65, 6.3);
  new Salmon('SeaTac Airport', 3, 24, 1.2);
  new Salmon('Seattle Center', 11, 38, 3.7);
  new Salmon('Capitol Hill', 20, 38, 2.3);
  new Salmon('Alki', 2, 16, 4.6);


function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = this.minCust;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = this.maxCust;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = this.avgCook;
  trEl.appendChild(thEl);

  salmonTable.appendChild(trEl);
}


function salmonRows(){
  for(var i = 0; i < allSalmon.length; i++){
    allSalmon[i].render();
  }
}
// What could that array for? Why would I need one?  to collect  our data


 //function itself is function declaration, so no need for semicoong except for 35 because of the function for that value of "introduction"...function expression.
