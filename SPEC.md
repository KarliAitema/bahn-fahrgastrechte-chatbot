# Spezifikation - High-End Bahn-Fahrgastrechte Bot

## Architektur
- **Frontend/Backend**: Streamlit (Single Page App)
- **KI-Kern**: Google Generative AI (Gemini 1.5 Flash) via Python SDK
- **Wissensbasis**: System Prompt mit aktuellen Fahrgastrechte-Regeln (EU-Verordnung 2021/782)

## Implementation Steps
1. **API Konfiguration**: API Key sicher in die Umgebungsvariablen integrieren.
2. **Verbesserte KI-Logik**: System Prompt erweitern um Taxi-Erstattung (ab 24 Uhr oder letzter Anschluss), Hotel-Übernachtung und Fahrradkarten-Regeln.
3. **UI Polishing**: Dark Mode Support, Logo-Integration (Kari) und klareres Chat-Layout.
4. **Dokumentation**: README aktualisieren mit Installationsanleitung und API-Hinweis.

## Dateien
- `app.py`: Hauptlogik & UI
- `PRD.md`: Anforderungen (erledigt)
- `CURRENT_STATE.md`: Projektfortschritt
- `README.md`: Dokumentation

## Tests
- Manueller Test der Verspätungskategorien (65 Min -> 25%, 125 Min -> 50%).
- Abfrage von Spezialfällen (Taxi/Hotel).
- Verifikation des API-Calls.
