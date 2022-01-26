# Build a Harry Potter API with Node.js, Express.js, and Dynamo DB

Create your own Harry Potter API. We’ll use Dynamo DB as our database and then Node and Express for our server. We’ll grab Harry Potter character data from an existing API and copy it over to our own Dynamo DB.

- CRUD routes in Node/Express
- Promise.all for optimizing async requests
- Testing API endpoints in Postman

from video by James Q Quick

## Usage

Run `npm install`.

Create a `.env` file and populate it with the keys in the `.env.example` file and add your AWS credentials.
If you populate AWS_ENDPOINT, it will be used (e.g. `AWS_ENDPOINT=http://localhost:8000` for a local database).

Run `node seed.js` to populate the table with the Harry Potter API data [https://hp-api.herokuapp.com].

Run `node index.js` once and use the following routes for the API:

- GET /characters -> Get all characters in the table
- GET /characters/:id (id is an int formatted as string) -> Get a single character in the table
- POST /characters -> Add a character in the table
- PUT /characters/:id (id is an int formatted as string) -> Update a character in the table
- DELETE /characters/:id (id is an int formatted as string) -> Delete a character in the table
