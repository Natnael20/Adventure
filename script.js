// Källkoden är för ett spel där en användare svarar på frågor med undantag av 2 chanser.
// Innan frågorna börjar kommer en varning att informera användaren om spelets regler

alert("Hej, Välkommen till spelet. Spelet har endast en regel vilket är man har två chanser att svara på frågan, så lycka till!");

// Global variabel
var question = ""; // variabeln för påståendet kommer att användas i varje funktion

// function för rFråga 1
function question1() {
    // Eftersom spelet ger personen två försök initieras denna sats
    var attempts = 0;

    // do-while
    do {
        // Frågan för nummer 1
        question = prompt("1. Vad är huvudstaden i Storbritannien?");

        // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        if (question && question.toLowerCase() === "london") {
            alert("Grattis, du har rätt."); // om svaret är rätt visas detta
            break;  // Avsluta loopen om svaret är korrekt
        } else {
            alert("Försök igen."); // om svaret är fel visas detta
            attempts++; // detta ger användaren två försök att svara rätt
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // efter att användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är London.");
    }
}

// anropar metoden i huvudklassen
question1();

// Funktion för fråga 2
function question2() {
    var attempts = 0;

    // do-while
    do {
        // Frågan för nummer 2
        question = prompt("2. Hur många kontinenter finns det i världen?");

        // Om användaren svarade på frågan med ett heltal 7
        if (question && parseInt(question) === 7) {
            alert("Grattis, du har rätt."); // om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt
        } else {
            alert("Försök igen.");// om svaret är fel visas detta
            attempts++; // detta ger användaren två försök att svara rätt
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är 7.");
    }
}

// Anropa funktionen för fråga 2
question2();



// Funktion för fråga 3
function question3() {
    var attempts = 0;

    // do-while
    do {
        // Frågan för nummer 3
        question = prompt("3. Vilken planet har en röd färg?");

         // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        if (question && question.toLowerCase() === "mars") {
            alert("Du har rätt! Mars är känt som den röda planeten!"); // om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt
        }
        else {
            alert('Fel svar'); // Om svaret är fel visas detta
            attempts++;
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är Mars.");
    }
}

// Anropa funktionen för fråga 3
question3();

// Funktion för fråga 4
function question4() {
    var attempts = 0;

    // do-while
    do {
        // Frågan för nummer 4
        question = prompt("4. Vilken färg har solen?");

         // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        if (question && question.toLowerCase() === 'gul') {
            alert("Det är korrekt, gul är solens färg");// om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt 
        }
        else {
            alert("Fel svar"); // om svaret är fel visas detta
            attempts++; // Öka antalet försök om svaret är fel
        }  
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är gul.");
    }
}

// Anropa funktionen för fråga 4
question4();
// Funktion för fråga 5
function question5() {
    var attempts = 0;

    // do-while
    do {
        // Frågan för nummer 5
        question = prompt("5. Vilket djur kan flyga och lägger ägg?");

         // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        if (question && question.toLowerCase() === "fågel") {
            alert("Det är korrekt, Fågel är ju den djuren som kan flyga och lägger ägg"); // om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt
        }
        else {
            alert("Det är felaktigt"); // om svaret är fel visas detta
            attempts++; // Öka antalet försök om svaret är fel
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är Fågel.");
    }
}

// Anropa funktionen för fråga 5
question5();

// Funktion för fråga 6
function question6() {
    var attempts = 0;

    // do-while
    do {
        // Frågan för nummer 6
        question = prompt("6. Vad är motsatsen till het?");

         // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        if (question && question.toLowerCase() === "kall") {
            alert("Det är korrekt, Bra jobbat! Kall är motsatsen till het"); // om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt
        }
        else {
            alert("Felaktigt, försök igen."); // om svaret är fel visas detta
            attempts++; // Öka antalet försök om svaret är fel
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är Kall.");
    }
}

// Anropa funktionen för fråga 6
question6();

// Funktion för fråga 7
function question7() {
    var attempts = 0;

    // do-while
    do {
        // Frågan för nummer 7
        // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        question = prompt("7. Vilket djur är känt som 'djungelns kung'?");

        if (question && question.toLowerCase() === "lejon") {
            alert("Korrekt! Lejon är känt som djungelns kung"); // om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt
        }
        else {
            alert("försök igen"); // om svaret är fel visas detta
            attempts++; // Öka antalet försök om svaret är fel
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är lejon.");
    }
}

// Anropa funktionen för fråga 7
question7();

// Funktion för fråga 8
function question8() {
    var attempts = 0;

    // do-while
    do {
        // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        question = prompt("8. Vad heter planeten vi lever på?");

        if (question && question.toLowerCase() === "jorden") {
            alert("Korrekt! Svart är ju jorden"); // om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt
        }
        else {
            alert("Felaktigt, försök igen!") // om svaret är fel visas detta
            attempts++; // Öka antalet försök om svaret är fel
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är jorden.");
    }
}

// Anropa funktionen för fråga 8
question8();

// Funktion för fråga 9
function question9() {
    var attempts = 0;

    // do-while
    do {
        // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        question = prompt("9. Vilken månad har mindre än 30 dagar?");

        if (question && question.toLowerCase() === "feburari") {
            alert("Korrekt! Under ett skottår finns det 29 dagar i februari."); // om svaret är rätt visas detta
            break; // Avsluta loopen om svaret är korrekt
        }
        else {
            alert("Felaktigt, försök igen!"); // om svaret är fel visas detta
            attempts++; // Öka antalet försök om svaret är fel
        }
    } while (attempts < 2); // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Det korrekta svaret är feburari.");
    }
}

// Anropa funktionen för fråga 9
question9();
//function for fråga 10
function question10() {
    var attempts = 0;

    do {
         // Oavsett om användaren svarade på frågan med versaler eller gemener, kommer svaret att vara korrekt
        // men svaret bör vara korrekt
        question = prompt("10. Vilken planet har det största antalet månar som kretsar kring den?");

        if (question && question.toLowerCase() === "jupiter") {
            alert("Korrekt! Jupiter har flest månar med 79 kända månar som kretsar runt den."); //visar detta om svaret är korrekt
            break; // Avsluta loopen om svaret är korrekt
        }
        else {
            alert("Felaktigt, försök igen"); // om svaret är fel visas detta
            attempts++; // Öka antalet försök om svaret är fel
        }
    } while (attempts < 2) // loopen avslutas om användaren misslyckas med att svara på frågan.

    // Om användaren misslyckats med att svara på frågan kommer det korrekta svaret att visas
    if (attempts === 2) {
        alert("Tyvärr, du har nått det maximala antalet försök. Rätt svar är Jupiter.");
    }
}
// Anropa funktionen för fråga 9
question10();

