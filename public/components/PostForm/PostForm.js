export class PostForm extends HTMLElement {
    constructor() {
        super();
        this.name = '';
        this.hashtag = '';
        this.imagenpost = '';
        this.location = '';
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#upload');
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
            const evt = new CustomEvent('added-post', {
                detail: { name: this.name, hashtag: this.hashtag, imagenpost: this.imagenpost, location: this.location },
                composed: true
            });
            this.dispatchEvent(evt);
        });
        const name = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('name');
        const hashtag = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('hashtag');
        const imagenpost = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('imagenpost');
        const location = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('location');
        name === null || name === void 0 ? void 0 : name.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.name = value;
        });
        hashtag === null || hashtag === void 0 ? void 0 : hashtag.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.hashtag = value;
        });
        imagenpost === null || imagenpost === void 0 ? void 0 : imagenpost.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.imagenpost = value;
        });
        location === null || location === void 0 ? void 0 : location.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.location = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
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
