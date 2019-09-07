'use strict';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var shadowRoot;
var eingabeFeldId;

class Spracheingabe {

    constructor(shadowRootRef, inputFieldIdRef) {
        shadowRoot = shadowRootRef;
        eingabeFeldId = inputFieldIdRef;
        this.logMessage('####shadow root:' + shadowRoot);
        this.logMessage('####eingabe feld id:' + eingabeFeldId);
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
        var eingabeFeld = shadowRoot.getElementById(eingabeFeldId);
        this.logMessage('####bevor this.eingabefeld:' + eingabeFeld.outerHTML);
        var objekt = this;
        recognition.onresult = function (event) {
            objekt.logMessage('####eingabefeld:' + eingabeFeld.outerHTML);
            var speechResult = event.results[0][0].transcript;
            eingabeFeld.value = speechResult;
            objekt.logMessage('####eingabefeld changed:' + eingabeFeld.outerHTML);
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
