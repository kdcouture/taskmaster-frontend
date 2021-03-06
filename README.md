# taskmaster-frontend
This is the react app that is hosted on S3 at [http://elasticbeanstalk-us-west-2-108642466575.s3-website-us-west-2.amazonaws.com](http://elasticbeanstalk-us-west-2-108642466575.s3-website-us-west-2.amazonaws.com)
For backend information please checkout the repo [Group Work: here](https://github.com/Taskmaster-401/taskmaster), Continued progress from 9-13 onward [Solo: here](https://github.com/kdcouture/taskMaster/tree/2kevdev)
#### API
[https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev](https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev)
##### Routes
GET: /tasks - Displays all users.  
https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev/tasks  
GET: /tasks/{user} - Displays all tasks assigned to the user.  
https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev/tasks/{user}  
POST: /tasks - Adds a new task to the database.  
https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev/tasks  
DELETE: /tasks/{id} - Deletes a given task.  
https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev/tasks/{id}  
PUT: /tasks/{id}/state - Updates the history on a given task.  
https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev/tasks/{id}/state  
PUT: /tasks/{id}/assign/{assignee} - Adds a assignee to a task.  
https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev/tasks/{id}/assign/{assignee}  

#### Lambda Functions
  
[dynamoDB_Read](https://github.com/kdcouture/taskmaster-frontend/tree/master/taskmaster-frontend/lambda_dynamoDB_Read/src/main/java/lambda_dynamoDB_Read) - This library holds the code for lambda functions for all get routes.  
[dynamoDB_Write](https://github.com/kdcouture/taskmaster-frontend/tree/master/taskmaster-frontend/lambda_dynamoDB_Write/src/main/java/lambda_dynamoDB_Write) - This library holds code for lambda functions invloced with the post and put route.  
[create_flavicon](https://github.com/kdcouture/taskmaster-frontend/tree/master/taskmaster-frontend/lambda_create_flavicon) - This lambda function is triggered when an file is uploaded to a s3 bucket and will create a resized version of png or jpg image files.  
  
Note: Manual refresh is sometimes required to display new image.  
  
Updated 9-20-2019 > Deployed API gateway with all routes working (no images) > https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev  
Updated 9-19-2019 > Created API gateway at > https://04e8aqkfe2.execute-api.us-west-2.amazonaws.com/Dev  
Updated 9-17-2019 > Added AWS lambda function set to trigger on s3 put, post and multipart upload completed.  
Updated 9-13-2019 > Added form at the top of the site to upload an image to attach to a given task by id.

#### Contributors 
Marisha, Jack, Nick, Trevor, Melfi, Fabian, Chris, Brandon, Joachen, Sapana
