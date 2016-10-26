describe('Airport', function(){
  var airport;
  var gatwick;
  var weather;
  //DummyPlane is an object constructor for a plane 'double'
  function DummyPlane(){}
  var plane = new DummyPlane();

  beforeEach(function() {
    airport = new Airport();
    weather = new Weather ();

  });

  it('tells a plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
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

  it('prevents takeoff during bad weather', function(){
    spyOn(weather, 'isStormy').and.returnValue(true);
    airport.land(plane);
    airport.currentWeather(weather);
    airport.takeOff(plane);
    expect(airport.planes).toContain(plane);
  });

  it('shows a message in bad weather during takeoff function', function(){
    airport.land(plane);
    spyOn(weather, 'isStormy').and.returnValue(true);
    airport.currentWeather(weather);
    expect(airport.takeOff(plane)).toEqual('No take off during bad weather');
  });

  it('tells a plane to take off', function(){
    airport.land(plane);
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.currentWeather(weather);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane);
  });

  it('shows a message in bad weather during landing function', function(){
    spyOn(weather, 'isStormy').and.returnValue(true);
    airport.currentWeather(weather);
    expect(airport.land(plane)).toEqual('No landing during bad weather');
  });


  describe('', function(){
    beforeEach(function() {
      for(var i = 1; i < 21; i++){
        airport.land(plane);
      }
    });

    it('stops a plane landing when airport is full', function(){
      console.log(airport.planes.length);
      expect(airport.land(plane)).toEqual('No landing when airport is full');
    });

  });

});
