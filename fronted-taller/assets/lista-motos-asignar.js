/**
 * Aquì se encuentran los metodos para el crud de los seguimientos
 */
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
  
            //En este arreglo se meten todas los usuarios
            lista_motos: [
                {
                    placa: "",
                    estado: "",
                    clase: "",
                    marca: "",
                    modelo: "",
                    color: "",
                    cilindraje: "",
                    id_propietario: "",
                    nro_soat: "",
                    vencimiento_soat: "",
                    nro_tecnomecanica: "",
                    vencimiento_tecnomecanica: "",
                    acciones: true
                }
            ],

            fields: ["placa", "estado", "marca", "acciones"],
            show: true
        }

    },
    //aca apenas se carga la pagina se llama el metodo para listar los seguimientos
    mounted() {
        this.cargarMotos()
    },
    methods: {

        //metodo para guardar el id de la publicacion seleccionada para evaluar
        guardarPlacaMoto({ item }) {
            let placa = item.placa;
            console.log(placa);
            localStorage.setItem('placa_moto_evalular', placa);
        },

        //metodo para cargar los usuarios de la BD
        cargarMotos() {
            let url = "http://localhost:3001/moto";
            let token = localStorage.getItem("token");
            axios.get(url, { headers: { token } }).then(respuesta => {
                let data = respuesta.data
                if (data.ok) {
                    this.lista_motos = data.info
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
    }
};