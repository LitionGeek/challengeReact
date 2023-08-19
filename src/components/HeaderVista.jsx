/* eslint-disable react/prop-types */
import "../../src/assets/css/HeaderVista.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Divider } from "../components";

export default function HeaderVista2(props) {
  return (
    <Container component="main" maxWidth="lg">
      <br />
      <Grid container spacing={2} className="encabezadoHeader">
        <Grid item xs={12} md={4} className="volver">
          {props.start}
        </Grid>
        <Grid item xs={12} md={4} className="botones">
          {props.end}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </Container>
  );
}
