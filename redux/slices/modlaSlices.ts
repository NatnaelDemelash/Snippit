import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signUpModal: false,
};

const modlaSlices = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModal = true;
    },
    closeSignUpModal: (state) => {
      state.signUpModal = false;
    },
  },
});

export const {} = modlaSlices.actions;

export default modlaSlices.reducer;
