🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline, feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 5️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# GitStats

You can find the deployed project at [https://gitstats.dev](https://gitstats.dev).

## 4️⃣ Contributors

🚫Add contributor info below, make sure add images and edit the social links for each member. Add to or delete these place-holders as needed

|                                       [Student 1](https://github.com/)                                        |                                       [Student 2](https://github.com/)                                        |                                       [Student 3](https://github.com/)                                        |                                       [Student 4](https://github.com/)                                        |                                       [Student 5](https://github.com/)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/honda0306)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wvandolah)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>
<br>

🚫 4️⃣ Optional examples of using images with links for your tech stack, make sure to change these to fit your project

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

🚫 more info on using badges [here](https://github.com/badges/shields)

## Project Overview

[Trello Board](https://trello.com/b/8y6kkRLr/labspt7-github-commit-analysis)

[Product Canvas](https://www.notion.so/2c1915a7a213438db3798cb86028bde8?v=20853bb7fd2a49e288a9f87efffc10ce)

[UX Design files](https://www.figma.com/file/0um1GtskoFJk0pWFHoC7Bt/GitHub_Commit_Analyzer?node-id=3363%3A629)

### Description:

People interact with repositories all the time, but there is no visibility into how it correlates to the "success" of the repositories. There are plenty of articles out there outlining GitHub "best practices", but the vast majority seem to be subjective, based on intuition and experience, not evidence-based.

Our Mission is to make open source a *better experience* for developers and maintainers by committing to actionable insights for project success.

### 4️⃣ Key Features

-    feature one
-    feature two
-    feature three
-    feature four
-    feature five

## Tech Stack

### Front end built using:

- *Framework:* [React](https://reactjs.org/)
  > Our web team is most comfortable with this framework and it's available toolset. We feel React is well suited to the type of webapp we want to build and we can move from an SPA to a PWA with relative ease to potentially allow some offline use.
- *State Management:*
  - [Redux](https://redux.js.org/) for high-frequency state change management
    > Most comfortable for our web team and provides an immutable single source of truth built to be able to handle high-frequency updates.
  - [ReactContext](https://reactjs.org/docs/context.html) for low-frequency state change management
    > Built-in to React and quite useful for passing state between multiple components but not suited to high-frequency updates.
- *Data Visualization:* [ReactD3](https://react-d3-library.github.io/)
  > Robust library well suited to our purposes. Although there may be a small learning curve for what we aim to provide, we believe the time spent therein will be fruitful.
- *Styling Library:* [Primer Components](https://primer.style/components/)
  > Easy to use styling library provided by GitHub that allows us to make sure our product feels familiar to our users.

#### Front end deployed to `Heroku`

### [Back end](https://github.com/Lambda-School-Labs/github-commit-analysis-be) built using:

- *Database:* [PostgreSQL](https://www.postgresql.org/)
  > The standard to follow per the Labs Engineering Standards.
- *API Framework:* [GraphQL](https://graphql.org/)
  > Although this will carry a slight learning curve for our team we believe that our product is best suited to this style. Beyond that, we also plan on using GitHubs v4 GraphQL API so we aim to have style consistency through our project.
- *RunTime:* [NodeJS](https://nodejs.org/)
  > We feel that product quality will be improved through the sharing of common knowledge and reusable components.
- *Web Application Framework:* [Express](https://expressjs.com/)
  > Minimal and Flexible. We feel that it provides a robust set of features that will support our development process.
  
#### Back end deployed to `Heroku`

# APIs

## 2️⃣ Authentication API here

🚫Replace text below with a description of the API

Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things A little happy sunlight shining through there. Let all these little things happen. Don't fight them. Learn to use them. Even the worst thing we can do here is good.

## 2️⃣ Payment API here

🚫Replace text below with a description of the API

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

When you do it your way you can go anywhere you choose. Let your heart take you to wherever you want to be. If I paint something, I don't want to have to explain what it is. A tree needs to be your friend if you're going to paint him. That's a son of a gun of a cloud. Even the worst thing we can do here is good.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

Volunteering your time; it pays you and your whole community fantastic dividends. Maybe there's a happy little waterfall happening over here. You can spend all day playing with mountains. We don't have to be committed. We are just playing here. You have freedom here. The only guide is your heart. It's cold, but it's beautiful.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing

🚫Document what you used for testing and why

# 4️⃣ Installation Instructions

🚫explain how to install the required dependencies to get this project up and running with yarn and NPM

## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/github-commit-analysis-be/blob/master/README.md) for details on the backend of our project.
