describe('Weather', function (){
  var weather = new Weather();

  it('has a boolean value by default', function(){

    // expect(weather.isStormy()).toEqual(false);
    expect([false, true]).toContain(weather.isStormy());
  });

});
