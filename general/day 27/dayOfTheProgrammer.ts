// Day of the Programmer

// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

const dayOfTheProgrammer = (year: number): string => {
  if (year === 1918) {
    return "26.09.1918";
  } else if (
    (year < 1918 && year % 4 === 0) ||
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
  ) {
    return `12.09.${year}`;
  } else {
    return `13.09.${year}`;
  }
};

console.log(dayOfTheProgrammer(2017)); // Output: "13.09.2017"
console.log(dayOfTheProgrammer(2016)); // Output: "12.09.2016"
console.log(dayOfTheProgrammer(1800)); // Output: "12.09.1800"
console.log(dayOfTheProgrammer(1918)); // Output: "26.09.1918"
