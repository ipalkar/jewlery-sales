<?php

require_once('./products.php');
require_once('./mysql_credentials.php');

header('Content-Type: application/json');


set_exception_handler(error_handler);


$query = 'SELECT * FROM `products`';
$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error);
    exit();
}
$output = [success=>true,data=>[]];

while($row = mysqli_fetch_assoc($result)){
    $output['data'][] = $row;
}
$json_output =json_encode($output);
print($json_output);
?>
