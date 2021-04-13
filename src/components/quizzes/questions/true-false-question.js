import React from "react";

const TrueFalseQuestion = ({question}) => {
    return(
        <div>
            <h4>True-False</h4>
            <h3>{question.title}</h3>
            {question.question}
        </div>
    )
}

export default TrueFalseQuestion;