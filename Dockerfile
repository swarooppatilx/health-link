# Base image
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files and install dependencies with pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy all the source files, including the src directory
COPY . .

# Ensure proper file permissions for the app directory
RUN chmod -R 755 /app

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js app (use "pnpm build" and "pnpm start" for production)
CMD ["pnpm", "dev"]
