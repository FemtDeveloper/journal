import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        {" "}
        Aliquip magna in magna dolor cillum ut excepteur dolor excepteur magna.
        Pariatur est aliquip officia Lorem aute ea magna. Quis aute exercitation
        aliquip cillum tempor ut occaecat cillum. Cupidatat deserunt eu
        incididunt anim nulla anim aute sit nisi esse occaecat sunt enim non.
        Labore tempor do et consequat deserunt aliqua deserunt ut consectetur.
        Commodo cupidatat est excepteur et ea. Labore exercitation adipisicing
        deserunt elit excepteur.
      </Typography> */}
      {/* nothinSelected */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      {/* noteview */}
      <IconButton
        size="medium"
        sx={{
          color: "whitesmoke",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
