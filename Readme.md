# Node.js Hello World with Docker

## Steps:
 1. Clone this repository
 2. Add .env file to root directory
 3. Add the following to .env file:
    ```
    PORT=5000
    DB_HOST="your_host"
    DB_USER="postgres"
    DB_PASSWORD="your_password"
    DB_NAME="your_db_name"
    ```
 4. Make sure you have docker installed. 
 5. Run the following command to build the image:
    ```
    docker build -t node-hello-world .
    ```
    This will build the image and tag it as `node-hello-world`.
 6. Run the following command to run the image:
    ```
    docker run -d -p 5000:5000 --name node-hello-world node-hello-world
    ```
    This will run the image on port 5000.
 7. Open http://localhost:5000 in your browser.
