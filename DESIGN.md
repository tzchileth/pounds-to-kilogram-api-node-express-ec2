# Pounds to Kilogram REST API DESIGN

## DESIGN WORKFLOW ##

1. Client makes API calls using: curl/Postman

2. Security Group: allow TCP/22 for SSH, allow TCP/80/8080 for HTTP

3. EC2 Instance: Node/Express REST API -> Converts lbs → kg

4. JSON Response → { lbs, kg, formula }

## CLEAN UP PHASE ##
### Stop EC2 Instance ###
+  ```aws ec2 stop-instances --instance-ids i-0a092f0c446a79352```
### Terminate EC2 Instance ###
+ ```aws ec2 terminate-instances --instance-ids i-0a092f0c446a79352```
### Delete Security Group ###
* ```aws ec2 delete-security-group --group-id sg-091062214080fd6b3```