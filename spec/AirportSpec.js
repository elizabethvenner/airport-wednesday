describe('Airport', function(){
  var airport;
  var gatwick;
  //DummyPlane is an object constructor for a plane 'double'
  function DummyPlane(){};
  var plane = new DummyPlane();
  beforeEach(function() {
    airport = new Airport();
  });

  it('tells a plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it('tells a plane to take off', function(){
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane);
  });

  it('has an empty airport on construction', function(){
    expect(airport.planes).toEqual([]);
  });

  it('has a default capacity on construction', function () {
    expect(airport.CAPACITY).toEqual(20);
  });

  it('has a default capacity that can be overridden on on construction', function(){
    gatwick = new Airport (12);
    expect(gatwick.CAPACITY).toEqual(12);
  });

  it('has a default capacity that can be changed later', function(){
    airport.setCapacity(50);
    expect(airport.CAPACITY).toEqual(50);
  });

});
