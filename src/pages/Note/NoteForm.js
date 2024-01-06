import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import useCreateNote from "./hooks/useCreateNote";

const NoteForm = () => {
  const { inputFields, success, handleChange, handleSubmit, setSuccess } =
    useCreateNote();

  return (
    <>
      <Navbar />
      <div className="note-form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-fields">
            <h1>CREATE NOTE</h1>
            <TextField
              name="title"
              value={inputFields.title}
              onChange={handleChange}
              required
              label="Title"
            ></TextField>

            <TextField
              name="author"
              value={inputFields.author}
              onChange={handleChange}
              required
              label="Author"
            ></TextField>

            <TextField
              name="content"
              value={inputFields.content}
              onChange={handleChange}
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

        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
        >
          <Alert severity="success">Note created successfully!</Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default NoteForm;
