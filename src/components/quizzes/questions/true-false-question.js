import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null);
    return (
        <div>
            <h4>
                {question.question}
                {
                   answer !== null && answer.toString() === question.correct &&
                    <i className="fas fa-check"></i>
                }
                {
                    answer !== null && answer.toString() !== question.correct &&
                    <i className="fas fa-times"></i>
                }


            </h4>
            {question.correct}
            <br/>
            {JSON.stringify(answer)}
            <br/>
            <ul className="list-group">

            <li className="list-group-item">
                <label><input
                    type="radio"
                    onClick={() => setAnswer(true)}
                    name={question._id}/>True</label>
            </li>

                <li className="list-group-item">
                <label><input
                    type="radio"
                    onClick={() => setAnswer(false)}
                    name={question._id}/>False</label>
                </li>

            </ul>

            <br/>
           Your answer: {JSON.stringify(answer)}
        </div>
    )
}

export default TrueFalseQuestion;