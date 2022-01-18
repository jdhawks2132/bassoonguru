![Bassoon-Guru-Logo](https://github.com/jdhawks2132/bassoonguru/blob/main/BGBanner.png)

# BassoonGuru

# Live Deployment Link

- [BassoonGuru](https://bassoonguru.herokuapp.com/)

## Learning Goals

The purpose of this application was to bring together the skills and knowledge aquired during the four previous phases of Flatiron School's Software Development curriculum. The project features a robust frontend utilizing React JS and the backend was created with Ruby on Rails. Required features of the project include user authorization, front and backend routing, and a technology or library you learned on your own. The library I learned outside of Flatiron's curriculum was Redux.

## Development Team
- [Joshua Hawks](http://www.linkedin.com/in/joshuahawks1)

## Purpose

I wanted to develop an online learning application that, though outwardly branded for music/ the bassoon, could be adapted for any video based curriculum library.

## Project Planning

- Frontend: 
  - The user arrives at a landing page offering login/signin options
  - If the user session is still persisting, user is automatically sent to the the course dashboard
  - Signup option if user is new to the the site
  - Dashboard displays an index of lessons to select from
  - Users can click on a lesson for more details and are given an option to enroll in a lesson.
  - User has access to their "My Lessons" dashboard which displays personalized enrollment.
  - If a user has no enrollments, a default message is shown with a button to navigate to the lessons index. 
  - When a user clicks on an enrolled class, they can either remove the enrollment or proceed to the curriculum dashboard. 
  - The curriculum dashboard contains a library of YouTube videos specific to that lesson.
  - User may leave chat messages in the curriculum dashboard for the admin and other students.
  - If a message belongs to the logged in user, the user may also delete their message.
  - Logging out ends the session and returns the user to the login screen.

- Backend: 
  - Utilizes Ruby on Rails
  - Follows RESTful routing conventions
  - Allows for user authentication and authorization using sessions
  - Namespaced api routes to avoid conflict with frontend routes

- Deployment:
  - Deployed as a monorepo on Heroku
  
