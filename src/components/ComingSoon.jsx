import React from "react";

const ComingSoon = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-32">
      <a
        href="/"
        className="mt-20 text-[30px] text-pink-600 font-bold hover:text-white transition duration-500"
      >
        Home
      </a>
      <div className="text-center text-[60px] font-bold">
        <h1>COMING SOON...</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
