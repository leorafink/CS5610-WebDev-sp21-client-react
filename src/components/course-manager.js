import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Route} from "react-router-dom";
import {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => this.setState({courses}))
    }

    deleteCourse = (course) => {
        alert("delete Course " + course._id)
        deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //     courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
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
                    <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
            </div>
        )
    }
}
export default CourseManager