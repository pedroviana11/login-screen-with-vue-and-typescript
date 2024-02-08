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
        <div v-if="showDialog">
            <Dialog v-model:showDescription="showDescription"/>
        </div>
        <tbody>
          
            <!-- <tr v-for="collaborator in collaborators" :key="collaborator.id">
                <td>
                    <button @click="showDialog = true">
                        <h3>{{ collaborator.name }} </h3>
                    </button>
                    <br /> 
                    <h4>{{ collaborator.role }}</h4> 
                </td>
                <td>
                        <div class="upInfo"><img src="@/components/assets/icons.png" class="imgOne"/></div>
                        <div class="infoBelow"><img src="wallet.png" class="imgTwo"/></div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.jan[0] }} </div>
                    <div class="infoBelow">{{ collaborator.jan[1] }}</div>

                </td>
                <td>
                    <div class="upInfo">{{ collaborator.fev[0] }} </div>
                    <div class="infoBelow">{{ collaborator.fev[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.mar[0] }} </div>
                    <div class="infoBelow">{{ collaborator.mar[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.abr[0] }} </div>
                    <div class="infoBelow">{{ collaborator.abr[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.mai[0] }} </div>
                    <div class="infoBelow">{{ collaborator.mai[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.jun[0] }} </div>
                    <div class="infoBelow">{{ collaborator.jun[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.jul[0] }} </div>
                    <div class="infoBelow">{{ collaborator.jul[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.ago[0] }} </div>
                    <div class="infoBelow">{{ collaborator.ago[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.set[0] }} </div>
                    <div class="infoBelow">{{ collaborator.set[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.out[0] }} </div>
                    <div class="infoBelow">{{ collaborator.out[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.nov[0] }} </div>
                    <div class="infoBelow">{{ collaborator.nov[1] }}</div>
                </td>
                <td>
                    <div class="upInfo">{{ collaborator.dez[0] }} </div>
                    <div class="infoBelow">{{ collaborator.dez[1] }}</div>
                </td>
               

            </tr> -->
        </tbody>
    </table>
</template>

<script>
import Description from "@/components/Description/Description.vue";
// import CollaboratorsData from '../../src/CollaboratorsData.json'

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
        //  collaborators: CollaboratorsData.collaborators 
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


