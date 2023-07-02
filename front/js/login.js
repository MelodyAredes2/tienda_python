import axios from 'axios';
import BASE_URL from './config.js';

export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login(event) {
        axios.post(`${BASE_URL}/login`, { username: this.username, password: this.password })
        .then(response => {
    // La solicitud fue exitosa, obtén el token de respuesta
    const token = response.data.token;

    // Guarda el token en una cookie con una duración de 30 minutos
    const expirationDate = new Date().getTime() + 30 * 60 * 1000;
    document.cookie = `token=${token}; expires=${new Date(expirationDate)}`;

    // Redirige al usuario a la página deseada
    this.$router.push('/productos.html');
  })
  .catch(error => {
    // Ocurrió un error, maneja el error adecuadamente
    console.error('Error al iniciar sesión:', error);
  });

      }
    }
  };