import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import store from "./store";
import Dashboard from "./Components/dashboard";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
