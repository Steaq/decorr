<?php
session_start();

$a1 = rand(1, 9);
$a2 = rand(1, 9);

if (isset($_POST["answer"])) {
	$a3 = $_POST["c1"] * $_POST["c2"];
if ($a3 == $_POST["answer"]) {
	echo 'Правильный ответ';
} else {
	echo 'Не Правильный ответ';
}
}



?>

<form action="" method="POST">
	<?=$a1;?> * <?=$a2;?> = 
	<input type="text" name="answer">
	<input type="hidden" name="c1" value="<?=$a1;?>">
	<input type="hidden" name="c2" value="<?=$a2;?>">
	<button type="submit" name="">Отправить</button>
	

</form>