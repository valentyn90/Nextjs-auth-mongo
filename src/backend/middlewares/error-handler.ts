import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { CustomError } from '@/errors/custom-error';

export const errorHandler = (nextApiHandler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    await nextApiHandler(req, res);
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(500).send({
      errors: [{ message: 'Something went wrong' }],
    });
  }
};
