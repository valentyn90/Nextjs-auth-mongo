import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { CustomError } from 'backend/errors/custom-error';
import { ErrorResponse } from 'shared/interfaces';

export const errorHandler = (nextApiHandler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  let resErrors: ErrorResponse;
  try {
    await nextApiHandler(req, res);
  } catch (err) {
    if (err instanceof CustomError) {
      resErrors = { errors: err.serializeErrors() };
      return res.status(err.statusCode).json(resErrors);
    }
    resErrors = { errors: [{ message: err.message }] };
    res.status(500).json(resErrors);
  }
};
