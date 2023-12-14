class emisorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    connectedCallback() {
      const button = this.shadowRoot.querySelector('button');
      button.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('mi-evento', { bubbles: true, composed: true }));
      });
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
        button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
          }
        </style>
        <button>Click me</button>
      `;
    }
  }
  
  customElements.define('emisor-component', emisorComponent);