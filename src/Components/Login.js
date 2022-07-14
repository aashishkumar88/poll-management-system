import React from "react";
import { TextField, Button, FormControl,Link } from "@mui/material";

const Login = () => {

  
  return (
    <>
      <h1 className="text-5xl ml-[44%] mt-[3%]">Polling App</h1>
      <div className="w-96 mt-[3%] ml-[40%] border-2 px-12 py-5 ">
        <h1 className="text-3xl mb-12 ml-20">LOG IN</h1>
        <FormControl>
          <TextField
            className="mb-4"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            sx={{ mt: "20px", width: "260px" }}
            required
          />

          <Link href="#" underline="always" sx={{ mt: "15px" }}>
            {"Forget-Password?"}
          </Link>
          <Button variant="contained" sx={{ mt: "30px" }}>
            Log In
          </Button>
          <Link href="/register" underline="hover" sx={{ mt: "15px" }}>
            {"Create an account? SIGNUP"}
          </Link>
        </FormControl>
      </div>
    </>
  );
};

export default Login;
