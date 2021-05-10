This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This is a react + redux front end app, displaying a books list that is managed by 'pagination' and 'search' components.


## Tech stack

- react
- redux
- sass
- react-bootstrap

Packages used:

- "react"
- "react-redux"
- "react-router"
- "react-router-redux"
- "connected-react-router"
- "redux-thunk"
- "enzyme"
- "enzyme-adapter-react-16"
- "react-bootstrap"
- "reselect"


## Filter functionality

1. by default the data are fetched from the API, in a raw list.
2. user can type a 'string' on the search box, on the header, and enter
press 'enter' or click on the 'search' button, to submit.
3. a request to the API is made with the 'searchString'
4. the results list is populated on the screen with the corresponding pagination.

## Pagination functonality

Pagination component is a react bootstrap component, with custom functionality added by myself, so that can do the following:

1. Whatever page number is active, this reflects on the URL, like so:
'http://localhost:3000/books/23'
2. When there is a selected page, the we refresh the page, then the selected page is still active
3. There are shown, each time 5 pages, on the pagination.
4. There is a 'prev' button that request the previous results page.
5. There is a 'first' button that request the first results page.
6. There is a 'next' button that request the next results page.
7. There is a 'last' button that request the last results page.
8. As a last info on the right, is the available pages.


## Small demo


## Home Page

The home page is 'http://localhost:3000/books/:idx'.
![page not found](/readme_imgs/home-page.png)

## Page not found

The application gets as a main page the 'http://localhost:3000/books/:idx', so all the other urls, except for the 'http://localhost:3000/books', they redirect to page not found.

![page not found](/readme_imgs/page-not-found.png)

## Search results not found

The user can make a search by typing anything on the search box, which is on the header.
The search is submited by 'Enter' or by clicking on the 'search' button.
If there are no results returned by the server, a error message is displayed to the user.

![no results found](/readme_imgs/search-not-found.png)

## Folder structure

The structure of the project is this:
```
src/
  api/  <!-- request to the endpoint -->
  assets/
  components/  <!-- dump components -->
    footer/
    noResults/
    notFound/
    spinner/
  containers/ <!-- components that are connected with redux -->
    books-list/
    header/
    pagination/
  global/ <!-- global contansts -->
  pages/
    home.js
    home.scss
    notFound.js
  styles/
    main.scss
  app.js
  store.js
  .eslintrc
  package.json
  yarn.lock
  README.md
```

## Screenshots

![A quick visual gif of the home page, here](/readme_imgs/demo.gif)

![final outcome](/readme_imgs/home-page.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
