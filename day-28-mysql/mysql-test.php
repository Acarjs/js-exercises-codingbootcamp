<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';

DB::connect(
    'localhost',    // server location
    'world',        // database name
    'root',         // username
    ''              // password
);

$results = DB::select('
        SELECT *
        FROM `countries`
        WHERE `population` > ?;
    ',
    [
        20000000
    ],
    'Country');

var_dump($results);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>Large countries</h1>
<ul>
    <?php foreach ($results as $country) : ?>
        <li>
            <?= $country->name ?>

            (<?= $country->population ?>)

            capital: <?= $country->getCapital()->name ?>
        </li>
    <?php endforeach; ?>
</ul>

</body>
</html>