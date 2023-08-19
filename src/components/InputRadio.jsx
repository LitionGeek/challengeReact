import { FormControl, FormControlLabel, RadioGroup } from "@mui/material/index";
import { Radio } from "@mui/material/index";

const InputRadio = () => {
  return (
    <FormControl>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="realTime" name="radio-buttons-group">
        <FormControlLabel value="realTime" control={<Radio />} label="Tiempo real" selected />
        <FormControlLabel value="historic" control={<Radio />} label="Historico" />
      </RadioGroup>
    </FormControl>
  );
};

export default InputRadio;
