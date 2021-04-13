import React from "react";

const MultipleChoiceQuestion = ({question}) => {
    return(
        <div>
            <h4>Multiple Choice</h4>
            <h3>{question.title}</h3>
            {question.question}
        </div>
    )
}

export default MultipleChoiceQuestion;