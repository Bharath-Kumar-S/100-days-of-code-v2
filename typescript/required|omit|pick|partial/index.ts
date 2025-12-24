interface User {
  id: string;
  name: string;
  email?: string;
}

type RequiredUser = Required<User>;
type PartialUser = Partial<User>;
type UserWithoutId = Omit<User, "id">;
type UserName = Omit<User, "id" | "email">;
type UserCredentials = Pick<User, "email">;
