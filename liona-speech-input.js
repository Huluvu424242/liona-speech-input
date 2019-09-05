'use strict';

import {erkenneSprachEingabe} from './speech-input';
import {suchkriterienVorlesen} from './speech-output';

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
    }

    erzeugeShadowDOMIfNotExists() {
        if (!this.shadowRoot) {
            console.debug('creating shadow dom');
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            // const options = JSON.parse(this.getAttribute('options'));
            // this.content = options.content;
            // this.toggledContent = options.toggledContent;


            // onClick auf Micro Button definieren
            this.eingabeFeld = this.shadowRoot.getElementById('eingabefeld');
            this.microphonButton = this.shadowRoot.getElementById('microphon-button');
            this.microphonButton.addEventListener('click', () => {
                console.log('### eingabeValue:'+this.eingabeFeld.value);
                erkenneSprachEingabe(suchkriterienVorlesen, this.eingabeFeld);
            });
            // onClick auf Reader Button definieren
            this.microphonButton = this.shadowRoot.getElementById('reader-button');
            this.microphonButton.addEventListener('click', () => {
                suchkriterienVorlesen(this.eingabeFeld.value);
            });
        }
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




