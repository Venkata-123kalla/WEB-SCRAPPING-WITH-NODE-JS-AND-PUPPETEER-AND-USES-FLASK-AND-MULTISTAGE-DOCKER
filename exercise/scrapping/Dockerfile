# Use a slim Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install Flask
RUN pip install flask

# Copy server code and scraped data
COPY server.py .
COPY scraped_data.json .

# Expose port
EXPOSE 5000

# Run the Flask app
CMD ["python", "server.py"]

