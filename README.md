# Countries Flags and Details App

This is a React application that provides users with a list of countries, their flags, and detailed information about each country. The app uses **ReactJS**, **Redux Toolkit**, **React Router**, and **Styled Components** to create a responsive and interactive experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Core Concepts and Techniques](#core-concepts-and-techniques)
  - [ReactJS](#reactjs)
  - [Redux Toolkit](#redux-toolkit)
  - [React Router](#react-router)
  - [Styled Components](#styled-components)
- [Features](#features)

## Project Overview

This app provides a list of countries along with their flags. Users can filter countries based on their name and region. By clicking on a country, users can view detailed information about the country, including its population, region, capital, and neighboring countries.
## Live:

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: Simplifies the management of global state in the app.
- **React Router**: For handling dynamic routing between pages.
- **Styled Components**: For writing CSS in JavaScript to style the app.
- **Axios**: For making API requests to fetch country data.
- **React Icons**: For adding icons in the UI.

## Core Concepts and Techniques

### ReactJS

- **Functional Components**: The app is built using functional components. Components like `Header`, `Main`, `Card`, `CountryDetails`, and others represent the different parts of the user interface.
- **JSX Syntax**: The application uses JSX to render the UI, allowing HTML-like syntax in JavaScript.
- **React Hooks**: 
  - `useState` and `useEffect` are used for managing state and performing side-effects (such as data fetching).
  - `useNavigate` and `useParams` from `react-router-dom` are used for navigation and handling route parameters.
- **Responsive Layout**: The app uses **media queries** within styled components to ensure the app is responsive across devices.

### Redux Toolkit

- **Centralized State Management**: Redux Toolkit is used to manage the app’s state, such as country data, search query, and filter options (region).
- **createSlice and createAsyncThunk**: 
  - **`createSlice`** defines reducers and actions for managing state in a simplified manner.
  - **`createAsyncThunk`** is used to fetch data asynchronously, like the list of countries or the details of a selected country.
- **Selectors**: Functions like `selectCountries`, `selectVisibleCountries`, and `selectDetails` help retrieve the state from the Redux store for rendering components.
  
### React Router

- **Dynamic Routing**: React Router is used to handle dynamic routes in the app, enabling navigation between different views.
  - **Homepage**: The homepage is displayed at the `/` route using the `HomePage` component.
  - **Country Details**: A dynamic route `/country/:name` is used to show the details of a specific country.
  - **NotFound Page**: A fallback page is shown when the user navigates to an unknown route (`*`).
- **`useNavigate` and `useParams` Hooks**: 
  - **`useNavigate`** is used for programmatic navigation.
  - **`useParams`** is used to fetch route parameters (e.g., country name) from the URL.

### Styled Components

- **CSS-in-JS**: The app uses **Styled Components** to create reusable and scoped styles for components. 
- **Responsive Styling**: The layout adjusts automatically based on the screen size using media queries inside styled components.

## Features

- **Search Bar**: Users can search for countries by name.
- **Region Filter**: A dropdown allows users to filter countries by region (e.g., Africa, Asia, etc.).
- **Country Details Page**: Clicking on a country shows detailed information about the country, including population, region, capital, and neighboring countries.
- **Error Handling**: The app handles errors gracefully, such as when fetching country data fails or there’s no matching data.


# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).
