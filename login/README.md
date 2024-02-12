### Just a Second Connector.
Hello there! Welcome to Just a Second Connector, a transformative project initiated by Transformative Workforce Academy (TWA). This platform addresses the unique needs of individuals associated with the Criminal Justice system seeking employment opportunities, connecting them with employers willing to provide a second chance. TWA currently relies on Google Docs to track both job seekers and employers, necessitating a more efficient system for matching the specific requirements of both groups. Just a Second Connector streamlines this process by providing a centralized platform for job seeker connections and employer matching. Our goal is to replace the existing Google Docs system, offering a comprehensive solution that facilitates the seamless tracking of progress for both job seekers and employers. Join us in this endeavor to make a positive impact and provide meaningful opportunities for those seeking a fresh start in the workforce.

## Current Progress:
In our ongoing development of Just a Second Connector, we've achieved our first milestone, laying a foundation for the platform. The initial focus has been on user authentication, and we are proud to announce the successful implementation of a login and signup page. Using the power of React Testing Library, we tested the functionality to ensure everything is in place. The login and signup page enables users to register with the platform, employing validation checks for credentials to guarantee secure login procedures. Our testing suite encompasses various scenarios, including checking for the display of an alert in case of invalid credentials, handling both successful and unsuccessful login attempts, and verifying the proper storage of user data in local storage.
As part of this initial phase, we've prioritized foundational elements, with further features and functionalities in the pipeline. While more enhancements are on the horizon, this progress signifies a robust start toward the ultimate goal of connecting individuals involved with the Criminal Justice system to employment opportunities, fostering a supportive environment for both job seekers and compassionate employers. We encourage users, developers, and contributors to explore and test the existing functionalities, providing valuable feedback as we collectively shape the future of Just a Second Connector. Your engagement is crucial as we work towards creating a platform that not only meets but exceeds the expectations of the community. Thank you for being part of this transformative journey.
## Installation:
To experience the current progress locally, follow these steps:
Clone the repository: https://github.com/slu-csci-5030/Just-a-second-connector.git
Install dependencies: npm install

## Commands:
To run the project: npm start
For testing: npm test / npm run test


## Tools:
React


Create a reasonable unit test for a component in your system. Your unit test should:
use the standard tooling your team has agreed on (33%),
React  
test some actual functionality for your system (33%),
Check if the alert for invalid credentials is displayed
Fill in the login form with invalid details
Fill in the login form with valid details
Fill in the registration form
Check if the user data is appended to local storage


and run only the component without running the entire service or app (33%).
We are running only the npm test to run our login page as well as the test cases
In your submission
Identify the testing framework your team has agreed on by name
React testing library


Identify the requirement, as defined in a GitHub Issue, by linking to the relevant issue.
Issues open and closed


Include instructions in the README or ContributorGuide for how to run the test without running the entire service or app.
Instruction to run the test without running the main service:
      Command: npm run test 
	
Be in the form of a Pull Request to your team's repository.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

