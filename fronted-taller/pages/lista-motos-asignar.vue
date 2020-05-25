
<template>
  <b-card
    title="MOTOS EN EL TALLER"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
    align-self="center"
    v-show="true"
  >
    <b-card-body>
      
      <b-table responsive hover :items="lista_motos" :fields="fields" head-variant="dark">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" href="asignar-moto" @click="guardarPlacaMoto(row)" class="mr-2">Asignar a Mecánico</b-button>
            </template>
      </b-table>

      
    </b-card-body>
  </b-card>
</template>

<script src="@/assets/lista-motos-asignar.js" />