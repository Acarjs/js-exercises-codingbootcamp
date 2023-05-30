<?php

require_once 'DBBlackbox.php';
require_once 'Song.php';

// start the session
session_start();

// prepare empty entity
$song = new Song;

// update entity from request
$song->name = $_POST['name'] ?? $song->name; // if 'name' was not found in $_POST data, keep the current value
$song->author = $_POST['author'] ?? $song->author;
$song->length = $_POST['length'] ?? $song->length;
$song->album = $_POST['album'] ?? $song->album;

// potentially unsafe approach to updating the Song
// from $_POST:
// foreach ($_POST as $key => $value) {
//     $song->{$key} = $value;
// }


// somehow insert the entity into the database and generate a unique ID
// here done using DBBlackbox
$id = insert($song);

// everything went well
// time for a success message "successfully saved"
// put the success message into the session
$_SESSION['success_message'] = 'Song successfully inserted.';

// redirect to edit form for this song
//                edit.php?id=1
header('Location: edit.php?id='.$id);