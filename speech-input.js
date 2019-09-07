'use strict';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var eingabefeld;

class Spracheingabe {

    constructor(eingabeFeldRef) {
        eingabefeld = eingabeFeldRef;
        this.logMessage('####eingabe feld:' + eingabefeld.outerHTML);
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
        this.logMessage('###speaker:'+recognition);

        // Callbacks implementieren
        this.logMessage('####bevor this.eingabefeld:' + eingabefeld.outerHTML);
        var objekt = this;
        recognition.onresult = function (event) {
            objekt.logMessage('####eingabefeld:' + eingabefeld.outerHTML);
            var speechResult = event.results[0][0].transcript;
            eingabefeld.value = speechResult;
            objekt.logMessage('####eingabefeld changed:' + eingabefeld.outerHTML);
            objekt.logMessage('Confidence: ' + event.results[0][0].confidence);
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
