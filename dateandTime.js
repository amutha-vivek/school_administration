exports.result = function() {
  var date = new Date();
  var da = date.getDate();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);

  // current year
  var year = date.getFullYear();
  var hours = date.getHours();
  var min = date.getMinutes();
  console.log(da + "-" + month + "-" + year + " " + hours + ":" + min);
  var time = da + "-" + month + "-" + year + " " + hours + ":" + min + "--";
  return time;
};
