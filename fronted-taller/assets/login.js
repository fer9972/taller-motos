import axios from "axios";
import { BIconAlarm } from "bootstrap-vue";



export default {
  asyncData({ query }) {
    let token = query.token; // Capturamos el token que llega por url
    let token_url = token ? true : false; // Me indica si hay un token en url o no
    return { token, token_url };
  },
  mounted() {
    if (this.token_url == true) {
      localStorage.setItem("token", this.token);
    }
  },

  data() {
    return {
      title: "INICIAR SESIÓN",
      usuario: {
        documento: "",
        clave: "",
      },
      mensaje: null,
      reglas: [(v) => !!v || "El campo es obligatorio."],
    };
  },
  methods: {
    //metodo para autentificar al usuario que se esta logueando para darle acceso y validar el rol
    login() {
      axios.post("http://localhost:3001/login", {
        documento: this.usuario.documento,
        clave: this.usuario.clave
      }).then(res => {

        if (res) {
          this.agregarInfoLS({ id_usuario: this.usuario.documento, token: res.data['info'], nombre: res.data['nombre'] })

          console.log(this.usuario.documento)
          localStorage.setItem('documento', this.usuario.documento);
          this.$router.push("home");
          alert("Bienvenido al sistema taller de motos")

        }
        let documentoLogin = localStorage.getItem("documento");
        let rol = res.data.rol
        localStorage.setItem('rol', rol);
        localStorage.setItem('token', res.data.info);
      }).catch(error => {
        console.log(mensaje = "Ha ocurrido un error: " + error)
        alert("lo sentimos algo salio mal, intentalo de nuevo")
      })
    },

    agregarInfoLS(item) {
      localStorage.setItem('usuario ', JSON.stringify(item));
    }
  }
}