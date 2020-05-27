<template>
  <div class="container">
    <b-container>
      <b-col align-self="center">
        <h1 class="title">TALLER DE MOTOS</h1>
        <b-form action="javascript:void(0)">
          <b-form-group @submit.stop.prevent label="Documento" label-for="id">
            <b-form-input
              class="form-control"
              v-model="usuario.documento"
              type="number"
              placeholder="Ingrese su documento de identidad"
              id="documento"
              :rules="reglas"
            />
          </b-form-group>

          <b-form-group @submit.stop.prevent label="Contraseña" label-for="password">
            <b-form-input
              class="form-control"
              type="password"
              v-model="usuario.clave"
              placeholder="Ingrese su contraseña"
              id="password"
              :rules="reglas"
            />
          </b-form-group>

          <b-button @click="login()" type="submit" block variant="danger">Ingresar</b-button>

          <span class="red--text py-2">{{ mensaje }}</span>
          <div class="text">
            <br />
          </div>
        </b-form>
        <br />
      </b-col>
    </b-container>
  </div>
</template>

<script src="../assets/login.js" />

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: rgb(219, 15, 15);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


