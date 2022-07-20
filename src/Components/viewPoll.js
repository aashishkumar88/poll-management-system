import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewPollRequest } from "../action";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const ViewPoll = () => {
  const dispatch = useDispatch();
  // const handleViewPoll = () => {
  //   dispatch(viewPollRequest());
  // };
  const viewPollSelector = useSelector(
    (state) => state && state.viewPollState.data
  );
  console.log(viewPollSelector, "aaaaaaa");
  useEffect(() => {
    dispatch(viewPollRequest());
  }, []);
  
  return (
    <>
      <button>VIEW POLLS</button>

      <div>
        {viewPollSelector &&
          viewPollSelector?.data.map((val, index) => {
            return (
              <div key={index}>
                <div>{val.title}</div>
                <span>
                  {val.options.map((val) => {
                    return <>{val.option}</>;
                  })}
                </span>
              </div>
            );
          })}
       
      </div>
    </>
  );
};

export default ViewPoll;
