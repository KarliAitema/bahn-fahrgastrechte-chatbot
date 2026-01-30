import streamlit as st
import google.generativeai as genai
import os
import re

# Konfiguration (Placeholder für API Key - müsste vom User gesetzt werden)
# os.environ["GOOGLE_API_KEY"] = "DEIN_KEY"
api_key = os.getenv("GOOGLE_API_KEY")

if api_key:
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash')
else:
    model = None

st.set_page_config(page_title="Bahn Fahrgastrechte-Profi", page_icon="🐈‍⬛")

st.title("🐈‍⬛ Kari's Bahn-Fahrgastrechte Assistent")
st.markdown("""
Willkommen! Ich helfe dir, das Maximum aus deinen Fahrgastrechten rauszuholen. 
Egal ob Verspätung, Zugausfall oder Taxi-Kosten – frag mich einfach.
""")

if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Was ist passiert? (z.B. 'Mein ICE hatte 95 Min Verspätung')"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    with st.chat_message("assistant"):
        if model:
            full_prompt = f"""
            Du bist ein Experte für deutsche Bahn-Fahrgastrechte. 
            Regeln:
            - 60+ Min Verspätung: 25% zurück.
            - 120+ Min Verspätung: 50% zurück.
            - Beantragung online oder via Formular (Servicecenter Fahrgastrechte, 60647 Frankfurt).
            - Antwortet höflich, professionell und präzise.
            
            Nutzerfrage: {prompt}
            """
            response = model.generate_content(full_prompt)
            st.markdown(response.text)
            st.session_state.messages.append({"role": "assistant", "content": response.text})
        else:
            # Fallback ohne API Key
            st.warning("Google API Key fehlt. Ich nutze den lokalen Experten-Modus.")
            if "verspätung" in prompt.lower() and "90" in prompt:
                res = "Bei 90 Minuten Verspätung stehen dir 25% Entschädigung zu. Ab 120 Minuten wären es 50%."
            else:
                res = "Ich benötige einen Google API Key für volle Intelligenz. Lokal weiß ich: 60min=25%, 120min=50%."
            st.markdown(res)
            st.session_state.messages.append({"role": "assistant", "content": res})

with st.sidebar:
    st.header("Quick-Check")
    ticket_price = st.number_input("Ticketpreis (€)", min_value=0.0, value=50.0)
    delay = st.number_input("Verspätung (Minuten)", min_value=0, value=0)
    
    if delay >= 120:
        st.success(f"Entschädigung: {ticket_price * 0.5:.2f} € (50%)")
    elif delay >= 60:
        st.info(f"Entschädigung: {ticket_price * 0.25:.2f} € (25%)")
    else:
        st.write("Noch kein Anspruch (erst ab 60 Min).")
