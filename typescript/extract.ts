type Example = "a" | "b" | 1 | 2 | "c";

type Strings = Extract<Example, string>;

type Numbers = Extract<Example, number>;
