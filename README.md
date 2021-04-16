# Redux Base

A simple starter kit for Redux in React projects.

## Branches

-   `main`: simple starter kit
-   `auth`: starter kit with authentication

## Steps

1. Install `redux` and `react-redux`
2. Set up provider and connect store in `index.js`
3. Set up store in `redux/configStore.js`
4. Set up duck (Ducks is a modular pattern that collocates actions, action types and reducers)

## Store with Chrome devtools (Redux tab) support

```js
const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## Notes

Based on [this](https://www.youtube.com/watch?v=wcXTCG8zMhY&list=PLQg6GaokU5CyvExiaMgXP_BS5WWNBfZJN&index=12) tutorial by Anthony Sistilli
