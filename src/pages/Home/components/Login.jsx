import { Grid } from "@mui/material";
import { Input } from "../../../components";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../../redux/api/endpoints/authSlice";
import { useNavigate } from "react-router-dom/dist/index";
import { Button } from "@mui/material/index";

const Login = () => {
  const navigate = useNavigate();
  const [authUser, responseAuth] = useLoginMutation();
  const [error, seterror] = useState("");
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (value, key) => {
    setcredentials((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser(credentials);
  };

  useEffect(() => {
    if (responseAuth.isSuccess) navigate("/dashboard");
    if (responseAuth.isError) {
      seterror();
    }
  }, [responseAuth.isSuccess, responseAuth.isError]);

  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
      spacing={2}
      sx={{ height: "70vh" }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Grid item xs={12} sm={12}>
          <Input placeholder="Usuario" value={credentials?.username} onChange={(e) => handleChange(e, "username")} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Input
            placeholder="Contraseña"
            value={credentials?.password}
            onChange={(e) => handleChange(e, "password")}
            type="password"
          />
        </Grid>
        {error && (
          <Grid item xs={12} sm={12}>
            <span>{error}</span>
          </Grid>
        )}
        <Grid item xs={12} sm={12}>
          <Button variant="outlined" type="submit">
            Ingresar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
