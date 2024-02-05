import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Value } from '../interfaces';

const initialState: Value = {
  path: "",
  value: "",
};

export const valueSlice = createSlice({
  name: 'keyValue',
  initialState,
  reducers: {
    setKeyValue: (state, action: PayloadAction<Value>) => {
      state.path = action.payload.path;
      state.value = action.payload.value;
    },
  },
});

export const { setKeyValue } = valueSlice.actions;

export default valueSlice.reducer;
