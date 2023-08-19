import { PublicRoutes } from "../../src/models/routes";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => <Outlet />;
const PublicRoute = () => <Navigate replace to={PublicRoutes.Home} />;

export const Authenticated = () => {
  const credentials = useSelector((state) => state.auth);
  console.log("credentials", credentials);
  return credentials ? <PrivateRoute /> : <PublicRoute />;
};
