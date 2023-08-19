import { Grid } from "@mui/material/index";
import { Container } from "@mui/material/index";
import { Select, ButtonIcon, InputRadio, DatePicker } from "../../../components";
import { useEffect, useState } from "react";
import { intervals } from "../../../utils";

const OptionChart = () => {
  const [config, setconfig] = useState({
    interval: "1",
  });

  const handleChange = (key, value) => {
    setconfig((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    let miliseconds = 60000;
    let invet = intervals[config.interval]?.minutes * miliseconds;
    sessionStorage.setItem("configChart", JSON.stringify({ minutes: invet }));
  }, [config]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <InputRadio />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <DatePicker label="Fecha desde" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <DatePicker label="Fecha hasta" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            label="Intervalo de tiempo"
            onChange={(e) => handleChange("interval", e)}
            onClick={handleChange}
            defaultValue=""
            name={"interval"}
            value={config.interval}
            options={intervals}
          />
        </Grid>
        <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center" }}>
          <ButtonIcon>Graficar</ButtonIcon>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OptionChart;
