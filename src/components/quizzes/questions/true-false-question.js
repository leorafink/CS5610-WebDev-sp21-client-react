import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null);
    const [grade, setGrade] = useState(false);
    return (
        <div>
            <h4>
                {question.question}
                {
                   answer !== null && answer.toString() === question.correct && grade === true &&
                    <i className="fas fa-check"></i>
                }
                {
                    answer !== null && answer.toString() !== question.correct && grade === true &&
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

            {
                answer != null &&
                <p>Your answer: {JSON.stringify(answer)}</p>

            }
            {
                answer == null &&
                <p>Your answer: </p>
            }

            <button
                className="btn btn-success"
                onClick={() => setGrade(true)}>
                GRADE
            </button>
        </div>
    )
}

export default TrueFalseQuestion;