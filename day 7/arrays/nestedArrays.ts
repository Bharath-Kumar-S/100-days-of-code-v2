function unpackAndDisplay(nestedArray: (string | string[])[]) {
  // Destructure the first and second elements from the nested array
  const [first, second, third] = nestedArray.flat();
  // Display the unpacked elements
  console.log(
    `First element: ${first}, Second element: ${second}, Third element: ${third}`
  );
}

// Define a nested array
const myArray: (string | string[])[] = ["apple", ["banana", "cherry"]];

// Call the function to unpack and display elements
unpackAndDisplay(myArray);
