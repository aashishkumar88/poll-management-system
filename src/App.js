import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
