
import { addPost } from '../../services/db.js'

export class NewPost extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const form = this.shadowRoot?.querySelector('post-form');
        form?.addEventListener('added-post', (evt: any)=>{
            const name = evt.detail.name;
            const hashtag = evt.detail.profileimg;
            const imagenpost = evt.detail.imagenpost;
            const location = evt.detail.location;
            
            

            addPost({name, hashtag, imagenpost, location, });
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
        <link rel="stylesheet" href="../app/Components/NewPost/styles.css">
        <post-form></post-form>
        </section>
        `;
    }
}

customElements.define('new-post', NewPost);