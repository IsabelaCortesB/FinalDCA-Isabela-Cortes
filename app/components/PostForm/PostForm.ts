
export class PostForm extends HTMLElement {

    name = '';
    hashtag = '';
    imagenpost = '';
    location= '';
    
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector('#upload');
        btn?.addEventListener('click', ()=>{
            const evt: CustomEvent<{name: string, hashtag: string, imagenpost: string, location: string }> = new CustomEvent ('added-post', {
                detail: {name: this.name, hashtag: this.hashtag, imagenpost: this.imagenpost, location: this.location },
                composed: true
            });
            this.dispatchEvent(evt);
            
        });

        const name = this.shadowRoot?.querySelector('name');
        const hashtag = this.shadowRoot?.querySelector('hashtag');
        const imagenpost = this.shadowRoot?.querySelector('imagenpost');
        const location = this.shadowRoot?.querySelector('location');
        
        

        name?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.name = value;
        });
        hashtag?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.hashtag = value;
        });
        imagenpost?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.imagenpost = value;
        });
        location?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.location = value;
        });
        
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `

        <<link rel="stylesheet" type="text/css" href="/public/components/PostForm/style.css">

        
        <div class="MainContainerPost">

            <h1 id="tittle">NEW POST</h1>

            <input id="name" placeholder="Name"  type="text" />

           
            <input id="hashtag" placeholder="Hashtag"   type="text" />

            <input id="image" placeholder="Post Image"   type="url" />

            <input id="location" placeholder="Location"   type="text" />


            <button type=submit id="post">Post</button>

        </div>
        `;
    }
}

customElements.define('post-form', PostForm);