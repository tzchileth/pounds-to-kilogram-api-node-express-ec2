# Pounds to Kilogram REST API 

**Purpose**

Implement REST API using EC2 on AWS

**Implemented Using**:

+ Node
+ Express
+ EC2 AWS
+ JavaScript
+ **Github Repo**: :point_right: [Source Code](https://github.com/tzchileth/pounds-to-kilogram-api-node-express-ec2)

**Features**
+ **http port**: 80
+ **ssh port**: 22
+ **EC2 Security Groups**
+ **public endpoint**: `3.19.59.251`
+ **GET Request Route:** `http://3.19.59.251:80/api/convert?lbs=<number>`
+ **Response (JSON):** `{ "lbs": 150, "kg": 68.039, "formula": "kg = lbs * 0.45359237" }`

**Acknowledgement**: *Dr. Dan Schrimpsher @ UAH Computer Science Department*