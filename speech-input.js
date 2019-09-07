'use strict';

import {Logger} from './log-helper'

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

class Spracheingabe {

    constructor(shadowRootRef, inputFieldIdRef, wortliste) {
        this.shadowRoot = shadowRootRef;
        this.eingabeFeldId = inputFieldIdRef;
        this.words = wortliste;
        this.recognition = this.initialisiereSpracherkennung();
        Logger.logMessage('####shadow root:' + this.shadowRoot);
        Logger.logMessage('####eingabe feld id:' + this.eingabeFeldId);

    }

    initialisiereSpracherkennung() {
        // Spracherkennung konfigurieren
        const speechRecognition = new SpeechRecognition();
        speechRecognition.lang = 'de-DE';
        speechRecognition.interimResults = false;
        speechRecognition.maxAlternatives = 1;
        // Grammatik initialisieren
        if (this.words) {
            const speechRecognitionList = new SpeechGrammarList();
            const grammar = '#JSGF V1.0; grammar words; public <word> = ' + this.words.join(' | ') + ' ;';
            speechRecognitionList.addFromString(grammar, 1);
            speechRecognition.grammars = speechRecognitionList;
        }
        return speechRecognition;
    }

    erkenneSprachEingabe(callback) {
        // Spracherkennung starten
        this.recognition.start();
        Logger.logMessage('###speaker:' + this.recognition);

        // Callbacks implementieren
        const eingabeFeld = this.shadowRoot.getElementById(this.eingabeFeldId);
        Logger.logMessage('####bevor this.eingabefeld:' + eingabeFeld.outerHTML);
        this.recognition.onresult = (event) => {
            Logger.logMessage('####eingabefeld:' + eingabeFeld.outerHTML);
            const speechResult = event.results[0][0].transcript;
            eingabeFeld.value = speechResult;
            Logger.logMessage('####eingabefeld changed:' + eingabeFeld.outerHTML);
            Logger.logMessage('Confidence: ' + event.results[0][0].confidence);
            callback(speechResult);
        };

        this.recognition.onspeechend = () => {
            this.recognition.stop();
        }


    }

}

export {Spracheingabe};
