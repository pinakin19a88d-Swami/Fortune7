<div>
	
	<div class="animated de2ms fadeInRight">
		<span>Fields are mandatory Fill the form below Your Name</span>
		<br/> <br/>
		<?php
								        
		    if(isset($_POST['email'])) 
		    {
		        // EDIT THE 2 LINES BELOW AS REQUIRED
		     
		        $email_to = "rajeev@fortuneps.com";
		        $email_subject = "Fortune - Industry Post Requirement";
		     
		        function died($error) 
		        {
		            // your error code can go here
		     
		            echo "<br/><br/>We are very sorry, but there were error(s) found with the form you submitted. ";
		            echo "These errors appear below.<br /><br />";
		            echo $error."<br /><br />";
		            echo "Please go back and fix these errors.<br /><br />";
		     
		            die();
		        }
		     
		        // validation expected data exists
		     
		        if(!isset($_POST["compName"]) ||
		        	!isset($_POST["designation"]) ||
		        	!isset($_POST["rEmail"]) ||
		        	!isset($_POST["pAddress"]) ||
		        	!isset($_POST["city"]) ||
		        	!isset($_POST["country"]) ||
		        	!isset($_POST["mob"]) ||
		           !isset($_POST["requirement"])) 
		        {
		            died("We are sorry, but there appears to be a problem with the form you submitted.");      
		        }
		     
		        $compName = $_POST["compName"]; // required
		        $designation = $_POST["designation"]; // required
		        $rEmail = $_POST["rEmail"]; // required
		        $pAddress = $_POST["pAddress"]; // required
		        $city = $_POST["city"]; // required
		        $country = $_POST["country"]; // required
		        $mob = $_POST["mob"]; // required
		        $requirement = $_POST["requirement"]; // required
		     
		        $error_message = "";
		        $email_exp = "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";
		     
		        if(!preg_match($email_exp,$rEmail)) 
		        {
		            $error_message .= "The Email Address you entered does not appear to be valid.<br />";
		        }
		        
		        // $string_exp = "/^[A-Za-z .'-]+$/";
		        $string_exp = "/^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/";
				
				if(!preg_match($string_exp,$compName)) 
		        {
		            $error_message .= "Company name not valid.<br />";
		        }            
		        if(!preg_match($string_exp,$designation)) 
		        {
		            $error_message .= "Designation text not valid.<br />";
		        }
		        if(!preg_match($string_exp,$rEmail)) 
		        {
		            $error_message .= "Email address not valid.<br />";
		        }
		        if(!preg_match($string_exp,$pAddress)) 
		        {
		            $error_message .= "Address text not valid.<br />";
		        }

		        $string_totalExp = "/^[0-9A-Za-z .'-]+$/";
		        if(!preg_match($string_totalExp,$city)) 
		        {
		            $error_message .= "City text not valid.<br />";
		        }
		        if(!preg_match($string_exp,$country)) 
		        {
		            $error_message .= "Country text not valid.<br />";
		        }
		        if(!preg_match($string_exp,$resume)) 
		        {
		            $error_message .= "Resume text not valid.<br />";
		        }

		        $number_exp = "/^[0-9.-]/";
		        if(!preg_match($number_exp,$mob)) 
		        {
		            $error_message .= "Phone / Mobile number not valid.<br />";
		        }
		        if(!preg_match($number_exp,$requirement)) 
		        {
		            $error_message .= "Requirement text not valid.<br />";
		        }
		        
		        if(strlen($error_message) > 0) 
		        {
		            died($error_message);
		        }
		     
		        $email_message = "Form details below.\n\n";
		     
		        function clean_string($string) 
		        {
		          $bad = array("content-type","bcc:","to:","cc:","href");
		          return str_replace($bad,"",$string);
		        }
		        
		        $email_message .= "Comapny Name : ".clean_string($compName)."\n";
		        $email_message .= "Designation : ".clean_string($designation)."\n";
		        $email_message .= "Email : ".clean_string($rEmail)."\n";
		        $email_message .= "Address : ".clean_string($pAddress)."\n";
		        $email_message .= "City : ".clean_string($city)."\n";
		        $email_message .= "Country : ".clean_string($country)."\n";
		        $email_message .= "Phone / Mobile No. : ".clean_string($mob)."\n";
		        $email_message .= "Requirement : ".clean_string($requirement)."\n";
		     
		        // create email headers
		         
		        $headers = "From: ".$rEmail."\r\n".
		         
		        "Reply-To: ".$rEmail."\r\n" .
		         
		        "X-Mailer: PHP/" . phpversion();
		         
		        @mail($email_to, $email_subject, $email_message, $headers); 
		         
		        ?>
		        <br/><br/>
		        Thank you for contacting us. We will be in touch with you very soon.
		     
		        <?php
		         
		    }
		    else
		    {
		    ?>
		        <br/>
		        <br/>
		        <form class="form-horizontal" name="contactform" method="post">
					
					<div class="control-group">
						<label class="control-label" for="compName">Company Name</label>
						<div class="controls">
							<input type="text" id="compName" name="compName">
						</div><!-- controls -->			
					</div><!-- control-group -->

					<div class="control-group">
						<label class="control-label" for="designation">Designation</label>
						<div class="controls">
							<input type="text" id="designation" name="designation">
						</div><!-- controls -->			
					</div><!-- control-group -->

					<div class="control-group">
						<label class="control-label" for="rEmail">Email *</label>
						<div class="controls">
							<input type="text" id="rEmail" name="rEmail">
						</div><!-- controls -->			
					</div><!-- control-group -->

					<div class="control-group">
						<label class="control-label" for="pAddress">Postal Address</label>
						<div class="controls">
							<input type="text" id="pAddress" name="pAddress">
						</div><!-- controls -->			
					</div><!-- control-group -->

					<div class="control-group">
						<label class="control-label" for="city">City / State</label>
						<div class="controls">
							<input type="text" id="city" name="city">
						</div><!-- controls -->			
					</div><!-- control-group -->

					<div class="control-group">
						<label class="control-label" for="country">Country *</label>
						<div class="controls">
							<input type="text" id="country" name="country">
						</div><!-- controls -->			
					</div><!-- control-group -->

					<div class="control-group">
						<label class="control-label" for="mob">Phone / Mobile No. * </label>
						<div class="controls">
							<input type="text" id="mob" name="mob">
						</div><!-- controls -->			
					</div><!-- control-group -->

					<div class="control-group">
						<label class="control-label" for="requirement">Your Requirement</label>
						<div class="controls">
							<textarea rows="6" id="requirement" name="requirement"></textarea>
						</div><!-- controls -->			
					</div><!-- control-group -->
								
					<div class="control-group">
						
						<div class="controls">
							<input type="submit" value="Submit">
							<input type="reset" value="Reset">
						</div><!-- controls -->			
					</div><!-- control-group -->
					
				</form>
		        <?php
		    }
		    
		?>
	</div><!-- resumeWrap -->
	
</div><!-- resumeOuter -->