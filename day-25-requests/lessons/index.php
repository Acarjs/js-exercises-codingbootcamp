<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
    $my_text = "hello"; // 1
    $my_number = 123;   // 2
    $students = ["Matt", "Fanny", "Martin"];
?>
<body>
    <p>new file</p>
    <p><?php echo $my_text // 3 ?></p>
    <p><?php echo $my_number // 4 ?></p>
    <hr>
    <!-- "Standard way of producing paragraph for each student" -->
    <?php
        foreach ($students as $student) {
            echo "<p>{$student}</p>";
        }

        if (true) {

        } elseif (true) {

        } else {

        }
    ?>
    <hr>
    <!-- NEW and AMAZING way to do it with inline statements -->
    <?php foreach ($students as $student) : ?>
        <p><?= $student ?></p>
    <?php endforeach; ?>

    <?php if (false) : ?>
        <p>1</p>
    <?php elseif (false) : ?>
        <p>2</p>
    <?php else : ?>
        <p>3</p>
    <?php endif; ?>

    <hr>

    <?php
        $user_is_admin = false;
    ?>

    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Eshop</a></li>
        <li><a href="#">Contact</a></li>
        <!-- <li><a href="#">Link just for administrators</a></li>
        <li><a href="#">Another link just for administrators</a></li> -->
        <?php if ($user_is_admin) : ?>
            <li><a href="#">Link just for administrators</a></li>
            <li><a href="#">Another link just for administrators</a></li>
        <?php endif; ?>
    </ul>

</body>
</html>

<?php
    // Equivalent
    // $my_text = "hello";  // 1
    // $my_number = 123;    // 2
    // echo $my_text;       // 3
    // echo $my_number;     // 4
?>