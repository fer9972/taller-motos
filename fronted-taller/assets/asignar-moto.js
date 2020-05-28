
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,

            //se guarda el mantenimineto nuevo 
            asignarM: {
                id_mecanico: "",
                placa: "",
                fecha: "",
                acciones: true
            },

            fields: ["id_mecanico", "placa", "fecha", "acciones"],

            //En este arreglo se meten los mantenimientos que se van a asignar
            lista_asignarM: [
                {
                    id_mecanico: "",
                    placa: "",
                    fecha: "",
                    acciones: true
                }
            ],
            show: true

        }

    },

    mounted() {
        let mostrar = localStorage.getItem('placa_moto_evaluar');
        console.log("mostrar " + mostrar);
    },

    methods: {
        //metodo para guardar el mantenimiento que se le asigno al mecanico
        guardarAsgignarM() {
            this.asignarM.placa = localStorage.getItem('placa_moto_evalular');
            console.log("placa 2 " + this.asignarM.placa);
            let direccion = "http://localhost:3001/mantenimiento";
            let token = localStorage.getItem("token");
            this.lista_asignarM.push(this.asignarM);
            axios
                .post(direccion, this.asignarM, { headers: { token } })
                .then((response) => {
                    alert("el mantenimiento fue asignado correctamente")
                    console.log(response);

                })
                .catch((error) => {
                    alert("el mantenimiento no se pudo asignar")
                });
            this.asignarM = {
                id_mecanico: "",
                placa: "",
                fecha: "",
                acciones: true
            };
        },

    }

};