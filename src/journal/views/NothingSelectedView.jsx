import { Grid, Typography } from "@mui/material";
import { StarOutline } from "@mui/icons-material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction="column"
      spacing={0}
      sx={{
        backgroundColor: "primary.main",
        minHeight: "calc(100vh - 110px)",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 30, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
};
