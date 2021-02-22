import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../course-manager-style.css"
import "./course-card-style.css"

const CourseCard = ({
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

    return (
        <div className="card LF-CardStyle container" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">

                {
                    !editing &&
                    <Link to="/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }

                {/*{course.title}*/}
            </h5>

            <p className="card-text">Some quick example text to
                the cards content.</p>
            <Link to="/editor" className="btn btn-primary">
                {course.title}
            </Link>

            <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-pull-right"></i>

            {
                editing &&
                <i onClick={() => saveCourse()} className="fas fa-check fa-pull-right"></i>
            }

            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit fa-pull-right"></i>
            }

        </div>

    </div>)


}

export default CourseCard