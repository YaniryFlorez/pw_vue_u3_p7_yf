<template>
  <div class="pokemon-container">
    <img
      v-show="showPokemon"
      :src="imagenFuente"
      alt="No se visualiza la imagen"
      class="ocultar"
    />
    <img
      v-show="!showPokemon"
      :src="imagenFuente"
      alt="No se visualiza la imagen"
    />
  </div>
</template>

<script>
export default {
  data() {
    return{
      propiedadPrueba:'este texto es de prueba'
    };
  },

  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imagenFuente() {
      /*return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.pokemonId +
        ".svg"
      );*/
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },

  },
  methods:{
    metodoPrueba(){
      console.log('metodo ejecutado desde el padre');
    }
  }
};
</script>

<style>
.ocultar {
  filter: brightness(0);
}

img {
  height: 200px;
  position: absolute;
  right: 45%;
}

.pokemon-container {
  height: 200px;
}
</style>