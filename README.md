# 🚂 Bahn Fahrgastrechte Chatbot

Ein Chatbot zur Unterstützung bei Fragen zu Fahrgastrechten der Deutschen Bahn.

## 🚀 Deployment-Optionen

### Empfohlen: Streamlit Community Cloud
Die einfachste Lösung für diese Streamlit-App.

**Quick Start:**
1. Repository auf GitHub pushen
2. Bei [share.streamlit.io](https://share.streamlit.io) anmelden
3. Repository verbinden und deployen

📖 **Detaillierte Anleitung:** Siehe [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### Alternative: Statische Version für Cloudflare Pages
Eine vereinfachte HTML/CSS/JS Version ohne Backend.

**Deployment:**
```bash
wrangler pages deploy static_version
```

## 📁 Projektstruktur

```
├── requirements.txt           # Python Dependencies
├── .streamlit/config.toml    # Streamlit Konfiguration
├── static_version/           # Statische HTML-Version
├── DEPLOYMENT_GUIDE.md       # Ausführliche Deployment-Anleitung
└── README.md                 # Diese Datei
```

## 🛠️ Lokale Entwicklung

### Streamlit Version
```bash
pip install -r requirements.txt
streamlit run app.py
```

### Statische Version
```bash
cd static_version
python -m http.server 8000
```

## 📋 Features

- ✅ Informationen zu Verspätungsrechten
- ✅ Entschädigungsberechnung
- ✅ Antragsstellung Schritt-für-Schritt
- ✅ Aktuelle Rechtslage

## 🔗 Nützliche Links

- [DB Fahrgastrechte](https://www.bahn.de/service/fahrgastrechte)
- [Eisenbahn-Bundesamt](https://www.eba.bund.de)
- [Schlichtungsstelle](https://www.schlichtungsstelle-mobilitaet.org)

## 📄 Lizenz

MIT License

## 👨‍💻 Autor

Erstellt für die Deutsche Bahn Fahrgastrechte-Beratung
