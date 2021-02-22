const COURSES_URL ="https://wbdv-generic-server.herokuapp.com/api/leorafink/courses"

export const findAllCourses = () =>
    fetch(COURSES_URL)
    .then(response => response.json())

export const deleteCourse = (courseID) =>
    fetch(`${COURSES_URL}/${courseID}`, {
        method: 'DELETE'
    })
        .then(response => response.json())