/**
 * Aquì se encuentran los metodos para el crud de los autores
 */
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,

            //se guardan todos los autores nuevos que se registran 
            usuario: {
                tipo_documento: "",
                documento: "",
                nombre: "",
                apellidos: "",
                celular: "",
                correo: "",
                rol: 0,
                clave: "",
                acciones: true
            },

            fields: ["documento", "nombre", "apellidos", "rol", "acciones"],

            //En este arreglo se meten todas los usuarios
            lista_usuarios: [
                {
                    tipo_documento: "",
                    documento: "",
                    nombre: "",
                    apellidos: "",
                    celular: "",
                    correo: "",
                    rol: 0,
                    clave: "",
                    acciones: true
                }
            ],
            show: true

        }

    },

    mounted() {
        this.cargarUsuarios()
    },

    methods: {
        //metodo para guardar los usuarios en la BD
        guardarUsuario() {
            let direccion = "http://localhost:3001/usuario";
            let token = localStorage.getItem("token");
            this.lista_usuarios.push(this.usuario);
            axios
                .post(direccion, this.usuario, { headers: { token } })
                .then((response) => {
                    console.log("usuario agregado correctamente");
                    console.log(response);

                })
                .catch((error) => {
                    console.log(error);
                });
            this.usuario = {
                tipo_documento: "",
                documento: "",
                nombre: "",
                apellidos: "",
                celular: "",
                correo: "",
                rol: 0,
                clave: "",
                acciones: true
            };

        },

        //metodo para cargar los usuarios de la BD
        cargarUsuarios() {
            let url = "http://localhost:3001/usuario";
            let token = localStorage.getItem("token");
            axios.get(url, { headers: { token } }).then(respuesta => {
                let data = respuesta.data
                if (data.ok) {
                    this.lista_usuarios = data.info
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },

        //cargar un usuario para editarlo
        cargarUsuarioEditar({ item }) {
            let editar = this.lista_usuarios.find(usuario => usuario.documento == item.documento);
            console.log("aqui" + this.editar)
            this.enEdicion = true;
            this.usuario = Object.assign({}, editar);
            documento.disabled = true;
            clave.disabled = true;
            tipo_documento.disabled = true;
        },


        //agregar los nuevos valores a la publicacion editada
        actualizarUsuario() {
            let documentoEditar = this.usuario.documento;
            console.log("documentoeditar" + this.documentoEditar)
            let direccion = "http://localhost:3001/usuario/" + documentoEditar;
            console.log(this.documentoEditar)
            axios
                .put(direccion, this.usuario)
                .then((response) => {
                    alert("el usuario se editó correctamente");
                    console.log(response);
                    this.enEdicion = false;
                    this.cargarUsuarios();
                    documento.disabled = false;
                    clave.disabled = false;
                    tipo_documento.disabled = false;
                  
                    
                })
                .catch((error) => {
                    console.log(error);
                    alert("Lo sentimos, el usuario no se pudo editar correctamente");
                });

            this.usuario = {
                tipo_documento: "",
                documento: "",
                nombre: "",
                apellidos: "",
                celular: "",
                correo: "",
                rol: 0,
                clave: "",
                acciones: true
            };
        },

    //eliminar un usuario de la BD
    eliminarUsuario({item}) {
        let documento = item.documento;
        let direccion = "http://localhost:3001/usuario/" + documento;
        axios
          .delete(direccion, documento)
          .then((response) => {
            alert("Usuario eliminado correctamente");
            this.cargarUsuarios();
            console.log(response);
          })
          .catch((error) => {
            alert("el usuario no se pudo eliminar correctamente");
            console.log(error);
          });
      },

    }

};