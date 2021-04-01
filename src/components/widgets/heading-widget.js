import React, {useState} from "react";

const HeadingWidget = ({widget, /*editing,*/ update, deletee, /*setWidget*/}) => {
    const [editing, setEditing] = useState(false)
    //const [widgett, setWidget] = useState({widget})
  // const [widgett, setWidget] = useState(widget)

    return (
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

                    <input
                      //  onChange={(e) => setWidget(widgett => ({...widgett, text: e.target.value}))}
                       // onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                      //  onChange={(e) => setWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        className="form-control"/>
                    <select
                      //  onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))}
                        value={widget.size}
                        className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>

                    </select>

                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-2x fa-cog float-right"></i>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
            {/*<div>
                <h2>Heading Widget {widget.id}</h2>
            </div>*/}
        </>)
}

export default HeadingWidget