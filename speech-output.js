'use strict';

var synthese = window.speechSynthesis;

class Sprachausgabe {

    constructor(eingabeFeldRef) {
        this.eingabeFeld = eingabeFeldRef;
        this.logMessage('####ausgabe feld:'+this.eingabeFeld.outerHTML);
    }

    suchkriterienVorlesen() {
        if (synthese.speaking) {
            this.logMessage('Spricht bereits');
            return;
        }
        var zuLesenderText = this.eingabeFeld.value;
        this.logMessage('###'+this.eingabeFeld.value);
        if (zuLesenderText !== '') {
            var vorleseText = 'Ihre Eingaben zur Kontrolle: ' + zuLesenderText;
            this.logMessage("Text:" + vorleseText);
            var leserStimmeMitText = new SpeechSynthesisUtterance(vorleseText);
            var objekt = this;
            leserStimmeMitText.onend = function (event) {
                objekt.logMessage('Vorlesen beendet');
            }
            leserStimmeMitText.onerror = function (event) {
                objekt.logMessage('Fehler beim Vorlesen');
            }
            var voices = synthese.getVoices();
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].default) {
                    this.logMessage("Voice:" + voices[i].name + voices[i].lang);
                    leserStimmeMitText.voice = voices[i];
                    break;
                }
            }
            leserStimmeMitText.pitch = 1;
            leserStimmeMitText.rate = 1;
            leserStimmeMitText.volume = 1;
            synthese.speak(leserStimmeMitText);
        }
    }

    logMessage(message) {
        console.log(message);
    }
};


export {Sprachausgabe};
