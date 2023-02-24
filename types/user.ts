export interface User {
  id?: ID;
  username: string;
  password: string;
  repeatPassword?: string;
  email: string;
  name?: string | null;
  profileImage?: string | null;
}

export type ID = string;
