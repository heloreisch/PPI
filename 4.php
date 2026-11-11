<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
if (isset ($_GET["min"]) && isset($_GET["max"]) ){
    $min= $_GET["min"];
    $max= $_GET["max"];
    echo rand($min , $max) ;
}

?>
<form>

<label for="min">minimo</label>
<input  name="min" type="number" value="<?php echo $min; ?>">

<label for="max">maximo</label>
<input name="min" type="number" value="<?php echo $max; ?>">

<input type="submit">

</form>

</body>
</html>