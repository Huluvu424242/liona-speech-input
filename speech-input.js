'use strict';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

class Spracheingabe {

    constructor(eingabeFeld) {
        this.eingabeFeld = eingabeFeld;
    }

    erkenneSprachEingabe(callback, words) {

        // Spracherkennung konfigurieren
        var recognition = new SpeechRecognition();
        recognition.lang = 'de-DE';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        // Grammatik initialisieren
        if (words) {
            var speechRecognitionList = new SpeechGrammarList();
            var grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;'
            speechRecognitionList.addFromString(grammar, 1);
            recognition.grammars = speechRecognitionList;
        }

        // Spracherkennung starten
        recognition.start();

        // Callbacks implementieren
        recognition.onresult = function (event) {
            var speechResult = event.results[0][0].transcript;
            this.eingabeFeld.value = speechResult;
            console.log('Confidence: ' + event.results[0][0].confidence);
            callback(speechResult);
        }

        recognition.onspeechend = function () {
            recognition.stop();
        }


    }
}

export {Spracheingabe};
