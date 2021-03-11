import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"
import moduleService from "../../services/module-service";

const LessonTabs = (
    {
        lessons = [
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        findLessonsForModule(moduleId)
    }, [moduleId])

    return (<div>

        <ul className='nav nav-tabs'>
            {
                lessons.map(lesson =>
                    <li className='nav-item'>

                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                key={lesson._id}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}
                                item={lesson}/>

                    </li>)

            }
            <li>
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
            </li>
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
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE" + moduleId)
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: lessonToDelete}))

    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))

    },

})

export default connect(stpm, dtpm)(LessonTabs)