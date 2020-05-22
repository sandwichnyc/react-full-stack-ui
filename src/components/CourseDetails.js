import React, { useEffect, useState } from 'react';
import CourseDataService from "../services/CourseDataService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";

const INSTRUCTOR = 'villani';

const CourseDetails = (props) => {
    const [id, setId] = useState(-1);
    const [description, setDescription] = useState(' ');
    let history = useHistory();

    useEffect(() => {
        setId(props.match.params.id);

        // eslint-disable-next-line
        if (id == -1) {
            return
        }

        CourseDataService.getCourse(INSTRUCTOR, id)
            .then(response => {
                    setDescription(response.data.description);
                }
            );
    }, [id]);

    const validate = (values)  => {
        let errors = {};
        if (!values.description) {
            errors.description = 'Description cannot be empty.'
        } else if (values.description.length < 5) {
            errors.description = 'Descriptions must contain at least 5 characters.'
        }

        return errors
    };

    const onSubmit = (values) => {
        let username = INSTRUCTOR;

        let course = {
            id,
            description: values.description
        };

        if (id === -1) {
            CourseDataService.createCourse(username, course)
                .then(() => history.push('/courses'))
        } else {
            CourseDataService.updateCourse(username, id, course)
                .then(() => history.push('/courses'))
        }

    };

    return (
        <div>
            <h3>Course</h3>
            <div className="container">
                <Formik
                    enableReinitialize={true}
                    initialValues={{ id, description }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
};

export default CourseDetails;
