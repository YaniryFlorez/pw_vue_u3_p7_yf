<template>
  <div v-if="pokemonObjeto">
    <h1 v-if="mensaje">GANASTE!!!</h1>
    <div class="datos">
      <h3>Intento:{{intentos}}</h3>
      <h3>Puntaje:{{puntajes}}</h3>
    </div>
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
      puntajes: 0,
      intentos: 0,
       mensaje: false,
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
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  updated() {
    console.log("update");
  },
  beforeUpdate() {
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
      this.intentos++;

      if(this.intentos<=3){

       if (this.pokemonObjeto.id === idSeleccionado) {
           this.puntajes = this.puntajes+2;
           console.log('puntaje es:'+this.puntajes);
           console.log("Selecciono el Pokemon Correcto");
           this.mensaje =true;
           
           this.pokemonShow = true;
           this.pokemonShow = valor.valor2;
           this.showComponent = false;
         } else {
           console.log("ERROR....");
        
           this.pokemonShow = false;
         }
      const valorHijo = this.$refs.miHijo.pokemonId;
      console.log("Valor obtenido por REFS");
      console.log(valorHijo);
      console.log(this.$refs.miHijo.propiedadPrueba);
      this.$refs.miHijo.metodoPrueba();
    }else{
      console.log('se debe reiniciar');
        this.reiniciar();
    }
  },

  reiniciar(){
     
      this.pokemonArr= [];
      this.pokemonObjeto= null;
      this.pokemonShow= false;
      this.showComponent= true;
      this.puntajes= 0;
      this.intentos= 0; 
      this.mensaje=false; 
      this.cargarJuego();
  },
  },
};
</script>
 
<style>
.datos{
  padding-left: 260px;
  display: grid;
  grid-template-columns: repeat(2, 200px);

}
</style>