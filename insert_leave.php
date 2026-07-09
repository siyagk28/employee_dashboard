<?php

header("Content-Type: application/json");

// $host = "localhost";
// $user = "root"; 
// $password = ""; 
// $dbname = "employee"; 

$host = "sql302.infinityfree.com";
$user = "if0_42372781";
$pass = "fmUa7eawwny2p";
$dbname = "if0_42372781_employee";

$conn = new mysqli($host, $user, $password, $dbname);

$data = json_decode(file_get_contents("php://input"), true);

$user_email = $data['user_email'];
$leave_start_date = $data['leave_start_date'];
$leave_end_date = $data['leave_end_date'];
$hours = $data['hours'];
$leave_type = $data['leave_type'];
$comment = $data['comment'];

$sql = "INSERT INTO leave_requests
(user_email,leave_start_date,leave_end_date,hours,leave_type,comment)
VALUES (?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
"sssiss",
$user_email,
$leave_start_date,
$leave_end_date,
$hours,
$leave_type,
$comment
);

if($stmt->execute()){
    echo json_encode([
        "message"=>"Leave Request Submitted"
    ]);
}else{
    echo json_encode([
        "error"=>"Insert Failed"
    ]);
}