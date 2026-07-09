<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
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