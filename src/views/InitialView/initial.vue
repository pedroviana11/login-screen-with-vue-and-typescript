<template>
<div class="flex">
    <SideBar />
    <div class="flex flex-col w-screen">
      <TopBar />
      <MenuBar />
      <Table />
    </div>
  
</div>
</template>

<script lang="ts">
import { Auth } from "../../utils/auth.util";
import { defineComponent } from "vue";
import SideBar from '@/components/SideBar/SideBar.vue';
import TopBar from '@/components/TopBar/TopBar.vue';
import MenuBar from '@/components/MenuBar/MenuBar.vue';
import Table from '@/components/Table/Table.vue';

export default defineComponent({
  name: "initialView",
  computed: {
    auth(): Auth {
      return new Auth();
    },
  },
  data() {
    return {
      show: false as boolean,
    };
  },
  components:{
    Table,
    TopBar,
    MenuBar,
    SideBar
  }
});
</script>

<style>
  
  * {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
  body{
   background-color: rgb(243, 243, 243);
}

 </style>
 