import axios from "axios";

export const createNote = async (note) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/note/create",
      note
    );
    console.log(response.data); // Handle the response data here
  } catch (error) {
    console.error(error); // Handle any errors that occur during the request
  }
};

export const getAllNotes = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/note");
    return response.data;
  } catch (error) {
    console.error(error); // Handle any errors that occur during the request
  }
};

export const deleteNote = async (id) => {
  try {
    console.log(id);
    const response = await axios.delete(`http://localhost:5000/api/note/${id}`);
    console.log(response); // Handle the response data here
  } catch (error) {
    console.error(error); // Handle any errors that occur during the request
  }
};
