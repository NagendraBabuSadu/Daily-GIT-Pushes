# Authentication using JWT
- This program is all about jwt token generation, and verification of the IN MEMORY users. 
- The JWT(JSON Web Token) does mainly 2 functions, one is jwt.sign() and the other is jwt.verify()
- In these 2 instances, the jwt library takes the jwtPassword as an argument. 
- On the first instance, jwt.sign(), the jwtPassword matches with the username of the IN MEMORE user data, then generate the token/signature/long string. 
- On the second instance, jwt.verify(), if the token decodes the jwtPassword with the username and gives the required output. 