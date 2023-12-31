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
    localStorage.setItem("id", response.data.id);
    window.location.href = "/";
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (user, id) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/users/${id}`,
      user
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser2 = async (file, user, id) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("user", JSON.stringify(user));

  console.log(formData);

  const res = await axios.put(
    `http://localhost:5000/api/users/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
