# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install project dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


# Bundle app source inside the Docker image
COPY . .


# The base image includes a default command to run the app, but we can specify it explicitly
CMD ["npm", "start"]
