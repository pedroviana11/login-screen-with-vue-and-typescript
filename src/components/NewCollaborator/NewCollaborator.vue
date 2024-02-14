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
    margin-left: auto;
    color:  rgba(48, 0, 129, 1);
    border: 2px solid rgba(48, 0, 129, 1);
    font-weight: 700;
    background: none;
    width: 188px;
    height: 42px;
    border-radius: 8px;
    display: flex;
    
    align-items: center;
    margin-right: 20px;
  }

   button:hover{
    cursor: pointer;
   }
   
  </style>
  