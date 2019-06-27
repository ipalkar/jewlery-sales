<?php
require_once('./products.php');
require_once('./mysql_credentials.php');
require('./functions.php');

header('Content-Type: application/json');

//set_exception_handler(error_handler);
startup();

$whereClause ='';
$id = false;
if(!empty($_GET['id'])){
    $id = intVal($_GET['id']);
    $whereClause ="WHERE `id` =$id";
}

$query = "SELECT * FROM `products` $whereClause";
$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}
$output = [];

while($row = mysqli_fetch_assoc($result)){
    $row['price']=intVal($row['price']);
    $row['id']=(int)$row['id'];
    $output[] = $row;
}

if($id){
    $output =$output[0];
}
$json_output =json_encode($output);

print($json_output);


?>
