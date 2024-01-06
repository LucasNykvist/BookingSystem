import React, { useState } from "react";
import { deleteNote, getAllNotes } from "../../../api/note.api";

const useManageNotes = () => {
  const [notes, setNotes] = useState();

  const getNotes = async () => {
    const res = await getAllNotes();
    setNotes(res);
  };

  const removeNote = async (id) => {
    await deleteNote(id);
    getNotes();
  };

  return { notes, getNotes, removeNote };
};

export default useManageNotes;
