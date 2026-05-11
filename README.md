# St. Song

## Project Overview

This project is a full-stack music search application that integrates with Spotify's REST Web API. The application allows users to authenticate through Spotify, search for music-related data, and view results for tracks, albums, and artists.

## Features and Functionality

Planned final features include:

- Spotify API authentication
- JWT/token handling for Spotify API access
- Login screen when no valid token is available
- Automatic redirect to search page when a valid token exists
- Search functionality for Spotify content
- Track, album, and artist result display
- “No results” message when no search has been performed or no results are returned
- Result thumbnails linking to the Spotify web player
- Decoupled frontend and backend applications
- Protected secret credentials using environment variables
- 404 error page

## Tech Stack

### Backend
- Node.js
- Express.js
- dotenv
- Spotify REST Web API

### Frontend
- React
- Vite 
- Responsive UI/UX design
- Spotify Search interface

### Planned Pages: 
- Login Page
- Spotify Authentication Page
- Home Page
- collection/album page (for songs saved or liked)
- 404 Error Page

### Database:
- MongoDB Atlas
- Mongoose



## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Jason16803/spotifyRestful-API-FS-Project.git
cd spotifyRestful-API-FS-Project
```

### 2. Install dependencies
```npm install```

### 3. Create a .env file and set the proper config up
```
PORT=3001
MONGO_URI=your_mongodb_atlas_connection_string
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3001/auth/callback
JWT_SECRET=your_jwt_secret
```
### 4. Start the dev server:
``` npm run dev ```

### 5. Open the local API:
http://localhost:3001
http://localhost:3001/health (needs to return status: ok)


## Security Notes

Make sure the following files are included in `.gitignore`:

```txt
node_modules
.env
```

Create a `.env.example` file containing:

```env
PORT=3001
MONGO_URI=
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REDIRECT_URI=http://localhost:3001/auth/callback
JWT_SECRET=
```