<h1> <?php echo "olá mundo!";?> </h1>

<?php
    $valor = 50;
    echo "<p>" .$valor ."</p>";
    // . = concatena
    echo "<p> $valor </p>";
    // convesao no hmtl
    echo '<p> $valor </p>';
    // convesao literal = nao realiza a conversao

    $nome = "joao";
    echo $nome;
    echo "<br>";

    $array=""; // declaranndo array como  string
    $array=array(); // como array
    $array=["pera", "maça", "banana"];

    print_r($array); // Array ( [0] => pera [1] => maça [2] => banana )

    echo "<ul>";
    for($i=0 ; $i < count($array); $i++ ){
        echo "<li> $i $array[$i] </li>";

    }
    echo "</ul>";
?>
