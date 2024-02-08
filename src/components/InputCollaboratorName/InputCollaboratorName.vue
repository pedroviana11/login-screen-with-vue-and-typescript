<template>
    <span>
        <img src="@/assets/icons/search.png" />
    </span>
    <input  placeholder="Pesquisar por colaborador" type="text"/>
</template>
  
  <script lang="ts">
  export default {
    name: 'InputCollaboratorName',
  }
  </script>
  
  
  <style scoped>
  input{
    width: 320px;
    height: 50px;
    border: 2px solid rgba(204, 204, 204, 1);
    border-radius: 8px;
    margin-bottom: 30px;
    margin-right: 20px;
    color: gray;
    font-weight: 400;
    text-align: center;
  }

  input::placeholder{
    font-size: 15px;
    margin-right: 20px;
  }

  input:hover{
    border: 1px solid rgba(71, 165, 173, 1)
  }
  input:focus{
    border: 1px solid rgba(71, 165, 173, 1);
    outline: none; 
  }

  span{
    position: absolute;
    margin-top: 18px;
    margin-left: 10px;
  }
  img{
    width: 17px; 
    margin-left: 20px;
    margin-right: 15px;  
  }
  
  </style>
  