<?php

// require the file with the class declaration
require_once 'Spaceship.php';
// from now on the class Spaceship is available to be used
require_once 'Captain.php';
// from now on the class Captain is available to be used

$first_spaceship = new Spaceship('USS Enterprise');

$second_spaceship = new Spaceship('Kobayashi Maru');

$my_spaceship = new Spaceship('Car');

$millenium_falcon = new Spaceship('Millenium Falcon');


$first_spaceship->goForward();

$my_spaceship->goForward();

$millenium_falcon->goBackward();
$millenium_falcon->goForward();

$millenium_falcon->fly(120);

$millenium_falcon->name = 'Millenium Falcon';

$millenium_falcon->setName('Millenium Falcon II');

$han_solo = new Captain('Han', 'Solo');
$han_solo->addSkill('pilot');
$han_solo->addSkill('joke around');
$han_solo->addSkill('kiss Leia');
$millenium_falcon->captain = $han_solo;

$millenium_falcon->assignCaptain( new Captain('Chewbacca') );

var_dump($millenium_falcon->captain);

$millenium_falcon->captain->addSkill('pilot');
$millenium_falcon->captain->addSkill('roar');
$millenium_falcon->captain->addSkill('shoot crossbow');

var_dump($my_spaceship);
var_dump($millenium_falcon);