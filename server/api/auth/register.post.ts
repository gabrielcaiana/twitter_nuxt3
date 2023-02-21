import { User } from 'types/user';
import { createUser } from '~/server/db/users';

export default defineEventHandler(async (event) => {
  const body: User = await readBody(event);

  if (!body.username || !body.email || !body.password || !body.repeatPassword) {
    throw createError({ statusCode: 400, statusMessage: 'fields missing' });
  }

  if (body.password !== body.repeatPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: 'passwords do not match',
    });
  }

  const user = (await createUser({
    username: body.username,
    email: body.email,
    name: body.name || null,
    password: body.password,
    profileImage: body.profileImage || null,
  })) as User;

  return {
    body: user,
  };
});
