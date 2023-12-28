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
