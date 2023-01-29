import React, { useState } from "react";
import { FiChevronsDown, FiChevronsLeft } from "react-icons/fi";

const QuestionToggle = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <FiChevronsDown fontSize={30} />
          ) : (
            <FiChevronsLeft fontSize={30} />
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default QuestionToggle;
