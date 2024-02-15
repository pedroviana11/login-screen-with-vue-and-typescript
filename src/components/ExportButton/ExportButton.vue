<template>
    <button> 
        <img src="@/assets/icons/ButtonExport.svg"/>
        <span >Exportar</span>
      </button> 
  </template>
  
  <script lang="ts">
  export default {
    name: 'ExportButton', 
}
  </script>
  
  
  <style scoped> 
   
  button{
    color:  rgba(48, 0, 129, 1);
    border: 2px solid rgba(48, 0, 129, 1);
    font-weight: 700;
    background: none;
    width: 133px;
    height: 42px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 20px;
    margin-right: 5px;
  }
   span{
    margin-left: 5px;    
   }

   button:hover{
    cursor: pointer;
    
   }
   
  </style>
  