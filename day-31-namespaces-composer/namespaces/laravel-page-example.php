<?php

namespace App\Http\Controllers;

use Illuminate\Support\Session; // as Session
use Illuminate\Support\Request; // as Request;
// use Symfony\Lib\Validation as Validation;
use Laravel\Lib\Validation as LaravelValidation;




$value = Session::get('foo');

$request = new Request;

LaravelValidation::validate('...');