<template>
    <div class="tableContent">
        <img src="@/assets/images/image.png" />
        <h3>Ainda não há alocações cadastradas</h3>
        <h4>Selecione outro ano ou faça os cadastros necessários.</h4>
    </div> 
</template>
<script>
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
margin-top: 150px;
}

img{
width: 152px;
margin-bottom: 15px;
}

h3{
margin-bottom: 15px;
margin-left: -60px;
font-size: 14px;
color:  rgba(129, 129, 129, 1);
font-weight: 700;
} 

h4{
margin-left: -100px;
font-size: 12px;
color:  rgba(129, 129, 129, 1);
font-weight: 500;
}    
</style>

