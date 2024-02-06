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
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearKeyValue: (state) => {
      state.path = "";
      state.value = "";
    },
  },
});

export const { setKeyValue, setValue, clearKeyValue } = valueSlice.actions;

export default valueSlice.reducer;
