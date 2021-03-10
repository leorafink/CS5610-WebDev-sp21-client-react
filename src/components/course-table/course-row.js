import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../course-manager-style.css"

const CourseRow = ({
                       course,
                       deleteCourse,
                        updateCourse
                    }) => {

    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }

        updateCourse(newCourse)
    }

    return (<tr>
        <td>
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                    {course.title}

                </Link>
            }
            {
                editing &&
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
            }
        </td>
        <td className="LF-disappearXs">{course.owner}</td>
        <td className="LF-disappear">{course.lastModified}</td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>

            {
                editing &&
                <i onClick={() => saveCourse()} className="fas fa-check"></i>
            }

            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
            }


        </td>
    </tr>)
}

export default CourseRow