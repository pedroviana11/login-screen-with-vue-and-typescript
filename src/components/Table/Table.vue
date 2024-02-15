<template>
  <section class="h-[calc(100vh-160px)] p-10">
    <div class="Title justify-between">
      <Title />
      <div class="flex gap-3">
        <NewCollaborator />
        <ExportButton />
      </div>
    </div>
    <div class="tableWrapper">
      <div class="table"> 
        <TableContent />
      </div>             
      <PageNumbers />
    </div>
  </section>
  </template>
  
  <script lang="ts">
   import ExportButton from '@/components/ExportButton/ExportButton.vue';
   import NotCollaboratorFound from '@/components/NotCollaboratorFound/NotCollaboratorFound.vue';
   import TableContent from '@/components/TableContent/TableContent.vue';
   import PageNumbers from '@/components/PageNumbers/PageNumbers.vue';
   import NewCollaborator from '@/components/NewCollaborator/NewCollaborator.vue';
   import Title from '@/components/Title/Title.vue';

   export default {
    name: 'TableVue',
    components: {
      ExportButton,
      NotCollaboratorFound,
      TableContent,
      NewCollaborator,
      Title,
      PageNumbers
      },
}
  </script>
  
  
  <style scoped>
  
  .tableWrapper{
    background-color:  rgba(255, 255, 255, 1);
    border-radius: 8px;
    width: 100%;
   }
  
   .search-bar{
     display: flex;
     border-color: gainsboro;
     padding: 20px 0px 0px 20px;
     display: flex;
     justify-content: space-between;
    }
 
  .table{
    padding:0px 0px 150px 0px ;  
    display: flex;
    justify-content: center;
    align-items: center;
}

  </style>
  

  