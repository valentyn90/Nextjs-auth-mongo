import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { CustomError } from 'backend/errors/custom-error';

export const errorHandler = (nextApiHandler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    await nextApiHandler(req, res);
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).json({ errors: err.serializeErrors() });
    }
    res.status(500).json({
      errors: [{ message: err.message }],
    });
  }
};
