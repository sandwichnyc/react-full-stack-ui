import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from "./CourseList";
import CourseDetails from "./CourseDetails";

const InstructorApp = () => {
    return (
        <Router>
            <h1>Instructor Application</h1>
            <Switch>
                <Route exact path="/" render={() => <CourseList />} />
                <Route exact path="/courses" render={() => <CourseList />} />
                <Route path="/courses/:id" render={(props) => <CourseDetails {...props} />} />
            </Switch>
        </Router>
    );
};

export default InstructorApp;