import React from 'react'
import { TextField, Button, FormControl ,MenuItem,Select,SelectChangeEvent,InputLabel,Link} from "@mui/material";

const  BasicSelect = () => {
     
        const [role, setRole] = React.useState('');
      
        const handleChange = (event: SelectChangeEvent) => {
          setRole(event.target.value );
        };
  return (
    <>
      <h1 className="text-5xl ml-[44%] mt-[3%]">Polling App</h1>
      <div className="w-96 mt-[3%] ml-[40%] border-2 px-12 py-5 ">
        <h1 className="text-3xl mb-12 ml-16">Sign Up</h1>
        <FormControl>
          <TextField
            className="mb-4"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            sx={{ mt: "20px", width: "260px" }}
          />
          <FormControl fullWidth sx={{ mt: "20px" }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={handleChange}
            >
              <MenuItem value={10}>Guest</MenuItem>
              <MenuItem value={20}>Admin</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" sx={{ mt: "30px" }}>
            Sign Up
          </Button>
          <Link href="/" underline="hover" sx={{ mt: "15px" }}>
            {"Already a User? LOGIN"}
          </Link>
        </FormControl>
      </div>
    </>
  );
}


export default BasicSelect