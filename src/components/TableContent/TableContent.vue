<template>
    <div class="card w-full">
        <DataTable :value="customers" v-model:filters="filters" filterDisplay="row" dataKey="name" :globalFilterFields="['name', 'Perfil', 'Nível', 'Email', 'Sede', 'Status']">
            <template #empty><NotCollaboratorFound /></template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Nome completo e social" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Pesquisar por nome" />
                    </IconField>
                </template>
            </Column>
            <Column header="Perfil" filterField="Perfil" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.Perfil }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtrar" />
                </template>
            </Column>
            <Column header="Nível" filterField="Nível" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.Nível }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtrar" />
                </template>
            </Column>
            <Column header="Email" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.Email }}</span>
                    </div>
                </template>
            </Column>
            <Column header="Sede" filterField="Sede" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.Sede }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtrar" />
                </template>
            </Column>
            <Column header="Status" filterField="Status" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.Status }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtrar" />
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
    {name: "Caio" , Perfil: "Full stack", Nível: "junior" , Email: 'sdasdasdshash@gmail.com', Sede: "felino" , Status: "ativa" },
    {name: "Caio" , Perfil: "Full stack", Nível: "junior" , Email: 'sdasdasdshash@gmail.com', Sede: "felino" , Status: "ativa" },
    {name: "Caio" , Perfil: "Full stack", Nível: "junior" , Email: 'sdasdasdshash@gmail.com', Sede: "felino" , Status: "ativa" },
    {name: "Caio" , Perfil: "Full stack", Nível: "junior" , Email: 'sdasdasdshash@gmail.com', Sede: "felino" , Status: "ativa" },
]);
const filters = ref({
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Perfil: { value: null, matchMode: FilterMatchMode.IN },
    Nível: { value: null, matchMode: FilterMatchMode.EQUALS },
    Sede: { value: null, matchMode: FilterMatchMode.EQUALS },
    Status: { value: null, matchMode: FilterMatchMode.EQUALS },
});

</script>

<style>

.p-column-header-content{
    background-color: red;
}

</style>