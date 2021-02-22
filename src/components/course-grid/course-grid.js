import React from "react";
import {Link} from "react-router-dom";
import "../course-manager-style.css"
import "./course-grid-style.css"
import CourseCard from "../course-grid/course-card";

const CourseGrid = (props, {courses}) =>
    <div>
        {/*<Link to="/courses/table">*/}
        {/*    <i className="fas fa-2x fa-list float-right"></i>*/}
        {/*</Link>*/}


        <div>
            <div className="row LF-titleRowMargins">
                <div className="col-4">
                    <h5 className="LF-disappearS">Recent Documents</h5>
                </div>
                <div className="col-4">
                    <h5 className="LF-disappearS">Owned By</h5>
                </div>
                <div className="col-4">

                    <i className="fas fa-folder"></i>
                    <i className="fas fa-sort-alpha-up"></i>
                    <Link to="/courses/table">
                        <i className="fas fa-2x fa-list float-right"></i>
                    </Link>

                </div>
            </div>
        </div>


        <div className="row">
        {
            props.courses.map(course =>


                    <CourseCard
                        deleteCourse={props.deleteCourse}
                        updateCourse={props.updateCourse}
                        course={course}
                    />

                // <div className="card" style={{width: "18rem"}}>
                //     <img src="..." className="card-img-top" alt="..."/>
                //     <div className="card-body">
                //         <h5 className="card-title">{course.title}</h5>
                //         <p className="card-text">Some quick example text to
                //             the cards content.</p>
                //         <Link to="/editor" className="btn btn-primary">
                //             {course.title}
                //         </Link>
                //     </div>
                //
                // </div>
            )
        }
        </div>


    </div>

export default CourseGrid