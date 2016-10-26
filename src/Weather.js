function Weather () {
}

Weather.prototype.isStormy = function () {
  if ((Math.random() * 100) > 90) {
    return true;
  } else {
    return false;
  }
};
