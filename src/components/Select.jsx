/* eslint-disable react/prop-types */
import "../assets/css/Input.css";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { createStyles } from "@mui/material";

export default function Select(props) {
  const handleSelectChange = (e) => {
    props.onChange(e.target.value, props.name);
  };

  return (
    <TextField
      select
      inputProps={{ classes: { notchedOutline: styles.notchedOutline } }}
      label={props.label}
      key={props.label}
      name={props.label}
      id={props.label}
      value={props.value ?? ""}
      disabled={props.disabled}
      onChange={handleSelectChange}
      helperText={props.helperText}
      fullWidth
      style={{ marginTop: "15px", height: "100%", maxHeight: "200px" }}
      required={props.required}
      type={props.type}
      defaultValue={props.defaultValue}
      InputProps={{
        startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
      }}
    >
      {props.options &&
        props.options.map((option) => (
          <MenuItem key={parseInt(option.value)} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
}

const styles = createStyles({
  notchedOutline: { borderColor: "red" },
});
