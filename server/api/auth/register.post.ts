import { User } from 'types/user';
import { createUser } from '~/server/db/users';
import { userTransformer } from '~~/server/transformers';

export default defineEventHandler(async (event) => {
  const body: User = await readBody(event);

  if (!body.username || !body.email || !body.password || !body.repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'fields missing' })
    );
  }

  if (body.password !== body.repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'passwords do not match' })
    );
  }

  const user = (await createUser({
    username: body.username,
    email: body.email,
    name: body.name || null,
    password: body.password,
    profileImage: body.profileImage || null,
  })) as User;

  return {
    body: userTransformer(user),
  };
});
