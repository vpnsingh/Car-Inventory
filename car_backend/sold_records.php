<?php
    
    require 'dbconnection.php';

    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

	$id = $data->id;
    
	echo json_encode($request_body);
    if(isset($data)){
        
    $sql = "Select * from tbl_products WHERE id=$id";
    $result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_array($result);
	$count = $row['count'];
	$down_count = $count-1;
	//echo $count;
	
	if($down_count <  2){
		mysqli_query($conn,"Delete from tbl_products WHERE id=$id");
	}
	$updateCount = "Update tbl_products SET count = $down_count WHERE id=$id";
	$execuet = mysqli_query($conn,$updateCount);
    
 }
?>