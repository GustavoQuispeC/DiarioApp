import { IconButton } from "@mui/material";
import { DiarioLayout } from "../layout/DiarioLayout";
import { NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const DiarioPage = () => {
  return (
    <>
      <DiarioLayout>
        <NothingSelectedView />
        {/* <NoteView /> */}
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.8 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined />
        </IconButton>
      </DiarioLayout>
    </>
  );
};
