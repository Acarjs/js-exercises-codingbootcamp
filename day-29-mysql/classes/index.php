<?php

require_once "DB.php";
require_once "DB_functions.php";

require_once "City.php";
require_once "Region.php";

$success = DB::connect('localhost', 'world', 'root', '');

// $a = 3;
// $b = 1;

// if (in_array($a, [1, 2, 5]) ) {
//     echo "<h1>BINGO!</h1>";
// }

// $search_string = $_GET["search_string"];

// $cities = DB::select("
//     SELECT * FROM `cities`
//     WHERE `name` LIKE ?
// ",
// [
//     // "%{$search_string}%"
//     "%ville%"
// ],
// "City");

$values_from_form = [
    56,
    199,
    172,
];

// $test_array = array_fill(0, count($values_from_form), "?");
// $test_string = implode(', ',$test_array);
// var_dump( $test_string);
// die();

// get a string of as many question marks as needed for the array
// of IN values;
// $question_marks = implode(', ',array_fill(0, count($values_from_form), "?"));

// $cities = DB::select("
//     SELECT * FROM `cities`
//     WHERE `country_id` IN ($question_marks)
//     ORDER BY `population` DESC
//     LIMIT 10
// ",
// $values_from_form,
// "City");

// $cities = DB::select("
//     SELECT * FROM `cities`
//     WHERE `country_id` IN (?, ?, ?, ?)
//     ORDER BY `population` DESC
//     LIMIT 10
// ",
// [56, 199, 172, 98],
// "City");

// var_dump($cities);

// DB::insert("
//     INSERT INTO `regions`
//     (`name`, `slug`)
//     VALUES
//     (?, ?)
// ",
// [
//     "Test One",
//     "test-one",
// ]);


// $region = new Region;
// $region->name = "Central America";
// $region->slug = "central-america";
// $region->insert();

// var_dump($region);

// DB::update("
//     UPDATE `regions`
//     SET `name` = ?,
//         `slug` = ?

//     WHERE `id` = ?
// ",
// [
//     "Region Name",
//     "region-name",
//     1111111
// ]);

$region = DB::selectOne("SELECT * FROM `regions` WHERE `name` = ?", ['Central Africa'], 'Region');
$region->slug = 'middle-africa';
var_dump($region);
$region->save();

$regionArray = [
    'name' => 'Central Africa',
    'slug' => 'central-africa'
];

// $region = new Region;
// $region->fill($regionArray);

// $region->name == 'Central Africa';
// $region->slug == 'central-africa';