import React, { useState } from "react";
import { signUpRequest } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Link,
} from "@mui/material";

const Signup = () => {
  const dispatch = useDispatch();
  const signupNavigate = useNavigate();
  const signupSelector = useSelector((state) => state && state.signUpState);
  const [role, setRole] = useState("");
  const [signupUser, setSignupUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  React.useEffect(() => {
    if (signupSelector.isSuccess) {
      if (signupSelector.data.error === 0) {
        signupNavigate("/");
      }
    }
  }, [signupSelector]);

  const handleSignupUser = (value, type) => {
    setSignupUser((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const signupData = (e, key) => {
    setSignupUser({ ...signupUser, [key]: e.target.value });
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleSignupSubmit = (e) => {
    console.log("signup Submit");
    e.preventDefault();
    if (signupUser.username && signupUser.password && signupUser.role) {
      console.log("sign up action dispatched");
      dispatch(signUpRequest({ ...signupUser }));
    }
  };

  // console.log(signupUser);
  return (
    <>
      <h1 className="text-5xl ml-[46%] mt-[3%] ">Polling App</h1>
      <div className="w-96 mt-[3%] ml-[40%] border-2 rounded-xl	px-12 py-5 ">
        <h1 className="text-3xl mb-12 ml-16">Sign Up</h1>
        <FormControl>
          <form onSubmit={handleSignupSubmit}>
            <TextField
              fullWidth
              className="mb-4"
              id=""
              label="Username"
              variant="outlined"
              onChange={(e) => signupData(e, "username")}
            />

            <TextField
              fullWidth
              id=""
              label="password"
              type="password"
              variant="outlined"
              sx={{ mt: "20px" }}
              onChange={(e) => signupData(e, "password")}
            />
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={signupUser.role}
                label="Role"
                fullWidth
                onChange={(e) => handleSignupUser(e.target.value, "role")}
                // onChange={(e) => signupData(e, "password")}
              >
                <MenuItem value={"Guest"}>Guest</MenuItem>
                <MenuItem value={"Admin"}>Admin</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: "30px" }}
              type="submit"
            >
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

export default Signup;
