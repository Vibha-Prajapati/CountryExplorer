const apiUrl = "https://restcountries.com/v3.1";
let currentPage = 1;
const pageSize = 10;
let allCountries = [];
let favoriteCountries = JSON.parse(localStorage.getItem("favorites")) || [];

// Initialize the app on page load
document.addEventListener("DOMContentLoaded", () => {
    loadCountries();
    setupSearchListener();
    setupFilterListeners();
    renderFavoriteCountries();  // Render favorite countries initially
    document.getElementById("show-more-btn").addEventListener("click", showMoreCountries);
});

// Fetch and load countries
async function loadCountries() {
    try {
        const response = await fetch(`${apiUrl}/all`);
        allCountries = await response.json();
        renderCountries(allCountries.slice(0, pageSize * currentPage));
    } catch (error) {
        console.error("Error fetching countries:", error);
        alert("Failed to load country data.");
    }
}

// Render countries as cards
function renderCountries(countries) {
    const countryList = document.getElementById("country-list");
    countryList.innerHTML = "";
    countries.forEach(country => {
        const countryCard = document.createElement("div");
        countryCard.classList.add("country-card");
        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common} Flag" class="country-flag">
            <h3>${country.name.common}</h3>
            <p>Region: ${country.region}</p>
            <button class="details-btn" onclick="showCountryDetails('${country.cca3}')">View Details</button>
            <button class="favorite-btn" id="favorite-btn-${country.cca3}" onclick="toggleFavorite('${country.cca3}')">
                <i class="heart-icon ${favoriteCountries.includes(country.cca3) ? 'filled' : ''}">&#9825;</i>
            </button>
        `;
        countryList.appendChild(countryCard);
    });
}

// Show more countries
function showMoreCountries() {
    currentPage++;
    renderCountries(allCountries.slice(0, pageSize * currentPage));
}

// Search countries
function setupSearchListener() {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredCountries = allCountries.filter(country =>
            country.name.common.toLowerCase().includes(query)
        );
        renderCountries(filteredCountries);
    });
}

// Filters functionality
function setupFilterListeners() {
    const languageFilter = document.getElementById("language-filter");
    const regionFilter = document.getElementById("region-filter");

    languageFilter.addEventListener("change", () => {
        const language = languageFilter.value;
        if (language) {
            const filteredCountries = allCountries.filter(country =>
                country.languages && Object.values(country.languages).includes(language)
            );
            renderCountries(filteredCountries);
        } else {
            renderCountries(allCountries.slice(0, pageSize * currentPage));
        }
    });

    regionFilter.addEventListener("change", () => {
        const region = regionFilter.value;
        if (region) {
            const filteredCountries = allCountries.filter(country => country.region === region);
            renderCountries(filteredCountries);
        } else {
            renderCountries(allCountries.slice(0, pageSize * currentPage));
        }
    });
}

// View country details
function showCountryDetails(cca3) {
    const country = allCountries.find(c => c.cca3 === cca3);
    if (country) {
        document.getElementById("country-name").textContent = country.name.common;
        document.getElementById("country-flag").src = country.flags.svg;
        document.getElementById("country-domain").textContent = `Top-Level Domain: ${country.tld || "N/A"}`;
        document.getElementById("country-capital").textContent = `Capital: ${country.capital || "N/A"}`;
        document.getElementById("country-population").textContent = `Population: ${country.population}`;
        document.getElementById("country-area").textContent = `Area: ${country.area} km²`;
        document.getElementById("country-languages").textContent = `Languages: ${Object.values(country.languages || {}).join(", ")}`;
        document.getElementById("country-details").style.display = "flex";
    }
}

// Close the country details popup
function closeDetails() {
    document.getElementById("country-details").style.display = "none";
}

// Add or remove from favorites
function toggleFavorite(cca3) {
    const heartIcon = document.getElementById(`favorite-btn-${cca3}`).querySelector('.heart-icon');
    
    if (favoriteCountries.includes(cca3)) {
        // Remove from favorites
        favoriteCountries = favoriteCountries.filter(country => country !== cca3);
        heartIcon.classList.remove('filled');  // Remove filled class, so it becomes white
    } else {
        // Add to favorites
        if (favoriteCountries.length < 5) { // Ensure no more than 5 favorites
            favoriteCountries.push(cca3);
            heartIcon.classList.add('filled');  // Add filled class to make it red
        } else {
            alert("You can only have 5 favorite countries.");
        }
    }
    localStorage.setItem("favorites", JSON.stringify(favoriteCountries));  // Save to localStorage
    renderFavoriteCountries();  // Re-render favorites
}

// Render favorite countries
function renderFavoriteCountries() {
    const favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = "";  // Clear current list before rendering

    if (favoriteCountries.length > 0) {
        favoriteCountries.forEach(cca3 => {
            const country = allCountries.find(c => c.cca3 === cca3);
            if (country) {
                const favoriteItem = document.createElement("div");
                favoriteItem.classList.add("favorite-item");
                favoriteItem.innerHTML = `
                    <img src="${country.flags.svg}" alt="${country.name.common} Flag">
                    <span>${country.name.common}</span>
                `;
                favoritesList.appendChild(favoriteItem);
            }
        });
    } else {
        favoritesList.innerHTML = "<p>No favorite countries yet.</p>";
    }

    // Toggle visibility of the favorite section
    const favoritesSection = document.getElementById("favorites-section");
    if (favoriteCountries.length > 0) {
        favoritesSection.style.display = "block";
    } else {
        favoritesSection.style.display = "none";
    }
}
