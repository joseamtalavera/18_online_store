# Store

In this project, you’ll build a program that mimics Codecademy’s own online store! The application should display products from the Codecademy store and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.

![An animated gif showing a demo of the Codecademy store's features](demo.gif)

This application has three slices of state:

- `inventory`: An array of objects representing the items that are available to purchase.
- `cart`: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
- `currencyFilter`: A string that represents the currency used to calculate the prices displayed to the user: 'USD', 'CAD' or 'EUR'.

As you will see, the file structure has been organized using the recommended feature-based pattern and most of the inventory and currency features have been built for you. It will be up to you to:

- Complete the cart’s action creators and reducer logic
- Create the store using `createStore()` and `combineReducers()`
- Pass the store resources to presentational components via the top-level `<App />` component
- Render the `<Cart />` component using the current state data
- Dispatch actions to the store