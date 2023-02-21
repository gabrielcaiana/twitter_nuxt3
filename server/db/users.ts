import { User } from '~/types/user';
import { prisma } from './index';
import bcrypt from 'bcrypt';

export const createUser = (userData: User) => {
  const data = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({ data });
};
