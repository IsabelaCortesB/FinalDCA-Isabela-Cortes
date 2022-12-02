import { addUser } from "../../services/db.js";
export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            addUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    this.dispatchEvent(event);
                }
                else {
                    alert("Sorry, credentials don't match. Try again");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/public/components/Login/Login.css">
        <section>
        <div class="MainContainer">


        <img  class="imagenLogo" src="./img/Instagram_logo.png">
        <h1 id="Text1">─────────────    OR    ───────────────</h1>
        <h1 id="Text2">Log in with Facebook</h1>
        <img  class="logoFacebook" src="./img/facebookLogo.png">
        <h1 id="Text3">Forgot password?</h1>
    </div>

    <div class="container2">

    <h1 class="text1">Don't have an account?</h1>
    <h1 class="text2">Sign up</h1>
    
    
    </div>

    <div class="container3">
        <h1 id="text">Get the app.</h1>
        <img class="iconappstore" src="./img/iconappstore.png">
        <img class="iconplaystore" src="./img/iconplaystore.png">

    </div>

    <p id="textinfo">Meta About Blog Jobs Help API Privacy Terms Top Accounts Hashtags Locations Instagram Lite Contact Uploading & Non-Users </p>
    <p id="textinfo2">Dance Food & Drink Home & Garden Music Visual Arts English</p>
    
    <p id="textinfo3">English    © 2022 Instagram from Meta<p>
    
    <img class="coverImage" src="./img/coverImage2.png">
    




            <app-form></app-form>
        </section>
        `;
    }
}
customElements.define("app-register", Register);
