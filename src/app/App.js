import React from 'react';
import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

  
const getFilteredItems = (items, searchTerm) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


export const App = (props) => {

  const { state, dispatch } = props;
  // removing currencyFilter,
  const{ inventory, searchTerm } = state;
  const filteredInventory = getFilteredItems(inventory, searchTerm);

  
  return (
    <div>

      <SearchTerm
      searchTerm={state.searchTerm}
      dispatch={dispatch}

      />
      
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={filteredInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
      cart={state.cart}
      currencyFilter={state.currencyFilter}
      dispatch={dispatch}
      />

    </div>
  );
};

