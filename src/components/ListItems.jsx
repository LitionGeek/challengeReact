/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRef, useState } from "react";
import { getData } from "../service/getActions";
import { useDispatch } from "react-redux/es/exports";
import { setAction } from "../../src/redux/slices/actions";

export default function ComboBox(props) {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  const onInputChange = async (event, value, reason) => {
    if (value) {
      const data = await getData(value);
      setOptions(data);
    } else {
      setOptions([]);
    }
  };

  const handleSelect = (event, value) => {
    dispatch(setAction(value));
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options ?? []}
      onChange={(e, value) => handleSelect(e, value)}
      sx={{ width: 300 }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            {option.label}
          </li>
        );
      }}
      onInputChange={onInputChange}
      renderInput={(params) => <TextField {...params} label="(Autocomplete)" />}
    />
  );
}
