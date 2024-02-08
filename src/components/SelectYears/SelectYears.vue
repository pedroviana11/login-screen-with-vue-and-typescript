<template>
    <select  v-model="yearSelect">
        <option class="teste" v-for="(year,index) in yearsArray" :key="index" :value="year">{{year}}</option>
    </select>
  </template>
  
  <script>
  export default {
    name: 'SelectYears', 
    data() {
    return{  
    yearSelect: '2024', 
    yearsArray: [
    2021,2022,2023,2024
  ]
    }
  }
  }
  </script>

<style scoped> 
   select{
    width: 120px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid hwb(0 80% 20%);
    background-color:  rgba(255, 255, 255, 1);
    padding-left: 10px;
  }

  select:hover {
     border: 1px solid rgba(71, 165, 173, 1)
  }
  select:focus{
    border: 1px solid rgba(71, 165, 173, 1);
    outline: none;
  }

 select option{
    background-color: rgba(246, 246, 246, 1);
  }
</style>
  
