'use client';
import { Modal } from '@mui/material';
import { AppDispatch, RootState } from '@/redux/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeSignUpModalOpen,
  openSignUpModal,
} from '@/redux/slices/modlaSlices';

export default function SignUpModal() {
  // const [isOpen, setIsOpen] = useState(true);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <button
        className="flex-1 md:flex-none h-[48px] md:w-[88px] md:h-[40px] bg-white rounded-full text-sm"
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModalOpen())}
        className="flex justify-center items-center"
      >
        <div className="bg-white w-[200px] h-[400px]">Form</div>
      </Modal>
    </div>
  );
}
