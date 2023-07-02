const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');

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
            url: `http://127.0.0.1:5000/productos/${productoId}`,
            cargando: true,
            error: false
        }
    },

    methods: {

        fetchApi(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                this.producto = data;
                this.cargando = false;
                console.log(this.producto)
            })
            
            .catch(err=>{
                console.error(err);
                this.error = true;
            })
        },

        editar() {
            let options = {
              method: 'PUT',
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

    mounted() {
        this.fetchApi(this.url);
    }
    
}).mount('#app')
