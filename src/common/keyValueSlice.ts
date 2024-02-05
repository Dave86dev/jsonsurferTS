import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Value } from '../interfaces';

const initialState: Value = {
  key: "",
  value: "",
};

export const valueSlice = createSlice({
  name: 'keyValue',
  initialState,
  reducers: {
    setKeyValue: (state, action: PayloadAction<Value>) => {
      state.key = action.payload.key;
      state.value = action.payload.value;
    },
  },
});

export const { setKeyValue } = valueSlice.actions;

export default valueSlice.reducer;
