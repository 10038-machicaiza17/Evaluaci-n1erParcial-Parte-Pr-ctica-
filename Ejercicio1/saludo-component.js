  class SaludoComponent extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para el contenido encapsulado */
          :host {
            display: block;
            text-align: center;
            padding: 20px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
          }
        </style>
        <p>¡Hola, Mundo!</p>
      `;
    }
  }
  customElements.define('saludo-component', SaludoComponent);