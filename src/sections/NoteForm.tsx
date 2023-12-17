import { Button, TextField } from "@mui/material";
import React from "react";

const NoteForm = () => {
  return (
    <div className="note-form-container">
      <form action="">
        <div className="input-fields">
          <h1>CREATE NOTE</h1>
          <TextField label="Author"></TextField>
          <TextField label="Title"></TextField>
          <TextField maxRows={4} multiline label="Content"></TextField>
          <Button color="secondary" variant="contained">
            Create Note
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
