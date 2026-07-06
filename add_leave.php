<!-- <?php
// 1. Allow React to talk to PHP
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json"); -->

// Handle preflight requests (Browser security check)
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     exit(0);
// }

// // 2. Database Connection
// $host = "localhost";
// $user = "root"; 
// $password = ""; 
// $dbname = "employee"; 

// $conn = new mysqli($host, $user, $password, $dbname);

// if ($conn->connect_error) {
//     echo json_encode(["status" => "error", "message" => "Connection failed"]);
//     exit();
// }

// // 3. Read the data coming from React
// // React sends data as raw JSON, so we decode it here
// $data = json_decode(file_get_contents("php://input"), true);

// if (isset($data['type'])) {
//     $leave_type = $conn->real_escape_string($data['type']);
//     $current_date = date('Y-m-d');
    
    // 4. THE SQL QUERY: Insert the data into the database
//     $sql = "INSERT INTO leave_requests (start_date, end_date, type, status) 
//             VALUES ('$current_date', '$current_date', '$leave_type', 'pending')";
            
//     if ($conn->query($sql) === TRUE) {
//         echo json_encode(["status" => "success", "message" => "Leave request saved!"]);
//     } else {
//         echo json_encode(["status" => "error", "message" => "Error saving to database"]);
//     }
// } else {
//     echo json_encode(["status" => "error", "message" => "No leave type provided"]);
// }

// $conn->close();
// ?>

<!-- <!-- <?php -->
// header("Content-Type: application/json");
// include 'db_connection.php'; // Ensure this file connects to your database

// $data = json_decode(file_get_contents("php://input"), true);

// $user_email = $data['user_email'];
// $start_date = $data['start_date'];
// $end_date = $data['end_date'];
// $hours = $data['hours'];
// $leave_type = $data['leave_type'];
// $comment = $data['comment'];
// // $status = $data['status'];
//  $status = "PENDING";

// $sql = "INSERT INTO leave_requests (user_email, start_date, end_date, hours, leave_type, comment, status) 
//         VALUES (?, ?, ?, ?, ?, ?, ?)";

// $stmt = $conn->prepare($sql);
// if ($stmt->execute([$user_email, $start_date, $end_date, $hours, $leave_type, $comment, $status])) {
//     echo json_encode(["status" => "success"]);
// } else {
//     echo json_encode(["status" => "error", "message" => "Could not save."]);
// }
// ?> -->



<!-- <?php

// header("Content-Type: application/json");
// include 'db_connection.php';

// $data = json_decode(file_get_contents("php://input"), true);

// $user_email = $data['user_email'];
// $start_date = $data['start_date'];
// $end_date = $data['end_date'];
// $hours = $data['hours'];
// $leave_type = $data['leave_type'];
// $comment = $data['reason'];     // Changed
// $status = "PENDING";            // Changed

// $sql = "INSERT INTO leave_requests
// (user_email, start_date, end_date, hours, leave_type, comment, status)
// VALUES (?, ?, ?, ?, ?, ?, ?)";

// $stmt = $conn->prepare($sql);

// if ($stmt->execute([
//     $user_email,
//     $start_date,
//     $end_date,
//     $hours,
//     $leave_type,
//     $comment,
//     $status
// ])) {
//     echo json_encode([
//         "status" => "success"
//     ]);
// } else {
//     echo json_encode([
//         "status" => "error"
//     ]);
// } -->



// <?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

// // Database Connection
// $host = "localhost";
// $user = "root";
// $password = "";
// $dbname = "employee";

// $conn = new mysqli($host, $user, $password, $dbname);

// if ($conn->connect_error) {
//     die(json_encode([
//         "status" => "error",
//         "message" => "Database connection failed"
//     ]));
// }

// // Get JSON data from React
// $data = json_decode(file_get_contents("php://input"), true);

// $user_email = $data['user_email'];
// $start_date = $data['start_date'];
// $end_date = $data['end_date'];
// $hours = $data['hours'];
// $leave_type = $data['leave_type'];
// $comment = $data['reason'];     // React sends "reason"
// $status = "PENDING";            // Default status

// // Insert into database
// $sql = "INSERT INTO leave_requests
// (user_email, start_date, end_date, hours, leave_type, comment, status)
// VALUES (?, ?, ?, ?, ?, ?, ?)";

// $stmt = $conn->prepare($sql);

// $stmt->bind_param(
//     "sssisss",
//     $user_email,
//     $start_date,
//     $end_date,
//     $hours,
//     $leave_type,
//     $comment,
//     $status
// );

// if ($stmt->execute()) {

//     echo json_encode([
//         "status" => "success",
//         "message" => "Leave request submitted successfully."
//     ]);

// } else {

//     echo json_encode([
//         "status" => "error",
//         "message" => $stmt->error
//     ]);

// }

// $stmt->close();
// $conn->close();
// ?>






































<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "employee");

if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Database connection failed"
    ]));
}

$data = json_decode(file_get_contents("php://input"), true);

$user_email = $data["user_email"];
$leave_start_date = $data["start_date"];
$leave_end_date = $data["end_date"];
$hours = $data["hours"];
$leave_type = $data["leave_type"];
$comment = $data["reason"];
$status = "PENDING";

$sql = "INSERT INTO leave_requests
(user_email, leave_start_date, leave_end_date, hours, leave_type, comment, status)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => $conn->error
    ]);
    exit();
}

$stmt->bind_param(
    "sssisss",
    $user_email,
    $leave_start_date,
    $leave_end_date,
    $hours,
    $leave_type,
    $comment,
    $status
);

if ($stmt->execute()) {

    echo json_encode([
        "status" => "success",
        "message" => "Leave request submitted successfully."
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => $stmt->error
    ]);

}

$stmt->close();
$conn->close();

?>