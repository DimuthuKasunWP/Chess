<?php

    echo "Hello PHP, I am from IJSE <br>";

    // Single line comment

    /*
        Multiline comment

    */

    # Unix - Shell Style comment

    // Boolean

    $status = true;

    echo "Boolean : " . $status . "<br>";

    // Numbers

    $binary = 0b1;  // 0B1

    echo "Decimal : " . $binary . "<br>"; 

    $octal = 010;  

    echo "Octal : " . $octal . "<br>";        

    $decimal = 10;

    echo "Decimal : " . $decimal . "<br>";

    $hexaDecimal = 0xA; // 0Xa;

    echo "Decimal : " . $hexaDecimal . "<br>";

    $float = 1.25;

    echo "Float : " . $float . "<br>";

    $floatWithExp = 1.25e2;

    echo "Float with Exp : " . $floatWithExp . "<br>";

    $singleQuot = 'This is \t Single quot' . "<br>";

    echo "Single Quot : " . $singleQuot;

    $doubleQuot = "This is \t Double quot" . "<br>";

    echo "Double Quot : " . $doubleQuot . "<br>";

    $name = "IJS";

    echo "I am learning : {$name}E" . "<br>";

    // Const

    define("PI",3.14);

    echo PI . "<br>";

    // Arrays

    $myArray = array(10,"IJSE",30,40);

    echo "2nd Element of myArray {$myArray[1]} <br>";

    // $myArray = array(array("IJSE","Galle"),array("IJSE","Panadura"));

    // var_dump($myArray);

    foreach($myArray as $value){
        echo $value . "<br>";
    }

    $name1 = "IJSE";

    $name2 = &$name1;

    $name2 = "ESOFT";

    echo "Name 1 : {$name1} <br>";

    echo "Name 2 : {$name2} <br>";

    // Method

    function myFunction(){
        echo "My Function <br>";
    }

    myFunction();

    // Method with parameters

    function printDetails($name){
        echo "Name : {$name} <br>";
    }

    printDetails("IJSE","Pandadura","Galle");

    // Method overloading

/*
    function myMethod($name,$age,$school){
        echo "$name $age $school";
    }

    function myMethod($name, $age){
        echo "$name $age";
    }

    function myMethod($name){
        echo "$name";
    }
    */

    // Default parameters

    function printName($name = "IJSE"){
        echo $name . "<br>";
    }

    printName();

    // Variable number of arguments (var args)

    function varArgs(...$args){

        foreach($args as $value){
            echo "$value <br>";
        }

    }

    varArgs("First","Second","Third","Fourth");

