<template>
  <div id="app">
    <header>Sistema Alpha</header>
    <Login /> <!-- Usando o componente Login aqui -->
  </div>
</template>

<script lang="ts">
import Login from './components/login.vue'; // Importando o componente Login

export default {
  name: 'App',
  components: {
    Login // Registrando o componente Login
  }
}
</script>

<style>
header {
  text-align: center;
  padding: 2px;
  background-color: #b1a9a9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
