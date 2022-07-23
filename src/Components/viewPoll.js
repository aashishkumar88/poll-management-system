import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewPollRequest } from "../action";

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
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <div className="px-6 py-4">
          {viewPollSelector &&
            viewPollSelector?.data.map((val, index) => {
              return (
                <div key={index}>
                  <div className="font-bold text-xl mb-2">{val.title}</div>
                  {val.options.map((val) => {
                    return (
                      <>
                        <p className="text-gray-700 text-base">{val.option}</p>
                      </>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ViewPoll;
