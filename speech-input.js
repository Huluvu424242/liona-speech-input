'use strict';

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

let shadowRoot;
let eingabeFeldId;
let words;
let recognition;

class Spracheingabe {

    constructor(shadowRootRef, inputFieldIdRef, wortliste) {
        shadowRoot = shadowRootRef;
        eingabeFeldId = inputFieldIdRef;
        words = wortliste;
        recognition = this.initialisiereSpracherkennung();
        this.logMessage('####shadow root:' + shadowRoot);
        this.logMessage('####eingabe feld id:' + eingabeFeldId);

    }

    initialisiereSpracherkennung() {
        // Spracherkennung konfigurieren
        const recognition = new SpeechRecognition();
        recognition.lang = 'de-DE';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        // Grammatik initialisieren
        if (words) {
            const speechRecognitionList = new SpeechGrammarList();
            const grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;';
            speechRecognitionList.addFromString(grammar, 1);
            recognition.grammars = speechRecognitionList;
        }
        return recognition;
    }

    erkenneSprachEingabe(callback) {
        // Spracherkennung starten
        recognition.start();
        this.logMessage('###speaker:' + recognition);

        // Callbacks implementieren
        const eingabeFeld = shadowRoot.getElementById(eingabeFeldId);
        this.logMessage('####bevor this.eingabefeld:' + eingabeFeld.outerHTML);
        const objekt = this;
        recognition.onresult =  () => {
            this.logMessage('####eingabefeld:' + eingabeFeld.outerHTML);
            const speechResult = event.results[0][0].transcript;
            eingabeFeld.value = speechResult;
            this.logMessage('####eingabefeld changed:' + eingabeFeld.outerHTML);
            this.logMessage('Confidence: ' + event.results[0][0].confidence);
            callback(speechResult);
        }

        recognition.onspeechend = function () {
            recognition.stop();
        }


    }

    logMessage(message) {
        console.log(message);
    }
};

export {Spracheingabe};
