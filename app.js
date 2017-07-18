'use strict';

///////////////////////////////////////////
// customersEachHour: [],
// cookiesEachHour: [],
// totalCookiesPerDay: 0;
// (methods to calculate customer and cookie totals)
// (method to calculate customers per hour)

var timeOfDay = ['0600','0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];

/////////////////////////////////       PIKE      ///////////////////////////////////////

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  hourC: [],
  randomPeeps: function (min,max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
  },
  cookiesPerHour: function(){
    for(var i = 0; i < timeOfDay.length; i++){
      var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
      this.hourC.push(cookiesPer);
    }
    return this.hourC;
  },
  cookiesPD: function(){
    var total = 0
    for(var i = 0; i < this.hourC.length; i++){
      total += this.hourC[i];
    }
    return total;
  },
  render: function(){
    var pikeUl = document.getElementById('pike');
    for(var i = 0; i < timeOfDay.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
      pikeUl.appendChild(liEl);
    }
    var total = document.getElementById('pike');
    var liEl = document.createElement('li');
    liEl.textContent = 'total: ' + this.cookiesPD(total);
    total.appendChild(liEl);
  }

};

pike.randomPeeps();
pike.cookiesPerHour();
pike.render();

//////////////////////////////////   SeaTac Airport     ////////////////////////

var Seatac = {
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  hourC: [],
  randomPeeps: function (min,max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
  },
  cookiesPerHour: function(){
    for(var i = 0; i < timeOfDay.length; i++){
      var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
      this.hourC.push(cookiesPer);
    }
    return this.hourC;
  },
  cookiesPD: function(){
    var total = 0
    for(var i = 0; i < this.hourC.length; i++){
      total += this.hourC[i];
    }
    return total;
  },
  render: function(){
    var pikeUl = document.getElementById('Seatac');
    for(var i = 0; i < timeOfDay.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
      pikeUl.appendChild(liEl);
    }
    var total = document.getElementById('Seatac');
    var liEl = document.createElement('li');
    liEl.textContent = 'total: ' + this.cookiesPD(total);
    total.appendChild(liEl);
  }

};

Seatac.randomPeeps();
Seatac.cookiesPerHour();
Seatac.render();

///////////////////////////////       center     ///////////////////////

var center= {
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  hourC: [],
  randomPeeps: function (min,max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
  },
  cookiesPerHour: function(){
    for(var i = 0; i < timeOfDay.length; i++){
      var cookiesPer = Math.floor(this.avgCook * this.randomPeeps());
      this.hourC.push(cookiesPer);
    }
    return this.hourC;
  },
  cookiesPD: function(){
    var total = 0
    for(var i = 0; i < this.hourC.length; i++){
      total += this.hourC[i];
    }
    return total;
  },
  render: function(){
    var pikeUl = document.getElementById('center');
    for(var i = 0; i < timeOfDay.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.hourC[i] + ' Cookies per hour';
      pikeUl.appendChild(liEl);
    }
    var total = document.getElementById('center');
    var liEl = document.createElement('li');
    liEl.textContent = 'total: ' + this.cookiesPD(total);
    total.appendChild(liEl);
  }

};

center.randomPeeps();
center.cookiesPerHour();
center.render();
