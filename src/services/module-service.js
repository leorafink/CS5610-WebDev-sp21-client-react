const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/leorafink2/courses"

export const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application-json'
        }
    })
        .then(response => response.json());


export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
.then(response => response.json());

