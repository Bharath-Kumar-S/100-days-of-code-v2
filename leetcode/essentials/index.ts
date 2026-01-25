export const removeDuplicates = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const sort = <T>(arr: T[], compare: (a: T, b: T) => number): T[] => {
  return [...arr].sort(compare);
};

export const cloneObject = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") return obj;
  return structuredClone(obj);
};

export const minElement = (arr: number[]): number => Math.min(...arr);

export const maxElement = (arr: number[]): number => Math.max(...arr);

export const swapValues = <T>([a, b]: [T, T]): [T, T] => [b, a];
