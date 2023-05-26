<?php

session_start();
// var_dump($_POST);

if (empty($_POST['quantity'])) {
    // echo "<h1>No items ordered</h1>";
    // flash message (only for one request)
    $_SESSION["message"] = "No quantity ordered";
    header('Location: form.php');
    exit();
}

$first_name = $_POST['first_name'];

echo "<br>";
echo "Here is the receiver for a POST form sent by {$first_name}";

header('Location: post_landing_page.php');
// end();