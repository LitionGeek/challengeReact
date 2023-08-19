import { FormControl, FormControlLabel, RadioGroup } from "@mui/material/index";
import { Radio } from "@mui/material/index";
import { Grid } from "@mui/material/index";
import { Container } from "@mui/material/index";
import { Select, ButtonIcon } from "../../../components";
import { useState } from "react";

const OptionChart = () => {
  const [config, setconfig] = useState({
    interval: "",
  });
  const handleChange = (key, value) => {
    setconfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="realTime"
              name="radio-buttons-group"
            >
              <FormControlLabel value="realTime" control={<Radio />} label="Tiempo real" selected />
              <FormControlLabel value="historic" control={<Radio />} label="Historico" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            label="Intervalo de tiempo"
            onChange={(e) => handleChange("interval", e)}
            onClick={handleChange}
            defaultValue=""
            name={"interval"}
            value={config.interval}
            options={[
              { label: "1 minuto", value: 0 },
              { label: "5 minuto", value: 1 },
              { label: "15 minuto", value: 2 },
              { label: "30 minuto", value: 3 },
              { label: "45 minuto", value: 4 },
              { label: "1 hora", value: 5 },
              { label: "2 hora", value: 6 },
              { label: "4 hora", value: 7 },
              { label: "8 hora", value: 8 },
              { label: "1 dia", value: 9 },
              { label: "1 semana", value: 10 },
              { label: "1 mes", value: 11 },
            ]}
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
