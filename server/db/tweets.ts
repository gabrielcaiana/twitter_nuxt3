import { prisma }  from '.'
import { Tweet } from '@prisma/client';

export const createTweet = (tweetData: Tweet) => {
  return prisma.tweet.create({
    data: tweetData
  })
}