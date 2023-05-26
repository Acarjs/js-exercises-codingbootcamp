<?php
    session_start();
    var_dump($_SESSION);
    $error = $_SESSION["message"] ?? false;
    unset($_SESSION["message"]);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>
<body>
    <h2>GET form</h2>
    <form action="get_receiver.php" method="get">
        Fname: <input type="text" name="first_name"> <br>
        Lname: <input type="text" name="last_name"> <br>
        <button>Submit</button><br>
    </form>
    <h2>POST form</h2>
    <form action="post_receiver.php" method="post">
        Fname: <input type="text" name="first_name"> <br>
        Lname: <input type="text" name="last_name"> <br>
        Product: <input type="text" name="product"> <br>
        Quantity: <input type="number" name="quantity"> <br>
        <?php if ($error) :?>
            <p><?= $error ?></p>
        <?php endif; ?>
        <button>Submit</button><br>
    </form>
</body>
</html>