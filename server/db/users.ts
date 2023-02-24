import { User } from '~/types/user';
import { prisma } from './index';
import bcrypt from 'bcrypt';

export const createUser = async (userData: User) => {
  const verifyUserExists = await getUserByUsername(userData.username);

  if (verifyUserExists) {
    throw createError({
      statusCode: 400,
      statusMessage: 'user already exists',
    });
  }

  const data = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({ data });
};

export const getUserByUsername = (username: string) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};
