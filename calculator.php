<?php

$userInput = $_POST['user-input'];

if (isset($userInput)) {
    $valid = true;
    $pattern = '@([-/+\*])@';
    $splitedInput = preg_split($pattern, preg_replace('@\s@', '', $userInput), -1, PREG_SPLIT_DELIM_CAPTURE);

    // last character is not number
    if (count($splitedInput) % 2 == 0) {
        echo "<span>You should enter valid equation like
                (2*5+3/4)(Your last input is not a number) 
                <br> Click the link below to return to the previous page
                 <br><a href='Calculator.html'>Calculate again</a>
                </span>";
        $valid = false;
    } else {
        // check validation input
        for ($i = 0; $i <= 2; $i = $i + 2) {
            if (is_numeric($splitedInput[$i]) != 1) {
                echo "<span>You should enter valid equation like
                (2*5+3/4)(Your entered characters in your equation or put more than one operator between two numbers ) 
                <br> Click the link below to return to the previous page
                 <br><a href='Calculator.html'>Calculate again</a>
                </span>";
                $valid = false;
            }
        }
        if ($valid) {
            echo "<span>Your answer is : </span>";
            eval("\$userInput = ".$userInput.";");
            echo $userInput;
//            echo eval($userInput.";");

            echo " <br>
                <span>
                <br> Click the link below to return to the previous page
                 <br><a href='Calculator.html'>Calculate again</a>
                </span>";
        }
    }
}else{
    echo "<span>You should enter valid equation like
                (2*5+3/4)(The box is empty) 
                <br> Click the link below to return to the previous page
                 <br><a href='Calculator.html'>Calculate again</a>
                </span>";
}
