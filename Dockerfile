
# base image
FROM node:16-alpine

# create & set working directory
RUN mkdir -p /usr/src


# copy source files
COPY . /usr/src
WORKDIR /usr/src

# install dependencies
RUN npm install

# start app
CMD ["npm", "start"]
EXPOSE 5000