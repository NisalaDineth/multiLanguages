# Multi-Language Flutter App

A Flutter application demonstrating multi-language support with English and the structure ready for Sinhala translations.

## Features

- ✅ Multi-language support using Flutter's built-in localization
- ✅ English language implemented
- ✅ Structure ready for Sinhala (සිංහල) translations
- ✅ Easy language switching with UI dialog
- ✅ Clean architecture for adding more languages
- ✅ Material Design 3 UI

## Project Structure

```
lib/
├── main.dart           # Main app entry point with locale management
└── l10n/               # Localization files
    ├── app_en.arb      # English translations (fully implemented)
    └── app_si.arb      # Sinhala translations (placeholder, ready to translate)
```

## Getting Started

### Prerequisites

- Flutter SDK (3.0.0 or higher)
- Dart SDK

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NisalaDineth/multiLanguages.git
cd multiLanguages
```

2. Install dependencies:
```bash
flutter pub get
```

3. Generate localization files:
```bash
flutter gen-l10n
```

4. Run the app:
```bash
flutter run
```

## How Multi-Language Support Works

### 1. Configuration Files

- **`pubspec.yaml`**: Declares dependencies and enables code generation
- **`l10n.yaml`**: Configures localization settings
- **`lib/l10n/app_en.arb`**: English translations with metadata
- **`lib/l10n/app_si.arb`**: Sinhala translations (currently mirrors English, ready to be translated)

### 2. Adding Translations

To translate the app to Sinhala, simply edit `lib/l10n/app_si.arb` and replace the English text with Sinhala:

**Example:**

```json
{
  "@@locale": "si",
  "appTitle": "බහු භාෂා යෙදුම",
  "welcomeMessage": "බහු භාෂා සහාය වෙත ආයුබෝවන්!",
  "greeting": "ආයුබෝවන්!",
  ...
}
```

### 3. Adding New Strings

To add new translatable strings:

1. Add the string to `app_en.arb`:
```json
"myNewString": "My New String",
"@myNewString": {
  "description": "Description of what this string is for"
}
```

2. Add the same key to `app_si.arb`:
```json
"myNewString": "Translation in Sinhala"
```

3. Run `flutter gen-l10n` to regenerate the localization code

4. Use in your code:
```dart
Text(AppLocalizations.of(context)!.myNewString)
```

### 4. Adding More Languages

To add support for additional languages (e.g., Tamil):

1. Create a new ARB file: `lib/l10n/app_ta.arb`
2. Add the locale to `supportedLocales` in `main.dart`:
```dart
supportedLocales: const [
  Locale('en'),
  Locale('si'),
  Locale('ta'), // Tamil
],
```
3. Add the language option to the language selection dialog

## Current Implementation

### Supported Languages
- **English (en)**: ✅ Fully implemented
- **Sinhala (si)**: 🔄 Structure ready, translations needed

### Available Translations

The app includes the following translatable strings:
- App title
- Welcome message
- Greeting
- Language selection UI
- Current language display
- Description text
- Button labels

All strings are currently in English. The Sinhala ARB file contains the same English text and is ready to be translated.

## Changing Language

Users can change the language in two ways:
1. Click the language icon in the app bar
2. Click the "Change Language" button on the home screen

Both options open a dialog where users can select between English and Sinhala.

## Technical Details

- Uses Flutter's official `flutter_localizations` package
- Implements `intl` package for internationalization
- Code generation approach for type-safe translations
- Stateful locale management at app level
- Supports both Material and Cupertino widgets

## Contributing

To add Sinhala translations:
1. Edit `lib/l10n/app_si.arb`
2. Replace English text with Sinhala translations
3. Run `flutter gen-l10n`
4. Test the app with Sinhala language selected

## License

This project is created for demonstrating multi-language support in Flutter applications.
