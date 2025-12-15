# How to Run the Multi-Language Flutter App

## Prerequisites

Before running this Flutter app, ensure you have:

1. **Flutter SDK** installed (version 3.0.0 or higher)
   - Download from: https://flutter.dev/docs/get-started/install
   - Verify installation: `flutter --version`

2. **Development Environment**:
   - Android Studio (for Android development) or
   - Xcode (for iOS development on macOS) or
   - VS Code with Flutter extension or
   - Any text editor + Flutter CLI

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/NisalaDineth/multiLanguages.git
cd multiLanguages
```

### 2. Install Dependencies

```bash
flutter pub get
```

This will download all required packages defined in `pubspec.yaml`.

### 3. Generate Localization Files

```bash
flutter gen-l10n
```

This command generates the `AppLocalizations` class from the ARB files in `lib/l10n/`. 

The generated files will be created in `.dart_tool/flutter_gen/gen_l10n/`.

### 4. Verify Setup

Check for any issues:

```bash
flutter doctor
```

This will show you if everything is properly configured.

### 5. Run the App

**For development with hot reload:**

```bash
flutter run
```

**For specific device:**

```bash
# List available devices
flutter devices

# Run on specific device
flutter run -d <device_id>
```

**For web:**

```bash
flutter run -d chrome
```

**For specific platform:**

```bash
# Android
flutter run -d android

# iOS (macOS only)
flutter run -d ios

# Linux
flutter run -d linux

# Windows
flutter run -d windows

# macOS
flutter run -d macos
```

## Building the App

### Debug Build

```bash
# Android APK
flutter build apk --debug

# iOS (macOS only)
flutter build ios --debug
```

### Release Build

```bash
# Android APK
flutter build apk --release

# Android App Bundle (for Play Store)
flutter build appbundle --release

# iOS (macOS only)
flutter build ios --release
```

## Common Commands

### Analyze Code

```bash
flutter analyze
```

### Format Code

```bash
flutter format .
```

### Clean Build

If you encounter issues, clean and rebuild:

```bash
flutter clean
flutter pub get
flutter gen-l10n
flutter run
```

## Development Workflow

1. **Make changes to code** in `lib/` directory
2. **Add/modify translations** in `lib/l10n/app_*.arb` files
3. **Regenerate localizations**: `flutter gen-l10n`
4. **Hot reload** in running app: Press `r` in the terminal or use IDE's hot reload
5. **Hot restart**: Press `R` for full restart

## Troubleshooting

### Issue: "AppLocalizations not found"

**Solution**: Run `flutter gen-l10n` to generate the localization code.

### Issue: "Package not found"

**Solution**: Run `flutter pub get` to install dependencies.

### Issue: "Flutter command not found"

**Solution**: Ensure Flutter is in your PATH. Run:
```bash
export PATH="$PATH:`pwd`/flutter/bin"
```

### Issue: Build errors after adding translations

**Solution**: 
1. Run `flutter clean`
2. Run `flutter pub get`
3. Run `flutter gen-l10n`
4. Run `flutter run`

## File Structure

```
multiLanguages/
├── lib/
│   ├── main.dart           # Main app entry point
│   └── l10n/               # Localization files
│       ├── app_en.arb      # English translations
│       └── app_si.arb      # Sinhala translations (to be translated)
├── pubspec.yaml            # Project dependencies
├── l10n.yaml              # Localization configuration
├── analysis_options.yaml   # Linter rules
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── TRANSLATION_GUIDE.md   # Translation instructions
└── HOW_TO_RUN.md          # This file
```

## Generated Files (Not in Git)

These files are generated automatically and should not be edited:

- `.dart_tool/flutter_gen/gen_l10n/` - Generated localization code
- `build/` - Build artifacts
- `.flutter-plugins` - Plugin configuration
- `.flutter-plugins-dependencies` - Plugin dependencies

## IDE Setup

### VS Code

1. Install "Flutter" extension
2. Open Command Palette (Cmd/Ctrl+Shift+P)
3. Type "Flutter: Run Flutter Doctor"
4. Press F5 to run with debugging

### Android Studio

1. Install Flutter plugin
2. Click "Run" > "Run 'main.dart'"
3. Select device from toolbar

## Testing Language Changes

1. Run the app: `flutter run`
2. Click the language icon (🌐) in the app bar
3. Select language from the dialog
4. Observe UI updates with new language

## Next Steps

- Translate `lib/l10n/app_si.arb` to Sinhala
- Add more translatable strings
- Add more languages
- Test on different devices

For detailed translation instructions, see `TRANSLATION_GUIDE.md`.
