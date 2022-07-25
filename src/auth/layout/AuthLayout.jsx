import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction="column"
      spacing={0}
      sx={{ padding: 4, backgroundColor: "primary.main", minHeight: "100vh" }}
    >
      <Grid
        className="box-shadow"
        item
        xs={3}
        sx={{
          borderRadius: 3,
          padding: 3,
          backgroundColor: "white",
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
