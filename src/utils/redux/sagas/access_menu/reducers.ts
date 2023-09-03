import { createSlice } from '@reduxjs/toolkit';

const initialState: AccessMenu[] = [];

export const slice = createSlice({
  name: 'access_menu',
  initialState,
  reducers: {
    get_menu: () => {},
    set_menu: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { get_menu, set_menu } = slice.actions;

export default slice.reducer;
