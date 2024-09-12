import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Courses.css';
import '../../../App.css';

import react from './Images/React.jpg';
import Javascript from './Images/Javascript.jpg';
import ML from './Images/ML.jpg';
import AI from './Images/AI.jpeg';
import ADS from './Images/ADS.jpg';
import Robotics from './Images/Robotics.jpg';
import programming from './Images/computer-system.jpg';
import OS from './Images/OS.jpg';
import noResultsImage from './Images/no-results.jpg';
import IR from './Images/React.mp4';
import AJ from './Images/Javascript.mp4';
import ml from './Images/ML.mp4';
import ai from './Images/AI.mp4';
import ads from './Images/ADS.mp4';
import robotics from './Images/Robotics.mp4';
import Programming from './Images/computer-system.mp4';
import os from './Images/OS.mp4';

const Courses = () => 
{
  // Mock course data
  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      instructor: 'John Doe',
      duration: '4 weeks',
      level: 'Beginner',
      price: 'Free',
      description: 'Description',
      coverImage: react,
      videos: [IR],
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 'Free',
      description: 'Description',
      coverImage: Javascript,
      videos: [AJ, ml, ai],
    },
    {
      id: 3,
      title: 'Machine Learning',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 'Free',
      description: 'Description',
      coverImage: ML,
      videos: [ml],
    },
    {
      id: 4,
      title: 'Artificial Intelligence',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 'Free',
      description: 'Description',
      coverImage: AI,
      videos: [ai],
    },
    {
      id: 5,
      title: 'Algorithms and Data Structures',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 'Free',
      description: 'Description',
      coverImage: ADS,
      videos: [ads],
    },
    {
      id: 6,
      title: 'Robotics',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 'Free',
      description: 'Description',
      coverImage: Robotics,
      videos: [robotics],
    },
    {
      id: 7,
      title: 'Programming in C and C++',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 'Free',
      description: 'Description',
      coverImage: programming,
      videos: [Programming],
    },
    {
      id: 8,
      title: 'Operating Systems',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
      price: 'Free',
      description: 'Description',
      coverImage: OS,
      videos: [os],
    },
  ];

  const itemsPerPage = 6; // Number of courses to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = courses.filter((course) =>
      course.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const filteredCourses = searchResults.length > 0 ? searchResults : courses.filter(
    (course) => course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  // Pagination
  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = searchResults.length > 0 ? searchResults : courses;
  const paginatedCourses = currentCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = Math.ceil(currentCourses.length / itemsPerPage);

    if (pageNumbers <= 1) {
      return null;
    }

    return (
      <ul className="pagination">
        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    );
  };

  const handleEnrollNow = () => {
    console.log(selectedCourse);
    history.push(`/course/${selectedCourse.id}`, {"selectedCourse": selectedCourse});
  };

  const handleAddToCart = () => {
    // Redirect to login page for authentication
    history.push('/login');
  };

  const handleAddToWishlist = () => {
    // Redirect to login page for authentication
    history.push('/login');
  };

  const renderCourseList = () => {
    if (filteredCourses.length === 0) {
      return (
        <div className="no-results">
          <img src={noResultsImage} alt="No results found" className="no-results-image" />
          <p className="no-results-message">No results found</p>
        </div>
      );
    }

    return (
      <div className="course-list">
        {paginatedCourses.map((course) => (
          <div
            key={course.id}
            className={`course-card ${selectedCourse === course ? 'selected' : ''}`}
            onClick={() => handleCourseClick(course)}
          >
            <img src={course.coverImage} alt={course.title} className="course-cover" />
            <div className="course-info">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-instructor">Instructor: {course.instructor}</p>
              <p className="course-duration">Duration: {course.duration}</p>
              <p className="course-level">Level: {course.level}</p>
              <p className="course-price">Price: {course.price}</p>
            </div>
            <div className="course-actions">
              <button
                className="add-to-cart-button"
                onClick={(event) => handleAddToCart(event, course)}
              >
                <i className="cart-icon fas fa-shopping-cart"></i>
                Add to Cart
              </button>
              <button
                className="wishlist-button"
                onClick={(event) => handleAddToWishlist(event, course)}
              >
                <i className="wishlist-icon fas fa-heart"></i>
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="course-catalog">
      <div className="search-bar">
        <i className="search-icon fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchTerm}
          onChange={handleSearchChange}
          list="course-options" // Add list attribute
        />
        {searchTerm && (
          <i className="clear-icon fas fa-times" onClick={handleClearSearch}></i>
        )}
        <datalist id="course-options"> {/* Add datalist with id */}
          {courses.map((course) => (
            <option key={course.id} value={course.title} />
          ))}
        </datalist>
      </div>
      {renderCourseList()}
      {renderPagination()}
      {selectedCourse && (
        <div className="enrollment-section">
          <div className="selected-course-details">
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            <button className="enroll-button" onClick={() => handleEnrollNow()}>
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;