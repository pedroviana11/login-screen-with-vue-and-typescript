<template>
    <div class="tableWrapper">

        <div class="search-bar">
            <div class="inputSelectDiv">
              <InputCollaboratorName />
              <Select />
            </div>
            <Subtitles />
            <ExportButton />
        </div>

        <div class="table"> 
          <TableContent v-if="collaboratorFound"/>
          <NotCollaboratorFound v-else/>
        </div>             
        <PageNumbers />
    </div> 
  </template>
  
  <script lang="ts">
   import InputCollaboratorName from '@/components/InputCollaboratorName/InputCollaboratorName.vue';
   import Select from '@/components/SelectYears/SelectYears.vue';
   import Subtitles from '@/components/Subtitles/Subtitles.vue';
   import ExportButton from '@/components/ExportButton/ExportButton.vue';
   import NotCollaboratorFound from '@/components/NotCollaboratorFound/NotCollaboratorFound.vue';
   import TableContent from '@/components/TableContent/TableContent.vue';
   import PageNumbers from '@/components/PageNumbers/PageNumbers.vue';

   export default {
    name: 'TableVue',
    components: {
      InputCollaboratorName,
      Select,
      Subtitles,
      ExportButton,
      NotCollaboratorFound,
      TableContent,

      PageNumbers
      },
    data() {
      return {
        collaboratorFound: false
      }
    }
}
  </script>
  
  
  <style scoped>
  
  .tableWrapper{
    background-color:  rgba(255, 255, 255, 1);
    margin-left: 130px;
    margin-top: 40px;
    width: 90%;
    border-radius: 8px;
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
  

  