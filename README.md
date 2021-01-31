<h1 align="center">
    <img alt="logo Mochi" src="logo-purplehorizontal.png" />
    <br>
    Mochi Aptitude Test
    <br>
</h1>

<h4 align="center">
Welcome to your aptitude test
</h4>
<p align="center">
&nbsp;&nbsp;
  <a href="#test-objective">Test objective</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-use">How use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How test</a>&nbsp;&nbsp;
</p>

## :wrench: Test Objective

<p>
This test aims to measure the candidate's technical capabilities and find out if they are in accordance with the developer profile that Mochi is looking for.

Your object is to test the component in the following paths 
- **mochi-test\components\shared\form\search-location-input**
- **modules\hooks** (All the hooks)
</p>

<br>

## :rocket: Technologies

This project was developed with the following technologies:

- [Next](https://nextjs.org/)
- [Ramda](https://ramdajs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [styled-components](https://www.styled-components.com/)
- [React-Icons](https://react-icons.netlify.com/)
- [VS Code][vc] and [ESLint][vceslint]

# To make a commit must be used a following rule:

`git commit -m "*type*: commit-message"`

- Where type is: [ `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test` ]
- And commit-message must be written in lower-case.

## Coding Conventions

- Interfaces for React Components have to be named (ComponentName)Props
  - e.g - Component `const App = ({text}) => <div>{text}</div>`
  - e.g - Interface `interface AppProps { text: string }`
- All other Interfaces should be CamelCase version of the name of the function or object
- Only add the prefix I if there is no other Choice
  - e.g - Function `addStyles() => {}`
  - e.g - Interface `interface AddStyles {}`
- Do not use the type any, opt for unknown.
- Limit the use of classes but instead opt for pure single purpose functions.
- Rely on composability to deal with complexity
- Prefer Async/Await syntax over .chain with then.catch
- Separation of concerns in React
  - Defer logic to hooks and HOCs
  - Defer async logic to middlewares such as redux-saga
  - Global state should be stored in redux
  - Page state should be stored in a context API
  - Local state should be stored in component
  - Keep components as simple as possible so they can be more modular
- Rely on utility functions by ramda for immutability, composability and clarity

  ```ts
  // BAD PRACTICE
  // Mutates the object
  const obj = { removeMe: '😭', keepMe: '😊' };
  obj.removeMe = null;
  delete obj.removeMe;
  // obj === { keepMe: '😊' }

  // BETTER BUT NOT IDEAL
  // Immutable but not declarative
  // Pollutes the execution context with variable key
  const objTwo = { removeMe: '😭', keepMe: '😊' };
  const { removeMe, ...updatedObj } = objTwo;
  // objTwo === { removeMe: '😭', keepMe: '😊' }
  // updatedObj = { keepMe: '😊' }

  // IDEAL
  // Immutable and declarative
  const objThree = { removeMe: '😭', keepMe: '😊' };
  const removeKey = R.omit(['removeMe']);
  const updatedObjTwo = removeKey(objThree);
  // objThree === { removeMe: '😭', keepMe: '😊' }
  // updatedObjTwo = { keepMe: '😊' }
  ```

- Immutability
- Pure single purpose functions
- Composability

## :warning: Prerequisites

In order to use google maps you will need one that you will have to generate on google maps. then it will add to the .env file with key name **NEXT_PUBLIC_GOOGLE_API_KEY=my-google-key**

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v14][nodejs] or higher installed on your computer. From your command line:

## :information_source: How To Use

```bash
# Clone this repository
$ git clone https://github.com/Nicasiomarques/mochi-test

# how to install dependencies
$ npm install

# Go into the repository
$ cd mochi-test

# how to run Aplication
$ npm run dev

```

## :hammer_and_wrench: How To Test

The project is already configured with the necessary resources to carry out the tests:

```bash
# Go into the repository
$ cd mochi-test

# how to run all tests
$ npm test

# how to run a specific test
$ npm test components/shared/form/search-location-input/file-name.test.tsx
```

## All Rights Reserved for Mochi Noir, LDA

[nodejs]: https://nodejs.org/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
