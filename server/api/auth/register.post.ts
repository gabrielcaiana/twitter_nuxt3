import { User } from 'types/user';

export default defineEventHandler(async (event) => {
  const { name, username, email, password, repeatPassword }: User =
    await readBody(event);

  if (!name || !username || !email || !password || !repeatPassword) {
    throw createError({ statusCode: 400, statusMessage: 'fields missing' });
  }

  return {
    body: {
      name,
      username,
      email,
      password,
      repeatPassword,
    },
  };
});
