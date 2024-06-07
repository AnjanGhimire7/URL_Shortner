# URl Shortner Application

This is a backend application for url Shortner. It provides functionalities for user to genrate the short url.

## Features

- User Register with fullName,UserName,Password,email
- User can login with Email and password
- user can genrate the shortner url after login

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication
- nanoid (for genrating 8 digit string)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AnjanGhimire7/URL_Shortner.git
   ```

# API Endpoints

## Authentication

### Regisering User

- `POST /api/v1/users/register`: Register a user

### Login

- `POST /api/v1/users/login`: Login a users

### Logout

- `POST /api/v1/users/logout`: Logout a user

### RefreshaccessToken

- `POST /api/v1/users/refreshAToken`: refresh access token

### Generating shortId

`POST /api/v1/url/`: generating short id taking original url (note: only login users can access it)

### Getting url

`GET /api/v1/url/:shortId`: getting the original url using shortId

### Analytics

`GET /api/v1/url/analytics/:shortId`: getting the analytics of the url like totalclicks on url
