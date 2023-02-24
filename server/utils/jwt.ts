import jwt from 'jsonwebtoken';
import { User } from '~/types/user';
import { Token } from '~/types/token';

const config = useRuntimeConfig();

const generateAccessToken = (user: User) => {
  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: '10m',
  });
};

const generateRefreshToken = (user: User) => {
  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: '4h',
  });
};

export const generateTokens = (user: User) => {
  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
  };
};

export const sendRefreshToken = (event: any, token: Token) => {
  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true,
  });
};
