<?php 
error_reporting(E_ALL);
ini_set('display_errors',1);
header('Allow-Control-Allow-Origin:* ');
header('Allow-Control-Allow-Headers: *');
header('Allow-Control-Allow-Methods: *');

$db=mysqli_connect('localhost','root','','reactphpcrud');
if($db===false){
    die("Error: Could Not Connect" . mysqli_connect_error());
}
$method=$_SERVER['REQUEST_METHOD'];
// echo $method;
switch($method){
    case "GET";
    $alluser=mysqli_query($db,"SELECT * FROM student_table");
    if(mysqli_num_rows($alluser) > 0 ){
        while($row=mysqli_fetch_array($alluser)){
            $json_array["userdata"][]=array("id"=>$row['std_id'], "student_name"=>$row['student_name'],"student_email"=>$row['student_email'],"student_status"=>$row['student_status']);

        }
        echo json_encode( $json_array["userdata"]);
        return;
    }else{
        echo json_encode(["Result"=>"please Check The Data"]);
        return;
    }

    break;

    case "POST";
    $userpostdata= json_decode(file_get_contents("php://input"));
    echo "sucess data";
    print_r($userpostdata); die;
    
    break;

}
?>