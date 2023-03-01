import React from 'react'
import { Box } from "@chakra-ui/react";

const Form = () => {
  return (
    <>
      <Box className="contact-form">
        <div className="contact-text">
          <div className="title">
            <h2>
              <span>/</span> WE'LL BE IN TOUCH SOON!
            </h2>
          </div>
          <h4>
            For Further Enquires, You can send us a message from the textbox
            below.
          </h4>
        </div>
        <form action="" method="post">
          <Box className="form">
            <Box>
              <label htmlFor="">
                <input
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                  required
                />
              </label>
            </Box>
            <Box>
              <label htmlFor="">
                <input
                  type="text"
                  name="First Name"
                  placeholder="Last Name"
                  required
                />
              </label>
            </Box>
            <Box>
              <label htmlFor="">
                <input
                  type="text"
                  name="First Name"
                  placeholder="Mobile Number"
                  required
                />
              </label>
            </Box>
            <Box>
              <label htmlFor="">
                <input
                  type="text"
                  name="First Name"
                  placeholder="Email Address"
                  required
                />
              </label>
            </Box>
          </Box>
          <Box>
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              className="textarea"
              placeholder="Message"
              required
            ></textarea>
          </Box>
          {/* the send button */}
          <Box className="summit__btn__container">
            <button type="submit" className="summit__btn">
              SEND MESSAGE
            </button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Form
