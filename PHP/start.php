<?php
   
   session_start();
   if(!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
   }
    // veriica se o usuario e sebha estao corretos
   $_SESSION['usuario'] = $_POST['usuario'];
   $_SESSION['senha'] = $_POST['senha'];

   header("Location: home.php")
?>