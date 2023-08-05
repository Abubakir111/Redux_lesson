import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
  },
  reducers: {
    addBasketPorduct: (state, action) => {
      state.products.push({ ...action.payload, quantity: 1 });
    },
    removeBasketPorduct: (state, action) => {
      // console.log(action.payload);
      const neState = state.products.filter(
        (productId) => productId._id !== action.payload
      );
      state.products = neState;
    },
    quantityIncrement: (state, action) => {
      state.products.forEach((element) => {
        if (element._id === action.payload) {
          element.quantity += 1;
        }
      });
    },
    quantityDecrement: (state, action) => {
      state.products.forEach((element) => {
        if (element._id === action.payload) {
          element.quantity -= 1;
        }
      });
    },
  },
});
export const basketAction = basketSlice.actions;
export const basketReduse = basketSlice.reducer;
