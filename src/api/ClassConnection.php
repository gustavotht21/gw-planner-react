<?php
abstract class ClassConnection {
    protected function connectionDB() {
        try {
            $Con=new PDO("mysql:host=localhost;dbname=gwplanner","root", "");
            return $Con;
        } catch (PDOException $Error) {
            return $Error->getMessage();
        }
    }
}
