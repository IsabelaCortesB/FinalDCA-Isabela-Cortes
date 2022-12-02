import { addPost } from '../../services/db.js';
export class NewPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('post-form');
        form === null || form === void 0 ? void 0 : form.addEventListener('added-post', (evt) => {
            const name = evt.detail.name;
            const hashtag = evt.detail.profileimg;
            const imagenpost = evt.detail.imagenpost;
            const location = evt.detail.location;
            addPost({ name, hashtag, imagenpost, location, });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section>
        <link rel="stylesheet" href="../app/Components/NewPost/styles.css">
        <post-form></post-form>
        </section>
        `;
    }
}
customElements.define('new-post', NewPost);
