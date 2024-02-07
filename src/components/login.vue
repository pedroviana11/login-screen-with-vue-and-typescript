<template>
    <!-- Importa o estilo de ícones da biblioteca Boxicons -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  
    <!-- Define a estrutura do formulário de login -->
    <div class="log">
        <h1>Login</h1>
        <form action="">
            <!-- Campo de e-mail -->
            <div class="mail-box">
                <input type="email" name="email" placeholder="Insira seu e-mail.." required>
                <!-- Ícone do usuário -->
                <i class='bx bxs-user'></i>
            </div>
            <!-- Campo de senha -->
            <div class="pass-box">
                <input type="password" name="pass" placeholder="Insira sua senha..." required>
                <!-- Ícone de cadeado -->
                <i class='bx bxs-lock-alt'></i>
            </div>

            <!-- Opção "Lembrar-me" e link para "Esqueci minha senha" -->
            <div class="remember">
                <label><input type="checkbox">Mantenha-me conectado</label>
                <a href="#">Esqueci minha senha</a>
            </div>

            <!-- Botão de login -->
            <button type="submit" class="btn">Login</button>

            <!-- Link para registro -->
            <div class="register">
                <label>Ainda não tem uma conta?</label>
                <a href="#">Inscreva-se agora</a>
            </div>
        </form>
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
/* Estilos CSS */

/* Reset de estilos padrão do navegador */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

/* Estilos para o corpo da página */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('../assets/background3.jpg');
    background-position: center;
    background-size: cover;
    /* background-image: linear-gradient(45deg,#b60572,#2943b8); */


}

/* Estilos para a caixa de login */
.log {
    width: 420px;
    background: #00000070;
    color: #fff;
    padding: 20px;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 20px;
}

/* Estilos para o título "Login" */
.log h1 {
    font-size: 36px;
    text-align: center;
}

/* Estilos para os campos de e-mail e senha */
.log .mail-box , .pass-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin:  30px 0;
}

/* Estilos para os campos de entrada de texto */
.mail-box input,
.pass-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    color: #fff;
    padding: 20px 45px 20px 20px;
}

/* Estilos para o placeholder dos campos de entrada */
.pass-box input input::placeholder,
.mail-box input input::placeholder {
    color: #fff;
}

/* Estilos para os ícones dos campos */
.log .mail-box i,
.log .pass-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

/* Estilos para a opção "Lembrar-me" e o link "Esqueci minha senha" */
.log .remember {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
    align-items: center;
}
.log .remember a {
    font-weight: bold;

}
.log .remember label input {
    accent-color: #fff;
    margin-right: 5px;
}

.log .remember a {
    color: #fff;
    text-decoration: none;
    margin-top: 3px;
}

.log .remember a:hover {
    text-decoration: underline;
}

/* Estilos para o botão de login */
.log .btn {
    width: 100%;
    height: 45px;
    background: #ffffff81;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgb(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
    margin-bottom: 20px;
}

.log .btn:hover {
    background: #ffffffab;
}

/* Estilos para o link "Inscreva-se agora" */
.log .register {
    font-size: 14.5px;
    text-align: center;
    margin-top: 20px 0 15px;

}

.log .register a:hover{
    text-decoration: underline;

}

.log .register a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding-left: 25px;
    
}

.log .mail-box input::placeholder {
    color: #ffffffc0;
}

.log .pass-box input::placeholder {
    color: #ffffffc0;
}


</style>
