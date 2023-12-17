import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const NoteForm = () => {
  const defaultInputFields = {
    title: "",
    author: "",
    content: "",
  };
  const [inputFields, setInputFields] = useState(defaultInputFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    setInputFields(defaultInputFields);
  };

  return (
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
    </div>
  );
};

export default NoteForm;
