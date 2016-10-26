function Airport (CAPACITY = 20) {
this.planes = [];
this.CAPACITY = CAPACITY;
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.planes.pop(plane);
};

Airport.prototype.setCapacity = function(number){
  this.CAPACITY = number
};
