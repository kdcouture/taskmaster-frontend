# taskmaster-frontend
This is the react app that is hosted on S3 at [http://elasticbeanstalk-us-west-2-108642466575.s3-website-us-west-2.amazonaws.com](http://elasticbeanstalk-us-west-2-108642466575.s3-website-us-west-2.amazonaws.com)
For backend information please checkout the repo [Group Work: here](https://github.com/Taskmaster-401/taskmaster), Continued progress from 9-13 onward [Solo: here](https://github.com/kdcouture/taskMaster/tree/2kevdev)

#### Lambda Functions
[dynamoDB_Write](https://github.com/kdcouture/taskmaster-frontend/tree/master/taskmaster-frontend/lambda_dynamoDB_Write) - This lambda function will be linked to the API Gateway service.  
[create_flavicon](https://github.com/kdcouture/taskmaster-frontend/tree/master/taskmaster-frontend/lambda_create_flavicon)  
  
Note: Manual refresh is sometimes required to display new image.  
Note: New images added to the resized bucket are set as private at first and require a manual switch to public before they display correctly.  
  
  
Updated 9-17-2019 > Added AWS lambda function set to trigger on s3 put, post and multipart upload completed.  
Updated 9-13-2019 > Added form at the top of the site to upload an image to attach to a given task by id.

#### Contributors 
Marisha, Jack, Nick, Trevor, Melfi, Fabian, Chris, Brandon, Joachen
