# Use the official Bun runtime as base image
FROM oven/bun:1-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies using Bun
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
# This will use the bun target as specified in your vite.config.ts
RUN bun run build

# Production image, copy all the files and run the application
FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 bunjs
RUN adduser --system --uid 1001 tanstack -G bunjs

# Copy the built application
COPY --from=builder --chown=tanstack:bunjs /app/.output ./.output
COPY --from=builder --chown=tanstack:bunjs /app/package.json ./package.json

USER tanstack

# Expose the port that the application runs on
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application using Bun
CMD ["bun", "run", ".output/server/index.mjs"]