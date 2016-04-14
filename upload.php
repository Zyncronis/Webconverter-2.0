<?php
    echo "i fck ur mum";
    $target_dir ="uploads/"
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

    $uploadOK = 1;
    $imageFileType = pathinfo($target_file,PATHINFO_EXSTENSION);
    if(isset($_POST["submit"])){
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== FALSE){
            echo "File is an image -" . $check["mime"] . ".";
            $uploadOK = 1;
        } else{
            echo "File is not an image brav"; 
            $uploadOK =0; $
        }

    } 
   
?>
<html>
<head>

</head>
<body>
  <h1>test</h1>
</body>

</html>