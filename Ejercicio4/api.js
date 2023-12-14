class UserListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.users = [];

      // Realizar la solicitud a la API al inicializar el componente
      this.fetchUserData();

      // Usar MutationObserver para detectar cambios en el atributo 'data-api'
      const observer = new MutationObserver(() => {
        this.fetchUserData();
      });
      observer.observe(this, { attributes: true, attributeFilter: ['data-api'] });
    }

    // Método para obtener datos de la API y actualizar la lista de usuarios
    async fetchUserData() {
      const apiUrl = this.getAttribute('data-api');

      if (apiUrl) {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          this.users = data;
          this.render();
        } catch (error) {
          console.error('Error al obtener datos de la API', error);
        }
      } else {
        console.error('Atributo "data-api" no proporcionado');
      }
    }

    // Método para renderizar la lista de usuarios en el componente
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos del componente */
          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin: 5px 0;
            border: 1px solid #ccc;
            padding: 10px;
          }
        </style>
        <ul>
          ${this.users.map(user => `<li>${user.name}</li>`).join('')}
        </ul>
      `;
    }
  }

  customElements.define('user-list-component', UserListComponent);