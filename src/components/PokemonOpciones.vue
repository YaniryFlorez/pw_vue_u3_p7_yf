<template>
  <div class="options-container">
    <ul>
      <li @:click="seleccionado" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
      default: []
    }
  },
  methods:{
    seleccionado(){
      console.log("hizo click")
    }
  }
}
</script>

<style>
.options-container {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
}

li {
  background: white;
  width: 250px;
  border: solid 2px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

li:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>