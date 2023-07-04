import React from "react";
import ReactDOM from "react-dom";

const CryptoDetails = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter: backdrop-blur-sm flex items-center justify-center font-nunito">
      CryptoDetails
    </div>,
    document.getElementById("model")
  );
};

export default CryptoDetails;
