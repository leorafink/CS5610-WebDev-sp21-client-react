
import React, {useState} from "react";

const ListWidget = ({widget, update, deletee}) => {
    const [editing, setEditing] = useState(false)
    const [widgett, setWidget] = useState({widget})

    return (
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
                        defaultValue={widgett.type}
                        className="form-control">

                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>


                    </select>

                    <form className="container-fluid">
                        <input
                            type="radio"
                            name="ordering"
                            onClick={(e) => setWidget({...widget, ordered: true})}
                        /> Ordered
                        <input
                            type="radio"
                            name="ordering"
                            onClick={(e) => setWidget({...widget, ordered: false})}
                        /> Unordered
                    </form>

                    <br/>
                    List Items
                    <textarea
                        onChange={(e) => setWidget({...widget, text: e.target.value})}

                        rows={10}
                        defaultValue={widget.text}
                        className="form-control">

                    </textarea>


                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-2x fa-cog float-right"></i>
                    {/*<textarea value={widget.text} className="form-control"></textarea>*/}
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }

                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>

            }

        </>
    )
}

export default ListWidget