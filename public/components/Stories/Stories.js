import data from "../data.js";
export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["imagenusuario"] = "imagenusuario";
})(Attribute || (Attribute = {}));
class MyStories extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { name: null, imagenusuario: null };
        return Object.keys(variab);
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
        const a = data.map((historiasperfil) => `
            <section>
                <img id="fotoPerfilHistorias" src="${historiasperfil.imagenusuario}"/>
                <h1 id="nombreUsuario">${historiasperfil.name}</h1>
            </section>
        `);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Stories/style.css">
                <section class="contenedorStories">
                ${a.join("")}
                </section>
        `;
        }
    }
}
customElements.define("my-stories", MyStories);
export default MyStories;
