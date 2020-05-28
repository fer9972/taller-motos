<template>
  <b-card-body>
    <b-form action="javascript:void(0)" @submit="guardarAsgignarM()">

      <b-form-group id="id" label="Documento del mecánico:" label-for="id">
        <b-form-input id="id_mecanico" v-model="asignarM.id_mecanico" required placeholder="Documento"></b-form-input>
      </b-form-group>

    
      <b-form-group id="in-apellidos" label="Fecha:" label-for="fecha">
        <b-form-input
          id="fecha"
          v-model="asignarM.fecha"
          required
          placeholder="Ingrese la fecha"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit"  variant="danger"  v-if="!enEdicion">Asignar mantenimiento</b-button>

    </b-form>
  </b-card-body>
</template>

<script src="@/assets/asignar-moto.js"/>