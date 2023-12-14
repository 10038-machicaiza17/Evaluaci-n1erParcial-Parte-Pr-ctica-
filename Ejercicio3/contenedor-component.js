class ContainerComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div>
          <slot name="header"></slot>
          <div class="content">
            <slot name="list" class="list-slot"></slot>
            <slot name="form" class="form-slot"></slot>
          </div>
        </div>
        <style>
          /* Estilos del contenedor */
          div {
            border: 2px solid #ccc;
            padding: 16px;
            margin: 16px;
          }
  
          .content {
            display: flex;
            justify-content: space-between;
          }
  
          .list-slot,
          .form-slot {
            flex: 1;
            margin: 0 16px;
          }
        </style>
      `;
    }
  }
  
  customElements.define('container-component', ContainerComponent);
  