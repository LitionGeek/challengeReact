import { CircularProgress, Box } from "@mui/material/index";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", heigth: "100vh", width: "100vw" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
