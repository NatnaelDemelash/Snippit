import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signUpModalOpen: false,
};

const modlaSlices = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignUpModalOpen: (state) => {
      state.signUpModalOpen = false;
    },
  },
});

export const { openSignUpModal, closeSignUpModalOpen } = modlaSlices.actions;

export default modlaSlices.reducer;
