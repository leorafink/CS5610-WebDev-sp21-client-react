import React, {useState} from "react";

const ParagraphWidget = ({widget, /*editing,*/ update, deletee, /*setediting*/}) => {
    const [editing, setEditing] = useState(false)
    return(
        <>
        {
            editing &&
        <>
            <i onClick={() => {
                update(widget)
                setEditing(false)
            }} className="fas fa-2x fa-check float-right"></i>
            <i onClick={() =>
                deletee(widget)
            } className="fas fa-2x fa-trash float-right"></i>

            <textarea
                // onChange={(e) => setWidget({...widget, text: e.target.value})}
                value={widget.text}
                className="form-control"></textarea>
        </>
        }
            {
                !editing &&
                    <>
                        <i onClick={() => setEditing(true)} className="fas fa-2x fa-cog float-right"></i>
                        <textarea value={widget.text} className="form-control"></textarea>
                    </>

            }
    <div>
        <h2>Paragraph Widget {widget.id}</h2>
    </div>
        </>
    )}
export default ParagraphWidget