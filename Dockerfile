# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install system dependencies
RUN apt-get update && apt-get install -y python3-distutils

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on (default for React is 3000)
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
