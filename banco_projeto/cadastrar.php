<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "controle";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$senha = $_POST['senha'];

if (empty($email) || empty($senha)) {
    echo json_encode(['status' => 'error', 'message' => 'Email e senha são obrigatórios.']);
    exit;
}

$sql = "INSERT INTO login (email, senha) VALUES ('$email', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success', 'message' => 'Cadastro realizado com sucesso.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Erro ao cadastrar. Tente novamente.']);
}

$conn->close();
?>