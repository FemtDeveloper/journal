import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction="column"
      spacing={0}
      sx={{ padding: 4, backgroundColor: "primary.main", minHeight: "100vh" }}
    >
      <Grid container direction="row" justifyContent="center">
        <CircularProgress color="info" size={50} />
      </Grid>
    </Grid>
  );
};
