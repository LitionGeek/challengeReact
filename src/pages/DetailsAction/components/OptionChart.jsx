import { FormControl, FormControlLabel, RadioGroup } from "@mui/material/index";
import { Radio } from "@mui/material/index";
import { Grid } from "@mui/material/index";
import { Container } from "@mui/material/index";

const OptionChart = () => {
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
      </Grid>
    </Container>
  );
};

export default OptionChart;
