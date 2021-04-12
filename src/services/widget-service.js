

//const WIDGETS_URL = "https://wbdv-generic-server.herokuapp.com/api/leorafink2/topics"
 const two_URL = "http://localhost:8080/api/widgets"
const WIDGETS_URL = "http://localhost:8080/api/topics"
//const two_URL = "https://wbdv-generic-server.herokuapp.com/api/leorafink2/widgets"

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGETS_URL}/${tid}/widgets`)
        .then(response => response.json())

export const createWidget = (tid, widget) =>
    fetch(`${WIDGETS_URL}/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${two_URL}/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export const updateWidget = (wid, widget) =>
    // console.log("Check",wid)
    fetch(`${two_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })

        .then(response => response.json());

export default {
    findWidgetsForTopic, createWidget, deleteWidget, updateWidget
}