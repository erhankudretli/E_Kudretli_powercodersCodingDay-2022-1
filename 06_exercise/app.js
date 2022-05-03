const dayOftheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let givenInput = [5, 3, 6, 7];
let output = [];

const weekNumbersToWords = () => {
  givenInput.map((value) => {
    switch (value) {
      case 1:
        output.push(dayOftheWeek[0]);

        break;
      case 2:
        output.push(dayOftheWeek[1]);

        break;
      case 3:
        output.push(dayOftheWeek[2]);

        break;
      case 4:
        output.push(dayOftheWeek[3]);

        break;
      case 5:
        output.push(dayOftheWeek[4]);

        break;
      case 6:
        output.push(dayOftheWeek[5]);

        break;
      case 7:
        output.push(dayOftheWeek[6]);

        break;

      default:
        break;
    }
  });
};
weekNumbersToWords();
console.log(output);
