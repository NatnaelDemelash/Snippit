import React from 'react';

export default function SignUpPrompt() {
  return (
    <div className="fixed bottom-0 flex justify-around px-16 md:px-20 items-center space-x-5 h-[90px] w-full bg-[#0f1419]">
      <div className="text-white flex flex-col py-10 space-y-2">
        <span className="text-xl md:text-2xl font-bold">
          Don't miss out on the Snippit
        </span>
        <span className="text-gray-400">
          People on Snippit are the first to know
        </span>
      </div>

      <div className="flex space-x-4">
        <button className="w-[88px] h-[40px] text-white text-sm  border-2 border-white rounded-full">
          Log In
        </button>
        <button className="w-[88px] h-[40px] bg-white rounded-full text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
}
