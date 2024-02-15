<template>
  <div class="sidebar">
        <div class="imgSection">
         <img src="@/assets/icons/icon-irede.svg" alt="IREDE" style="width: 48px ; height: 48px;">
        
        </div>
          <div class="imgSection">
            <vue-feather class="pi pi-briefcase change" v-tooltip="'Gestão de Alocações'"></vue-feather>

            <!--Gestão de Projetos-->
        </div>
        <div class="imgSection">
          <vue-feather class="pi pi-book change" v-tooltip="'Gestão de Projetos'" ></vue-feather>
          <!--Gestão de Pessoas-->
        </div>
        <div class="imgSection">
          <vue-feather class="pi pi-users change" v-tooltip="'Gestão de Pessoas'"></vue-feather>
          <!--Relatórios e COnsultas-->
        </div>
        <div class="imgSection">
          <vue-feather class="pi pi-dollar change" v-tooltip="'Relatórios e Consultas'"></vue-feather> 
          <!--Relatórios e COnsultas-->
        </div>
        <div class="imgSection">
          <vue-feather class="pi pi-shield change" v-tooltip="'Infra e Segurança'"></vue-feather>
          <!--Infra e Segurança-->
          </div>
  </div>
</template>

<script lang="ts" setup>
</script>


<style scoped>



 .sidebar{
  writing-mode: vertical-lr;
  height: 100%;
  width: 78px;
  /* position: fixed; */
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  box-shadow: 0px 5px 10px 0px rgba(31, 31, 31, 0.2);
  
 }

 .imgSection{
   margin-top: 8px;
   height: 72px;
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   cursor: pointer;
 }

 .imgSection:hover{
  background-color: #ECECEC;
 }

 .firstImg{
  width: 48px;
  height: 48px;
 }

 .change{

  font-size: 24px;
  color:#300081;
 }
 
 

 .imgSection img{
  margin-top: 10px;
 }


 .imgSection vue-feather{
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  margin-top: -4px;
  border-radius: 5px;
  padding: 27px;
}
</style>

