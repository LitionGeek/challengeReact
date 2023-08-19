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
};

const CoinInfo = () => {
  const [action, setaction] = useState({ labels: [], datasets: [] });
  const getAction = async () => {
    const res = await fetchAction(
      "https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,IXIC&interval=1min&apikey=demo"
    );
    setaction({
      labels: res.AAPL.values?.map((sampling) => sampling.datetime),
      datasets: [
        {
          label: "TSLA",
          data: res.AAPL.values?.map((sampling) => sampling.high),
        },
      ],
    });
  };

  useEffect(() => {
    getAction();
  }, []);

  useEffect(() => {
    console.log("action", action);
  }, [action]);

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        {action.datasets.length > 0 ? <Line options={options} data={action} /> : <Loading />}
      </Grid>
    </Grid>
  );
};

export default CoinInfo;
