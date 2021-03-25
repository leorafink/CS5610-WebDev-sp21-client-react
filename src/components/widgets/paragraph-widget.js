import React from "react";

const ParagraphWidget = ({widget, editing}) => {
    return(
        <>
        {
            editing &&
        <>
            <textarea
                // onChange={(e) => setWidget({...widget, text: e.target.value})}
                value={widget.text}
                className="form-control"></textarea>
        </>
        }
            {
                !editing &&
                    <>
                        <textarea value={widget.text} className="form-control"></textarea>
                    </>

            }
    <div>
        <h2>Paragraph Widget {widget.id}</h2>
    </div>
        </>
    )}
export default ParagraphWidget