import { prisma } from '.';

interface RefreshToken {
  token: string;
  userId: string;
}

export const createRefreshToken = ({ token, userId }: RefreshToken) => {
  return prisma.refreshToken.create({
    data: {
      token,
      userId,
    },
  });
};
