class TopMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/TopMenu/style.css"
            <section>
            <div class="contenedorSuperior">

            
                
                <img  class="grupoIconos" src="./img/icon1.png">
                <img  class="grupoIconos" src="./img/icon43.png">
                <img  class="grupoIconos" src="./img/icon3.png">
                <img  class="grupoIconos" src="./img/icon4.png">
                <img  class="grupoIconos" src="./img/icon6.png">
                <img  class="imagenBuscar" src="./img/icon5.png">
                <img  class="imagenPerfil" src="./img/iconimg.png">
                
          </div>

            <img  class="imagenLogo" src="./img/Instagram_logo.png">

            </section>
            `;
        }
    }
}
customElements.define("top-menu", TopMenu);
export default TopMenu;
