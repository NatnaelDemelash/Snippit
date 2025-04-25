import SignUpModal from './modals/SignUpModal';

export default function SignUpPrompt() {
  return (
    <div className="fixed bottom-0 w-full bg-[#0f1419] h-[90px] flex flex-col md:flex-row justify-around items-center px-6 md:px-20">
      {/* Text Section (only visible on md+) */}
      <div className="hidden md:flex flex-col text-white space-y-1">
        <span className="text-xl md:text-2xl font-bold">
          Don't miss out on the Snippit
        </span>
        <span className="text-gray-400">
          People on Snippit are the first to know
        </span>
      </div>

      {/* Button Section */}
      <div className="flex space-x-4 w-full md:w-auto mt-3 md:mt-0">
        <button className="flex-1 md:flex-none h-[48px] md:w-[88px] md:h-[40px] text-white text-sm border-2 border-white rounded-full hover:bg-white hover:border-none hover:bg-opacity-25 transition">
          Log In
        </button>

        <SignUpModal />
      </div>
    </div>
  );
}
