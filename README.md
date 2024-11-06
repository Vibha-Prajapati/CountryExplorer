##🌍 Country Explorer
Country Explorer is a web application designed to let users explore and interact with real-time data from countries worldwide. It utilizes the Rest Countries API to deliver a seamless experience for searching, filtering, viewing details, and managing a list of favorite countries. The app includes features like dark mode, responsive design, and compatibility across major browsers.

##🚀 Features
🔍 Search Functionality: Search for countries by name for quick access.
🌍 Region Filter: Filter countries by region (Africa, Americas, Asia, Europe, Oceania, All).
⭐ Favorite List: Add up to five countries to your favorites, stored locally to persist even after refreshing.
ℹ️ Detailed View: View detailed information about each country in an easy-to-read modal.
🌗 Dark Mode: Toggle between dark and light modes for enhanced accessibility.
📱 Responsive Design: Optimized for mobile, tablet, and desktop.
🖥️ Cross-browser Compatibility: Tested on Chrome, Firefox, and Safari.
🛠️ Setup Instructions
To run the project locally:

Clone the repository to your local machine:
bash
Copy code
git clone 
Navigate to the project directory:
bash
Copy code
cd Explore-World
Open the application in your preferred browser:
bash
Copy code
open index.html
No additional setup is needed as the project uses vanilla JavaScript, HTML, and CSS.

💡 Design Decisions
Favorites Feature: Enables users to save up to five favorite countries, stored in local storage for persistent state.
Dark Mode: Implemented using CSS variables, making it efficient and simple to switch themes.
Responsive Grid Layout: Countries are displayed using CSS Grid, allowing the layout to adjust gracefully across various screen sizes.
Performance Optimization: Data is fetched once from the API and filtered locally, reducing the number of API requests and improving speed.
🧪 Running Tests
To ensure full functionality:

Cross-browser Testing: The app has been tested on Chrome, Firefox, and Safari. Open index.html in each browser to verify compatibility.
Responsiveness Test: Resize the browser window to test the responsive design across mobile, tablet, and desktop views.
Favorites Feature Test: Add countries to favorites, refresh the page, and ensure that favorites persist. Note the limitation of adding up to five countries.
For any unexpected behavior, please report issues in the repository’s Issues section.

⚠️ Known Issues & Limitations
Language Filter: Currently a placeholder, planned for future implementation.
Browser Support: Tested on Chrome, Firefox, and Safari; not yet tested on Edge or Internet Explorer.
Performance on Slow Networks: API fetching may cause slight delays on slow connections.
⏱️ Time Spent
Approximate Total Time: 10 hours

3 hours – Building the UI and styling.
4 hours – Implementing JavaScript (API fetching, filtering, and managing favorites).
2 hours – Debugging and cross-browser testing.
1 hour – Writing documentation and code cleanup.
🌱 Future Enhancements
Language-based Filtering: Allow filtering countries by primary language.
Sorting Options: Add sorting by population or country name for better usability.
Improved Modal UX: Enhance the modal display for country details.
Map View: Introduce a map view for geographical context.
📜 Credits
Developed by Vibha Prajapati
