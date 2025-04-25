'use client';
import { Modal } from '@mui/material';
import { useState } from 'react';

export default function SignUpModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button
        className="flex-1 md:flex-none h-[48px] md:w-[88px] md:h-[40px] bg-white rounded-full text-sm"
        onClick={handleOpen}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={handleClose}
        className="flex justify-center items-center"
      >
        <div className="bg-white w-[200px] h-[400px]">Form</div>
      </Modal>
    </div>
  );
}
