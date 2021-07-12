<?php
function email(){
    
if (isset($_POST['email'])){
    $data = [
        'name'=> "isaac"
    ];
    return json_encode($data);
} else {
    echo "false";
}

}