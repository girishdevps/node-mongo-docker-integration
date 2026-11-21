# 🐦 Flappy Bird – Dockerized Node.js & MongoDB

A Flappy Bird browser game built using HTML, CSS, and JavaScript, with a Node.js and Express backend and MongoDB for storing player scores. The application is containerized using Docker, with separate containers for the game application and database.

## 🚀 Project Overview

This project demonstrates how to deploy a web-based game using Docker containers, connect a Node.js application to MongoDB using Docker networking, and persist game scores in MongoDB.

Players control a bird, navigate through pipes, and their scores are stored in MongoDB when the game ends.

## 🏗️ Architecture

```text
                Player / Browser
                      |
                      | HTTP :3000
                      v
              +------------------+
              |    flappyapp     |
              | Node.js / Express|
              +------------------+
                      |
               Docker Network
                 devops-net
                      |
                      v
              +------------------+
              |      mongob      |
              |     MongoDB      |
              +------------------+
                      |
                      v
                mongodb_data
                 (Volume)
```

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Networking
- Docker Volumes

## 📦 Docker Components

| Component | Container | Purpose |
|---|---|---|
| Game Application | `flappyapp` | Hosts the game and APIs |
| Database | `mongob` | Stores game scores |
| Docker Network | `devops-net` | Container-to-container communication |
| Docker Volume | `mongodb_data` | Persistent MongoDB data |

## ⚙️ Features

- Browser-based Flappy Bird game
- Node.js backend using Express
- MongoDB score storage
- REST API for saving scores
- Leaderboard API
- Dockerized application
- Separate application and database containers
- Docker bridge networking
- Persistent database storage using Docker volumes

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Opens the game |
| POST | `/score` | Saves a game score |
| GET | `/leaderboard` | Returns the top 10 scores |
| POST | `/users` | Creates a user |

## 🐳 Deployment Using Docker

### 1. Create Docker Network

```bash
docker network create devops-net
```

### 2. Create MongoDB Container

```bash
docker run -itd \
--name mongob \
--network devops-net \
-v mongodb_data:/data/db \
mongo
```

### 3. Build the Node.js Application Image

```bash
docker build -t flappybird:latest .
```

### 4. Run the Application Container

```bash
docker run -itd \
--name flappyapp \
--network devops-net \
-p 3000:3000 \
-e MONGO_URI=mongodb://mongob:27017/devops_project \
flappybird:latest
```

## 🌐 Access the Game

Open the game in your browser:

http://localhost:3000

## 🗄️ Verify MongoDB

Access MongoDB shell inside the container:

```bash
docker exec -it mongob mongosh
```

Select the database:

```javascript
use devops_project
```

View stored scores:

```javascript
db.scores.find().pretty()
```

View collections:

```javascript
show collections
```

Count stored scores:

```javascript
db.scores.countDocuments()
```

## 📊 Leaderboard API

Open:

http://localhost:3000/leaderboard

This API returns the top 10 scores sorted in descending order.

## 💾 Data Persistence

MongoDB data is stored using a Docker named volume:

```bash
-v mongodb_data:/data/db
```

The database data persists independently of the MongoDB container lifecycle, provided the volume is retained.

## 🔍 Useful Docker Commands

### View running containers

```bash
docker ps
```

### View container logs

```bash
docker logs flappyapp
docker logs mongob
```

### Restart the application

```bash
docker restart flappyapp
```

### Restart MongoDB

```bash
docker restart mongob
```

### Inspect Docker network

```bash
docker network inspect devops-net
```

### Inspect volume

```bash
docker volume inspect mongodb_data
```

## 🎯 Learning Outcomes

- Containerizing a Node.js application using Docker
- Running MongoDB in a separate Docker container
- Connecting containers using Docker bridge networking
- Using Docker DNS for service discovery
- Managing MongoDB persistent storage using named volumes
- Building and running Docker images
- Troubleshooting port conflicts and container connectivity
- Working with REST APIs and database integration

## 🔮 Future Improvements

- Display leaderboard inside the game
- Docker Compose deployment
- CI/CD automation using GitHub Actions
- Cloud deployment on AWS
- Monitoring and logging

---

Built as a hands-on Docker and DevOps project.

