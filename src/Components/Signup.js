import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Link,
} from "@mui/material";

const BasicSelect = () => {
  const [role, setRole] = React.useState("");
  const [signupUser, setSignupUser] = useState({
    username: "",
    password: "",
    role: "",
  });
  const signupData = (e, key) => {
    setSignupUser({ ...signupUser, [key]: e.target.value });
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <h1 className="text-5xl ml-[46%] mt-[3%] ">Polling App</h1>
      <div className="w-96 mt-[3%] ml-[40%] border-2 rounded-xl	px-12 py-5 ">
        <h1 className="text-3xl mb-12 ml-16">Sign Up</h1>
        <FormControl>
          <form>
            <TextField
              fullWidth
              className="mb-4"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) => signupData(e, "username")}
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="password"
              variant="outlined"
              sx={{ mt: "20px" }}
              onChange={(e) => signupData(e, "password")}
            />
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                fullWidth
                onChange={handleChange}
                // onChange={(e) => signupData(e, "password")}
              >
                <MenuItem value={10}>Guest</MenuItem>
                <MenuItem value={20}>Admin</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" fullWidth sx={{ mt: "30px" }}>
              Sign Up
            </Button>
          </form>
          <Link href="/" underline="hover" sx={{ mt: "15px" }}>
            {"Already a User? LOGIN"}
          </Link>
        </FormControl>
      </div>
    </>
  );
};

export default BasicSelect;
