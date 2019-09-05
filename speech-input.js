'use strict';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const erkenneSprachEingabe = (callback, eingabeFeld, words) => {

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
        // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
        // It has a getter so it can be accessed like an array
        // The first [0] returns the SpeechRecognitionResult at position 0.
        // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        // These also have getters so they can be accessed like arrays.
        // The second [0] returns the SpeechRecognitionAlternative at position 0.
        // We then return the transcript property of the SpeechRecognitionAlternative object
        var speechResult = event.results[0][0].transcript; //.toLowerCase();
        eingabeFeld.value = speechResult;
        console.log('Confidence: ' + event.results[0][0].confidence);
        console.log('### eingabeValue2:' + eingabeFeld.value);
        callback(speechResult);
    }

    recognition.onspeechend = function () {
        recognition.stop();
    }


}

export {erkenneSprachEingabe};
