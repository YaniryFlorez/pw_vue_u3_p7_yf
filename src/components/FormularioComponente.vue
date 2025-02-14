<template>
    <div class="form-wrapper">
        <p><label class="label-text" for="idcedula">Cédula:</label></p>
        <input id='idcedula' type="text">
       
        <p><label class="label-text" for="idnombre">Nombre:</label></p>
        <input id="idnombre" type="text">
       
        <p><label class="label-text" for="idfecha">Fecha de Nacimiento:</label></p>
        <input id="idfecha" type="text">
       
        <div class="button-group">
            <button class="save-btn">Guardar</button>
            <button class="cancel-btn">Cancelar</button>
        </div>
    </div>
</template>
 
<script>
import { obtenerPorIdFachada } from "../client/PersonaClient";
export default {
};
</script>
 
<style>
    .form-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        border-radius: 12px;
        background-color: #fde2e4;
        width: 20%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        margin: 30px auto;
    }
 
    .label-text {
        font-size: 14px;
        color: #a52a6d;
        font-weight: 600;
    }
 
    p {
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 16px;
        color: #7d387d;
    }
   
    input {
        width: 100%;
        border: none;
        border-bottom: 2px solid #dda0dd;
        background-color: #fff5f8;
        padding: 8px;
        border-radius: 5px;
        font-size: 14px;
    }
 
    input:focus {
        outline: none;
        border-bottom: 2px solid #a52a6d;
    }
 
    .button-group {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
    }
 
    .save-btn, .cancel-btn {
        padding: 10px 20px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        border: none;
    }
 
    .save-btn {
        background-color: #ff69b4;
        color: white;
    }
 
    .save-btn:hover {
        background-color: #d1478d;
    }
 
    .cancel-btn {
        background-color: #dda0dd;
        color: white;
    }
 
    .cancel-btn:hover {
        background-color: #b56ba3;
    }
</style>