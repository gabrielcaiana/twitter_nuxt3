import { User } from '~/types/user';
import { prisma } from './index';

export const createUser = (userData: User) => {
  return prisma.user.create({
    data: userData,
  });
};
