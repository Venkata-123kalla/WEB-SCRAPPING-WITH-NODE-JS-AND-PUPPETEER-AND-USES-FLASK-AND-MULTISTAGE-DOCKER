# WEB-SCRAPPING-WITH-NODE-JS-AND-PUPPETEER-AND-USES-FLASK-AND-MULTISTAGE-DOCKER

# ✅ Task 1: Node.js Scraper with Puppeteer

### 🎯 Objective

Develop a Node.js application that:

- Accepts a dynamic URL (via an environment variable).
- Uses Puppeteer with a headless Chromium browser to load the page.
- Extracts key details such as:
  - The page title
  - The first `<h1>` heading (if available)
- Saves the extracted data in JSON format to `scraped_data.json`.

---

### 🛠️ Technologies Used

- **Node.js** – JavaScript runtime for writing backend logic.
- **Puppeteer** – A Node.js library for controlling headless Chromium.
- **Chromium** – The open-source version of Chrome, used for scraping.
- **Docker** – To containerize the scraper logic with all dependencies.

### create scrape.js file 
### create Docker image with the help of Dockerfile
- docker build -t image_name .

![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (722).png)

### After cretaing image then run the conatiner and will see the output
![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (723).png)

### The web-scrapping contents will be copied or extracted into the scraped_data.json file


# 🐍 Task 2 – Python Hosting Stage with Flask(mkdir exercise)

## 📌 Objective

Build a lightweight Python Flask server that reads the previously scraped **Amazon Best Sellers** data from `scraped_data.json` and exposes it through a **REST API**.

---

## 🛠️ Technologies Used

- **Python 3.10-slim** (Base Docker Image)
- **Flask** – Python micro web framework
- **Docker** – Multi-stage Docker build combining Node.js & Python environments

---

## steps to do the python hosting stage
- code will be available in the  git repo mkdir exercise
- Base image: Use a Python (e.g., python:3.10-slim) image.
- Copy the scraped_data.json from the previous stage
- Implement a simple Flask application (server.py) that: 
  - Reads the JSON file. 
  - Provides an HTTP endpoint (e.g., at /) that returns the scraped content as JSON. 
![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (727).png)

- Build Docker image and create conatiner and run it
![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (730).png)

- Expose port 5000 : http://<public-ip-ec2>:5000
![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (731).png)

 
# 📦 Task 3 – Multi-Stage Dockerfile for Web Scraping & Hosting

## 🎯 Objective

Combine the web scraping (Node.js + Puppeteer) and Flask-based API server into a single container using **multi-stage Docker builds**. The goal is to optimize the final image size by including only the essential runtime components.

---

## 🧰 Technologies Used

- **Node.js** – For web scraping using Puppeteer
- **Python 3.10-slim** – For hosting a Flask API
- **Docker** – Multi-stage builds to separate build and runtime environments

---

## 🔀 Multi-Stage Dockerfile

### Directory multi consists files that are used to complete the task
- The directory consists of 
- Dockerfile: A multi-stage Dockerfile that builds the complete application
- scrape.js: Node.js script that uses Puppeteer to scrape a given URL
- server.py: Python Flask application that serves the scraped data. 
- package.json: For Node dependencies

## create an image with the help of Dockerfile
- docker build --build-arg SCRAPE_URL="https://github.com" -t multi-scraper .
- docker run -p 5000:5000 multi-scraper


![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (735).png)

## if we want to see the scarped_data.json file we have to login to the conatiner witl the help of these commands
- docker start container-id && docker exec -it containner-id /bin/bash
![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (735).png)

## if we want to see the output of the flask server
- use http://<public-ip-ec2>:5000

![Screenshot](C:\Users\mahen\OneDrive\Pictures\Screenshots\Screenshot (739).png)



