const ftoc = function(temperature) {
  const conversionRate = 5/9;
  let celsius = (temperature -32) * conversionRate;
  return Math.round(celsius*10)/10;
};

const ctof = function(temperature) {
  const conversionRate = 9/5;
  let fahrenheit = temperature * conversionRate +32;
  return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
