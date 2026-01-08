const greet = (value: unknown) => {
  if (typeof value === "string") return `Hello ${value}`;
  if (typeof value === "number") return 555;
  else return value;
};
