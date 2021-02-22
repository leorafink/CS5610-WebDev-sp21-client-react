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
                <Link to="/courses/grid">
                    <i className="fas fa-th float-right fa-2x"></i>
                </Link>
                <h2>Course Table</h2>
                {/*<Link to="/courses/grid">*/}
                {/*<i className="fas fa-table float-right"></i>*/}
                {/*</Link>*/}

                <table className="table">
                    {/*<CourseRow title="CS5610" owner="me"/>
                    <CourseRow title="CS5800" owner="you"/>
                    <CourseRow title="CS5200" owner="her"/>
                    <CourseRow title="CS4550" owner="him"/>*/}

                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified</th>
                        <th>
                            <i className="fas fa-folder"></i>
                            <i className="fas fa-sort-alpha-up"></i>
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