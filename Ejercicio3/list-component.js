class ListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div style="text-align: center;">
          <h2>Lista de Elementos</h2>
          <ul>
            <!-- Contenido de la lista se insertará aquí -->
            <slot name="list-items"></slot>
          </ul>
        </div>
      `;
    }
  }
  
  customElements.define('list-component', ListComponent);
  