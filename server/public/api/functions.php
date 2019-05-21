<?php
function error_handler($error){$output =
    array(success =>false,
          error => $error->getMessage()
);

$json_output = json_encode($output);
print($json_output);
}
?>