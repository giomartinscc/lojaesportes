<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "controle";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['email']) && isset($_POST['senha'])) {
    error_log("Email: " . $_POST['email']);
    error_log("Senha: " . $_POST['senha']);

    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM login WHERE email = ? AND senha = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $senha);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(["status" => "success", "message" => "Login bem-sucedido!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Email ou senha inválidos."]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Email e senha são obrigatórios."]);
}

$conn->close();
?>