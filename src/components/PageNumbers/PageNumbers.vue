<template>
    <div class="card">
        <Paginator :rows="1" :totalRecords="120" template=" JumpToPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate=" {first} - {last} de {totalRecords}" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageNumbers', 
  }
  </script>
  
  
  <style scoped> 
   
   
   div{
    height: 80px;
    border-top: solid 1px;
   }
    
  </style>
  

 
