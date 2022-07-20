import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import Signup from "./Components/Signup";
import store from "./store";
import Dashboard from "./Components/dashboard";
import Private from "./Components/Private";
import Login from "./Components/Login";
import ViewPoll from "./Components/viewPoll";
const App = () => {
 
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/viewpolls" element={<ViewPoll />} />

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                // <Private>
                <Dashboard />
                // </Private>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
