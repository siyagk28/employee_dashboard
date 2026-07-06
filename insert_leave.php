<!-- <!-- <!-- <?php
// This allows your React app to talk to the PHP file
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json"); -->

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "employee";

// $conn = new mysqli($servername, $username, $password, $dbname);

// // Get the data sent from your React form
// $data = json_decode(file_get_contents("php://input"), true); -->

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $start = $data['leave_start_date'];
//     $end = $data['leave_end_date'];
//     $hours = $data['hours'];
//     $type = $data['leave_type'];
//     $comment = $data['comment'];

//     // Insert the data into your leave_requests table
//     $sql = "INSERT INTO leave_requests (leave_start_date, leave_end_date, hours, leave_type, comment, status) 
//             VALUES (?, ?, ?, ?, ?, 'Pending')";

//     $stmt = $conn->prepare($sql);
//     $stmt->bind_param("ssiss", $start, $end, $hours, $type, $comment);

//     if ($stmt->execute()) {
//         echo json_encode(["message" => "Request submitted successfully"]);
//     } else {
//         echo json_encode(["error" => "Database error: " . $conn->error]);
//     }
//     $stmt->close();
// }
// $conn->close();
// ?> -->










<?php

header("Content-Type: application/json");

$conn = new mysqli("localhost","root","","employee_db");

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