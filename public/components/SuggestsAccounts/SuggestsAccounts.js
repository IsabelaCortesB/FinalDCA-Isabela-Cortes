export var Sugerencias;
(function (Sugerencias) {
    Sugerencias["accountname"] = "accountname";
    Sugerencias["accountinfo"] = "accountinfo";
    Sugerencias["accountimg"] = "accountimg";
})(Sugerencias || (Sugerencias = {}));
class SuggestsAccounts extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            accountname: null,
            accountinfo: null,
            accountimg: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/SuggestsAccounts/style.css"
            <section>
            
            <div class="MainContainer">

            
                <h2 class= "accountname">${this.accountname}</h2>
                <p class= "accountinfo">${this.accountinfo}</p>
                <img id="accountImg" src="${this.accountimg}">
                <h2 id="follow">Follow</h2>
                
            
            
            </div>
            </section>
            `;
        }
    }
}
customElements.define("suggests-accounts", SuggestsAccounts);
export default SuggestsAccounts;
