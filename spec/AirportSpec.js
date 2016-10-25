describe('Airport', function(){
  var airport;
  var plane;
  // beforeEach(function() {
  //   airport = new Airport();
  // });

  it('tells a plane to land', function(){
    airport = new Airport();
    expect(airport.land()).toBe(true);
  });

});
