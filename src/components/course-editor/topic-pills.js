import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"
import topicReducer from "../../reducers/topic-reducer";

const TopicPills = (
    {
        topics = [
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findTopicsForLesson,
        createTopicForLesson,
        deleteTopic,
        updateTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId, lesson} = useParams();

    useEffect(() => {
        //console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

    return (<div>

        <ul className='nav nav-pills mt-2'>
            {
                topics.map(topic =>
                    <li className='nav-item m-2'>

                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}`}
                            key={topic._id}
                            active={topic._id === topicId}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}/>

                    </li>)

            }
            <li>
                <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
       // console.log("LOAD LESSONS FOR MODULE")
      //  console.log(moduleId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPIC",
                topics: topics
            }))
    },
    createTopicForLesson: (lessonId) => {
       // console.log("CREATE LESSON FOR MODULE" + moduleId)
        topicService.createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: topicToDelete}))

    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))

    },

})

export default connect(stpm, dtpm)(TopicPills)