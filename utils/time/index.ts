const toMinutes = (t: string): number => {
  const [h = 0, m = 0] = t.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) {
    throw new Error(`Invalid time format: ${t}`);
  }
  return h * 60 + m;
};

const toHHMM = (mins: number): string => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};

const sleep = (ms: number = 1000) => new Promise((res) => setTimeout(res, ms));

export { toMinutes, toHHMM, sleep };
