# Node.js Hello World with Docker

## Steps:
 1. Clone this repository
 2. Make sure you have docker installed. 
 3. Run the following command to build the image:
    ```
    docker build -t node-hello-world .
    ```
    This will build the image and tag it as `node-hello-world`.
 4. Run the following command to run the image:
    ```
    docker run -d -p 5000:5000 --name node-hello-world node-hello-world
    ```
    This will run the image on port 5000.
 5. Open http://localhost:5000 in your browser.
