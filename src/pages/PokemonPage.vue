<template>
  <div v-if="pokemonObjeto">
    <h2>Adivina el pokemon de la Imagen</h2>
    <PokemonImagen
      ref="miHijo"
      :pokemonId="pokemonObjeto.id"
      :showPokemon="pokemonShow"
    />
    <PokemonOpciones
      v-show="showComponent"
      @selecciones="validarRespuesta($event)"
      :pokemons="pokemonArr"
    />
  </div>
</template>
 
<script>
import PokemonImagen from "@/components/PokemonImagen.vue";
import PokemonOpciones from "@/components/PokemonOpciones.vue";
 
import {
  consultarPokemonsFachada,
  obtenerAleatorioFachada,
} from "@/client/PokemonClient.js";
 
export default {
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
      showComponent: true,
    };
  },
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted() {
    console.log("Se monto en la pagina el componente PokemonPage.vue");
    this.cargarJuego();
  },
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  updated(){
    console.log("updated");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },

  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;
 
      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      console.log("Este es el aleatorio");
      console.log(valorAleatorio);
 
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
    validarRespuesta(valor) {
      console.log("Llego el evento al padre");
      console.log(valor);
      const idSeleccionado = valor.identificador;
      if (this.pokemonObjeto.id === idSeleccionado) {
        console.log("Selecciono el Pokemon Correcto");
        
       // this.pokemonShow = true;
        this.showComponent = false;
        this,this.pokemonShow= valor.valor2;

      } else {
        console.log("ERROR....");
        this.pokemonShow = false;
      }
      const valorHijo = this.$refs.miHijo.pokemonId;
      console.log("Valor obtenido por REFS");
     
      console.log(valorHijo);
      this.$refs.mihijo.metodoPrueba();
      
    },
  },
};
</script>
 
<style>
</style>