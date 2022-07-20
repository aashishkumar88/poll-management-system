import React, { useState, useEffect } from "react";
import { TextField, Button, FormControl, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logInRequest } from "../action/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const loginNavigate = useNavigate();
  
  const loginSelector = useSelector((state) => state && state.logInState);
  useEffect(() => {
    if (loginSelector.isSuccess) {
      if (loginSelector.data.error === 0)
       {
        loginNavigate("/dashboard");
      }
    }
  }, [loginSelector]);

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const loginData = (e, key) => {
    setLoginUser({ ...loginUser, [key]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit data");
    if (loginUser.username && loginUser.password) {
      console.log("data dispatching");
      dispatch(logInRequest({ ...loginUser }));
    }
  };
  console.log(loginUser);
  return (
    <>
      <h1 className="text-5xl ml-[46%] mt-[3%]">Polling App</h1>
      <div className="w-96 mt-[3%] ml-[40%] border-2 rounded-xl px-12 py-5">
        <h1 className="text-3xl mb-12 ml-20">LOG IN</h1>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              className="mb-4"
              id=""
              label="Username"
              variant="outlined"
              onChange={(e) => loginData(e, "username")}
              required
            />

            <TextField
              fullWidth
              id=""
              label="password"
              type="password"
              variant="outlined"
              sx={{ mt: "20px" }}
              onChange={(e) => loginData(e, "password")}
              required
            />

            <Link href="#" underline="always" sx={{ mt: "15px" }}>
              {"Forget-Password?"}
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: "30px" }}
              fullWidth
            >
              Log In
            </Button>
            <Link href="/register" underline="hover" sx={{ mt: "30px" }}>
              {"Create an account? SIGNUP"}
            </Link>
          </form>
        </FormControl>
      </div>
    </>
  );
};

export default Login;
