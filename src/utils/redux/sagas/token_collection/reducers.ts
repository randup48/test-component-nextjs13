import { createSlice } from '@reduxjs/toolkit';

const initialState = <initValue>{
  loading: true,
  data: [],
};

export const slice = createSlice({
  name: 'token_collection',
  initialState,
  reducers: {
    get_token: () => {},
    set_token: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { get_token, set_token } = slice.actions;

export default slice.reducer;
