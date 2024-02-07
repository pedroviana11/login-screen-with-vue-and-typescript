<template>
  <header>{{ msg }}</header>

  <div class="corpo">
    <div class="title">
        <h1>Faça seu login</h1>
    </div>
    <div class="mail">
        <label for="email">E-mail</label><br>
        <input type="email" name="email" id="email" placeholder="Insira aqui seu email..." required>
    </div>

    <div class="pass">
        <label for="pass">Senha</label><br>
        <input type="password" name="password" id="password" placeholder="Insira aqui sua senha..." required>
    </div>
    <div class="send">
        <button type="submit">Entrar</button>
    </div>

    <div class="footer login">
        <p>Ainda não é membro?</p>
        <a href="">Inscreva-se aqui.</a>
    </div>

    <footer> © 2024 - Todos os direitos reservados</footer>
  </div>
</template>



<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class login extends Vue {
  msg!: string
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}

body {
    background-color: rgb(0, 0, 0);
    
    align-content: center;
    align-items: center;
}
.title {
    margin: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
} 

.mail {
    margin: 15px;

    
}

.mail input {
    background-color: rgba(128, 128, 128, 0.192);
    border: 2px groove rgba(0, 0, 0, 0.377);
    border-radius: 20px;
    padding-right: 4px;
    padding-left: 4px;
    align-items: center;
}
.corpo {
    padding: 20px; /* Adicione algum preenchimento ao redor do conteúdo */
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    text-align: center;
    width: 80%; /* Defina uma largura máxima para o container */
    max-width: 400px; /* Ajuste conforme necessário */
    
    
}

.pass input {
    background-color: rgba(128, 128, 128, 0.192);
    border: 2px groove rgba(0, 0, 0, 0.377);
    border-radius: 20px;
    padding-right: 4px;
    padding-left: 4px;
}

.send button {
    background-color: rgba(128, 128, 128, 0.192);
    border: 2px groove rgba(0, 0, 0, 0.377);
    border-radius: 20px;
    padding: 2px;
    margin: 10px;
    cursor: pointer;
}


footer {
    position: fixed; /* Define a posição fixa */
    bottom: 0; /* Alinha o footer na parte inferior */
    left: 0; /* Alinha o footer à esquerda */
    width: 100%; /* Ocupa toda a largura da tela */
    background-color: #333; /* Cor de fundo do footer */
    color: #fff; /* Cor do texto do footer */
    text-align: center; /* Centraliza o texto */
    
}


</style>

