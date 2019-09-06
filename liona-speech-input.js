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
        // this.toggled = this.getAttribute('toggled') === "true" || false;
        // const options = this.getAttribute('options');
        // console.debug('constructor called with options: ' + JSON.stringify(options));
        console.debug('constructor called with options: ');

        // for init attribut defaults
        // e.g. this.src = '';
    }

    connectedCallback() {
        console.debug('custom element is on the page!');

        this.erzeugeShadowDOMIfNotExists();
        this.initialisiereShadowDOM();
    }

    erzeugeShadowDOMIfNotExists() {
        if (!this.shadowRoot) {
            console.debug('creating shadow dom');
            this.attachShadow({mode: 'open'});
        }
    }

    initialisiereShadowDOM() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        var eingabeFeld = this.shadowRoot.getElementById('eingabefeld');
        var spracheingabe = new Spracheingabe(eingabeFeld);
        var sprachausgabe = new Sprachausgabe(eingabeFeld);

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


    disconnectedCallback() {
        console.debug('element has been removed');
    }

    attributeChangedCallback(name, oldval, newval) {
        // do something every time the attribute changes

        console.debug(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);

        this.erzeugeShadowDOMIfNotExists();

        // if (this.toggled) {
        //     this.inputfield.innerHTML = this.toggledContent;
        // } else {
        //     this.inputfield.innerHTML = this.content;
        // }
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




