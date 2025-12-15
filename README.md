# Multi-Language Support App

A simple web application demonstrating multi-language support using HTML, CSS, and JavaScript.

## Features

- **Language Switching**: Easily switch between multiple languages
- **Supported Languages**: 
  - English (en)
  - Spanish (es)
  - French (fr)
- **Persistent Preference**: Selected language is saved in browser's local storage
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Interface**: Modern, user-friendly UI

## How to Use

1. Open `index.html` in your web browser
2. Use the language selector dropdown to switch between languages
3. The entire interface will update to display content in the selected language
4. Your language preference is automatically saved for future visits

## Implementation

The application uses:
- **HTML** for structure
- **CSS** for styling with a modern gradient design
- **JavaScript** for language switching logic
- **localStorage** for saving user preferences

## Files

- `index.html` - Main HTML structure
- `styles.css` - CSS styling
- `app.js` - Language switching logic
- `translations.js` - Translation data for all supported languages

## Adding More Languages

To add support for additional languages:

1. Open `translations.js`
2. Add a new language object with all translation keys
3. Update the language selector in `index.html` to include the new option

Example:
```javascript
de: {
    'app-title': 'Multi-Sprachen-Unterstützung Demo',
    'lang-label': 'Sprache wählen:',
    // ... add all other keys
}
```

## License

This project is open source and available for use and modification.
