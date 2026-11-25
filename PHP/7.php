<!--Crie um site que imprima a tabuada de um número informado pelo usuário em um formulário.-->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>questao7</title>
</head>
<body>

    <form method="GET">
        <input type="number" name="numero" required>
        <button type="submit">Enviar</button>
    </form>

    <?php
        if(!isset($_GET['numero'])){
            exit();
        }

        $numero = $_GET['numero'];

        function tabuada($n){
            for($i = 1; $i <= 10; $i++){ ?>
                <li><?php echo $i * $n; ?></li>
            <?php
            }
        }

        tabuada($numero);
    ?>

</body>
</html>