import { Container } from "@mui/material/index";
import { HeaderVista } from "../../../components";

const Header = () => {
  return (
    <Container>
      <HeaderVista start="Mis acciones" end="Usuario: Juan" />
    </Container>
  );
};

export default Header;
