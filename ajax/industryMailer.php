<?php
    
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $compName = strip_tags(trim($_POST["compName"]));
        $compName = str_replace(array("\r","\n"),array(" "," "),$compName);
        
        $designation = strip_tags(trim($_POST["designation"]));
        $designation = str_replace(array("\r","\n"),array(" "," "),$designation);
        
        $rEmail = filter_var(trim($_POST["rEmail"]), FILTER_SANITIZE_EMAIL);

        $pAddress = strip_tags(trim($_POST["pAddress"]));
        $pAddress = str_replace(array("\r","\n"),array(" "," "),$pAddress);

        $city = strip_tags(trim($_POST["city"]));
        $city = str_replace(array("\r","\n"),array(" "," "),$city);

        $country = strip_tags(trim($_POST["country"]));
        $country = str_replace(array("\r","\n"),array(" "," "),$country);

        $mob = strip_tags(trim($_POST["mob"]));
        $mob = str_replace(array("\r","\n"),array(" "," "),$mob);

        $requirement = trim($_POST["requirement"]);

        // Check that data was sent to the mailer.
        if (empty($compName) OR 
            empty($designation) OR 
            empty($pAddress) OR 
            empty($city) OR 
            empty($country) OR 
            empty($mob) OR 
            empty($requirement) OR 
            !filter_var($rEmail, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            // http_response_code(400);
            if (!function_exists('http_response_code'))
            {
                function http_response_code($newcode = NULL)
                {
                    static $code = 400;
                    if($newcode !== NULL)
                    {
                        header('X-PHP-Response-Code: '.$newcode, true, $newcode);
                        if(!headers_sent())
                            $code = $newcode;
                    }       
                    return $code;
                }
            }
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.

        $recipient = "fps1@fortuneps.com";

        // Set the email subject.
        $subject = "New Requirement Form from - $compName";

        // Build the email content.
        $email_content = "Company Name : $compName\n\n";
        $email_content .= "Designation : $designation\n\n";
        $email_content .= "Email : $rEmail\n\n";
        $email_content .= "Postal Address : $pAddress\n\n";
        $email_content .= "City / State : $city\n\n";
        $email_content .= "Country. : $country\n\n";
        $email_content .= "Phone / Mobile No. : $mob\n\n";
        $email_content .= "Your Requirement : \n$requirement\n\n";
        
        // Build the email headers.
        // $email_headers = "From: $nameOfCandidate <$email>";
        $email_headers .= "Reply-To: <fps1@fortuneps.com>\r\n"; 
        $email_headers .= "Return-Path: <fps1@fortuneps.com>\r\n"; 
        $email_headers .= "From: $compName <$rEmail>\r\n"; 
        $email_headers .= "Organization: My Organization\r\n"; 
        $email_headers .= "Content-Type: text/plain\r\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            // http_response_code(200);
            if (!function_exists('http_response_code'))
            {
                function http_response_code($newcode = NULL)
                {
                    static $code = 200;
                    if($newcode !== NULL)
                    {
                        header('X-PHP-Response-Code: '.$newcode, true, $newcode);
                        if(!headers_sent())
                            $code = $newcode;
                    }       
                    return $code;
                }
            }
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            // http_response_code(500);
            if (!function_exists('http_response_code'))
            {
                function http_response_code($newcode = NULL)
                {
                    static $code = 500;
                    if($newcode !== NULL)
                    {
                        header('X-PHP-Response-Code: '.$newcode, true, $newcode);
                        if(!headers_sent())
                            $code = $newcode;
                    }       
                    return $code;
                }
            }
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        // http_response_code(403);
        if (!function_exists('http_response_code'))
            {
                function http_response_code($newcode = NULL)
                {
                    static $code = 403;
                    if($newcode !== NULL)
                    {
                        header('X-PHP-Response-Code: '.$newcode, true, $newcode);
                        if(!headers_sent())
                            $code = $newcode;
                    }       
                    return $code;
                }
            }
        echo "There was a problem with your submission, please try again.";
    }

?>
