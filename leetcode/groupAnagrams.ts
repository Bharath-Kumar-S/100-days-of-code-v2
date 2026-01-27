// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const groupAnagrams = (strs: string[]) => {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    let key = Array.from(str).sort().join("");

    if (!map.has(key)) map.set(key, []);
    map.get(key)?.push(str);
  }

  return [...map.values()];
};
