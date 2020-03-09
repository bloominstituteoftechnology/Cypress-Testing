# Module Challenge: Cypress Testing

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## Single Page Applications

## Cypress.io

## Objectives

- explain what end-to-end testing is and its importance
- use the Cypress GUI to write tests and interact with Elements
- use Cypress to test controlled input
- run all tests in without any UI

## Introduction

In this challenge you will write tests with Cypress to debug your forms app from the last objective.

## Instructions

### Step 1: Set up Project
## Project Set Up

This project is a continuation of the work you have done previously.

- [ ] CD into your old project
- [ ] Continue to make changes and push to the same branch
- [ ] Install Cypress with npm.
      `npm install cypress --save-dev`
- [ ] run `npx cypress open`, After a moment, the Cypress Test Runner will launch.
- [ ] Assuming you’ve successfully installed the Test Runner and opened the Cypress app, 
      now it’s time to write our first test. We’re going to:
      1.) in your code editor locate the integration folder at cypress/integration
      2.) Create a form_test.js file.
      2.) Watch the Cypress Test Runner update the list of specs.
      *Add image here*
      3.) Launch Cypress in interactive mode.
      *Add image here*
      
**Note** 
You will see an error that says "No tests found in your file:" with your particular file path. This is because we have not written any tests yet. Now you will start writing tests. 

### Step 2: Write and Run Tests

In order to complete this challenge you will need to write and run the following tests. They do *not* need to pass, so long as the reasons they are failing is legitimate.

- [ ]  Set up a test that will get the `Name` input and type a name in it. 
- [ ]  Use an assertion to check if the text inputed contains the name you provided (Hint: use the .should assertion)
- [ ]  Set up a test that will get the `Email` input and type an email address in it. 
- [ ]  Set up a test that will get the `password` input and type a password in it. 
- [ ]  Set up a test that will check to see if a user can check the terms of service box
- [ ]  Set up a test that will check to see if a user can submit the form data
- [ ]  Set up a test that will check for form validation if an input is left empty

Whatever manner most effectively communicates the information (consider whether a specific sequence is required or if illustrating a clear visual hierarchy would be beneficial).

### Step 3: Stretch Goals

If you have time, write and run different tests based on common issues you have encountered working on this code for the past few days.

## FAQs

**What if not all of my tests pass?**

*Depending on the quality of your code from previous lessons, your tests might not pass. That is quite alright! The purpose of this project is to design tests that point out errors. As such, you just need to be sure that the tests are failing because of issues with your web page code, not issues with your test code.*

****

## Resources

📚 [Cypress Documentation](https://www.cypress.io/how-it-works/)

🤔 [Blog: Setting up Tests with Cypress](https://medium.com/better-practices/end-to-end-testing-with-cypress-bfcd59633f1a)


## Grading rubric

If you've prepared a grading rubric that will be used to evaluate the quality of a student's work on your module challenge assignment, include any instructions or relevant links below.

[Grading rubric](example)

[Module challenge grading rubric](https://www.notion.so/e7b32e56ebad4f57b3521efb886f4508)
