<?php


// echo "<body>";
// echo "<h1>Hey there</h1>";
// echo "<br>";
// echo 3 + 4;
// echo "<br>";
// echo "<p>people</p>";
// echo "</body>";

$my_number = 123;

// echo $my_number + 321;

// $a = 1;

// echo $a; // Works fine

// function foo()
// {
//     echo $a; // Doesn't work, $a is not defined
//     $b = 2;
//     echo $b; // Works fine
//     define('MY_SERVER', 'Apache');
// }

// foo();

// echo MY_SERVER;


// echo $b; // Doesn't work, $b is not defined

// $a = 1;
// echo ($a);
// echo "<br>";

// function func(&$b)
// {
//     $b++;
//     return "1".$b;
// }

// $c = func($a);

// echo ($a);
// echo "<br>";
// echo ($c);

// function raiseValue($value , $raise_by = 1)
// {
//     return $value + $raise_by;
// }

// echo raiseValue(1, 2); // 3
// echo "<br>";
// echo raiseValue(1); // 2

$array = [
    1,
    2,
    3,
];
// echo $array[0];
// echo "<br>";

$associative_array = [
    "a" => "dog",
    "b" => "cow",
    "c" => "cat",
];
// echo $associative_array["a"];
// echo "<br>";
// var_dump($associative_array);

// array_push($array, 5);
$array[] = 5;

// echo json_encode($array);

// echo "<br>";

$a = 0;
// var_dump(!empty($associative_array["a"]));

// var_dump(array_key_exists('t', $associative_array));

foreach ($associative_array as $key => $value) {
    echo "Value of {$key} is {$value}<br>";
}
sort($associative_array);
// var_dump($associative_array);


function my_comparison_function($value1, $value2)
{
    if($value1 < $value2) {
        return -1;
    } elseif($value1 == $value2) {
        return 0;
    } elseif($value1 > $value2) {
        return 1;
    }
}

$array = [3, 1, 2];

usort($array, 'my_comparison_function');
var_dump($array);
// echo $associative_array;

?>