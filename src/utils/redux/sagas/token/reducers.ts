import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'token_notification',
  initialState: '',
  reducers: {
    get_token: () => {},
    set_token: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { get_token, set_token } = slice.actions;

export default slice.reducer;
