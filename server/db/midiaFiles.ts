import { MediaFile } from '~~/types/mediaFile'
import { prisma } from '.'

export const createMediaFile = (mediaFile: MediaFile) => {
  return prisma.mediaFile.create({
    data: mediaFile
  })
}