/* eslint-disable no-unused-vars */
import { Grid } from "@mui/material/index";
import { ButtonIcon } from "../../../components";
import ComboBox from "../../../components/ListItems";
import { useCreateMutation } from "../../../redux/api/endpoints/createAction";
import { useSelector } from "react-redux/es/exports";
import { getAction } from "../../../redux/slices/actions";

const SelectSimbolo = () => {
  const [createAction, responseCreate] = useCreateMutation();
  const action = useSelector(getAction);

  const handleSelect = () => {
    console.log("Click", action);
  };

  return (
    <Grid container style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Grid item xs={2} md={2}>
        <span>Simbolo</span>
      </Grid>
      <Grid item xs={6} md={6}>
        <ComboBox />
      </Grid>
      <Grid item xs={4} md={4}>
        <ButtonIcon handleClick={handleSelect} noLink>
          Agregar simbolo
        </ButtonIcon>
      </Grid>
    </Grid>
  );
};

export default SelectSimbolo;
