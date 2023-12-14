class receptorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    connectedCallback() {
      document.addEventListener('mi-evento', () => {
        this.actualizarInfo('Hola desde receptor Component');
      });
    }
  
    actualizarInfo(mensaje) {
      // Actualizar la interfaz con la información recibida
      this.shadowRoot.querySelector('p').textContent = mensaje;
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
        p {
            font-size: 18px;
            margin-top: 20px;
            color: #333;
          }
        </style>
        <p>Información actualizada aparecerá aquí</p>
      `;
    }
  }
  
  customElements.define('receptor-component', receptorComponent);