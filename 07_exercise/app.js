const reversedNum = (givenNumber) =>
  parseFloat(givenNumber.toString().split("").reverse().join("")) *
  Math.sign(givenNumber);

function reverseNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

console.log(reversedNum(1234));

console.log(reversedNum(100000000));

console.log(reversedNum(-321));
