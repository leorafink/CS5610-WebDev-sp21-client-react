import React from "react";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
     <h2>Course Grid</h2>
        <Link to="/courses/table">
          <i className="fas fa-list float-right"></i>
        </Link>
        <Link to="/editor">
            CS 5610
        </Link>

        {
            courses.map(course =>
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to
                            the cards content.</p>
                        <a href="#" className="btn btn-primary">Go Somewhere</a>
                    </div>

                </div>
            )
        }


    </div>

export default CourseGrid