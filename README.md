## This is a [Next.js](https://nextjs.org/) full stack project:

- serverside rendering;
- serverless [`api-routes`](https://nextjs.org/docs/api-routes/introduction);
- JWT;
- Redux;
- Node.js MongoDB driver;
- Jest

## Online

https://nextjs-auth-mongo.vercel.app

## Run on your machine

### Add `.env.local` file with secrets into the root directory:

```
MONGO_URI=
DB_NAME=
JWT_KEY=
TOKEN_EXPIRES_IN=
```

for example:

```
MONGO_URI=mongodb+srv://user:password@clusterblog-5r0aw.mongodb.net/db_name?retryWrites=true&w=majority
DB_NAME=db_name
JWT_KEY=bitjnOIJ6522MINijnmMiom489vreb
TOKEN_EXPIRES_IN=1m
```
### Install dependencies:

```bash
npm i
# or
yarn
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
