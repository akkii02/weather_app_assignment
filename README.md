# Weather Application

## Description

This is a weather application that allows users to search for weather information by city name or use their current location to get weather updates. It displays various weather metrics including temperature, humidity, pressure, wind speed, and more, along with relevant icons and background images to represent different weather conditions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **OpenWeatherMap API**: Used to fetch weather data.
- **FontAwesome**: For icons.
- **CSS Modules**: For styling components.

## Approach

1. **Component Structure**:
   - `WeatherInput`: Handles user input for city search and current location.
   - `Weather`: Displays the weather information fetched from the OpenWeatherMap API.
   - `Navbar`: Provides a simple navigation bar with a dark mode toggle button.

2. **API Integration**:
   - The application uses Axios to make GET requests to the OpenWeatherMap API.
   - It fetches weather data based on either the city name input by the user or the user's current geographical coordinates obtained via the Geolocation API.

3. **Styling**:
   - CSS Modules are used for styling to ensure component-specific styles and prevent conflicts.
   - Background images and icons change dynamically based on the weather conditions.

4. **Dark Mode**:
   - Implemented a dark mode toggle using a button in the `Navbar` component.

## Known Issues or Limitations

- The application currently does not handle cases where the API request fails due to invalid city names or network issues.
- Geolocation API may not work on all browsers or if the user denies permission.
- Limited set of weather conditions for background images and icons, may not cover all possible weather scenarios.
## Some ScreenShoot 


## Instructions to Run the Application Locally

1. **Clone the Repository**:
   ```sh
   git clone <repository_url>

2. **Navigate to the Project Directory:**
   ```sh
   cd weather-app

3. **Install Dependencies:**
   ```sh
   npm install

4. **Run the Application:**
   ```sh
   npm start

5. **Open in Browser**:
   - The application will be running at http://localhost:3000.


