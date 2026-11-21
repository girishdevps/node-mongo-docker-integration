# Node.js + MongoDB Docker Integration

## Project Overview
A two-tier application built with Node.js and MongoDB, containerized using Docker. The application and database run in separate containers and communicate through a custom Docker bridge network.

## Architecture
- **Node.js + Express:** REST API
- **MongoDB:** Database
- **Docker:** Containerization
- **Docker Bridge Network:** Container-to-container communication
- **Docker Volume:** Persistent database storage
- **Environment Variables:** Configurable MongoDB connection

## Architecture Flow
Client → Node.js Container → MongoDB Container

## Technologies Used
- Linux (RHEL)
- Docker
- Node.js
- Express.js
- MongoDB
- Docker Networking
- Docker Volumes

## Features
- REST API to create users
- REST API to retrieve users
- Node.js and MongoDB running in separate containers
- Custom Docker network for service communication
- Persistent MongoDB storage using Docker volume
- MongoDB connection configured through environment variables

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check application status |
| POST | `/users` | Create a user |
| GET | `/users` | Retrieve all users |

## Docker Components
- Custom network: `devops-net`
- MongoDB container: `mongo`
- Node.js container: `node-mongo-app`
- Persistent volume: `mongodb_data`

## Learning Outcomes
- Built a Docker image for a Node.js application.
- Deployed Node.js and MongoDB in separate containers.
- Configured container communication using a custom bridge network.
- Used Docker DNS for service discovery.
- Implemented database persistence using a Docker volume.
- Configured application connectivity using environment variables.
- Tested REST API endpoints using curl.

## Future Improvements
- Docker Compose
- Kubernetes deployment
- AWS deployment
- CI/CD pipeline
- Monitoring and logging

---
**Project Status:** Completed Docker integration and testing.

