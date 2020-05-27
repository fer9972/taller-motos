<template>
  <b-card-body>
    <b-form action="javascript:void(0)" @submit="actualizarMantenimiento()">

      <b-form-group id="id" label="Documento del mecánico:" label-for="id">
        <b-form-input id="id_mecanico" v-model="mantenimiento.id_mecanico" required placeholder="Documento"></b-form-input>
      </b-form-group>

       <b-form-group id="in-placa" label="Placa:" label-for="placa">
        <b-form-input
          id="placa"
          v-model="mantenimiento.placa"
          required
          placeholder="Ingrese la palca"
        ></b-form-input>
      </b-form-group>

    
      <b-form-group id="in-fecha" label="Fecha:" label-for="fecha">
        <b-form-input
          id="fecha"
          v-model="mantenimiento.fecha"
          required
          placeholder="Ingrese la fecha"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="in-trabajos" label="Trabajos realizados:" label-for="tabajos">
        <b-form-input
          id="tabajos_realizados"
          v-model="mantenimiento.trabajos_realizados"
          required
          placeholder="Ingrese los trabajos realizados"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="in-horas" label="Horas invertidas:" label-for="horas">
        <b-form-input
          id="hotas_invertidas"
          v-model="mantenimiento.horas_invertidas"
          required
          placeholder="Ingrese las horas"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" v-if="!enEdicion">Aceptar</b-button>

         <b-table responsive hover :items="lista_mantenimientos" :fields="fields" head-variant="dark">
        <template v-slot:cell(acciones)="row">
          <div>
            <b-button size="sm" @click="cargarMantenimientosEditar(row)" class="mr-2">Hacer mantenimiento</b-button>
          </div>
        </template>
      </b-table>

    </b-form>
  </b-card-body>
</template>

<script src="@/assets/mantenimientos.js"/>