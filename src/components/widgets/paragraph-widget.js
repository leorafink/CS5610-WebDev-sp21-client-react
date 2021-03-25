import React from "react";

const ParagraphWidget = ({widget, editing}) => {
    return(
        <>
        {
            editing &&
        <>
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