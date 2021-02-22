import React, {useState} from "react";
import {Link} from "react-router-dom";

const CourseRow = ({
                       course,
                       deleteCourse
                    }) => {

    const [editing, setEditing] = useState(false)
    return (<tr>
        <td>
            {
                !editing &&
                <Link to="/editor">
                    {course.title}
                </Link>
            }
            {
                editing &&
                <input value={course.title}/>
            }
        </td>
        <td>{course.owner}</td>
        <td>{course.lastModified}</td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>

            {
                editing &&
                <i onClick={() => setEditing(false)} className="fas fa-check"></i>
            }

            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
            }


        </td>
    </tr>)
}

export default CourseRow