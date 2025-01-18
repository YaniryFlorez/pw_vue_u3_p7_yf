<template>
    <div class="options-container">
        <ul>
            <li @click="selecionado" v-for="pokemon in pokemons" :key="pokemon.id">{{pokemon.nombre}}</li>
        </ul>
    </div>

</template>

<script>
export default {
    props:{
        pokemons:{
            type:Array,
            required: true,
        },
    },

    methods:{
        seleccionado(){
            console.log('hizo click');
        }
    }
};
</script>

<style>
.options-container{
 display: flex;
 justify-content: center;
}
ul{
    list-style-type: none;
}
li{
    background: white;
    width: 250px;
    border: 1px solid;
    border-radius: 10px;
    margin-bottom:10px ;
    cursor: pointer;
}
li:hover{
    background: rgb(0,0,0,0.25);
}
</style>