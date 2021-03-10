import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home.js"

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          <Route path={[
              "/courses/:layout/edit/:courseId",
              "/courses/:layout/edit/:courseId/modules/:moduleId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId"
          ]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}/>
        {/*<div className="container-fluid">
            <CourseManager/>
            <CourseEditor/>
        </div>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
