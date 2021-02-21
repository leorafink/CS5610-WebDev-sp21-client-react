import React from "react";
import {Link} from "react-router-dom";

const CourseGrid = () =>
    <div>
     <h2>Course Grid</h2>
        <Link to="/courses/table">
          <i className="fas fa-list float-right"></i>
        </Link>
    </div>

export default CourseGrid