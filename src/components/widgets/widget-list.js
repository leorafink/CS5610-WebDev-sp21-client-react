import React, {useState, useEffect} from "react";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";
import {connect} from "react-redux";
import widgetReducer from "../../reducers/widget-reducer";
import widgetService from "../../services/widget-service"
import EditableItem from "../editable-item";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic

    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
   // const [widget, setWidget] = useState({})
    const [editingWidget, setEditingWidget] = useState({});
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        //console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    //const [widgets, setWidgets] = useState([])
    /*useEffect(() => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])*/

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List {editingWidget.id}</h1>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li key={widget.id} className="list-group-item">
                        {
                            //editingWidget.id === widget.id &&
                            editing &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget)
                                        setEditing(false)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() =>
                                        deleteWidget(widget)
                                    } className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                          //  editingWidget.id !== widget.id &&
                            !editing &&
                            <i onClick={() => setEditing(true)} className="fas fa-2x fa-cog float-right"></i>
                        }


                        {
                            widget.type === "HEADING" &&
                                <HeadingWidget widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget widget={widget}/>
                        }

                       {/* <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget._id}`}
                            key={widget._id}
                            active={widget._id === widgetId}
                            deleteItem={deleteWidget}
                            updateItem={updateWidget}
                            item={widget}/>*/}
                    </li>)
                }
            </ul>
        </div>
    )
}
const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGET",
                widgets: widgets
            }))
    },
    createWidget: (topicId) => {
        // console.log("CREATE LESSON FOR MODULE" + moduleId)
        widgetService.createWidget(topicId, {type: "HEADING", size: 2, text: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete._id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: widgetToDelete}))

    },
    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))

    },

})

export default connect(stpm, dtpm)(WidgetList)
