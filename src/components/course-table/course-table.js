import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "../course-manager-style.css"

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>




                <table className="table">


                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="LF-disappearXs">Owned By</th>
                        <th className="LF-disappear">Last Modified</th>
                        <th>
                            <i className="fas fa-folder"></i>
                            <i className="fas fa-sort-alpha-up"></i>
                            <Link to="/courses/grid">
                                <i className="fas fa-th float-right fa-2x"></i>
                            </Link>
                            &nbsp;
                        </th>
                    </tr>
                    </thead>
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                            />)
                    }
                </table>
            </div>
        )
    }
}