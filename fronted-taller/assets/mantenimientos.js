
const axios = require('axios');
export default {
  data() {
    return {
      enEdicion: false,
      url:"",
      //en este json se almacena la información agregada del mantenimiento
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

      //En este arreglo se meten todos los mantenimientos
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
  //Para que llame  el metodo cargar y se listan llos mantenimintos de un mecanico que hay en la BD
  mounted() {
    this.cargarMantenimientos()
  },


  methods: {
    //cargar todos los registros de la BD pertenecientes a un mecanico y listarlos
    cargarMantenimientos() {
      let id_listar = localStorage.getItem("documento")
      let direccion = "http://localhost:3001/mantenimiento/" + id_listar;
      axios.get(direccion).then(respuesta => {
        this.lista_mantenimientos = respuesta.data.info.map(x => {
          var f = Object.assign({}, x);
          f.fecha = x.fecha.slice(0, 10);
          return f;
        });
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });

    },

    //cargar una mantenimiento para editarlo
    cargarMantenimientosEditar({ item }) {
     let editar = this.lista_mantenimientos.find(mantenimiento => mantenimiento.placa == item.placa);
      this.mantenimiento = Object.assign({}, editar);
      placa.disabled = true;
      fecha.disabled = true;
      id_mecanico.disabled = true;
    },

    //agregar los nuevos valores del manenimiento editado
    actualizarMantenimiento() {
      let placa_Editar = this.mantenimiento.placa;
      let direccion = "http://localhost:3001/mantenimiento/" + placa_Editar;
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