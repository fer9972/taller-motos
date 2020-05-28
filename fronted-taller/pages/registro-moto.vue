<template>
  <b-card-body>
    <b-form action="javascript:void(0)" @submit="guardarMoto()">
      <b-form-group id="in-placa" label="Placa:" label-for="placa">
        <b-form-input
          id="placa"
          v-model="moto.placa"
          required
          placeholder="Ingrese la placa de la moto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="in-estado" label="Estado:" label-for="id">
        <b-form-input id="estado" v-model="moto.estado" required placeholder="Estado"></b-form-input>
      </b-form-group>

      <b-form-group id="in-clase" label="Clase:" label-for="nombre">
        <b-form-input id="clase" v-model="moto.clase" required placeholder="Ingrese la clase de la moto"></b-form-input>
      </b-form-group>

      <b-form-group id="in-marca" label="Marca:" label-for="marca">
        <b-form-input
          id="marca"
          v-model="moto.marca"
          required
          placeholder="Ingrese la marca de la moto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="in-modelo" label="Modelo:" label-for="modelo">
        <b-form-input
          id="modelo"
          v-model="moto.modelo"
          required
          placeholder="Ingrese el modelo de la moto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="in-color" label="Color:" label-for="color">
        <b-form-input id="color" v-model="moto.color" required placeholder="Ingrese el color de la moto"></b-form-input>
      </b-form-group>

      <b-form-group id="in-cilindraje" label="Cilindraje:" label-for="cilindraje">
        <b-form-input id="cilindraje" v-model="moto.cilindraje" required placeholder="Ingrese el cilindraje"></b-form-input>
      </b-form-group>

      <b-form-group id="in-id_propietario" label="Cedula del propietario:" label-for="id_propietario">
        <b-form-input
          id="id_propietario"
          v-model="moto.id_propietario"
          required
          type="text"
          placeholder="Ingrese la identificacion del propietario"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="in-nro_soat" label="Número del soat:" label-for="nro_soat">
        <b-form-input
          id="nro_soat"
          v-model="moto.nro_soat"
          required
          type="text"
          placeholder="Ingrese el número del soat"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="in-vencimiento_soat" label="Fecha de vencimiento del soat:" label-for="vencimiento_soat">
        <b-form-input
          id="vencimiento_soat"
          v-model="moto.vencimiento_soat"
          required
          type="text"
          placeholder="Ingrese la fecha de vencimiento AA/MM/DD"
        ></b-form-input>
      </b-form-group>
      
        <b-form-group id="in-nro_tecnomecanica" label="Número de tecnomecanica:" label-for="nro_tecnomecanica">
        <b-form-input
          id="nro_tecnomecanica"
          v-model="moto.nro_tecnomecanica"
          required
          type="text"
          placeholder="Ingrese el número de tecnomecanica"
        ></b-form-input>
      </b-form-group>

          <b-form-group id="in-vencimiento_tecnomecanica" label="Fecha de vencimiento de la tecnomecanica:" label-for="vencimiento_tecnomecanica">
        <b-form-input
          id="vencimiento_tecnomecanica"
          v-model="moto.vencimiento_tecnomecanica"
          required
          type="text"
          placeholder="Ingrese la fecha de vencimiento AA/MM/DD"
        ></b-form-input>
      </b-form-group>

      

      <b-button type="submit" variant="danger" v-if="!enEdicion">Registrar Moto</b-button>
      <b-button @click="actualizarMoto()" variant="danger" v-else>Actualizar Moto</b-button>

      <h1>Motos en el taller</h1>
      <b-table responsive hover :items="lista_motos" :fields="fields" head-variant="dark">
        <template v-slot:cell(acciones)="row">
          <div>
            <b-button size="sm" @click="cargarMotoEditar(row)" block variant="danger" class="mr-2">Editar</b-button>
          </div>
        </template>
      </b-table>
    </b-form>
  </b-card-body>
</template>

<script src="@/assets/registro-moto.js"/>