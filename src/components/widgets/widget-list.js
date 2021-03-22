import React, {useState, useEffect} from "react";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = () => {
    const {topicId} = useParams()
    const [widgets, setWidgets] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])
    return(
        <div>
            <i className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li key={widget.id} className="list-group-item">
                        {
                            widget.type === "HEADING" &&
                                <HeadingWidget widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget widget={widget}/>
                        }
                    </li>)
                }
            </ul>
        </div>
    )
}

export default WidgetList