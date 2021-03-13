<?php
session_start();
/*$a1 = 10;
$a2 = 5;
$a3 = $a1 * $a2;
echo $a3.', ';

if ($a3 == 50) { 

	echo "50"; 
} else if ($a3 > 50) {
	echo "0";
} else {
†
 echo "100";	
}

$q1 = true;
$q2 = false;
*/
$ios = array();
if (isset($_POST["ua"])) {
$white = rand(1, 9);
echo $white.'<br>'; 
if ($white == 2 or $white == 5) {
	echo 'У меня всё получилось'; 
}
echo '<hr>';
for ($i==1; $i<$white; $i++) {
	echo $i.'<br>';
	$ios[$i][] = rand(99, 999);
	$ios[$i][] = rand(99, 999);
}
foreach ($ios as $key => $value) {
	echo $value[0]. " - ".$value[1]."<br>";
}
}
//$_SESSION["ya"] = 1;

//echo "<pre>";
//print_r($ios);
//echo "</pre>";
?>

<form action="" method="POST">
	<input type="text" name="ua">
	<button type="submit" name="ea">Отправить</button>

</form>
