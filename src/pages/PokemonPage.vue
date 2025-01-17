<template>
  <h1>Adivina mi pokemon de la imagen</h1>
  <pokemonImagen :pokemonId="113" :show-pokemon="false"/>
  <pokemonOpciones/>

</template>

<script>
import pokemonImagen from '../components/PokemonImagen.vue'
import pokemonOpciones from '../components/PokemonOpciones.vue'

export default {
    components:{
     pokemonImagen,
     pokemonOpciones,
    },

}
</script>

<style>

</style>