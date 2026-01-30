# Deployment auf Streamlit Community Cloud

## Schritte für Streamlit Community Cloud Deployment

Streamlit Community Cloud ist die empfohlene Lösung für Streamlit-Apps.

### 1. Vorbereitung

1. Repository auf GitHub pushen
2. Bei [share.streamlit.io](https://share.streamlit.io) anmelden
3. Repository verbinden

### 2. Erforderliche Dateien

Alle notwendigen Dateien sind bereits vorbereitet:
- `requirements.txt` - Python Dependencies
- `.streamlit/config.toml` - Streamlit Konfiguration
- `app.py` oder `main.py` - Hauptanwendung

### 3. Deployment

1. In Streamlit Cloud einloggen
2. "New app" klicken
3. Repository auswählen: `bahn-fahrgastrechte-chatbot`
4. Branch: `main`
5. Main file path: `app.py` (oder wie die Hauptdatei heißt)
6. Deploy klicken

### 4. Umgebungsvariablen

Falls API-Keys benötigt werden, in Streamlit Cloud unter "Settings" > "Secrets":
```toml
# .streamlit/secrets.toml Format
OPENAI_API_KEY = "sk-..."
```
