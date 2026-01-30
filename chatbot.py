import re

def get_response(user_input):
    user_input = user_input.lower()
    
    if re.search(r"wieviel|entschädigung|geld|prozent", user_input):
        return "Ab 60 Minuten Verspätung erhältst du 25% des Fahrpreises zurück, ab 120 Minuten sind es 50%."
    
    if re.search(r"wie|beantragen|wo", user_input):
        return "Du kannst die Entschädigung online über dein DB-Kundenkonto, die DB Navigator App oder per Fahrgastrechte-Formular (postalisch) beantragen."
    
    if re.search(r"formular|dokument|pdf", user_input):
        return "Das Fahrgastrechte-Formular erhältst du im Zug, an der DB Info oder als PDF online auf bahn.de."
    
    if re.search(r"unterlagen|was brauche ich|infos", user_input):
        return "Du benötigst deine Fahrkarte (Original oder Kopie), Angaben zum Reiseverlauf und ggf. Verspätungsbescheinigungen."
    
    if re.search(r"hallo|hi|hey", user_input):
        return "Hallo! Ich bin dein Assistent für Fahrgastrechte. Wie kann ich dir helfen?"
        
    return "Entschuldigung, das habe ich nicht ganz verstanden. Frag mich nach Entschädigungshöhen oder wie man einen Antrag stellt."

if __name__ == "__main__":
    print("Bahn-Chatbot: Hallo! (Schreibe 'exit' zum Beenden)")
    while True:
        user_msg = input("Du: ")
        if user_msg.lower() == 'exit':
            break
        print(f"Chatbot: {get_response(user_msg)}")
