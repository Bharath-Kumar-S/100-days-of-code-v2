type ButtonConfig = {
  variant: "primary" | "secondary" | "muted";
  size: "small" | "default";
};

const button: ButtonConfig = {
  size: "default",
  variant: "primary",
};

const button2 = {
  size: "small",
  variant: "secondary",
} satisfies ButtonConfig;

// with type annotations alone we loose specifics
// use satisfies instead

button.variant;
button2.variant;
