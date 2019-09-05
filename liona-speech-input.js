'use strict';

const template = document.createElement('template');
template.innerHTML = `
     <style>
         
     </style>
    <div>
      <label for="suchfeld">Suchbegriffe:</label>
      <input id="suchfeld">
<!--      <button onclick="erkenneSprachEingabe()"><em>Freie Spracheingabe starten ...</em></button>-->
<!--      <button onclick="erkenneSprachEingabe(['Nürnberg Mittelfranken', 'Elektrofacharbeiter'])"><em>Spracheingabe mit Wortliste starten ...</em></button>-->
<!--      <button onclick="suchkriterienVorlesen()"><em>Suchkriterien vorlesen</em></button>-->
    </div>
`;


export class LionaSpeechInput extends HTMLElement {

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


            // onClick auf Button definieren
            // this.inputfield = this.shadowRoot.getElementById('suchfeld');
            // this.inputfield.innerHTML = this.content;
            // this.inputfield.addEventListener('click', () => {
            //     this.toggled = !this.toggled;
            // });
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




