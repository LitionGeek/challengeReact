import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchAction } from "../../../service/getActions";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { Grid } from "@mui/material/index";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: true,
      text: "TSLA",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const CoinInfo = () => {
  const [action, setaction] = useState({ labels: [], datasets: [] });
  //https://api.twelvedata.com/earnings?symbol=AAPL&start_date=2015-01-01&end_date=2016-01-01&interval=1&apikey=2f120b309ec743f9a492dc886a5674ea

  const getAction = async () => {
    const res = await fetchAction(
      "https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,IXIC&interval=15min&apikey=demo"
    );
    let label = res.AAPL.values?.map((coin) => {
      let date = new Date(coin.datetime);
      let time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
      return time;
    });
    setaction({
      labels: label.reverse(),
      datasets: [
        {
          backgroundColor: "#459def",
          label: "TSLA",
          borderColor: "#459def",
          data: res.AAPL.values?.map((sampling) => sampling.high),
        },
      ],
    });
  };

  useEffect(() => {
    getAction();
    const intervalConfig = sessionStorage.getItem("configChart") && JSON.parse(intervalConfig)?.miliseconds;
    const intervalMilliseconds = setInterval(getAction, intervalConfig);

    return () => {
      clearInterval(intervalMilliseconds);
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        {action.datasets.length > 0 ? <Line options={options} data={action} /> : <Loading />}
      </Grid>
    </Grid>
  );
};

export default CoinInfo;
