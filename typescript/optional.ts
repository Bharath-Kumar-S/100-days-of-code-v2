type User = {
  address:
    | {
        city: string;
      }
    | undefined;
};

function getCityOptional(user: User) {
  const city = user.address?.city;
  return city?.toUpperCase();
}

function getCity(user: User): string | undefined {
  if (user.address) {
    const city = user.address.city;
    return city.toUpperCase();
  }
  return undefined;
}

const user = {
  address: {
    city: "sopruse pst 24",
  },
};

console.log(getCity(user));

const updatedUser: User = {
  ...user,
  address: undefined,
};

console.log(getCityOptional(updatedUser));
