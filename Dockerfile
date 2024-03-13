# Base image
FROM node:16-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# # Run tests
# RUN CI=true npm test

# Build app
RUN npm run build

# Final image
FROM nginx:1.19.0

# Copy build files
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
