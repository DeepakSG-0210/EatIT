import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // mutating the state here
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
    },
  },
});

// cartSlice {
//         actions: {
//             addItems(), removeItem(), clearCart()
//         }
//         reducers: {

//         }
//     }

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
