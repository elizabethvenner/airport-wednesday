describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('tells a plane to land', function(){
    expect(airport.land(plane)).toEqual(plane);
  });

  it('tells a plane to take off', function(){
    expect(airport.takeOff(plane)).toEqual(null);
  });

  it('has an empty airport on construction', function(){
    expect(airport.planes).toEqual([]);
  });
});
