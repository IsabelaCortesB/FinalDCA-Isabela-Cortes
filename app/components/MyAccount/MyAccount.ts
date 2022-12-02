class MyAccount extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/MyAccount/style.css"
            <section>

            <section>
             <div class="MyAccountCard">
            
                    <img id="myaccountimg" src="./img/iconimg.png" alt="Imagen de tu usuario"></img>
                    <h1 id="myaccountname">Isacortesb12</h1>
                    <p id="myname">Isabela Cortes B</p>
                    <p id="cambiar">Cambiar</p>
                    <p id="SuggestionsForYou">Sugerencias para ti</p>
                    
                </div>

                <div class="InstagramInfo">

                <p>Información . Ayuda . Prensa . API . Empleo</p>
                <p>Privacidad . Condiciones . Ubicaciones . Idioma</p>

                <p>© 2022 INSTAGRAM FROM META</p>

            </div>
            </section>
            `;
        }
    }
}


customElements.define("my-account", MyAccount);
export default MyAccount;