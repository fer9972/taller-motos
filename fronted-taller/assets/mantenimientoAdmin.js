
const axios = require('axios');
export default {
  data() {
    return {
      enEdicion: true,
      url:"",
      //en este json se almacena la información agregada al mantenimiento
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

      //En este arreglo se meten los mantenimientos
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
  //Para que llame  el metodo cargar y se listan los mantenimientos que hay en la BD
  mounted() {
    this.cargarMantenimientos()
  },


  methods: {
    //cargar todos los registros de la BD y listarlos
    cargarMantenimientos() {
      let direccion = "http://localhost:3001/mantenimiento/";
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

    //cargar un mantenimiento para editarla 
    cargarMantenimientosEditar({ item }) {
     let editar = this.lista_mantenimientos.find(mantenimiento => mantenimiento.placa == item.placa);
      this.mantenimiento = Object.assign({}, editar);
      this.enEdicion = false,
      placa.disabled = true;
      fecha.disabled = true;
      id_mecanico.disabled = true;
    },

    //agregar los nuevos valores al mantenimiento editado
    actualizarMantenimiento() {
      let placa_Editar = this.mantenimiento.placa;
      let direccion = "http://localhost:3001/mantenimiento/" + placa_Editar;
      axios
        .put(direccion, this.mantenimiento)
        .then((response) => {
          alert("el mantenimiento se actualizo correctamente");
          this.cargarMantenimientos();
          placa.disabled = false;
          fecha.disabled = false;
          id_mecanico.disabled = false;
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos, la actualización no se pudo realizar");
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


     //eliminar un mantenimineto de la BD
     eliminarMantenimiento({item}) {
        let placa = item.placa;
        let direccion = "http://localhost:3001/mantenimiento/" + placa;
        axios
          .delete(direccion, placa)
          .then((response) => {
            alert("el mantenimiento fue eliminado correctamente");
            this.cargarMantenimientos();
            console.log(response);
          })
          .catch((error) => {
            alert("el mantenimiento no se pudo eliminar correctamente");
            console.log(error);
          });
      },
  }
};