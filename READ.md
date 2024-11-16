# Task Management Application

A simple React application to manage tasks efficiently with options to add, sort, and display tasks.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Assumptions](#assumptions)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- Add new tasks with a description, date, and priority.
- Sort tasks based on completion status, creation date, or priority.
- Display a message with an illustration when there are no tasks.
- Responsive design optimized for various screen sizes.
- User-friendly interface using React Icons and Styled Components.

## Technologies Used

- **React**: JavaScript library for building interactive user interfaces.
- **Styled Components**: CSS-in-JS for styling components.
- **React Icons**: For adding visually appealing icons.
- **React Hooks**: For managing state, side effects, and context.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Danveer22/task-management-app.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd task-management-app
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and go to:

   ```
   http://localhost:3000
   ```

## Usage

1. **Add Tasks**: Enter a task description, set a priority level, and click "Add Task" to include it in your task list.
2. **Sort Tasks**:
   - Use the dropdown to sort tasks by completion status, creation date, or priority.
   - Newly added tasks will not automatically resort until sorted again.
3. **View Tasks**:
   - All added tasks are listed in the main section.
   - If no tasks are available, an illustration with a message is shown.
4. **Delete Tasks**: Click on a task to remove it from the list.

## Assumptions

- **Sorting**: The selected sorting option does not automatically reorder new tasks; you need to reselect the sorting method.
- **Priority**: By default, new tasks are assigned a low priority if not specified.
- **Data Persistence**: The application does not persist data after page reload. For persistence, integration with a database or local storage would be needed.

## Deployment

You can view the live application [here](https://your-deployed-link.netlify.app/).

## Screenshots

### 1. Main Task List

![Main Task List](./screenshots/main-task-list.png)

### 2. No Tasks Illustration

![No Tasks](./screenshots/no-tasks.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
