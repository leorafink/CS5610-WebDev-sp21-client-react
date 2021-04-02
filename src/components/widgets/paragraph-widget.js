import React, {useState} from "react";

const ParagraphWidget = ({widget, /*editing,*/ update, deletee, /*setediting*/}) => {
    const [editing, setEditing] = useState(false)
    const [widgett, setWidget] = useState({widget})
    return(
        <>
        {
            editing &&
        <>
            <i onClick={() => {
                update(widgett)
                setEditing(false)
            }} className="fas fa-2x fa-check float-right"></i>
            <i onClick={() =>
                deletee(widget)
            } className="fas fa-2x fa-trash float-right"></i>

            <select
                onChange={(e) => setWidget({...widget, type: e.target.value})}
                //value={widget.type}
                defaultValue={widget.type}
                className="form-control">

                <option value={"HEADING"}>Heading</option>
                <option value={"PARAGRAPH"}>Paragraph</option>
                <option value={"LIST"}>List</option>
                <option value={"IMAGE"}>Image</option>

            </select>


            <textarea
                onChange={(e) => setWidget({...widget, text: e.target.value})}
                // onChange={(e) => setWidget({...widget, text: e.target.value})}
                defaultValue={widget.text}
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