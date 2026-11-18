<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?ph
        if(!isset($_GET['numero'])){
            exist();}
             $numero = $_GET['numero'];

             function tabuada($n){
                for($i = 1; $i <= 10; $i++){ ?>
                    <li> <?php echo $i * $n; ?> <li>
                }
             }
            

    


</body>
</html>