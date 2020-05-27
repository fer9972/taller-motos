/**
 * Aquì se encuentran los metodos para el crud de la información de la publicación
 */
const axios = require('axios');
export default {
  data() {
    return {
      enEdicion: false,
      id_publicacion_a_cargar: 0,
      url:"",
      //en este json se almacena la información agregada de las publicaciones(obraas)
      mantenimiento: {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados:"",
        horas_invertidas:"",
        acciones: true
      },

      fields: [
        {
            key: 'placa',
            label: 'Placa',
        },
        {
            key: 'fecha',
            label: 'Fecha'

        },
        {
            key: 'trabajos_realizados',
            label: 'Trabajos realizados'

        },
        {
            key: 'horas_invertidas',
            label: 'Horas Invertidas'

        },

        {
            key: 'acciones',
            class: 'center'

        }
      ],

      //En este arreglo se meten todas las publicaciones
      lista_mantenimientos: [
        {
            id_mecanico: "",
            placa: "",
            fecha: "",
            trabajos_realizados:"",
            horas_invertidas:"",
            acciones: true
        }
      ]

      , show: true
    }
  },
  //Para que llame  el metodo cargar y se listan las publicaciones que hay en la BD
  mounted() {
    //this.local()
    this.cargarMantenimientos()
  },


  methods: {
    //cargar todos los registros de la BD y listarlos
    cargarMantenimientos() {
      let id_listar = localStorage.getItem("documento")
      let direccion = "http://localhost:3001/mantenimiento/" + id_listar;
      axios.get(direccion).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.lista_mantenimientos = data.info
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });

    },

    //cargar una publicacion para editarla 
    cargarMantenimientosEditar({ item }) {
     let editar = this.lista_mantenimientos.find(mantenimiento => mantenimiento.placa == item.placa);
      this.mantenimiento = Object.assign({}, editar);
      placa.disabled = true;
      fecha.disabled = true;
      id_mecanico.disabled = true;
    },

    //agregar los nuevos valores a la publicacion editada
    actualizarMantenimiento() {
      let placa_Editar = this.mantenimiento.placa;
      let direccion = "http://localhost:3001/mantenimiento/" + placa_Editar;
      console.log(this.placa_editar)
      axios
        .put(direccion, this.mantenimiento)
        .then((response) => {
          alert("el mantenimiento se realizó correctamente");
          console.log(response);
          this.cargarMantenimientos();
          placa.disabled = false;
          fecha.disabled = false;
          id_mecanico.disabled = false;
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos, el mantenimiento no se pudo realizar");
        });

      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados:"",
        horas_invertidas:"",
        acciones: true
      };
    },
  }
};