import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";

import React from "react";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent="space-between"
      sx={{ mb: 1 }}
      alignItems="center"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          20 de enero, 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" padding={2}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          placeholder="Inserte un título"
          variant="filled"
          fullWidth
          label="Título"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          placeholder="Qué sucedio el día de hoy"
          variant="filled"
          fullWidth
          multiline
          minRows={5}
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
