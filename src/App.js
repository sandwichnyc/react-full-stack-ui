import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructorApp from "./components/InstructorApp";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
            <InstructorApp></InstructorApp>
        </div>
      </div>
    </div>
  );
}

export default App;
