<?php
    
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $postApplied = strip_tags(trim($_POST["postApplied"]));
        $postApplied = str_replace(array("\r","\n"),array(" "," "),$postApplied);
        
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        
        $qualify = strip_tags(trim($_POST["qualify"]));
        $qualify = str_replace(array("\r","\n"),array(" "," "),$qualify);

        $exp = strip_tags(trim($_POST["exp"]));
        $exp = str_replace(array("\r","\n"),array(" "," "),$exp);

        $addr = trim($_POST["addr"]);

        $mob = strip_tags(trim($_POST["mob"]));
        $mob = str_replace(array("\r","\n"),array(" "," "),$mob);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        // Check that data was sent to the mailer.
        if (empty($postApplied) OR 
            empty($name) OR 
            empty($qualify) OR 
            empty($exp) OR 
            empty($addr) OR 
            empty($mob) OR 
            !filter_var($email, FILTER_VALIDATE_EMAIL)) {
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

        $recipient = "rajeev@fortuneps.com";

        // Set the email subject.
        $subject = "New Careers Form from - $name";

        // Build the email content.
        $email_content = "Post Applied For : $postApplied\n\n";
        $email_content .= "Name : $name\n\n";
        $email_content .= "Highest Qualification : $qualify\n\n";
        $email_content .= "Experience(No. of years) : $exp\n\n";
        $email_content .= "Address : \n$addr\n\n";
        $email_content .= "Phone / Mobile No. : $mob\n\n";
        $email_content .= "Email : $email\n\n";
        
        // if(!empty($_POST['interestedIn'])) {
        //     foreach($_POST['interestedIn'] as $check) {
        //         $email_content .= "$check\n"; 
        //     }
        // }
        

        // Build the email headers.
        // $email_headers = "From: $nameOfCandidate <$email>";
        $email_headers .= "Reply-To: <rajeev@fortuneps.com>\r\n"; 
        $email_headers .= "Return-Path: <rajeev@fortuneps.com>\r\n"; 
        $email_headers .= "From: $name <$email>\r\n"; 
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
