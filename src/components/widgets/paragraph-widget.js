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
            <select
                //  onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))}
                value={widget.type}
                className="form-control">
                <option value={"PARAGRAPH"}>Paragraph</option>
                <option value={"HEADING"}>Heading</option>

            </select>
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
                        {/*<textarea value={widget.text} className="form-control"></textarea>*/}
                        <p>{widget.text}</p>
                    </>

            }
    {/*<div>*/}
    {/*    <h2>Paragraph Widget {widget.id}</h2>*/}
    {/*</div>*/}
        </>
    )}
export default ParagraphWidget