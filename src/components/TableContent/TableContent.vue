<template>
    <div class="card w-full">
        <DataTable :value="customers" v-model:filters="filters" filterDisplay="row" dataKey="name" :globalFilterFields="['name', 'perfil', 'nivel', 'email', 'sede', 'status']">
            <template #empty><NotCollaboratorFound /></template>

            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Nome completo e social" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search"/>
                        </InputIcon>
                        <InputText  v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Pesquisar por nome" />
                    </IconField>
                </template>
            </Column>
            <Column header="perfil" filterField="perfil" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.perfil }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="levels" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
                </template>
            </Column>
            <Column header="nivel" filterField="nivel" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.nivel }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="levels" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
                </template>
            </Column>
            <Column header="email" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.email }}</span>
                    </div>
                </template>
            </Column>
            <Column header="sede" filterField="sede" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.sede }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="levels" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
                </template>
            </Column>
            <Column header="status" filterField="status" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.status }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statues" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                <!-- <template #option="slotProps"> -->
                    <!-- {{ slotProps.option }} -->
                <!-- </template> -->
            </Dropdown>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import NotCollaboratorFound from '@/components/NotCollaboratorFound/NotCollaboratorFound.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';   
     

const customers = ref([
    {name: "Caio" , perfil: "Full stack", nivel: "junior" , email: 'sdasdasdshash@gmail.com', sede: "felino" , status: "ativa" },
    {name: "Caio" , perfil: "Full stack", nivel: "junior" , email: 'sdasdasdshash@gmail.com', sede: "felino" , status: "ativa" },
    {name: "Caio" , perfil: "Full stack", nivel: "junior" , email: 'sdasdasdshash@gmail.com', sede: "felino" , status: "ativa" },
    {name: "Caio" , perfil: "Full stack", nivel: "junior" , email: 'sdasdasdshash@gmail.com', sede: "felino" , status: "ativa" },
]);
const filters = ref({
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    perfil: [{ name: 'UX', code: 'UX' },{ name: 'Front-end', code: 'FR' },{ name: 'Back-end', code: 'BAC' }],
    nivel: [{ name: 'Bolsista', code: '01'}, { name: 'Júnior', code: '02'}, { name: 'Pleno', code: '03'}, {name: 'Sênior', code: '04'} ],
    sede: [{ name: 'Martinho', code: 'MAR' },{ name: 'Felino', code: 'FE' }, { name: 'Manaus', code: 'MAN' },{ name: 'BS', code: 'BS' },{ name: 'Bradesco', code: 'BRA' }],
    status: { name: 'Ativo', code: 'Inativo' },
});
const levels = ref([
    { name: 'Bolsista' },
    { name: 'Júnior'},
    { name: 'Pleno'},
    { name: 'Sênior' },
]);
const statues = ref(['ativa', 'inativa']);
const loading = ref(true);
</script>

<style scoped>

.p-column-header-content{
    background-color: white;
}



</style>