import { NextApiHandler } from 'next';

const routeHandler: NextApiHandler = (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default routeHandler;
