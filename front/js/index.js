const {createApp} = Vue;

createApp({
    data(){
        return{
            productos: [],
            url: 'http://127.0.0.1:5000/productos',
            cargando: true,
            error: false
        }
    },

    methods: {

        fetchApi(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                this.productos = data;
                this.cargando = false;
                console.log(this.productos)
            })
            .catch(err=>{
                console.error(err);
                this.error = true;
            })
        },
    },

    created(){
        this.fetchApi(this.url);
    }
    
}).mount('#app')