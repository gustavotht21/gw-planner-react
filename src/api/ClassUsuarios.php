<?php
include("ClassConnection.php");

class ClassUsuarios extends ClassConnection {
    public function printUsers() {
        $BFetch=$this->connectionDB()->prepare("select * from Usuarios");
        $BFetch->execute();

        $JSON=[];
        $index=0;

        while ($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)) {
            $JSON[$index]=[
                "IdUser"=>$Fetch['IdUser'],
                "emailUser"=>$Fetch['emailUser'],
                "passwordUser"=>$Fetch['passwordUser'],
            ];
            $index++;
        }
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($JSON);
    }
}