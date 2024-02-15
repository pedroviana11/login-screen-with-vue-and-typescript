<template>
  <div class="topbar">
    <h3>Sistema de alocações - IREDE</h3>
    <div class="user-info">
      <img src="@/assets/icons/profile.svg" alt="Perfil do usuário" />
      <div class="user-details">
        <h4 class="user-name">{{ userName }}</h4>
        <span class="user-type">{{ userType }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Topbar',
  data() {
    return {
      userName: 'Usuário',
      userType: 'Tipo de Usuário',
    };
  },
};
</script>

<style scoped>
.topbar {
  background-color: #0e6a74;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 40px;
}

h3 {
  font-size: 23px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 1);
}

.user-info {
  display: flex;
  padding-right: 50px;
  cursor: pointer;
}

.user-details {
  margin-left: 10px;
  display: flex;
  flex-direction: column; 
}

.user-name {
  margin-bottom: 5px; 
  color: white;
}

.user-type {
  color: #fff;
}

img {
  width: 50px;
  height: 50px;
}
</style>
