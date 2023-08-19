import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route } from "react-router-dom/dist/index.js";
import { Dashboard, DetailsAction } from "./pages";
import { Authenticated } from "../src/routes";
import { PrivateRoutes, PublicRoutes } from "../src/models/routes.js";
import { RoutesNotFound } from "../src/utils";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesNotFound>
        <Route path={PublicRoutes.Home} element={<Home />} />
        <Route element={<Authenticated />}>
          <Route path={PrivateRoutes.MISACCIONES} element={<Dashboard />} />
          <Route path={PrivateRoutes.DETAILSACTION} element={<DetailsAction />} />
        </Route>
      </RoutesNotFound>
    </BrowserRouter>
  );
}

export default App;
