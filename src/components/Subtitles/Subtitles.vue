
<template>


    <div class="subtitles">
        <span><!--LEGENDAS--></span>
        <div class="subtitle">
           <!-- <img src="@/assets/icons/edit.png"/> -->
            <p><!--Projeto alocado--></p></div>
        <div class="subtitle">
            <!--<img src="@/assets/icons/payment.png"/> -->
            <p><!--Fonte pagadora--></p> </div>
      </div>


  </template>

  <script lang="ts">
  export default {
    name: 'SubtitlesVue', 
  }
  </script>
  
  
  <style scoped> 
   
  .subtitles{
    margin-right: 30px;
    display: flex;
    margin-left: 150px;
  }

  span{
    font-size: 14px;
    font-weight: 500;
    color: rgba(40, 40, 40, 1);
    margin-top: 23px;
    margin-right: 15px;
    
  }

  .subtitle{
    display: flex;
    align-items: center;
    margin-left: 30px;
    margin-right: 20px;
  }

  img{
    width: 24px;
    margin-bottom: 20px;
 }

  p{
    margin-bottom: 20px;
    margin-left: 5px;
    color: rgba(77, 77, 77, 1);
  }
   
  </style>
  