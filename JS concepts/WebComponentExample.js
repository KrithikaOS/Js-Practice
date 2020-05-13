import customElements from 'customElements';

customElements.define('first-element', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // mode controls if your shadow root is targettable by javascript- can be 'open' or 'closed'
        this.shadowRoot.innerHTML = `
        <div id = 'popupForm'></div>
        <ul>
        <li>shadow <a href="#one">dom/a> for page 1</li>
        <li>shadow <a href="#two">dom</a> for page 2</li>
        </ul>
`
    }
});

customElements.define("flag-icon", FlagIcon);
class FlagIcon extends HTMLElement {
    constructor() {
        super();
        this._countryCode = null;
    }

    static get observedAttributes() { return ["country"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        this._countryCode = newValue;
        this._updateRendering();
    }

    connectedCallback() {
        this._updateRendering();
    }

    get country() {
        return this._countryCode;
    }
    set country(v) {
        this.setAttribute("country", v);
    }
    _updateRendering() {
        //method available and can be used later
    }

}