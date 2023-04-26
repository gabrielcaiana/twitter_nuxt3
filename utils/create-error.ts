import { CreateError } from '~~/types/error'

export class CreateErrorImpl implements CreateError {
  constructor(
    public message: string,
    public stack: string,
    public statusCode: number,
    public statusMessage: string,
    public url: string
  ) {}
}
