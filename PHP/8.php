<!--Crie um site em php que o usuário informe uma string de números e retorne a soma dos números. :OBS: Veja explode()
xamp http://localhost/PPI/PHP/8.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>questao8</title>
</head>
<body>
    <form action="">

    <label for="numeros"></label>
    <input type="text" name="num" id="numeros">
    <button class="somar" type="submit">somar</button>

    </form>

    <?php

     function somar(){
    if(isset($_GET['num'])){
        $num = explode(" ", $_GET["num"]);
           $soma = 0;
       for($i = 0; $i < count($num); $i++){ 
        $soma = $soma + floatval($num[$i]);
         }
             echo $soma;
             } else{
                echo "erro";
           }
       }

       somar();
    
?>

</body>
</html>