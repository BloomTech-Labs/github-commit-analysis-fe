# GitStats

You can find the deployed project [HERE](https://commit-analysis.herokuapp.com/).

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![Deploy Vendor](https://img.shields.io/badge/deployed_through-Heroku-7056bf.svg)
![CI](https://github.com/Lambda-School-Labs/github-commit-analysis-fe/workflows/CI/badge.svg)
<br />
[![Maintainability](https://api.codeclimate.com/v1/badges/f3628f408097598f5a83/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/github-commit-analysis-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f3628f408097598f5a83/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/github-commit-analysis-fe/test_coverage)
<br />
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![React](https://img.shields.io/badge/react-v16.12.0-blue.svg)

## list of links and resources
https://docs.google.com/document/d/1zncksxCLfrR-m23zvb7jucV0p-_j_gzlHv1ofJPmuW8/edit?usp=sharing

## Contributors LABSPT 11
### Full Stack Web Developers
Matthew Orth
slack: @Matthew Orth
github: https://github.com/mattorth

Loralie Flint
slack: @Laflint92
github: https://github.com/LoralieFlint

Heber Gonzalez
slack: @Heber
github: https://github.com/hebergonza719

### Data Science
Grant Wylie
slack: @J
github: https://github.com/iesous-kurios

Guillermo Arria-Devoe
slack: @Guillermo Arria-Devoe
github: https://github.com/arriadevoe

Nicholas George
slack: @Nicholas George
github: https://github.com/npgeorge

### Team Lead
Farid Hamida
slack: @Farid Hamida
email: farid-hamida@lambdastudents.com 

### Section Lead
Jacob Prudent
slack: @Jacob Prudent
email: jacob-prudent@lambdastudents.com 

### engineering and product manager
Derek Peters
slack: @Derek
email: derek.peters@lambdaschool.com 


## Contributors LABS PT 7

|                                                                                          [Dakota Pope](https://github.com/Dpgofast)                                                                                          |                                                                                       [Elisabeth Shah](https://github.com/ElisabethShah)                                                                                        |                                                                                         [Gwen Purcell](https://github.com/GwenStacey)                                                                                          |                                                    [Martin Lehman](https://github.com/martinclehman)                                                     |                                                                                     [Eric SarragaLugo](https://github.com/ericlugo)                                                                                     |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                          Team Lead                                                                                                           |                                                                                                          Data Science                                                                                                           |                                                                                                          Data Science                                                                                                          |                                                                       Data Science                                                                       |                                                                                               Full-Stack Web Development                                                                                                |
|                                                                   [<img src="contributors/dakota_pope.jpg" width = "200" />](https://github.com/Dpgofast)                                                                    |                                                                 [<img src="contributors/elisabeth_shah.jpg" width = "200" />](https://github.com/ElisabethShah)                                                                 |                                                                   [<img src="contributors/gwen_purcell.jpg" width = "200" />](https://github.com/GwenStacey)                                                                   | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/martinclehman) |                                                                  [<img src="contributors/eric_lugo.jpg" width = "200" />](https://github.com/ericlugo)                                                                  |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Dpgofast) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/dakota-pope-116414176/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ElisabethShah) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/elisabeth-dawn-shah/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/GwenStacey) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gwen-purcell-9a6b3698/) |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/martinclehman)                                | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ericlugo) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/eric-sarragalugo/) |

## Project Overview

> [Trello Board](https://trello.com/b/8y6kkRLr/labspt7-github-commit-analysis) <br /> [Product Canvas](https://www.notion.so/2c1915a7a213438db3798cb86028bde8?v=20853bb7fd2a49e288a9f87efffc10ce) <br /> [UX Design files](https://www.figma.com/file/0um1GtskoFJk0pWFHoC7Bt/GitHub_Commit_Analyzer?node-id=3363%3A629)

### Description:

People interact with repositories all the time, but there is no visibility into how it correlates to the "success" of the repositories. There are plenty of articles out there outlining GitHub "best practices", but the vast majority seem to be subjective, based on intuition and experience, not evidence-based.

Our Mission is to make open source a _better experience_ for developers and maintainers by committing to actionable insights for project success.

### Key Features

- Social SignIn with GitHub
- Automatic Account Sync
- Easy Repo Selection
- Easy Repo Search

## Tech Stack

### Front end built using:

- _Framework:_ [`React`](https://reactjs.org/)
  > Our web team is most comfortable with this framework and it's available toolset. We feel React is well suited to the type of webapp we want to build and we can move from an SPA to a PWA with relative ease to potentially allow some offline use.
- _Low-Frequency State Management:_ [`React's ContextAPI`](https://reactjs.org/docs/context.html)
  > Built-in to React and quite useful for passing state between multiple components but not suited to high-frequency updates.
- _Styling Library:_ [`Primer Components`](https://primer.style/components/)
  > Easy to use styling library provided by GitHub that allows us to make sure our product feels familiar to our users.

#### Front end deployed to `Heroku`

### [Back end](https://github.com/Lambda-School-Labs/github-commit-analysis-be) built using:

- _Database:_ [`PostgreSQL`](https://www.postgresql.org/)
  > The standard to follow per the Labs Engineering Standards.
- _API Framework:_ REST
  > Although we are retrieving information from GitHub's v4 GraphQL API, internal endpoints were built as a RESTful API to keep within scope.
- _RunTime:_ [`NodeJS`](https://nodejs.org/)
  > We feel that product quality will be improved through the sharing of common knowledge and reusable components.
- _Web Application Framework:_ [`Express`](https://expressjs.com/)

  > Minimal and Flexible. We feel that it provides a robust set of features that will support our development process.

#### Back end deployed to `Heroku`

# APIs

## Authentication API here

Custom Social SignIn and Authentication with Passport JS on Node/Express.

- Redirect to `${process.env.REACT_APP_BACKEND_URL}/auth/github` to initiate Authentication process.
- User must authorize sign in through GitHub.
- Passport JS will grab code and use it to verify and obtain token which will be returned to front-end.

## [GitHub GraphQL API v4](https://developer.github.com/v4/)

Main data source for our app. Will provide all of the base information that the app will display.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_ENV - used during Sentry initialization to decide wether to initialize or not
    *  REACT_APP_VERSION - used during Sentry initialization for prompt
    *  REACT_APP_NAME - used during Sentry initialization for prompt
    *  REACT_APP_SENTRY_DSN - used for reporting
    *  REACT_APP_BACKEND_URL - centralized link location

# 4️⃣ Testing

🚫Document what you used for testing and why

# Installation Instructions

To initialize this project simply run:

```bash
$ npm i
```

or

```bash
$ yarn
```

## Other Scripts

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "coverage": "npm run test -- --coverage --watchAll=false",
    "eject": "react-scripts eject"
    },
```

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

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
