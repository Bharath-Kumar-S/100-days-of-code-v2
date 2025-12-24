type Features = Record<string, boolean>;

const flags: Features = {
  darkMode: true,
  betaFeatures: false,
};

type FlagName = keyof typeof flags; // type is just string

const flags2 = {
  darkMode: true,
  betaFeatures: false,
} satisfies Features;

type FlagName2 = keyof typeof flags2; // this shows the flags correctly
