function Airport () {
this.planes = [];
};

Airport.prototype.land = function(plane) {
  return plane;
};

Airport.prototype.takeOff = function(plane) {
  return null;
};

var Plane = function () {

};
