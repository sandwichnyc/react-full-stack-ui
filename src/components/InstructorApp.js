import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from "./CourseList";
import CourseDetails from "./CourseDetails";

const InstructorApp = () => {
    return (
        <Router>
            <h1>Instructor Application</h1>
            <Switch>
                <Route path="/" exact render={CourseList} />
                <Route path="/courses" exact component={CourseList} />
                <Route path="/courses/:id" component={CourseDetails} />
            </Switch>
        </Router>
    );
};

export default InstructorApp;