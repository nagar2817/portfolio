# Use the official Node.js 20.9.0 runtime as a parent image
FROM node:20.9.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Gatsby site
RUN yarn build

# Expose port 8000 for the Gatsby development server
EXPOSE 8001

# Command to run the application
CMD ["yarn", "server"]