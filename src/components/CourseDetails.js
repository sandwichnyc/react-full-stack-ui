import React, {useEffect, useState} from 'react';
import CourseDataService from "../services/CourseDataService";

const INSTRUCTOR = 'villani';

const CourseDetails = (props) => {
    const [id, setId] = useState(-1);
    const [description, setDescription] = useState(' ');

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

    return (
        <div>
            <h3>Course</h3>
            <div>{id}</div>
            <div>{description}</div>
        </div>
    )
};

export default CourseDetails;
