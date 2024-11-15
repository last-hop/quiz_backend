# Specify the base image
FROM node:18.19.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 5000

# Define the command to run the application
CMD ["node", "index.js"]
