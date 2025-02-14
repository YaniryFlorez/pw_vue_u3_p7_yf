import axios from "axios";

const obtenerPorId = async(id)=>{
    //http://localhost:8080/matriculaAPI/v1.1/personas/1
    axios.get(`http:localhost:8080/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
     console.log(data);
     return data;
}

export const obtenerPorFachada = async(id)=>{
    return await obtenerPorId(id);

}