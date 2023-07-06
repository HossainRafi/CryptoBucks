import React from "react";
import { useLayoutEffect, useState } from "react";

const Chart = ({ id }) => {
  const [chartData, setChartData] = useState();

  useLayoutEffect(() => {
    const getChartData = async (id) => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
        )
          .then((res) => res.json())
          .then((json) => json);

        console.log("chart-data", data);
      } catch (error) {
        console.log(error);
      }
    };

    getChartData(id);
  }, [id]);

  return <div>chart</div>;
};

export default Chart;
