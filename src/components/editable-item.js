import React, {useState} from "react";
import {Link} from "react-router-dom";

const EditableItem = ({item}) => {
       const [editing, setEditing] = useState(false)

        return (
            <>
                {
                    !editing &&

                <>
                    <Link to="/">
                            {item.title}
                    </Link>
                    <i className="fas fa-edit"></i>
                </>
                }
                {
                    editing &&

                <>
                    <input/>
                    <i className="fas fa-check"></i>
                    <i className="fas fa-times"></i>
                </>
                }

            </>
        )
}

export default EditableItem