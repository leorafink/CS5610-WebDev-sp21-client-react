import React from "react";
import CourseRow from "./course-row";

export default class CourseTable extends
    React.Component {
    state = {
        courses: [
            {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
            {title: "CS4500", owner: "you", lastModified: "7/21/2021"},
            {title: "CS3200", owner: "him", lastModified: "5/4/2021"},
            {title: "CS5800", owner: "her", lastModified: "6/1/2021"}
        ]
    }
    /*courses = [
        {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
        {title: "CS4500", owner: "you", lastModified: "7/21/2021"},
        {title: "CS3200", owner: "him", lastModified: "5/4/2021"},
        {title: "CS5800", owner: "her", lastModified: "6/1/2021"}
    ]*/

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/12/2021"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }
    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <button onClick={this.addCourse}>Add Course</button>
                <table className="table">
                    {/*<CourseRow title="CS5610" owner="me"/>
                    <CourseRow title="CS5800" owner="you"/>
                    <CourseRow title="CS5200" owner="her"/>
                    <CourseRow title="CS4550" owner="him"/>*/}
                    {
                        this.state.courses.map(course =>
                            <CourseRow
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