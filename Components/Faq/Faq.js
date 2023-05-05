import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import data from "../Faq/Questiondata";
import SingleQuestion from "../Faq/QuestionToggle";

//main
function Faq() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <Box className="container">
        <Box className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </Box>
      </Box>
    </>
  );
}

export default Faq;
