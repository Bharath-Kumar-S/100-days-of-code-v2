// function processEmpty(obj: {}) {
//   console.log(obj);
// }

/* processEmpty({});
processEmpty({ name: "Ed" });
processEmpty("hello");
processEmpty(42); */
// This is not expected {} checks only for non empty

// processEmpty(null);
// processEmpty(undefined);

function processEmpty(obj: Record<string, never>) {
  console.log(obj);
}

// processEmpty({});
// processEmpty({ name: "Ed" });
// processEmpty("hello");

// this catches the issues
