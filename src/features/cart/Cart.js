import React from 'react';
import {
  calculateTotal,
  getCurrencySymbol,
} from '../../utilities/utilities.js';
import { changeItemQuantity } from './cartSlice.js';





// Import the changeItemQuantity() action creator.

export const Cart = (props) => {
  const { cart, currencyFilter, dispatch } = props;



  const onInputChangeHandler = (name, input) => {
    if (input === '') {
      return;
    }
    const newQuantity = Number(input);
  
    dispatch(changeItemQuantity(name, newQuantity));
  };





  // Use the cart and currencyFilter slices to render their data.
  const cartElements = Object.keys(cart).map(createCartItem);
  const total = calculateTotal(cart, currencyFilter);

  return (
    <div id="cart-container">
      <ul id="cart-items">{cartElements}</ul>
      <h3 className="total">
        Total{' '}
        <span className="total-value">
          {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
        </span>
      </h3>
    </div>
  );







  function createCartItem(name) {
    const item = cart[name];

    if (item.quantity === 0) {
      return null;
    }

    return (
      <li key={name}>
        <p>{name}</p>
        <select
          className="item-quantity"
          value={item.quantity}
          onChange={(e) => {
            onInputChangeHandler(name, e.target.value);
          }}
        >
          {[...Array(100).keys()].map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </li>
    );
  }
};
