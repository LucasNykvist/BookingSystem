import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button, ButtonGroup } from "@mui/material";
import { deleteNote, getAllNotes } from "../api/note.api";
import { Await } from "react-router-dom";

const ManageNotes = () => {
  const [notes, setNotes] = useState();

  const getNotes = async () => {
    const res = await getAllNotes();
    setNotes(res);
  };

  const removeNote = async (id) => {
    deleteNote(id);
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="all-notes-container">
        {notes
          ? notes.map((note) => (
              <div className="note-card" key={note.id}>
                <h1>{note.title}</h1>
                <p>{note.author}</p>
                <p>{note.content}</p>

                <ButtonGroup className="buttons">
                  {/* <Button variant="outlined" color="secondary" className="edit-btn">
                        Edit
                    </Button> */}
                  <Button
                    onClick={() => removeNote(note.id)}
                    sx={{ color: "white", backgroundColor: "red" }}
                    color="warning"
                    className="delete-btn"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ManageNotes;
