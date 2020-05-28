<template>
  <b-card-body>
    <b-form action="javascript:void(0)" @submit="guardarUsuario()">
      <b-form-group id="in-apellidos" label="Tipo de documento:" label-for="tipo">
        <b-form-input
          id="tipo_documento"
          v-model="usuario.tipo_documento"
          required
          placeholder="Ingrese el tipo de documento"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="id" label="Documento:" label-for="id">
        <b-form-input id="documento" v-model="usuario.documento" required placeholder="Documento"></b-form-input>
      </b-form-group>

      <b-form-group id="in-nombre" label="Nombre:" label-for="nombre">
        <b-form-input id="nombre" v-model="usuario.nombre" required placeholder="Ingrese el nombre"></b-form-input>
      </b-form-group>

      <b-form-group id="in-apellidos" label="Apellidos:" label-for="apellidos">
        <b-form-input
          id="apellidos"
          v-model="usuario.apellidos"
          required
          placeholder="Ingrese los apellidos"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="in-edad" label="Celular:" label-for="celular">
        <b-form-input
          id="celular"
          v-model="usuario.celular"
          required
          placeholder="Ingrese el número de celular"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="in-correo" label="Correo:" label-for="correo">
        <b-form-input id="correo" v-model="usuario.correo" required placeholder="Ingrese su correo"></b-form-input>
      </b-form-group>

      <b-form-group id="in-correo" label="Rol:" label-for="rol">
        <b-form-input id="rol" v-model="usuario.rol" required placeholder="Ingrese el rol"></b-form-input>
      </b-form-group>

      <b-form-group id="in-clave" label="Clave:" label-for="clave">
        <b-form-input
          id="clave"
          v-model="usuario.clave"
          required
          type="password"
          placeholder="Ingrese la clave"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit"  variant="danger" v-if="!enEdicion">Registrar Usuario</b-button>
      <b-button @click="actualizarUsuario()" variant="danger" v-else>Actualizar datos</b-button>

      <h1>Usuarios</h1>
      <b-table responsive hover :items="lista_usuarios" :fields="fields" head-variant="dark">
        <template v-slot:cell(acciones)="row">
          <div>
            <b-button size="sm" @click="eliminarUsuario(row)" block variant="danger" class="mr-2">Eliminar</b-button>
            <b-button size="sm" @click="cargarUsuarioEditar(row)" block variant="danger" class="mr-2">Editar</b-button>
          </div>
        </template>
      </b-table>
    </b-form>
  </b-card-body>
</template>

<script src="@/assets/registro-usuario.js"/>