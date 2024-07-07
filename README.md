# This website is created by React + Vite

# Rate Students Performance

This project is built with Vite + React. It includes features for sign up, log in, and rating students' performance.The main users of this website are mentors. After creating an account, mentors can
generate reports on student performance by writing overall comments and scoring them based on 6 criteria.

## Project Structure

```

casual-job-platform/
├── dist/
├── node_modules/
├── public/
│ └── vite.svg
├── src/
│ ├── components/
│ │ ├── HomePage.jsx
│ │ ├── LogIn.jsx
│ │ ├── RateStudents.jsx
│ │ ├── RegistrationPage.jsx
│ │ └── SignUp.jsx
│ ├── context/
│ │ └── UserContext.jsx
│ ├── styles/
│ │ ├── App.css
│ │ ├── RegistrationPage.css
│ │ └── index.css
│ ├── App.jsx
│ └── main.jsx
├── .eslint.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

## Installation

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies
3. Start the development server

```sh
git clone <repository-url>
cd casual-job-platform
npm install
npm run dev
```

## Features

- **Home Page**: Entry point of the application.
- **Registration Page**: Allows users to sign up or log in.
- **Rate Students Page**: Allows mentors to rate students' performance.

## Components

### HomePage.jsx

The `HomePage.jsx` component serves as the entry point of the application and provides a button to navigate to the registration page.

### SignUp.jsx

The `SignUp.jsx` component allows users to create a new account. After a successful sign-up, users are navigated to the rate students page.

### LogIn.jsx

The `LogIn.jsx` component allows users to log in with an existing account. After a successful login, users are navigated to the rate students page.

### RateStudents.jsx

The `RateStudents.jsx` component allows mentors to rate students' performance on various criteria.

## Context

### UserContext.jsx

The `UserContext.jsx` file provides context for managing user information across the application.

## Styling

### styles/

This directory contains CSS files for styling the application components.

## Running Tests

Currently, there are no tests included in the project.

## Contributing

Now the front end of the website is working. But I'm still working on
back end and database.
Shaun (Shangmin Chi)

## License

This project is licensed under the MIT License, HMR and some ESLint rules.

```

```
