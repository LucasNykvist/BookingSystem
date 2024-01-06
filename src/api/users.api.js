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

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.email));
    window.location.href = "/";
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
