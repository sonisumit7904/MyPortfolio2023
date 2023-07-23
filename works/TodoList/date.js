module.exports.getday= getday;
// module. exports can be used just as only exports
// another method to declare functions
exports.getdate = function() {
  // Method1: to get weekday
  const today = new Date();
  // var days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // var day = days[today.getDay()];
  //  today.getDay() = 0 to 6 starting from sunday
  // Method2: to get weekday
  const dateOption = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", dateOption);
}

function getday() {
    const today = new Date();
    // Method2: to get weekday
    const dateOption = {
      weekday: "long"
    };
    return today.toLocaleDateString("en-US", dateOption);
  }