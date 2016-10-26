function Airport (CAPACITY = 20) {
this.planes = [];
this.CAPACITY = CAPACITY;
this.cWeather = false;
}

Airport.prototype.land = function(plane) {
  if (this.cWeather === true) {
    return ('No landing during bad weather');
  } else if (this.planes.length >= 20) {
    return ('No landing when airport is full');
  } else {
    this.planes.push(plane);
  }
};

Airport.prototype.currentWeather = function(weather){
  this.cWeather = weather.isStormy();
};

Airport.prototype.takeOff = function(plane) {
  if (this.cWeather === true) {
    return ('No take off during bad weather');
  } else {
    this.planes.pop(plane);
  }
};

Airport.prototype.setCapacity = function(number){
  this.CAPACITY = number;
};
