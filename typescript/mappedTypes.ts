type User = {
  id: string;
  name: string;
  age: number;
};

// type MappedUser = {
//   [K in keyof User as `get${Capitalize<K>}`]: [K];
// };

// const user: MappedUser = {
//   getId: ["id"],
//   getName: ["name"],
//   getAge: ["age"],
// };

type MappedUser = {
  [K in keyof User as `get${Capitalize<K>}`]: () => User[K];
};

const user: MappedUser = {
  getId: () => "123",
  getName: () => "Alice",
  getAge: () => 30,
};
