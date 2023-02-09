import React from "react";

const openDays = () => {
  return (
    <>
      <Box className="open-con">
        <Box className="open-day">
          <h2>Open Days</h2>
          <span>Monday &nbsp; </span>
          <span>Tuesday </span>
          <span>Wednesday </span>
          <span>Thursday </span>
          <span>Friday </span>
        </Box>
        <Box className="open-hours">
          <h2>Open Hours</h2>
          <span>7am - 5:30pm </span>
          <span>7am - 5:30pm </span>
          <span>7am - 5:30pm </span>
          <span>7am - 5:30pm </span>
          <span>7am - 5:30pm </span>
        </Box>
      </Box>
    </>
  );
};

export default openDays;
