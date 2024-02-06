<template>
  <header>Sistema alpha</header>

  <div class="corpo">
    <div class="title">
        <h1>Faça seu login</h1>
    </div>
    <div class="mail">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Insira aqui seu email..." required>
    </div>

    <div class="pass">
        <label for="pass">E-mail</label>
        <input type="password" name="password" id="password" placeholder="Insira aqui sua senha..." required>
    </div>
    <div class="send">
        <button type="submit">Entrar</button>
    </div>

    <div class="footer login">
        <p>Ainda não é membro?</p>
        <a href="">Inscreva-se aqui.</a>
    </div>
  </div>
</template>

<style>
*{
    padding: 0;
    margin: 0;
}
</style>