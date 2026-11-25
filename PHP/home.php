   <?php
   session_start();
   if(!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
   }

   echo "Bem vindo," .  $_SESSION['usuario'] . "!";
   //imprimir usuario e senha
   echo "<br>Usuário: " . $_SESSION['usuario']. "<br>Snha: " .  $_SESSION['senha'];

   ?>

