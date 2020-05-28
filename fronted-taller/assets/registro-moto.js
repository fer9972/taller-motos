
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,

            //se guardan todos las motos nuevas que se registran 
            moto: {
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
            },

            fields: ["placa", "estado", "marca", "acciones"],

            //En este arreglo se meten todas las motos
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
            show: true

        }

    },

    mounted() {
        this.cargarMotos()
    },

    methods: {
        //metodo para guardar las motos en la BD
        guardarMoto() {
            let direccion = "http://localhost:3001/moto";
            let token = localStorage.getItem("token");
            this.lista_motos.push(this.moto);
            axios
                .post(direccion, this.moto, { headers: { token } })
                .then((response) => {
                    alert("la modo fue ingresada correctamente al sistema")
                    console.log(response);

                })
                .catch((error) => {
                    console.log(error);
                    alert("la modo no se pudo ingresar correctamente al sistema")
                });
            this.moto = {
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
            };

        },

        //metodo para cargar las motos de la BD
        cargarMotos() {
            let url = "http://localhost:3001/moto";
            let token = localStorage.getItem("token");
            axios.get(url, { headers: { token } }).then(respuesta => {
                this.lista_motos = respuesta.data.info.map(x => {
                    var f = Object.assign({}, x);
                    f.vencimiento_soat = x.vencimiento_soat.slice(0, 10);

                    f.vencimiento_tecnomecanica = x.vencimiento_tecnomecanica.slice(0, 10);
                    return f;
                  });
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },

        //cargar una moto para editarla
        cargarMotoEditar({ item }) {
            let editar = this.lista_motos.find(moto => moto.placa == item.placa);
            this.enEdicion = true;
            this.moto = Object.assign({}, editar);
            placa.disabled = true;
            clase.disabled = true;
            marca.disabled = true;
            modelo.disabled = true;
            cilindraje.disabled = true;
        },


        //agregar los nuevos valores de la moto editada
        actualizarMoto() {
            let placaEditar = this.moto.placa;
            let direccion = "http://localhost:3001/moto/" + placaEditar;
            axios
                .put(direccion, this.moto)
                .then((response) => {
                    alert("La moto se editó correctamente");
                    console.log(response);
                    this.enEdicion = false;
                    this.cargarMotos();
                    placa.disabled = false;
                    clase.disabled = false;
                    marca.disabled = false;
                    modelo.disabled = false;
                    cilindraje.disabled = false;
                })
                .catch((error) => {
                    console.log(error);
                    alert("Lo sentimos, la moto no se pudo editar correctamente");
                });

            this.moto = {
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
            };
        },
    }

};