<template>
    <div class="options-container">
        <ul>
            <li>opcion 1</li>
            <li>opcion 2</li>
            <li>opcion 3</li>
            <li>opcion 4</li>
        </ul>

    </div>
</template>

<script>
export default {

}
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