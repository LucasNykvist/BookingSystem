import { TextField } from "@mui/material";
import Navbar from "../../components/Navbar";

const RegisterForm = () => {
  return (
    <>
      <Navbar />
      <div className="register-login-container">
        <form>
          <h1 style={{ fontWeight: "bold" }}>REGISTER</h1>
          <TextField name="email" label="E-mail" />
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
