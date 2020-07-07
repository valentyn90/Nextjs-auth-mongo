import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { ObjectSchema, ValidationError } from 'yup';
import { RequestValidationError } from 'backend/errors/request-validation-error';

export const validateRequest = (validationSchema: ObjectSchema) => (
  nextApiHandler: NextApiHandler,
): NextApiHandler => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await validationSchema.validate(req.body, { abortEarly: false });
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new RequestValidationError(err);
    }
    throw err;
  }
  await nextApiHandler(req, res);
};
