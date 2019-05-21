<?php

require_once('./products.php');

header('Content-Type: application/json');

//if (empty($_GET['id'])) {
//  readfile('dummy-products-list.json');
//} else {
//  readfile('dummy-product-details.json');
//}

set_exception_handler(error_handler);
$output = file_get_contents('products_list.json');
print($output);

?>
