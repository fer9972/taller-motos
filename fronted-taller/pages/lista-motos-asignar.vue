
<template>

    <div>
      <h1>Motos en el Taller</h1>
      <b-table responsive hover :items="lista_motos" :fields="fields" head-variant="dark">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" href="asignar-moto" @click="guardarPlacaMoto(row)" block variant="danger" class="mr-2">Asignar a Mecánico</b-button>
            </template>
      </b-table>

      
    </div>

</template>

<script src="@/assets/lista-motos-asignar.js" />