import axios from "axios";

export const registerUser = async (user) => {
  try {
    await axios.post("http://localhost:5000/api/users", user);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      user
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
