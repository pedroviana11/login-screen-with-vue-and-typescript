<template>
    <div class="bar">     
        <div class="bar-topic">Gestão de Pessoas</div>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  
  <style scoped>
  
  .bar{
    display: flex;
    background-color: rgba(255, 255, 255, 1);
    border-bottom: solid 2px;
    border-color: gainsboro;
    padding: 30px 30px 30px 40px;
    font-weight: bold;
   }

  .bar-topic{
   color: rgba(61, 61, 61, 1);
   font-size: 18px;
  }
   
  .bar-topic:hover {
   border-bottom: solid 3px;
   border-radius: 3px ;
   border-color:  rgba(71, 165, 173, 1);
   color: black;
   font-weight: bold;
  }
  </style>
  