import { Button, TextField } from "@mui/material";
import React from "react";

const NoteForm = () => {
  return (
    <div className="note-form-container">
      <form method="post">
        <div className="input-fields">
          <h1>CREATE NOTE</h1>
          <TextField required label="Title"></TextField>
          <TextField required label="Author"></TextField>
          <TextField
            className="content-field"
            required
            rows={4}
            multiline
            label="Content"
          ></TextField>
          <Button type="submit" color="secondary" variant="contained">
            Create Note
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
