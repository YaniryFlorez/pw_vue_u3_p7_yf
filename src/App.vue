<template>
<Pagina/>
</template>

<script>
import PokemonPage from '../src/pages/PokemonPage.vue'
import Pagina from '../src/pages/PersonaPage.vue'

export default {
  name: 'App',
  components: {
    PokemonPage,
    Pagina,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
