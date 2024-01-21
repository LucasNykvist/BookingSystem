import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import useCreateNote from "./hooks/useCreateNote";

const NoteForm = () => {
  const {
    inputFields,
    success,
    handleChange,
    handleSubmit,
    setSuccess,
    showAss,
    assText,
  } = useCreateNote();

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
        className="saker"
      >
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

        {showAss && (
          <div className="imgae">
            <img
              style={{ borderRadius: "50%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/EnglishCockerSpaniel_wb.jpg/640px-EnglishCockerSpaniel_wb.jpg"
              alt=""
              srcset=""
            />
            <p>{assText}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default NoteForm;
