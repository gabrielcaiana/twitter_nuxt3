import { User } from 'types/user';
import { createUser } from '~/server/db/users';

export default defineEventHandler(async (event) => {
  const { name, username, email, password, repeatPassword }: User =
    await readBody(event);

  const userData: User = {
    name,
    username,
    email,
    password,
    repeatPassword,
  };

  const hasUndefinedValue = Object.values(userData).some(
    (value) => value === undefined
  );

  if (hasUndefinedValue) {
    throw createError({ statusCode: 400, statusMessage: 'fields missing' });
  }

  if (password !== repeatPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: 'passwords do not match',
    });
  }

  const user = await createUser({
    username,
    email,
    name,
    password,
  });

  return {
    body: user,
  };
});
