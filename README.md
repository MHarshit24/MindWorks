# Course Management Platform

This repository contains the source code for a **Course Management Platform**. The platform offers an interactive user interface for browsing courses, viewing course details, and managing user interactions like enrollment and wishlist.

## Features

- **Course Catalog**: Browse available courses with details such as title, instructor, duration, and level.
- **Course Details**: View comprehensive details of selected courses, including video lectures and additional notes.
- **Search and Filter**: Easily search for courses using the integrated search bar.
- **User Interaction**:
  - Add courses to a wishlist or cart.
  - Enroll in courses (requires authentication).
- **Login and Registration**: Seamless user login and registration functionality.
- **Responsive Design**: Optimized for devices of various screen sizes.

---

## Directory Structure

### Components

- **Home Page** (`Home.js`): The entry point of the platform that displays featured courses and links to other sections.
- **Courses Page** (`Courses.js`, `Courses.css`): Lists all available courses with pagination and search functionality.
- **Course Details Page** (`CourseDetailsPage.js`, `CourseDetailsPage.css`): Displays detailed information about a selected course, including a video player for lecture previews.
- **Login and Registration** (`LogIn.js`, `LogIn.css`): Handles user authentication with toggling between login and registration forms.
- **Cards** (`Cards.js`, `CardItem.js`, `Cards.css`): Used for displaying featured courses or tutorials in a card-based layout.

### Shared Styles

- **CSS Files**: 
  - `Courses.css`: Styles for the Courses page.
  - `CourseDetailsPage.css`: Styles for the Course Details page.
  - `LogIn.css`: Styles for login and registration forms.
  - Other components have their individual styling for modular design.

### Images and Videos

- The `Courses.js` file references several images and videos for course covers and video lectures stored in the `Images` folder.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/course-management-platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd course-management-platform
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application should now be accessible at `http://localhost:3000`.

---

## Usage

1. Navigate through the **Home Page** to explore featured courses.
2. Browse courses in the **Courses Page**, use the search bar to find specific ones, or click on a course for more details.
3. Enroll in a course or add it to your cart or wishlist.
4. Use the **Login Page** to create an account or log in to save progress.

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS3
- **Routing**: React Router

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your branch:
   ```bash
   git push origin feature-name
   ```
4. Create a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
