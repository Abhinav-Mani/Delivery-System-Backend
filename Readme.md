# Delivery System Backend
---
Base URL:- https://sheltered-ridge-85557.herokuapp.com/

**Assuming validated data**

|Route|Type|Request Body|
|---|---|---|
| /user/signin |POST|username,password|
| /user/signup |POST|username,email,pincode,address,longitude,latitute,password,phoneno|
| /admin/signin |POST|username,password|
| /product |POST|name,id,price,description,image|
| /product |GET||
| /warehouse |POST|uuid,pincode,longitude,latitute|
| /warehouse|GET||
| /RetailerLocation |POST|uuid,pincode,longitude,latitute|
| /RetailerLocation|GET||
| /warehousestore |POST|uuid,id,quantity|
| /warehousestore|GET||