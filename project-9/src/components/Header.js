import React from "react";

const Header = () => {
  return (
    <nav className="bg-white mt-2 rounded-lg p-2 mx-auto md:p-2 flex items-center justify-center">
      <div className="mr-4">
        <img src="./logos_firebase.png" alt="logo" className=""></img>
      </div>
      <div className="ml-4 md:text-lg font-bold"> firebase contact App</div>
    </nav>
  );
};

export default Header;
