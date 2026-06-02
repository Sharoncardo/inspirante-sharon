College Event Registration Portal

Overview

A full-stack web application that allows college administrators to manage events and students to register for upcoming events.

Features

#Admin

- Login using hardcoded credentials
- Create new events
- View all events
- View registration counts
- View event fill percentages
- View registered students

#Student

- Login using hardcoded credentials
- Browse upcoming events
- Register for events
- Cannot register twice for the same event
- Cannot register for full events
- View personal registrations

#Tech Stack

#Frontend

- React.js
- Vite
- CSS

#Backend

- Node.js
- Express.js

#Database

- MongoDB
- Mongoose

#Installation

#Frontend Setup

1. Install dependencies

npm install

2. Start the frontend

npm run dev

3. Open in browser

http://localhost:5173

#Backend Setup

1. Install dependencies

npm install

2. Start the backend server

node server.js

3. Backend runs on

http://localhost:3000

#Environment Variables

Create a ".env" file and add:

MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=my_jwt_secret_here

#API Routes

Events

- GET /api/events
- POST /api/events
- GET /api/events/:id

#Registrations

- GET /api/register
- POST /api/register
- GET /api/register/:studentName

#Sample Credentials

Admin

Username: admin

Password: inspirante2026

Students

Password for all students:

student123

#Sample usernames:

- asha.rao
- ravi.shetty
- meera.nair
- kiran.bhat
- divya.kamath
- suresh.pai
- ananya.hegde
- rohan.shenoy
- nisha.prabhu
- tejas.mallya
- priya.bangera

#Database Collections

Events

- name
- date
- venue
- capacity
- registrations

#Registrations

- studentName
- eventName

#Event Capacity Rules

- Duplicate registrations are prevented.
- Full events are marked as Full.
- Registration is disabled when capacity is reached.
- Event fill percentage is displayed on the admin dashboard.

#Known Issues

- Authentication uses hardcoded credentials.
- Basic UI styling.
- No password encryption.

Author

Sharon Cardoza