import React from "react";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
        </Link>
     <h2>Course Grid</h2>


        <div className="row">
        {
            courses.map(course =>
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">Some quick example text to
                            the cards content.</p>
                        <Link to="/editor" className="btn btn-primary">
                            Go Somewhere
                        </Link>
                    </div>

                </div>
            )
        }
        </div>


    </div>

export default CourseGrid