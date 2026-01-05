type ModelNames = "gpt-4o" | "o3-mini" | "claude-sonnet-3.7" | (string & {});

// without (string & {}) we will loose auto complete

const model1: ModelNames = "claude-xxx";
