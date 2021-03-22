import React, {useState, useEffect} from "react";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = () => {
    const [widgets, setWidgets] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/topics/ABC234/widgets")
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    })
    return(
        <div>
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