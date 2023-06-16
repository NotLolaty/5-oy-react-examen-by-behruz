import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    count: 0,
  },
  reducers: {
    add: (state, action) => {
      const findEl = state.products.find(
        (item) => item.id == action.payload.id
      );
      if (!findEl) {
        return {
          ...state,
          count: state.count + 1,
          products: [
            ...state.products,
            { ...action.payload, count: 1, userPrice: action.payload.price },
          ],
        };
      }
      return state;
    },
  },
});

export default productSlice.reducer;

export const { add } = productSlice.actions;
