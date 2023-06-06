<?php

namespace PolakJan\Website;

use PolakJan\Website\Page; // as Page;
use SomeCreator\BookPreviews\Page as BookPreviewPage;

require_once 'Page.php';
require_once 'SomeCreator/BookPreviews/Page.php';

// using classes with FQN:
$page_of_my_website = new \PolakJan\Website\Page;

$page_of_a_book = new \SomeCreator\BookPreviews\Page;


var_dump($page_of_my_website);

var_dump($page_of_a_book);

// using classes using unqualified name:
//      like a relative path, adds the name
//      to the current namespace
$page_of_my_website = new Page;

// using use and a "nickname"
$page_of_a_book = new BookPreviewPage;

function str_replace($find, $replace, $subject)
{
    return 'NOT barbar';
}

$value = str_replace('foo', 'bar', 'foobar');
var_dump($value);