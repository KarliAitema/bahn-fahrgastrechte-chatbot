// Wissensdatenbank für Fahrgastrechte
const knowledgeBase = {
    verspaetung: {
        title: "Verspätung",
        content: `Bei Verspätungen haben Sie folgende Rechte:

📍 **Ab 60 Minuten Verspätung:**
- 25% des Fahrpreises zurück
- Bei Hin- und Rückfahrkarte: Bezogen auf den einfachen Fahrpreis

📍 **Ab 120 Minuten Verspätung:**
- 50% des Fahrpreises zurück

📍 **Ab 60 Minuten voraussichtlicher Verspätung am Zielbahnhof:**
- Rückfahrt zum Ausgangsbahnhof möglich
- Erstattung des kompletten Fahrpreises

💡 **Wichtig:** Mindesterstattungsbetrag sind 4 Euro.`
    },
    ausfall: {
        title: "Zugausfall",
        content: `Bei Zugausfall gelten besondere Rechte:

✅ **Ihre Optionen:**
- Nutzung des nächsten verfügbaren Zuges
- Auch höherwertige Züge (z.B. ICE statt IC)
- Erstattung des Fahrpreises bei Verzicht auf die Fahrt

🎫 **Wichtig bei Erstattung:**
- Fahrkarte muss ungenutzt sein
- Antrag beim DB Service Center
- Online oder am Schalter möglich

⚡ **Sofortmaßnahmen:**
- DB Navigator App nutzen
- Alternative Verbindungen prüfen
- Zugbindung ist aufgehoben`
    },
    entschaedigung: {
        title: "Entschädigung berechnen",
        content: `So berechnen Sie Ihre Entschädigung:

💰 **Berechnungsgrundlage:**
1. Fahrpreis ermitteln (Hinfahrt bei Hin- und Rückfahrt)
2. Verspätung am Zielort feststellen
3. Prozentsatz anwenden:
   - 60-119 Min: 25%
   - Ab 120 Min: 50%

📊 **Beispiel:**
- Ticket: 100 € (Hin- und Rückfahrt = 50 € einfach)
- Verspätung: 90 Minuten
- Entschädigung: 50 € × 25% = 12,50 €

🔍 **Hinweise:**
- BahnCard-Rabatte werden berücksichtigt
- Sparpreise: voller Erstattungsbetrag
- Zeitkarten: Besondere Berechnung`
    },
    antrag: {
        title: "Antrag stellen",
        content: `So stellen Sie Ihren Entschädigungsantrag:

📝 **Online (empfohlen):**
1. www.bahn.de/fahrgastrechte aufrufen
2. Fahrgastrechte-Formular ausfüllen
3. Ticket hochladen (Foto/Scan)
4. Bei Verspätung: Bestätigung vom Zugpersonal hilft

📄 **Per Post:**
- Formular ausdrucken
- Ausgefüllt mit Ticket-Kopie senden an:
  DB Vertrieb GmbH
  Fahrgastrechte
  60647 Frankfurt am Main

⏰ **Fristen & Bearbeitung:**
- Antragsfrist: 12 Monate nach Fahrt
- Bearbeitungszeit: 4-6 Wochen
- Bei Ablehnung: Schlichtungsstelle kontaktieren

✅ **Erforderliche Angaben:**
- Zugverbindung & Datum
- Buchungsnummer/Ticketnummer
- Bankverbindung für Erstattung`
    }
};

function addMessage(text, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    // Konvertiere Markdown-ähnliche Formatierung zu HTML
    const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    
    messageDiv.innerHTML = `<p>${formattedText}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleQuickAction(action) {
    const actionData = knowledgeBase[action];
    if (actionData) {
        addMessage(actionData.title, true);
        setTimeout(() => {
            addMessage(actionData.content);
        }, 500);
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, true);
        input.value = '';
        
        // Einfache Keyword-Erkennung
        setTimeout(() => {
            respondToMessage(message);
        }, 500);
    }
}

function respondToMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('verspätung') || lowerMessage.includes('verspaetet')) {
        addMessage(knowledgeBase.verspaetung.content);
    } else if (lowerMessage.includes('ausfall') || lowerMessage.includes('ausgefallen')) {
        addMessage(knowledgeBase.ausfall.content);
    } else if (lowerMessage.includes('entschädigung') || lowerMessage.includes('geld') || lowerMessage.includes('rechnen')) {
        addMessage(knowledgeBase.entschaedigung.content);
    } else if (lowerMessage.includes('antrag') || lowerMessage.includes('formular')) {
        addMessage(knowledgeBase.antrag.content);
    } else {
        addMessage(`Ich habe Informationen zu folgenden Themen:

🔹 Verspätungen und Ihre Rechte
🔹 Zugausfälle
🔹 Entschädigungsberechnung
🔹 Antragsstellung

Nutzen Sie die Schnellauswahl-Buttons oder fragen Sie nach einem dieser Themen!`);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
