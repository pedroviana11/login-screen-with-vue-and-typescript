<template>
    <div class="description">
        <div class="description-content">
          <button @click="$emit('update:showDescription', false)">X</button> 
          <h3>Nome completo</h3>
          <h3>Nome de "guerra"</h3>
          <h3>cpf</h3>
          <h3>e-mail</h3>
          <h3>telefone</h3>
          <h3>sede: Felino, Martinho, Bradesco, BS, IFCE, Manaus</h3>
          <h3>perfil: UX, Backend, Frontend, Fullstack</h3>
          <h3>nível: bolsista, junior, pleno, senior</h3>
          <h3>lista com conhecimentos do colaborador</h3>
          <h3>status(ativo ou inativo)</h3>
        </div>
    </div>
  </template>
  <script lang="ts">
  export default {
    name: 'DescriptionVue', 
  }
  </script>
  
  
  <style scoped> 
  div{
    width: 50%;
    border: solid 1px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%); 
    background-color: black;
 }
  .dialog-content{
padding: 20px;
border: 1px solid #888;
text-align: center;
color: white;
  }

  button{
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    float: right;
  }


  </style>
  





  