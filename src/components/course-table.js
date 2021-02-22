import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <Link to="/courses/grid">
                <i className="fas fa-table float-right"></i>
                </Link>

                <table className="table">
                    {/*<CourseRow title="CS5610" owner="me"/>
                    <CourseRow title="CS5800" owner="you"/>
                    <CourseRow title="CS5200" owner="her"/>
                    <CourseRow title="CS4550" owner="him"/>*/}
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                             /*   title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}*/
                            />)
                    }
                </table>
            </div>
        )
    }
}