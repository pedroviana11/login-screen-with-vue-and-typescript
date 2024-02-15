<template>
    <div class="tableContent">
        <img src="@/assets/images/image.png" />
        <h3>Ainda não há alocações cadastradas</h3>
        <h4>Selecione outro ano ou faça os cadastros necessários.</h4>
    </div> 
</template>

<script lang="ts">
export default {
name: 'NotCollaboratorFound', 
}
</script>


<style scoped> 

.tableContent{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

img{
width: 144px;
height: 144px;
margin-bottom: 15px;
}

h3{
margin-bottom: 15px;
text-align: center;
font-size: 14px;
color:  rgba(129, 129, 129, 1);
font-weight: 700;
} 

h4{

color:  rgba(129, 129, 129, 1);
font-weight: 500;
font-size: 24px;
line-height: 130%;
}    
</style>

