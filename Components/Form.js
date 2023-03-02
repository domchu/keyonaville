import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

const Form = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
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
        <form onSubmit={handleSubmit}>
          <Box className="form">
            <Box>
              <label>
                <input
                  onChange={onChange}
                  type="text"
                  name="firstname"
                  placeholder="first Name"
                  pattern="^[a-zA-Z0-9]{4,26}$"
                  required
                />
              </label>
            </Box>
            <Box>
              <label>
                <input
                  onChange={onChange}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  pattern="^[a-zA-Z0-9]{4,26}$"
                  required
                />
              </label>
            </Box>
            <Box>
              <label>
                <input
                  onChange={onChange}
                  type="number"
                  name="phonenumber"
                  placeholder="Mobile Number"
                  required
                />
              </label>
            </Box>
            <Box>
              <label>
                <input
                  onChange={onChange}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </label>
            </Box>
          </Box>
          <Box>
            <textarea
              onChange={onChange}
              name="message"
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

export default Form;
