import { useEffect, useMemo, useRef } from "react";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  setActiveNote,
  startSavingNote,
  StartUploadingFiles,
} from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved } = useSelector((state) => state.journal);

  const { body, title, date, formState, onInputChange } = useForm(note);

  const fileInputref = useRef();

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  const onInputChangeFile = (e) => {
    dispatch(StartUploadingFiles(e.target.files));
    // console.log(e.target.files);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && e.shiftKey === true) {
      console.log(e);
      dispatch(startSavingNote());
    }
    return;
  };

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
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          onChange={onInputChangeFile}
          style={{ display: "none" }}
          ref={fileInputref}
        />
        <IconButton
          color="primary"
          onClick={() => fileInputref.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button color="primary" padding={2} onClick={onSaveNote}>
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
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          placeholder="Qué sucedio el día de hoy"
          variant="filled"
          fullWidth
          multiline
          minRows={5}
          sx={{ border: "none", mb: 1 }}
          name="body"
          value={body}
          onChange={onInputChange}
          onKeyDown={handleKey}
        />
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
