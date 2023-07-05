import React from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import { CryptoContext } from "./../context/CryptoContext";

const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();
  let { getCoinData, coinData: data } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinData(coinId);
  }, [coinId]);

  // ========== Close popup =========
  const close = () => {
    navigate("..");
  };

  return ReactDOM.createPortal(
    <div
      onClick={close}
      className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter: backdrop-blur-sm flex items-center justify-center font-nunito"
    >
      <div
        className="w-[65%] h-[75%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        {data ? (
          <div className="flex items-center justify-between h-full w-full p-4">
            <div className="flex flex-col w-[45%] h-full pr-2 ">
              <div className="flex w-full items-center">
                <img className="w-[3rem] h-[3rem] mr-1.5" src={data.image.large} alt="" />
                <h1 className="">{data.name}</h1>
                <span>{data.symbol}</span>
              </div>
            </div>

            <div className="flex flex-col w-[55%] h-full pl-3">right</div>
          </div>
        ) : null}
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default CryptoDetails;
