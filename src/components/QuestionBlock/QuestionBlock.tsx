import React, { useState } from "react";
import { Wrapper } from "./QuestionBlock.styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IQuestion } from "../../data";

interface IProps {
  question: IQuestion;
}

const QuestionBlock: React.FC<IProps> = ({
  question: { id, answer, question },
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Wrapper showDetails={showDetails}>
      <div className="question-answer">
        <span>{id}.</span>
        <h3>{question}</h3>
        <button onClick={() => setShowDetails((prev) => !prev)}>
          {showDetails ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className="hidden-content">
        <p>{answer}</p>
      </div>
    </Wrapper>
  );
};

export default QuestionBlock;
