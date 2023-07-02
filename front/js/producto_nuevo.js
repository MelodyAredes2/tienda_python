const {createApp} = Vue;

createApp({
    data(){
        return{
            producto: {
                    nombre: '',
                    precio: '',
                    stock: '',
                    imagen: ''
            },
            url: `http://127.0.0.1:5000/productos`,
            cargando: true,
            error: false
        }
    },

    methods: {

        createproduct() {
            let options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.producto)
            };
          
            fetch(this.url, options)
              .then(res => res.json())
              .then(data => {
                console.log('Actualización exitosa:', data);
                window.location.href = 'productos.html';
              })
              .catch(err => console.error(err));
          }

    },
    
}).mount('#app')