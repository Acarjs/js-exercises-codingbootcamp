<?php

require_once 'DBBlackbox.php';
require_once 'Song.php';
require_once 'helpers.php';

// find the ID of the record we want to edit in the request
$id = $_GET['id'] ?? null;

if ($id === null) {
    die('Please open this URL only with ?id=1 in the URL where 1 is the id of the edited song. <a href="index.php">Go back to index</a>');
}

// somehow retrieve existing song from some storage
$song = find( $id, 'Song' );

$success_message = session()->get('success_message');
$errors = session()->get('errors');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editing song <?= $id ?></title>
</head>
<body>

    <?php include 'topmenu.php'; ?>

    <?php if ($success_message) : ?>
        <div class="success-message"><?= $success_message ?></div>
    <?php endif; ?>

    <!-- if there are errors, display them -->
    <?php if ($errors) : ?>
        <?php foreach ($errors as $error) : ?>
            <div class="error-message"><?= $error ?></div>
        <?php endforeach; ?>
    <?php endif; ?>

    <form action="update.php?id=<?= $id ?>" method="post">

        <!-- display the form prefilled with entity data -->

        Name:<br>
        <input type="text" name="name" value="<?= htmlspecialchars((string)old('name', $song->name)) ?>"><br>
        <br>

        Author:<br>
        <input type="text" name="author" value="<?= htmlspecialchars((string)old('author', $song->author)) ?>"><br>
        <br>

        Length:<br>
        <input type="number" name="length" value="<?= htmlspecialchars((string)old('length', $song->length)) ?>"> seconds<br>
        <br>

        Album:<br>
        <input type="text" name="album" value="<?= htmlspecialchars((string)old('album', $song->album)) ?>"><br>
        <br>

        <button type="submit">Save</button>

    </form>

</body>
</html>