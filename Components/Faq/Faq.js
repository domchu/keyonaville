import React, { useState } from "react";
import data from "../Faq/Questiondata";
import SingleQuestion from "../Faq/QuestionToggle";
function Faq() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about Keyonaville school</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Faq;
