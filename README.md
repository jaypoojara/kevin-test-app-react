# Answers of the questions asked

**Javascript:**

- What is your favourite new javascript feature and why?
  - Optional Chaining - Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not 
  - Promise.allSettled - The Promise.allSettled method accepts an array of Promises and only resolves when all of them are settled 
  - Arrow functions 
    - less verbose 
    - this is picked up from the surroundings. Therefore, no need to do bind(this)

- Explain an interesting way in which you have used this javascript feature.
  - Optional Chaining - Here I just need to do userDetails?. givenName, otherwise in traditional way I might need to do if(userDetails) and do the coding. This really makes life a lot easy
```
const getContactName = userDetails => {
    if (isIOS()) {
        return userDetails?.givenName + `${' '}` + userDetails?.familyName;
    } else {
        return userDetails?.displayName;
    }
};
```
- Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)
  - less verbose
  - this is picked up from the surroundings. Therefore, no need to bind(this)

- What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’ 
  - Let’s say, `foo=0`, then 
    - myFunctionCall(++foo) will be like this myFunctionCall(1)
    - myFunctionCall(foo++) will be like this myFunctionCall(0)

- In your own words, explain what a javascript ‘class’ is and how it differs from a function.
  - There is technically no class, they're both just functions (Once the babel compiles the JS files it actually converts the class to function). Any function can be invoked as a constructor with the keyword new and the prototype property of that function is used for the object to inherit methods from. 
  - The difference that I can see is, in Class, you can do inheritance, private variables etc easily as compared to functions.

**CSS**
- In your own words, explain css specificity.
  - Basically when we assign multiple CSS rules to a single element, then the selector with the highest priority will win. 
  - Priority is like this 
    - Inline styles 
    - IDs 
    - Classes 
    - Elements
- In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?
  - only the ! important property value is to be applied to an element and all other declarations on the element are to be ignored 
  - important rule can be used to override other styling rules in CSS

- What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?
  - Flex 
    - Flexbox offers greater control over alignment and space distribution between items. Being one-dimensional, Flexbox only deals with columns or rows.

- Are negative margins legal and what do they do (margin: -20px)? 
  - Yes, It allows to eat up the space of its parent container

- If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it? 
  - It is because collapsing margins of CSS Box model definition 
  - Apply inline-block or inline to <p>

**Unit tests:**

- What technologies do you use to unit test your react components? 
  - I have used jest to mock something and React Testing Library(@testing-library/react)

- Are there any pitfalls associated with this technology that have caused you difficulty in the past? 
  - One thing which I have faced is while using some complex libraries like graph related libraries, it doesn’t render it properly and creates the issue. 
  - Sometimes we cannot give data-testid to component because its actually a wrapper component - for example inputfield of MUI library, at that time we have to use getByText or getByPlaceholder etc.

- How do you test in your unit tests to see if the correct properties are being passed to child components. 
  - I usually check the UI element which is being returned by child element. For example If I pass prop shouldShowUserName: true/false, so based on the value of shouldShowUserName I try to check is username field rendered or not.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
