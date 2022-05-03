let DaysOftheWeek = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

DaysOftheWeek = DaysOftheWeek.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(DaysOftheWeek[DaysOftheWeek.length - 1]);
