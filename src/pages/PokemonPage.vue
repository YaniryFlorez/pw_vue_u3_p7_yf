<template>
  <div v-if="pokemonObjeto">
  <h1>Adivina mi pokemon de la imagen</h1>
  <pokemonImagen :pokemonId="pokemonObjeto.id" :show-pokemon="pokemonShow"/>
  <pokemonOpciones :pokemons="pokemonArr"/>
</div>
</template>

<script>
import pokemonImagen from '../components/PokemonImagen.vue'
import pokemonOpciones from '../components/PokemonOpciones.vue'
import {
  consultarPokemonsFachada,
  obtenerAleatorioFachada} from '@/client/Pokemonclient.js'

export default {
  data(){
    return{
      pokemonArr:[],
    pokemonObjeto: null,
    pokemonShow:false,
    }
  },
    components:{
     pokemonImagen,
     pokemonOpciones
    },

    mounted(){
      console.log('se monto en la pag el componente PokemonPage');
      this.cargarJuego();
    },

    methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;
 
      const valorAleatorio = obtenerAleatorioFachada(0,3);
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
  },
};
</script>

<style>

</style>