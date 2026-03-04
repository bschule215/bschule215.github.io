console.log("Quiz JS gestartet");

let absendeBtn = document.querySelector("#absendeBtn");

function auswerten() {

    let punkte = 0;

    // Richtige Antworten
    const richtigeAntworten = {
        q1: "Canberra",
        q2: "Haut",
        q3: "32",
        q4: "flagge guyana.png",
        q5: "40.000"
    };

    // Alle Fragen durchgehen
    for (let frage in richtigeAntworten) {

        let ausgewaehlt = document.querySelector(`input[name="${frage}"]:checked`);

        if (ausgewaehlt) {
            if (ausgewaehlt.value === richtigeAntworten[frage]) {
                punkte++;
            }
        }
    }

    alert("Du hast " + punkte + " von 5 Fragen richtig!");
}

absendeBtn.addEventListener("click", auswerten);