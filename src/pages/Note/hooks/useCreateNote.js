import React, { useState } from "react";
import { DEFAULT_NOTE_INPUT_FIELDS } from "../constants/note.constants";
import { createNote } from "../../../api/note.api";

const useCreateNote = () => {
  const defaultInputFields = DEFAULT_NOTE_INPUT_FIELDS;
  const [inputFields, setInputFields] = useState(defaultInputFields);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNote(inputFields);
      setInputFields(defaultInputFields);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return { inputFields, success, handleChange, handleSubmit, setSuccess };
};

export default useCreateNote;
