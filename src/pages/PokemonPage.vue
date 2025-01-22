<template>
    <div v-if="pokemonObjeto != null">
        <h2>Adivina el pokemon de la imagen</h2>
        <PokemonImagen :pokemonId="pokemonObjeto.id" :showPokemon="true" />
        <PokemonOpciones :pokemons="this.pokemonArr" />
    </div>
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue'
import PokemonOpciones from '../components/PokemonOpciones.vue'
import { consultarPokemonFachada, obtenerAleatorioFachada } from '@/client/PokemonClient.js'
export default {
    data() {
        return {
            pokemonArr: [],
            pokemonObjeto: null,
            pokemonShow: false
        }
    },
    components: {
        PokemonImagen,
        PokemonOpciones
    },
    mounted() {
        console.log("se monto en la pagina el componente PolemonPAge.vue");
        this.cargarJuego();
    },
    methods: {
        async cargarJuego() {
            const arregloPokemons = await consultarPokemonFachada();
            console.log(arregloPokemons)
            this.pokemonArr = arregloPokemons;

            const valorAleatorio = obtenerAleatorioFachada(0, 3);
            console.log("este es el aleatorio", valorAleatorio);
            const pokemonCorrecto = this.pokemonArr[valorAleatorio];
            this.pokemonObjeto = pokemonCorrecto
        }
    }
}
</script>

<style></style>