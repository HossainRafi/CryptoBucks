import { createContext, useLayoutEffect, useState } from "react";

// ============== Create context object ===============
export const TrendingContext = createContext({});

// ============ Create provider component ==============
export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  // =========== Function for get trending data ============
  const getTrendData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setTrendData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  // =========== Reset trending data ============
  const resetTrendingResult = () => {
    getTrendData();
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendData,
        resetTrendingResult,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
