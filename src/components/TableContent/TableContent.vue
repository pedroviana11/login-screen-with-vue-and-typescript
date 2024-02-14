<template>
    <table >
        <thead>
            <tr>
                <th><span style="display: flex;"> Colaborador<img class="imgTeste" src="@/assets/images/A-Z.png"/></span>
                </th> 
                <th></th>
                <th v-for="(month,index) in months" :key="index" >{{month}}</th>
            </tr>
        </thead>
        
        <div v-if="showDescription">
            <Description v-model:showDescription="showDescription"/>
        </div>
    
    </table>
</template>

<script lang="ts">
import Description from "@/components/Description/Description.vue";

export default {
name: 'TableContent', 
components: {
    Description,
        },
data() {
    return{
        showDescription: false,
        months: [
           'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'
        ],
    }
}
}
</script>


<style scoped> 
button{
background: none;
border: none;
}
table{
width: 100%;
text-align: center;
border: solid 2px;
border-color: rgba(236, 236, 236, 1);
background-color: rgba(255, 255, 255, 1);
border-spacing: 0; 
}

th{
 background-color: rgba(236, 236, 236, 1);
 height: 20px;
 padding: 15px 20px 18px 20px;
 color: rgba(77, 77, 77, 1);
}

td{
border-top: solid 2px;
border-left: solid 2px;
border-color: rgba(236, 236, 236, 1);
color: rgba(77, 77, 77, 1);
line-height: 15.6px;
}

h3{
 color: rgba(48, 0, 129, 1);
 width: 95%;
 font-size: 20px;
}

h4{
color: rgba(129, 129, 129, 1);
width: 87%;
font-size: 16px;

}
.upInfo{
border-bottom: solid 2px;
border-color: rgba(236, 236, 236, 1);

padding: 5px 0px 13px 3px;
}  

.infoBelow{
 padding: 12px 0px 5px 3px;
}

img{
width: 24px;
height: 24px;
margin-bottom: -8px;
}

</style>


