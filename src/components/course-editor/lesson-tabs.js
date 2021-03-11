import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
        lessons = [
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        findLessonsForModule(moduleId)
    //     console.log("LOAD LESSONS FOR MODULE: " + moduleId)
    //     if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
    //         findLessonsForModule(moduleId)
    //     }
    // }, [moduleId])
        //findLessonsForModule(moduleId)
    }, [])

    return (<div>

        <ul className='nav nav-tabs'>
            {
                lessons.map(lesson =>
                    <li className='nav-item'>

                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}/>

                    </li>)
            }
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons: lessons
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)