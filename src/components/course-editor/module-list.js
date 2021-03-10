import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
//import {findModulesForCourse, createModule} from "../../services/module-service";
import moduleService from "../../services/module-service"


const ModuleList = (
    {
        modules=[],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse

    }) => {
    const {layout, courseId, moduleId} = useParams()
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return ( <div>
        <ul>
            <li>layout: {layout}</li>
            <li>layout: {courseId}</li>
            <li>layout: {moduleId}</li>
        </ul>


        {/*<h2>Module List</h2>*/}

        <ul className='list-group'>
            {
                modules.map(module =>
                <li className='list-group-item'>
                   <EditableItem
                       to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                       key={module._id}
                       deleteItem={deleteModule}
                       updateItem={updateModule}
                       item={module}/>
                </li>)
            }
            <li className='list-group-item'>
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
            </li>

        </ul>
    </div> )}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleService.createModule(courseId, {title: 'New Module'})
            .then(module => dispatch({type: "CREATE_MODULE", module: module}))

    },
    updateModule: (newItem) => {
        moduleService.updateModule(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newItem}))

    },
    deleteModule: (moduleToDelete) => {
        moduleService.deleteModule(moduleToDelete._id)
            .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))

    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules
        }))
    }
})

export default connect(stpm, dtpm)(ModuleList)