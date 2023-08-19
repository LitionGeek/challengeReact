import { HeaderVista } from "../../../components/index";

const Header = () => {
  const user = "Alan";
  const action = "TSLA - Tesla Inc - USD";
  return <HeaderVista start={action} end={`Usuario: ${user}`} />;
};

export default Header;
