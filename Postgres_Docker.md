## Run postgres using docker:
1. Pull the image using 
```docker pull --platform linux/amd64 postgres```
  or 
```docker pull --platform linux/amd64 postgres:tag```  for specific version 
2. Run the image using `docker run -d -p 5432:5432 --name postgre-sql -e POSTGRES_PASSWORD=rohit postgres` , this will run the container with PostgreSQL username: `postgres` and password: `rohit`
3. Connect to the running container shell using `docker exec -it postgre-sql bash`.
4. Login to `psql` using `psql -U postgres -W`.
It will ask password, enter rohit .
5. Create a database using `CREATE DATABASE rohit;`.
6. Use `\l` to check list all the databases.
7. Connect to the new database using `\c rohit` , it will ask for password, using the previously used rohit  as password.
8. Crate table using `create table users ( name varchar(200) PRIMARY KEY, dateOfBirth varchar(10), active boolean );`, list the table using `\d`.
9. Insert some data using `INSERT INTO users (name, dateOfBirth, active) values( 'Deepak', '02-02-1998', true);` .
10. Check all the records in the users  table using `SELECT * from users;` query.
