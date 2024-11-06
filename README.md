# Country Explorer 🌍

Country Explorer is a web application that allows users to explore data from countries around the world. It fetches real-time information from the REST Countries API and offers an intuitive interface to search, filter, view details, and manage a list of favorite countries. The app also supports dark mode and is fully responsive across various devices and browsers.

## Features

- **Search Functionality**: Search for countries by name.
- **Region Filter**: Filter countries by region (Africa, Americas, Asia, Europe, Oceania, All).
- **Favorite List**: Add up to five countries to your favorites list, stored locally.
- **Detailed View**: View detailed information of each country in a modal.
- **Responsive Design**: Adaptable design for mobile, tablet, and desktop devices.
- **Cross-Browser Compatibility**: Tested on Chrome, Firefox, and Safari.

## Setup Instructions

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Vibha-Prajapati/CountryExplorer.git
2. Navigate to the project directory:
   ```bash
Copy code
cd country_explorer
3. Open the index.html file in your preferred browser to view the app:
    ```bash
Copy code
open index.html
Note: This project uses vanilla JavaScript, HTML, and CSS, so no additional setup is required.

## Design Decisions

- **Favorites Feature**: Allows users to save up to five countries in local storage, preserving their selections across page refreshes.
- **Dark Mode**: Implemented using CSS variables for easy theme switching, providing a more comfortable viewing experience in low-light environments.
- **Responsive Grid Layout**: Utilizes CSS Grid to create a flexible, responsive design that adapts seamlessly to various screen sizes.
- **Performance Optimization**: Data is fetched from the REST Countries API once on initial load and is filtered locally to reduce the number of API calls and improve performance.

## Running Tests

To ensure the app works as expected, follow these manual testing steps:

- **Cross-browser Testing**: Open `index.html` in major browsers (Chrome, Firefox, Safari) to verify compatibility.
- **Responsiveness Test**: Resize the browser window to check responsiveness on mobile, tablet, and desktop views.
- **Favorites Feature**: Add countries to favorites, refresh the page to confirm persistence, and check that only five favorites can be saved.
  
  > **Reporting Issues**: If any browser does not behave as expected, please report it in the repository's [Issues section](https://github.com/Vibha-Prajapati/CountryExplorer/issues).

## Known Issues & Limitations

- **Language Filter**: The language filter feature is currently a placeholder and is not fully implemented.
- **Browser Compatibility**: The app is tested on Chrome, Firefox, and Safari but has not been tested on Edge or Internet Explorer.
- **Performance on Slow Networks**: API fetch delays might impact performance for users on slower networks.

## Time Spent

Approximate time spent on the project:

- **UI and Styling**: 3 - 4 hours
- **JavaScript Functionality (API, filtering, favorites)**: 4 - 5 hours
- **Debugging and Cross-Browser Testing**: 2 - 2.5 hours
- **Documentation and Code Cleanup**: 1 - 2 hours

## Future Enhancements

Potential future improvements for the project include:

- **Language-based Filtering**: Implement a filter for languages to allow users to narrow down countries by spoken languages.
- **Sorting Options**: Add sorting functionality, such as sorting by population or country name.
- **Improved UX for Country Details Modal**: Enhance the layout and design of the modal view for country details.
- **Map View**: Integrate a map view to provide geographic context for each country, showing its location on a map.

## Credits

Developed by Vibha Prajapati
