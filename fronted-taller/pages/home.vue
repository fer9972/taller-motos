<template>
  <div>
    <div class="p-3 mb-2 bg-danger text-white">
      <ul id="ul">
        <li id="li2" v-for="(permiso, index) in arregloPermisos" :key="index">
          <a :href="permiso.url">{{ permiso.nombre }}</a>
        </li>
      </ul>
    </div>
    <div>
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="100"
          img-height="350"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >

          <b-carousel-slide>
            <h1>TALLER DE MOTOS</h1>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="500"
                height="380"
                src="@/static/imagenes/motos.png"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <h1>TALLER DE MOTOS</h1>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="500"
                height="380"
                src="@/static/imagenes/moto2.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <h1>TALLER DE MOTOS</h1>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="500"
                height="380"
                src="@/static/imagenes/motoRes.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <nuxt />
  </div>
</template>
<script src="@/assets/home.js"/>


<style>

#content-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#li2 {
  float: left;
}

#li2 a {
  display: block;
  color: black;
  text-align: left;
  margin-right: 30px;
  text-decoration: none;
}
</style>