class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <header style="color: blue;">
          <h1>¡Bienvenido al Sistema Modular con SLOTS!</h1>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  