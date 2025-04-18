FROM node:18-slim

# Set environment variable to skip Chromium download
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Install Chromium and dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    libglib2.0-0 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdbus-1-3 \
    libxshmfence1 \
    fonts-liberation \
    ca-certificates \
    wget \
    xdg-utils \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy scraper code
COPY scrape.js .

# Set Chromium path for Puppeteer
ENV CHROME_PATH=/usr/bin/chromium

# Default command
CMD ["node", "scrape.js"]

