type A = {
  name: string;
};

type B = {
  age: number;
};

type C = A &
  B & {
    phn: number;
  };

const user = {
  age: 24,
  name: "bharath",
  phn: 564536546,
} satisfies C;
