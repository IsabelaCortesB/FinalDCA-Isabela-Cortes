import data from "../data.js";
import dataSuggestsAccounts from "../dataSuggestsAccounts.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        //variables
        //recorre la base de datos
        const group1 = dataSuggestsAccounts.map(({ accountname, accountinfo, accountimg }) => `<section>
        <suggests-accounts

        accountname ="${accountname}"
        accountinfo="${accountinfo}"
        accountimg="${accountimg}"

        ></suggests-accounts>
        </section>
    `);
        const group2 = data.map(({ name, views, comments, day, infopublicacion, hashtag, imagenpost, imagenusuario, ubicacion }) => ` <section>
            <my-profile
            
            name="${name}"
            views="${views}"
            comments="${comments}"
            day="${day}"
            infopublicacion="${infopublicacion}"
            hashtag="${hashtag}"
            imagenpost="${imagenpost}"
            imagenusuario="${imagenusuario}"
            ubicacion="${ubicacion}"
            
            
            ></my-profile>
            </section>
        `);
        //estaticos
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `<section>
        <top-menu></top-menu>
        <my-account></my-account>
        <my-stories></my-stories>
        ${group1.join("")}
        ${group2.join("")}
        </section>
        `;
    }
}
customElements.define("app-home", Home);
