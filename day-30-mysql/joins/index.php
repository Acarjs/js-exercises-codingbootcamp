<?php

require_once "DB.php";
require_once "City.php";
require_once "CityWithCountryName.php";

DB::connect('localhost', 'world', 'root', '');

$afghan_cities = DB::select("SELECT *
    FROM `cities`
    WHERE `country_id` = 2
",[],'City');

var_dump($afghan_cities);
echo "<br><br>";

$afghan_cities_with_countries = DB::select("SELECT `cities`.*, `countries`.`name` as `country_name`
    FROM `cities` LEFT JOIN `countries` ON `cities`.`country_id` = `countries`.`id`
    WHERE `cities`.`country_id` = 2;
",[],'CityWithCountryName');

var_dump($afghan_cities_with_countries);

// echo $afghan_cities_with_countries[2]->country_name;

// $cities_with_country =