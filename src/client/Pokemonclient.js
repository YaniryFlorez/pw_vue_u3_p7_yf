function obtenerAleatorio(min,max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const obtenerArregloNumerico=()=>{
    const arreglo=[];
    for(let i=0; i<4; i++){

        arreglo[i] = obtenerAleatorio (1, 600);
    }
    return arreglo;
}

const obtenerArreglosPokemons=async (arreglo)=>{

    const nom0= await consumirApi(arreglo[0]);
    const nom1= await consumirApi(arreglo[1]);
    const nom2= await consumirApi(arreglo[2]);
    const nom3= await consumirApi(arreglo[3]);


    const arregloPokemon=[];
    const obj1={
        nombre: nom0,
        id: arreglo[0]
    };
    const obj2={
        nombre: nom1,
        id: arreglo[1]
    };
    const obj3={
        nombre: nom2,
        id: arreglo[2]
    };
    const obj4={
        nombre: nom3,
        id: arreglo[3]
    };

    arregloPokemon[obj1,obj2,obj3,obj4];
    return arregloPokemon;
}

const consumirApi = async (id) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
    return data.name;
}

const consultarPokemons =async ()=>{
    return await obtenerArreglosPokemons(obtenerArregloNumerico());

}

// metodo fachada
 export const consultarPokemonsFachada =async () =>{
    return await consultarPokemons();
}

export function obtenerAleatorioFachada(min,max){
    return obtenerAleatorio(min,max);
}
//esto se usa solo para cuando quiero exportar un a sola funcion
//export default consultarPokemonsFachada


