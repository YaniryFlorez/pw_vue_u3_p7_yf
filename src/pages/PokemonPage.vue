<template>
  <h1>Adivina mi pokemon de la imagen</h1>
  <pokemonImagen/>
  <pokemonOpciones/>

</template>

<script>
import pokemonImagen from '../components/PokemonImagen.vue'
import pokemonOpcines from '../components/PokemonOpcines.vue'

export default {
    components:{
     pokemonImagen,
     pokemonOpcines,
    },

}
</script>

<style>

</style>