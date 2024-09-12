import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Courses from './components/pages/Courses/Courses';
import CourseDetailsPage from './components/pages/Courses/CourseDetailsPage';
import LogIn from './components/pages/LogIn/LogIn';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route exact path='/courses' component={Courses} />
          <Route path="/course/:id" component={CourseDetailsPage} />
          <Route path='/login' component={LogIn} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
