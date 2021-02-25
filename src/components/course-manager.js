import React, {useState} from "react";
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Route, Link} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import "./course-manager-style.css"

export default class CourseManager extends React.Component {
    state = {
        courses: [],
        newTitle: 'new'
    }
    //newTitle = useState("")


    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }


    updateCourse = (course) => {

        courseService.updateCourse(course._id, course)
            .then(status => {

                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })

       // console.log(course)
    }

    deleteCourse = (course) => {
        alert("delete Course " + course._id)
        courseService.deleteCourse(course._id)
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
            title: this.state.newTitle.toString(),
            owner: "me",
            lastModified: "2/12/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {

                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })

        this.setState({newTitle: ""})

    }

    handleChange = event => {
        const myVal = event.target.value;
       this.setState({newTitle: myVal});
    }


    render() {



        return (
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                {/*<h1>Course Manager</h1>*/}


                <div>
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2">
                            <h4 className="disappear LF-disappear">Course Manager</h4>
                        </div>
                        <div className="col-8">
                            <input
                                name="inputt"
                                value={this.state.newTitle}
                                className="form-control"
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="col-1">
                            {/*<i onClick={this.addCourse(document.getElementById("inputTitle").val())} className="fa fa-plus-circle fa-2x"></i>*/}
                            <i onClick={this.addCourse} className="fa fa-plus-circle fa-2x"></i>
                        </div>
                    </div>
                </div>



                {/*<button onClick={this.addCourse}>*/}
                {/*    Add Course*/}
                {/*</button>*/}

                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        courses={this.state.courses}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}/>
                </Route>
                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
            </div>
        )
    }
}
//export default CourseManager