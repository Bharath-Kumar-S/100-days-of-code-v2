interface A {
  name: string;
}

interface B {
  phn: number;
}

interface C extends A, B {
  address: string;
}

const user = {
  name: "Bharath",
  phn: 9003045843,
  address: "house 123",
} satisfies C;
