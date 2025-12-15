// Multi-language application logic

// Function to change language
function changeLanguage() {
    const languageSelect = document.getElementById('language');
    const selectedLanguage = languageSelect.value;
    
    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', selectedLanguage);
    
    // Apply the translations
    applyTranslations(selectedLanguage);
}

// Function to apply translations to the page
function applyTranslations(language) {
    const translation = translations[language];
    
    if (!translation) {
        console.error(`Translation for language '${language}' not found`);
        return;
    }
    
    // Update all elements with translations
    for (const [key, value] of Object.entries(translation)) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
    
    // Update the HTML lang attribute
    document.documentElement.lang = language;
}

// Function to load saved language preference
function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (savedLanguage && translations[savedLanguage]) {
        // Set the dropdown to the saved language
        document.getElementById('language').value = savedLanguage;
        // Apply the translations
        applyTranslations(savedLanguage);
    } else {
        // Default to English
        applyTranslations('en');
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSavedLanguage();
    
    // Add event listener for language selection
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', changeLanguage);
    }
});
