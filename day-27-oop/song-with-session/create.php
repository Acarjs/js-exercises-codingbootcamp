<?php

require_once 'DBBlackbox.php';
require_once 'Song.php';
require_once 'helpers.php';

// prepare empty entity
$song = new Song;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create a new song</title>
</head>
<body>

    <?php include 'topmenu.php'; ?>

    <!-- if there are errors, display them -->
    <?php if (session()->get('errors')) : ?>
        <?php foreach (session()->get('errors') as $error) : ?>
            <div class="error-message"><?= $error ?></div>
        <?php endforeach; ?>
    <?php endif; ?>

    <form action="insert.php" method="post">

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