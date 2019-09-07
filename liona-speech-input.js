'use strict';

import {Spracheingabe} from './speech-input';
import {Sprachausgabe} from './speech-output';

const template = document.createElement('template');
template.innerHTML = `
     <style>
         
     </style>
    <div>
      <label for="eingabefeld">Suchbegriffe:</label>
      <input id="eingabefeld">
      <button id="microphon-button"><em>Freie Spracheingabe starten ...</em></button>
      <button id="reader-button"><em>Suchkriterien vorlesen</em></button>
    </div>
`;


class LionaSpeechInput extends HTMLElement {

    constructor() {
        super();  // immer zuerst aufrufen
        // for init attribut defaults
        // e.g. this.src = '';
        this.logMessage('constructor called');
    }

    connectedCallback() {
        this.logMessage('custom element is on the page!1');
        this.erzeugeShadowDOMIfNotExists();
        this.logMessage('custom element is on the page!2');
    }

    disconnectedCallback() {
        this.logMessage('element has been removed');
    }

    attributeChangedCallback(name, oldval, newval) {
        // do something every time the attribute changes
        this.logMessage(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);
    }

    erzeugeShadowDOMIfNotExists() {
        if (!this.shadowRoot) {
            this.logMessage('creating shadow dom');
            this.attachShadow({mode: 'open'});
        }
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const eingabeFeld = this.shadowRoot.getElementById('eingabefeld');
        this.logMessage('##feld'+eingabeFeld.outerHTML);
        const spracheingabe = new Spracheingabe(eingabeFeld);
        const sprachausgabe = new Sprachausgabe(eingabeFeld);

        // onClick auf Micro Button definieren
        this.microphonButton = this.shadowRoot.getElementById('microphon-button');
        this.microphonButton.addEventListener('click', () => {
            spracheingabe.erkenneSprachEingabe(
                sprachausgabe.suchkriterienVorlesen
            );
        });
        // onClick auf Reader Button definieren
        this.readerButton = this.shadowRoot.getElementById('reader-button');
        this.readerButton.addEventListener('click', () => {
            sprachausgabe.suchkriterienVorlesen();
        });
    }

    logMessage(message) {
        console.log(message);
    }

// static get observedAttributes() {
//     return ['toggled'];
// }


// get toggled() {
//     return this.getAttribute('toggled') === 'true';
// }
//
// // the second argument for setAttribute is mandatory, so we’ll use an empty string
// set toggled(val) {
//     if (val) {
//         this.setAttribute('toggled', true);
//     } else {
//         this.setAttribute('toggled', false);
//     }
// }


};

export {LionaSpeechInput}




