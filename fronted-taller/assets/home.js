const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
            slide: 0,
            sliding: null,
            arregloPermisos: [],

            show: true

        }

    },

    mounted() {
        this.cargarPermisos()
    },

    methods: {
        //metodo para cargar las paginas a las que tiene acceso el usuario logueado
        cargarPermisos() {
            let rol = localStorage.getItem("rol")
            if (rol == 2) {
                this.arregloPermisos = [{
                    nombre: "Registrar Usuario",
                    url: "/registro-usuario"


                },
                {
                    nombre: "Ingresar Moto",
                    url: "/registro-moto"

                },
                {
                    nombre: "Asignar Moto",
                    url: "/lista-motos-asignar"

                },
                {
                    nombre: "Mantenimientos",
                    url: "/mantenimientosAdmin"

                },
                {
                    nombre: "Salir",
                    url: "http://localhost:3000"
                }]
            } else {
                this.arregloPermisos = [{
                    nombre: "Ver mis mantenimientos",
                    url: "/mantenimientos-moto"
                },
                {
                    nombre: "Ingresar Moto",
                    url: "/registro-moto"

                },
                {
                    nombre: "Salir",
                    url: "http://localhost:3000"

                }]
            }
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },

};