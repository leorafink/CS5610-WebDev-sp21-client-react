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
                {/*<Link to="/courses/grid">*/}
                {/*    <i className="fas fa-th float-right fa-2x"></i>*/}
                {/*</Link>*/}

{/*<div>*/}
{/*    <div className="row">*/}
{/*        <div className="col-1">*/}
{/*            <i className="fa fa-bars fa-2x"></i>*/}
{/*        </div>*/}
{/*        <div className="col-2">*/}
{/*            <h4 className="disappear">Course Table</h4>*/}
{/*        </div>*/}
{/*        <div className="col-8">*/}
{/*            <input className="form-control"/>*/}
{/*        </div>*/}
{/*        <div className="col-1">*/}
{/*            <i className="fa fa-plus-circle fa-2x"></i>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}
{/*<br/>*/}

            {/*<h2>*/}

            {/*        <i className="fas fa-bars"></i>*/}
            {/*        Course Table*/}
            {/*        <input/>*/}
            {/*</h2>*/}

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