const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');
const BASE_URL = 'http://127.0.0.1:5000'

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
            url: `${BASE_URL}/productos/${productoId}`,
            cargando: true,
            error: false,
            empty: false
        }
    },

    methods: {

        fetchApi(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if (Object.keys(data).length === 0) {
                    this.empty = true;
                  }
                this.producto = data;
                this.cargando = false;
            })
            
            .catch(err=>{
                console.error(err);
                this.error = true;
            })
        },

        editar() {
            window.location.href = 'producto.html';
          },

          eliminar(){
            const url = this.url
            let options = {
                method: 'DELETE'
            }

            fetch(url,options)
            .then(res => res.json())
            .then(data =>{
                window.location.href = 'productos.html';
            })
            .catch(err => console.error(err))
        }

    },

    mounted() {
        this.fetchApi(this.url);
    }
    
}).mount('#app')
