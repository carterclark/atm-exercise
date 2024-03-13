
# Building and running locally
- have node version 18.7.0+ installed
- cd to project directory and enter `npm install`
- Create `.env` in root directory with following attributes
``` 
POSTGRES_USER='user'
POSTGRES_PASSWORD='password'
POSTGRES_DB='postgres-db'
PGDATA='/var/lib/postgresql/data/pgdata'
  ```
- enter `npm run dev`
- Go to http://localhost:3000
