import React from "react";

const CourseRow = ({title, owner}) =>
    <tr>
        <td>{title}</td>
        <td>{owner}</td>
        <td>1/1/2021</td>
        <td>
            <i className="fas fa-trash"></i>
            <i className="fas fa-edit"></i>
            <i className="fas fa-check"></i>
        </td>
    </tr>

export default CourseRow