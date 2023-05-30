<?php

session_start();

var_dump($_SESSION);

$_SESSION['start'] = date('H:i:s');

echo 'The value was put into the session at ' . $_SESSION['start'];

// unset($_SESSION['start']);