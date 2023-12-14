class FormComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div>
          <h2>Formulario</h2>
          <!-- Campos del formulario se insertarán aquí -->
          <slot name="form-fields"></slot>
          <button id="submitBtn">Enviar</button>
        </div>
      `;
    }
  
    connectedCallback() {
      this.shadowRoot.getElementById('submitBtn').addEventListener('click', () => {
        alert('Formulario enviado correctamente');
      });
    }
  }
  
  customElements.define('form-component', FormComponent);
  