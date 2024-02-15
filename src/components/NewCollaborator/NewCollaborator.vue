<template>
    <button> 
        <img src="@/assets/icons/more.svg"/>
        <span >Novo colaborador</span>
      </button> 
  </template>
  
  <script lang="ts">
  export default {
    name: 'NewCollaborator', 
}
  </script>
  
  
  <style scoped> 
   
  button{
    color:  rgba(48, 0, 129, 1);
    border: 2px solid rgba(48, 0, 129, 1);
    font-weight: 700;
    background: none;
    width: 230px;
    height: 42px;
    border-radius: 8px;
    display: flex;
    
    align-items: center;
  }

   button:hover{
    cursor: pointer;
   }
   
  </style>
  