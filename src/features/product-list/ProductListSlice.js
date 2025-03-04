import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductByFilters } from './ProductListAPI';

const initialState = {
  products: [],
  status: 'idle',
};
export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();

    return response.data;
  }
);
export const fetchProductByFiltersAsync = createAsyncThunk(
  'product/fetchProductByFilters',
  async ({filter,sort,pagination}) => {
    const response = await fetchProductByFilters(filter,sort,pagination);

    return response.data;
  }
);

export const ProductListSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    increment: (state) => {
      
      state.value += 1;
    },
   
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment} = ProductListSlice.actions;

export const selectAllProducts = (state) => state.product.products;



export default ProductListSlice.reducer;
