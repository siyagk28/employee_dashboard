<!-- <?php -->

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

// $conn = new mysqli("localhost","root","","employee");

// if($conn->connect_error){
//     die(json_encode([
//         "status"=>"error",
//         "message"=>"Connection failed"
//     ]));
// }

// $data = json_decode(file_get_contents("php://input"), true);

// $id = $data["id"];

// $stmt = $conn->prepare("DELETE FROM leave_requests WHERE id=?");
// $stmt->bind_param("i",$id);

// if($stmt->execute()){

//     echo json_encode([
//         "status"=>"success",
//         "message"=>"Leave deleted successfully."
//     ]);

// }else{

//     echo json_encode([
//         "status"=>"error",
//         "message"=>"Delete failed."
//     ]);

// }

// $stmt->close();
// $conn->close();

// ?>

<?php
// 1. Bulletproof CORS Headers (This fixes the red error in your console)
header("Access-Control-Allow-Origin: http://localhost:5173"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// 2. The "Preflight" Bouncer: Approves React's secret check immediately
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json");

// 3. Connect to the correct database
$conn = new mysqli("localhost", "root", "", "employee");

if($conn->connect_error){
    die(json_encode([
        "status" => "error",
        "message" => "Connection failed: " . $conn->connect_error
    ]));
}

// 4. Get the ID sent from React
$data = json_decode(file_get_contents("php://input"), true);

// 5. Safety Check: Make sure an ID was actually sent
if (!isset($data["id"]) || empty($data["id"])) {
    die(json_encode([
        "status" => "error",
        "message" => "No ID provided to delete."
    ]));
}

$id = $data["id"];

// 6. Execute the Delete Query
$stmt = $conn->prepare("DELETE FROM leave_requests WHERE id=?");
$stmt->bind_param("i", $id);

if($stmt->execute()){
    echo json_encode([
        "status" => "success",
        "message" => "Leave deleted successfully."
    ]);
}else{
    echo json_encode([
        "status" => "error",
        "message" => "Delete failed."
    ]);
}

$stmt->close();
$conn->close();
?>
