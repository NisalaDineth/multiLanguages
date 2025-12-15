# Translation Guide

This guide explains how to add translations to the multi-language Flutter app.

## Current Status

- **English (en)**: ✅ Fully implemented
- **Sinhala (si)**: 🔄 Structure ready, awaiting translations

## How to Add Sinhala Translations

The file `lib/l10n/app_si.arb` currently contains English text as placeholders. To add Sinhala translations:

1. Open `lib/l10n/app_si.arb`
2. Replace each English value with its Sinhala translation
3. Keep the keys unchanged (e.g., `"appTitle"`, `"welcomeMessage"`, etc.)
4. Run `flutter gen-l10n` to regenerate the localization code
5. Test the app by selecting Sinhala language

## Example Translation Reference

Here's an example of what the Sinhala translations could look like:

```json
{
  "@@locale": "si",
  "appTitle": "බහු භාෂා යෙදුම",
  "welcomeMessage": "බහු භාෂා සහාය වෙත ආයුබෝවන්!",
  "changeLanguage": "භාෂාව වෙනස් කරන්න",
  "english": "ඉංග්‍රීසි",
  "sinhala": "සිංහල",
  "currentLanguage": "වත්මන් භාෂාව: {language}",
  "greeting": "ආයුබෝවන්!",
  "description": "මෙය බහු භාෂා සහාය සහිත ෆ්ලටර් යෙදුමක් සඳහා නිරූපණයකි. දැනට ඉංග්‍රීසි භාෂාව ක්‍රියාත්මක කර ඇත, නමුත් ව්‍යුහය සිංහල පරිවර්තන එකතු කිරීමට සූදානම්ය.",
  "selectLanguage": "භාෂාව තෝරන්න",
  "cancel": "අවලංගු කරන්න"
}
```

## Translation Guidelines

1. **Keep Keys Unchanged**: The keys (like `"appTitle"`, `"greeting"`) must remain in English and unchanged.

2. **Translate Values Only**: Only translate the text values, not the keys.

3. **Preserve Placeholders**: If a string contains placeholders like `{language}`, keep them as-is:
   ```json
   "currentLanguage": "වත්මන් භාෂාව: {language}"
   ```

4. **Special Characters**: Ensure your editor supports UTF-8 encoding to properly save Sinhala Unicode characters.

5. **Context Matters**: Consider the context of each string:
   - `"appTitle"`: Short app name
   - `"welcomeMessage"`: Friendly greeting
   - `"description"`: Longer explanatory text

## Testing Translations

After adding translations:

1. Run `flutter gen-l10n` to generate the localization code
2. Run the app: `flutter run`
3. Click the language icon or "Change Language" button
4. Select "Sinhala" from the dialog
5. Verify all text is properly translated

## Adding More Languages

To add additional languages (e.g., Tamil):

1. Create `lib/l10n/app_ta.arb` (ta for Tamil)
2. Add the locale code at the top: `"@@locale": "ta"`
3. Copy all keys from `app_en.arb`
4. Translate the values to Tamil
5. Update `main.dart` to include `Locale('ta')` in `supportedLocales`
6. Add the language option to the language selection dialog

## Resources

- [Flutter Internationalization Guide](https://docs.flutter.dev/development/accessibility-and-localization/internationalization)
- [ARB File Format](https://github.com/google/app-resource-bundle/wiki/ApplicationResourceBundleSpecification)
- Unicode Sinhala characters: U+0D80–U+0DFF
