import React from "react";
import { useContext } from "react";
import { TrendingContext } from "./../context/TrendingContext";
import TrendingCoin from "../components/TrendingCoin";
import { Outlet } from 'react-router';

const Trending = () => {
  const { trendData } = useContext(TrendingContext);

  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly border border-gray-100 rounded">
        {trendData &&
          trendData.map((coin) => <TrendingCoin data={coin.item} />)}
      </div>
      <Outlet />
    </section>
  );
};

export default Trending;
