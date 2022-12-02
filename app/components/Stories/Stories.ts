import data from "../data.js";

export enum Attribute {
    name = "name",
    imagenusuario = "imagenusuario"
}

class MyStories extends HTMLElement {

    nameuser?: string;
    imageprofile?: string;
    
    static get observedAttributes() {
        const variab: Record<Attribute, null> = { name: null, imagenusuario:null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string, newValue: string) {
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