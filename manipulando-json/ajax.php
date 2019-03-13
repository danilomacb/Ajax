<?php
    $nome = $_POST['nome'];
    $senha = $_POST['senha'];

    $array = array('status' => '');

    if($nome == 'danilo' && $senha == '123') {
        $array['status'] = 'ok';
    }

    echo json_encode($array);
?>