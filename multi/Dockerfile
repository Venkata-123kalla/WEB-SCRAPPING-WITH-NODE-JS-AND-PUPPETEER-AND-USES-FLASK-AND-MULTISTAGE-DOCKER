FROM node:18-slim  AS scraper

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
ARG SCRAPE_URL
ENV SCRAPE_URL=$SCRAPE_URL
RUN node scrape.js


#Python image

# Use a slim Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install Flask
RUN pip install flask

# Copy server code and scraped data
COPY server.py .
COPY --from=scraper /app/scraped_data.json .

# Expose port
EXPOSE 5000

# Run the Flask app
CMD ["python", "server.py"]
