import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: [],
  },
  reducers: {
    fillProducts: (state, action) => {
      state.value = action.payload;
    },
    addProductToCart: (state, action) => {
      const id = action.payload;
      state.value = state.value.map(product => product.id === id ? {...product, addedToCart: true} : {...product})
    },
    removeProductFromCart: (state, action) => {
      const id = action.payload;
      state.value = state.value.map(product => product.id === id ? {...product, addedToCart: false} : {...product})
    },
    changeProductCount: (state, action) => {
      const {id, newCount} = action.payload;
      state.value = state.value.map(product => product.id === id ? {...product, count: newCount} : {...product});
    },
  },
})

export const { fillProducts, addProductToCart, removeProductFromCart, changeProductCount } = productsSlice.actions

export default productsSlice.reducer;