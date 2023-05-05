import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

const Form = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
  });

  //using prevent default to avoid page reload.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // console.log(values);
  return (
    <>
      <Box className="contact-form">
        <Box className="contact-text">
          <div className="title">
            <h2>
              <span>/</span> WE'LL BE IN TOUCH SOON!
            </h2>
          </div>
          <h4>
            For Further Enquires, You can send us a message from the textbox
            below.
          </h4>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box className="form">
            <Box>
              <label>
                <input
                  onChange={onChange}
                  type="text"
                  name="firstname"
                  placeholder="first Name"
                  pattern="^[a-zA-Z]{4,26}$"
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
                  pattern="^[a-zA-Z]{4,26}$"
                  required
                />
              </label>
            </Box>
            <Box>
              <label>
                <input
                  onChange={onChange}
                  type="tel"
                  id="tel"
                  pattern="/^[-+]?[0-9]{6, 16}+$/"
                  name="tel"
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
