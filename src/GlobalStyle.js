import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900&display=swap');

/* Color Variables */
:root {
    --primary-color: #3B82F6;        /* Blue - primary action */
    --primary-hover: #2563EB;        /* Darker Blue for hover */
    --secondary-color: #14B8A6;      /* Teal - secondary action */
    --accent-color: #F97316;         /* Orange - accents like buttons */
    --background-color: #F9FAFB;     /* Light gray background */
    --card-bg-color: #FFFFFF;        /* White for cards and containers */
    --text-color: #374151;           /* Dark gray for body text */
    --text-light-color: #6B7280;     /* Light gray for secondary text */
    --border-color: #E5E7EB;         /* Border color */
    --error-color: #EF4444;          /* Red for errors */
    --success-color: #10B981;        /* Green for success messages */
    --task-color: #eff2f9;
}

/* Reset and Global Styles */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
 
html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: "Poppins", sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
}

/* Utility Classes */
a {
    text-decoration: none;
    color: inherit;
}

button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
}

input, textarea {
    font-family: inherit;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background: var(--background-color);
}
`;

export default GlobalStyle;
