import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './CourseDetailsPage.css';
import '../../../App.css';

const CourseDetailsPage = (props) => {
  useEffect(() => {
    console.log(props.location.state?.selectedCourse);
  }, [props.location.state?.selectedCourse]);

  const { selectedCourse } = props.location.state || {};

  if (!selectedCourse) {
    return <div className="loading">Loading...</div>;
  }

  const { title, instructor, duration, level, price, description, videos, additionalNotes } = selectedCourse;

  return (
    <div className="course-details-container">
      <div className="course-details-header">
        <img src={selectedCourse.coverImage} alt={selectedCourse.title} className="course-details-cover" />
        <div className="course-details-info">
          <div className="course-details-title">{title}</div>
          <div className="course-details-details">
            <p>Instructor: {instructor}</p>
            <p>Duration: {duration}</p>
            <p>Level: {level}</p>
            <p>Price: {price}</p>
          </div>
          <div className="course-details-description">{description}</div>
        </div>
      </div>

      <div className="course-details-video-list">
        <h3>Videos</h3>
        <ul>
          {videos.map((video, index) => (
            <li key={index} className="course-details-video-item">
              <p className="course-details-video-title">Lecture {index + 1}</p>
              <video controls className="course-details-video">
                <source src={video} type="video/mp4" />
              </video>
            </li>
          ))}
        </ul>
      </div>

      <div className="additional-notes">
        <h3>Additional Notes</h3>
        <p>{additionalNotes}</p>
      </div>

      <Link to="/courses" className="back-button">
        Back to Courses
      </Link>
    </div>
  );
};

export default withRouter(CourseDetailsPage);