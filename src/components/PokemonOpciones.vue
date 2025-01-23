<template>
  <div class="options-container">
    <ul>
      <li
        @click="seleccionado(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    seleccionado(id) {
      console.log("Hizo click");
      console.log(id);
      //se manda en el segundo argumento, un parametro que quiero enviar
      //desde el hijo hacia el padre.
      const objetoEnviado = {
        identificador: id,
        valor2: true,
        valor3: "Ejemplo2",
      };
      this.$emit("selecciones", objetoEnviado);
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background: white;
  width: 250px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

li:hover {
  background: rgb(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>