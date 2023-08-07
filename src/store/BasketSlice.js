import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    productsBasket: [],
  },

  // Функция  для добавления  в корзину  выбранный товар
  reducers: {
    addBasketPorduct: (state, action) => {
      state.productsBasket.push({ ...action.payload, quantity: 1 });
      console.log(state.productsBasket);
    },

    // Функция  для удаления  в корзину  выбранный товар
    removeBasketPorduct: (state, action) => {
      const neState = state.productsBasket.filter(
        (productId) => productId._id !== action.payload
      );
      state.productsBasket = neState;
    },

    // Функция  для прибавления  количества в   выбранный товар
    quantityIncrement: (state, action) => {
      state.productsBasket.forEach((element) => {
        if (element._id === action.payload) {
          element.quantity += 1;
        }
      });
    },

    // Функция  для убавления  количества в   выбранный товар
    quantityDecrement: (state, action) => {
      state.productsBasket.forEach((element) => {
        if (element._id === action.payload) {
          element.quantity -= 1;
        }
      });
    },
  },
});

export const basketAction = basketSlice.actions;
export const basketReduse = basketSlice.reducer;
