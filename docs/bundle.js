/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _liona_speech_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liona-speech-input */ \"./liona-speech-input.js\");\n\ncustomElements.define('liona-speech-input', _liona_speech_input__WEBPACK_IMPORTED_MODULE_0__[\"LionaSpeechInput\"]);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./liona-speech-input.js":
/*!*******************************!*\
  !*** ./liona-speech-input.js ***!
  \*******************************/
/*! exports provided: LionaSpeechInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LionaSpeechInput\", function() { return LionaSpeechInput; });\n/* harmony import */ var _speech_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speech-input */ \"./speech-input.js\");\n/* harmony import */ var _speech_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech-output */ \"./speech-output.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n     <style>\\n         \\n     </style>\\n    <div>\\n      <label for=\\\"eingabefeld\\\">Suchbegriffe:</label>\\n      <input id=\\\"eingabefeld\\\">\\n      <button id=\\\"microphon-button\\\"><em>Freie Spracheingabe starten ...</em></button>\\n      <button id=\\\"reader-button\\\"><em>Suchkriterien vorlesen</em></button>\\n    </div>\\n\";\n\nvar LionaSpeechInput =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(LionaSpeechInput, _HTMLElement);\n\n  function LionaSpeechInput() {\n    var _this;\n\n    _classCallCheck(this, LionaSpeechInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LionaSpeechInput).call(this)); // immer zuerst aufrufen\n    // this.toggled = this.getAttribute('toggled') === \"true\" || false;\n    // const options = this.getAttribute('options');\n    // console.debug('constructor called with options: ' + JSON.stringify(options));\n\n    console.debug('constructor called with options: '); // for init attribut defaults\n    // e.g. this.src = '';\n\n    return _this;\n  }\n\n  _createClass(LionaSpeechInput, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      console.debug('custom element is on the page!');\n      this.erzeugeShadowDOMIfNotExists();\n      this.initialisiereShadowDOM();\n    }\n  }, {\n    key: \"erzeugeShadowDOMIfNotExists\",\n    value: function erzeugeShadowDOMIfNotExists() {\n      if (!this.shadowRoot) {\n        console.debug('creating shadow dom');\n        this.attachShadow({\n          mode: 'open'\n        });\n      }\n    }\n  }, {\n    key: \"initialisiereShadowDOM\",\n    value: function initialisiereShadowDOM() {\n      this.shadowRoot.appendChild(template.content.cloneNode(true));\n      var eingabeFeld = this.shadowRoot.getElementById('eingabefeld');\n      var spracheingabe = new _speech_input__WEBPACK_IMPORTED_MODULE_0__[\"Spracheingabe\"](eingabeFeld);\n      var sprachausgabe = new _speech_output__WEBPACK_IMPORTED_MODULE_1__[\"Sprachausgabe\"](eingabeFeld); // onClick auf Micro Button definieren\n\n      this.microphonButton = this.shadowRoot.getElementById('microphon-button');\n      this.microphonButton.addEventListener('click', function () {\n        spracheingabe.erkenneSprachEingabe(sprachausgabe.suchkriterienVorlesen);\n      }); // onClick auf Reader Button definieren\n\n      this.readerButton = this.shadowRoot.getElementById('reader-button');\n      this.readerButton.addEventListener('click', function () {\n        sprachausgabe.suchkriterienVorlesen();\n      });\n    }\n  }, {\n    key: \"disconnectedCallback\",\n    value: function disconnectedCallback() {\n      console.debug('element has been removed');\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldval, newval) {\n      // do something every time the attribute changes\n      console.debug(\"the \".concat(name, \" attribute has changed from \").concat(oldval, \" to \").concat(newval, \"!!\"));\n      this.erzeugeShadowDOMIfNotExists(); // if (this.toggled) {\n      //     this.inputfield.innerHTML = this.toggledContent;\n      // } else {\n      //     this.inputfield.innerHTML = this.content;\n      // }\n    } // static get observedAttributes() {\n    //     return ['toggled'];\n    // }\n    // get toggled() {\n    //     return this.getAttribute('toggled') === 'true';\n    // }\n    //\n    // // the second argument for setAttribute is mandatory, so we’ll use an empty string\n    // set toggled(val) {\n    //     if (val) {\n    //         this.setAttribute('toggled', true);\n    //     } else {\n    //         this.setAttribute('toggled', false);\n    //     }\n    // }\n\n  }]);\n\n  return LionaSpeechInput;\n}(_wrapNativeSuper(HTMLElement));\n\n;\n\n\n//# sourceURL=webpack:///./liona-speech-input.js?");

/***/ }),

/***/ "./speech-input.js":
/*!*************************!*\
  !*** ./speech-input.js ***!
  \*************************/
/*! exports provided: Spracheingabe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Spracheingabe\", function() { return Spracheingabe; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;\nvar SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;\nvar SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;\n\nvar Spracheingabe =\n/*#__PURE__*/\nfunction () {\n  function Spracheingabe(eingabeFeld) {\n    _classCallCheck(this, Spracheingabe);\n\n    this.eingabeFeld = eingabeFeld;\n  }\n\n  _createClass(Spracheingabe, [{\n    key: \"erkenneSprachEingabe\",\n    value: function erkenneSprachEingabe(callback, words) {\n      // Spracherkennung konfigurieren\n      var recognition = new SpeechRecognition();\n      recognition.lang = 'de-DE';\n      recognition.interimResults = false;\n      recognition.maxAlternatives = 1; // Grammatik initialisieren\n\n      if (words) {\n        var speechRecognitionList = new SpeechGrammarList();\n        var grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;';\n        speechRecognitionList.addFromString(grammar, 1);\n        recognition.grammars = speechRecognitionList;\n      } // Spracherkennung starten\n\n\n      recognition.start(); // Callbacks implementieren\n\n      recognition.onresult = function (event) {\n        var speechResult = event.results[0][0].transcript;\n        this.eingabeFeld.value = speechResult;\n        console.log('Confidence: ' + event.results[0][0].confidence);\n        callback(speechResult);\n      };\n\n      recognition.onspeechend = function () {\n        recognition.stop();\n      };\n    }\n  }]);\n\n  return Spracheingabe;\n}();\n\n\n\n//# sourceURL=webpack:///./speech-input.js?");

/***/ }),

/***/ "./speech-output.js":
/*!**************************!*\
  !*** ./speech-output.js ***!
  \**************************/
/*! exports provided: Sprachausgabe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sprachausgabe\", function() { return Sprachausgabe; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar synthese = window.speechSynthesis;\n\nvar Sprachausgabe =\n/*#__PURE__*/\nfunction () {\n  function Sprachausgabe(eingabeFeld) {\n    _classCallCheck(this, Sprachausgabe);\n\n    this.eingabeFeld = eingabeFeld;\n  }\n\n  _createClass(Sprachausgabe, [{\n    key: \"suchkriterienVorlesen\",\n    value: function suchkriterienVorlesen() {\n      if (synthese.speaking) {\n        console.error('Spricht bereits');\n        return;\n      }\n\n      var zuLesenderText = this.eingabeFeld.value;\n\n      if (zuLesenderText !== '') {\n        var vorleseText = 'Ihre Eingaben zur Kontrolle: ' + zuLesenderText;\n        console.log(\"Text:\" + vorleseText);\n        var leserStimmeMitText = new SpeechSynthesisUtterance(vorleseText);\n\n        leserStimmeMitText.onend = function (event) {\n          console.log('Vorlesen beendet');\n        };\n\n        leserStimmeMitText.onerror = function (event) {\n          console.error('Fehler beim Vorlesen');\n        };\n\n        var voices = synthese.getVoices();\n\n        for (var i = 0; i < voices.length; i++) {\n          if (voices[i][\"default\"]) {\n            console.log(\"Voice:\" + voices[i].name + voices[i].lang);\n            leserStimmeMitText.voice = voices[i];\n            break;\n          }\n        }\n\n        leserStimmeMitText.pitch = 1;\n        leserStimmeMitText.rate = 1;\n        leserStimmeMitText.volume = 1;\n        synthese.speak(leserStimmeMitText);\n      }\n    }\n  }]);\n\n  return Sprachausgabe;\n}();\n\n;\n\n\n//# sourceURL=webpack:///./speech-output.js?");

/***/ })

/******/ });