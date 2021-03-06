import React from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import "./course-editor-style.css"
import moduleReducer from "../../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import lessonReducer from "../../reducers/lesson-reducer";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills"
import topicReducer from "../../reducers/topic-reducer";
import WidgetList from "../widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams()
    return (
         <Provider store={store}>
        <div className="container">
        <h1>

            <span onClick={() => history.goBack()}>
                {/*Go Back*/}
                <i className="fas fa-arrow-left"></i>
            </span>

            <div>
            Course Editor
            </div>
        </h1>


{/*
<ul>
    <li>layout: {layout}</li>
    <li>layout: {courseId}</li>
    <li>layout: {moduleId}</li>
</ul>
*/}


        <div className="row LF-WebDevHeader">
            <div className="col-4">
                <h3>
                    <i className="fa fa-times"></i>
                    CS 5610 - WebDev
                </h3>

            </div>

            <div className="col-8">
                <LessonTabs/>
                {/*<ul className="nav nav-tabs">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Build
                            <i className="pull-right fa fa-trash"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">
                            Pages
                            <i className="pull-right fa fa-trash"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">
                            Theme
                            <i className="pull-right fa fa-trash"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">
                            Store
                            <i className="pull-right fa fa-trash"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">
                            Apps
                            <i className="pull-right fa fa-trash"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">
                            Settings
                            <i className="pull-right fa fa-trash"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fa fa-plus text-white"></i>
                        </a>
                    </li>
                </ul>
*/}
            </div>


        </div>



         <div className="row">
            <div className="col-4">
                <ModuleList/>

                {/*<ul className="list-group LF-ModuleTabs">
                    <li className="list-group-item LF-ModuleTabs2">
                        Module 1
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item LF-ModuleTabs2">
                        Module 2
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item LF-ModuleTabs2">
                        Module 3
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item active LF-ModuleTabs2">
                        Module 4
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item LF-ModuleTabs2">
                        Module 5
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item LF-ModuleTabs2">
                        Module 6
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item LF-ModuleTabs2">
                        Module 7
                        <i className="pull-right fa fa-times"></i>
                    </li>

                    <div className="text-white">
                        <i className="pull-right fa fa-plus"></i>
                    </div>


                </ul>
*/}
            </div>


            <div className="col-8">

                <TopicPills/>
                <WidgetList/>

                {/*<ul className="nav nav-pills mt-2">

                    <li className="nav-item m-2">
                        <a className="nav-link LF-TopicPills" href="#">
                            Topic 1
                        </a>
                    </li>

                    <li className="nav-item m-2">
                        <a className="nav-link LF-TopicPills" href="#">
                            Topic 2
                        </a>
                    </li>

                    <li className="nav-item m-2">
                        <a className="nav-link LF-TopicPills" href="#">
                            Topic 3
                        </a>
                    </li>

                    <li className="nav-item m-2">
                        <a className="nav-link LF-TopicPills" href="#">
                            Topic 4
                        </a>
                    </li>

                    <li className="nav-item m-2">
                        <a className="nav-link LF-TopicPills" href="#">
                            <i className="fa fa-plus"></i>
                        </a>
                    </li>

                </ul>
*/}
            </div>
        </div>


    {/*</div>*/}

        </div>
        </Provider>

)
}
export default CourseEditor