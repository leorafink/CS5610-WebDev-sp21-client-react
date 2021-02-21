import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";

class CourseManager extends React.Component {
    state = {
        courses: [
            {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
            {title: "CS4500", owner: "you", lastModified: "7/21/2021"},
            {title: "CS3200", owner: "him", lastModified: "5/4/2021"},
            {title: "CS5800", owner: "her", lastModified: "6/1/2021"}
        ]
    }
    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <CourseTable courses={this.state.courses}/>
                <CourseGrid courses={this.state.courses}/>
            </div>
        )
    }
}
export default CourseManager