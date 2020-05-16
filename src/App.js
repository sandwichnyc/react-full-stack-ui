import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructorApp from "./components/InstructorApp";
import CourseList from "./components/CourseList";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
            <InstructorApp></InstructorApp>
            <CourseList></CourseList>
        </div>
      </div>
    </div>
  );
}

export default App;
