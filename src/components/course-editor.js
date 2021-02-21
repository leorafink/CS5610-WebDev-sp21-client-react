import React from "react";
import {Link} from "react-router-dom";

const CourseEditor = () => {
    return (
        <h1>
            <Link to="/courses">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
        </h1>
    )
}
export default CourseEditor