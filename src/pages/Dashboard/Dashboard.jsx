import { Header } from "./components";
import { Container } from "@mui/material/index";
import { SelectSimbolo } from "./components";
import { MisAcciones } from "./components/index";

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Header />
      <br />
      <SelectSimbolo />
      <MisAcciones />
    </Container>
  );
};

export default Dashboard;
