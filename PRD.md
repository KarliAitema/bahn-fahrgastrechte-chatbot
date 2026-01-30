# PRD - Smart Bahn-Fahrgastrechte Bot

## Ziel
Ein High-End KI-Chatbot, der Bahnfahrern hilft, Entschädigungen zu berechnen und Anträge vorzubereiten. Weg von Keyword-Matching, hin zu echtem Verständnis.

## Benutzer-Stories
- **Als Pendler** möchte ich meine Verspätung eingeben und sofort wissen, wie viel Geld ich zurückbekomme.
- **Als Gelegenheitsfahrer** möchte ich wissen, welche Belege ich für ein Taxi-Upgrade einreichen muss.
- **Als Nutzer** möchte ich eine moderne, intuitive Weboberfläche (UI).

## Akzeptanzkriterien
1. **KI-Logik**: Nutzung der Google Gemini API für natürliches Sprachverständnis.
2. **Web-UI**: Ansprechende Oberfläche mit Streamlit.
3. **Wissen**: Der Bot kennt die Details des Fahrgastrechte-Formulars (60/120 Min, Postadresse, Belege).
4. **Validierung**: Automatische Berechnung der Entschädigung basierend auf dem Ticketpreis.

## Technische Constraints
- Backend: Python
- KI: Google Generative AI (Gemini)
- UI: Streamlit
- Hosting: Lokal/Cloudflare (vorbereitet)

## Nicht im Scope
- Direkte API-Anbindung an das DB-Buchungssystem (da keine öffentliche API verfügbar).
- Echtes Absenden des Formulars (nur Vorbereitung).
