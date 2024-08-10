# JSON Web Token
- JSON Web Token is an open standard for securely transferring data within parties using a JSON object. JWT is used for stateless authentication mechanisms for users and providers, this means maintaining sessions on the client side instead of storing sessions on the server. Here, we will implement the JWT authentication system in NodeJs.

- JWT (JSON Web Token) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

- A JWT consists of three parts: 'Header', 'Payload', and 'Signature'.

'Header', 'Payload', and 'Signature'.
- 
### Header
- The header typically consists of two parts: the type of token (JWT) and the signing algorithm being used, such as HMAC SHA256 or RSA.
eg: 
       `` {
        "alg": "HS256",
        "typ": "JWT"
        }``
### Payload
- The payload contains the claims, which are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
eg: 
 ``{
        "sub": "1234567890",
        "name": "John Doe",
        "admin": true
        }``
### Signature
- To create the signature part, you have to take the encoded header, the encoded payload, a secret, and the algorithm specified in the header and sign that.
eg: 
``HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)``



