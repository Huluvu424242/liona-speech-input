'use strict';

var synthese = window.speechSynthesis;
var suchfeld = document.querySelector('#suchfeld');

const suchkriterienVorlesen = () => {
    if (synthese.speaking) {
        console.error('Spricht bereits');
        return;
    }
    if (suchfeld.value !== '') {
        var vorleseText = 'Ihre Eingaben zur Kontrolle: ' + suchfeld.value;
        console.log("Text:" + vorleseText);
        var leserStimmeMitText = new SpeechSynthesisUtterance(vorleseText);
        leserStimmeMitText.onend = function (event) {
            console.log('Vorlesen beendet');
        }
        leserStimmeMitText.onerror = function (event) {
            console.error('Fehler beim Vorlesen');
        }
        var voices = synthese.getVoices();
        for (i = 0; i < voices.length; i++) {
            if (voices[i].default) {
                console.log("Voice:" + voices[i].name + voices[i].lang);
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

export {suchkriterienVorlesen};
