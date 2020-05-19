import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import CourseDataService from "../services/CourseDataService";
import { useHistory } from "react-router-dom";

const INSTRUCTOR = "villani";

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [message, setMessage] = useState(null);
    let history = useHistory();

    const refreshCourses = () => {
        CourseDataService.getAllCourses(INSTRUCTOR)
            .then(
                response => {
                    setCourses(response.data);
                }
            );
    };

    const deleteCourse = (id) => {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    setMessage(`Deletion of course ${id} Successful`);
                    refreshCourses();
                }
            )
    };

    const updateCourse = (id) => {
        console.log(history);
        history.push(`/courses/${id}`);
    };

    const addCourseClicked = () => {
        history.push(`/courses/-1`)
    };

    useEffect(() => {
        refreshCourses();
    },[]);

    return (
        <>
            {message && <div className="alert alert-success">{message}</div>}
            <div className="row">
                <div className="col-12 text-right mb-3">
                    <button className="btn btn-success" onClick={addCourseClicked}>Add Course</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Table
                        striped
                        bordered
                        hover
                        variant="dark"
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map(course =>
                                    <tr key={course.id}>
                                        <td>{course.id}</td>
                                        <td>{course.description}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => updateCourse(course.id)}
                                                >Update</button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteCourse(course.id)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default CourseList;