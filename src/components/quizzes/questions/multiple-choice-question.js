import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState("");
    const [grade, setGrade] = useState(false);
    return(
        <div>
            <h4>{question.question}

                {
                    answer !== "" && answer.toString() === question.correct && grade === true &&
                    <i className="fas fa-check"></i>
                }
                {
                    answer !== "" && answer.toString() !== question.correct && grade === true &&
                    <i className="fas fa-times"></i>
                }

            </h4>


            {question.correct}


            <br/>
            {JSON.stringify(answer)}
            <ul className="list-group">
            {
                question.choices.map((choice) => {
                    return(
                        <li className="list-group-item">
                        <label>
                            <input
                                type="radio"
                                onClick={() => setAnswer(choice)}
                                name={question._id}/>
                            {choice}
                        </label>
                        </li>
                    )
                })
            }
            </ul>
            <br/>

            {
                answer !== "" &&
                    <p>Your answer: {JSON.stringify(answer)}</p>

            }
            {
                answer === "" &&
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

export default MultipleChoiceQuestion;