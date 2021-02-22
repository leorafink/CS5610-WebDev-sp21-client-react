import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Route} from "react-router-dom";

class CourseManager extends React.Component {
    state = {
        courses: [
            {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
            {title: "CS4500", owner: "you", lastModified: "7/21/2021"},
            {title: "CS3200", owner: "him", lastModified: "5/4/2021"},
            {title: "CS5800", owner: "her", lastModified: "6/1/2021"}
        ]
    }

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
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>
                    Add Course
                </button>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid">
                    <CourseGrid courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table">
                    <CourseTable courses={this.state.courses}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
            </div>
        )
    }
}
export default CourseManager