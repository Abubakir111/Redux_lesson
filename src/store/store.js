import { configureStore } from '@reduxjs/toolkit';
import { basketReduse } from './BasketSlice';

const store = configureStore({
  reducer: {
    basket: basketReduse,
  },
});
export default store;
