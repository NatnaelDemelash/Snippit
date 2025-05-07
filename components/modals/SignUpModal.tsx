'use client';
import { Modal } from '@mui/material';
import { AppDispatch, RootState } from '@/redux/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeSignUpModalOpen,
  openSignUpModal,
} from '@/redux/slices/modlaSlices';
import { Eye, EyeOff, XIcon } from 'lucide-react';

export default function SignUpModal() {
  const [showPassword, setShowPassword] = useState(false);

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
        <div className="bg-white w-full h-full sm:w-[600px] sm:h-fit sm:rounded-xl">
          <XIcon
            className="w-7 h-7 ms-5 mt-5 cursor-pointer"
            onClick={() => dispatch(closeSignUpModalOpen())}
          />
          <form className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-2xl font-bold mb-10">Create Your Account</h1>
            <div className="w-full space-y-5 mb-10">
              <input
                type="text"
                className="w-full h-[54px] border border-gray-300 ps-4 rounded-md outline-none focus:border-[#f4af01] transition"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full h-[54px] border border-gray-300 ps-4 rounded-md outline-none focus:border-[#f4af01] transition"
                placeholder="Email"
              />
              <div className="flex items-center justify-between w-full h-[54px] border border-gray-300 ps-4 pr-3 rounded-md  focus:border-[#f4af01] transition">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full h-full outline-none"
                  placeholder="Password"
                />

                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Eye className="text-gray-800 cursor-pointer" />
                  ) : (
                    <EyeOff className="text-gray-800 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <button className="bg-[#f4af01] text-white h-[48px] w-full rounded-full mb-5">
              Sign Up
            </button>
            <span className="mb-5 text-center text-sm block">Or</span>
            <button className="bg-[#f4af01] text-white h-[48px] w-full rounded-full">
              Login as Guest
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
