import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";

const RegisterForm = () => {
  return (
    <>
      <Navbar />
      <div className="register-login-container">
        <form>
          <h1>REGISTER</h1>
          <div className="input-fields">
            <TextField required className="field" name="email" label="E-mail" />
            <div className="password-fields">
              <TextField
                required
                className="field"
                name="password"
                label="Password"
              />
              <TextField
                required
                className="field"
                name="password"
                label="Repeat password"
              />
            </div>
          </div>

          <Button type="submit" variant="contained" className="register-button">
            REGISTER
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
