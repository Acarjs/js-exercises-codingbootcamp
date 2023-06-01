<?php

require_once "DB.php";

require_once "City.php";

$success = DB::connect('localhost', 'world', 'root', '');

// $a = 3;
// $b = 1;

// if (in_array($a, [1, 2, 5]) ) {
//     echo "<h1>BINGO!</h1>";
// }

// $search_string = $_GET["search_string"];

$cities = DB::select("
    SELECT * FROM `cities`
    WHERE `name` LIKE ?
",
[
    // "%{$search_string}%"
    "%ville%"
],
"City");

var_dump($cities);