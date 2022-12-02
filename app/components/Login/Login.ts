import { queryUser } from "../../services/db.js";

export class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent(event);
                }else{
                    alert("Sorry, your password was incorrect. Please double-check your password.");
                }
            })
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/public/components/Register/Register.css">
        
        <div class="MainContainer">


        <img  class="imagenLogo" src="./img/Instagram_logo.png">
        <h1 id="Text1">─────────────    OR    ───────────────</h1>
        <h1 id="Text2">Log in with Facebook</h1>
        <img  class="logoFacebook" src="./img/facebookLogo.png">
        <h1 id="Text3">Forgot password?</h1>
    </div>
    
    
    </div>

    <div class="container3">
        <h1 id="text">Get the app.</h1>
        <img class="iconappstore" src="./img/iconappstore.png">
        <img class="iconplaystore" src="./img/iconplaystore.png">

    </div>

    <p id="textinfo">Meta About Blog Jobs Help API Privacy Terms Top Accounts Hashtags Locations Instagram Lite Contact Uploading & Non-Users </p>
    <p id="textinfo2">Dance Food & Drink Home & Garden Music Visual Arts English</p>
    
    <p id="textinfo3">English    © 2022 Instagram from Meta<p>
    
    <img class="coverImage" src="./img/coverImage.png">
    




            <app-form></app-form>
        </section>
        `
    }
}

customElements.define("app-login",Login);