/* eslint-disable react/prop-types */
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(props.helperText);

  const alfanumerico = (e) => {
    if (e.target.value.length > 0) {
      return String(e.target.value).match(/^[\w\-\s]+$/);
    } else {
      return true;
    }
  };

  const validarRestricciones = (e) => {
    let todoValido = true;

    if (props.restricciones?.includes("alfanumerico") && !alfanumerico(e)) {
      setHelperText("¡Sólo letras y números!");
      todoValido = false;
    }

    if (todoValido) {
      setError(false);
      setHelperText(props.helperText);
    } else {
      setError(true);
    }
    props.onChange(e.target.value, props.name);
  };

  return (
    <TextField
      sx={{
        marginTop: "15px",
      }}
      label={props.label}
      value={props.value}
      onChange={(e) => validarRestricciones(e)}
      helperText={helperText}
      fullWidth
      autoComplete="off"
      accept={props.accept}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
      disabled={props.disabled}
      style={props.style}
      required={props.required}
      type={props.type}
      error={error}
      multiline={props.multiline}
      InputProps={{
        startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
      }}
    />
  );
}
