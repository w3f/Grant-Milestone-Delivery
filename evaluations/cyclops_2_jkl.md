# Evaluation Cyclops


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cyclops.md
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/UniversalDot/Grant-Milestone-Delivery/blob/master/evaluations/crossbow_1_jkl.md



| Number | Deliverable | Accepted | Link | Evaluation Notes |
| -----: | ----------- | -------- |------------- | ------------- |
| **0a.** | License |<ul><li>[x] </li></ul>| [link](https://github.com/ArthurHoeke/cyclops/blob/main/LICENSE) | Good. Make sure you fill out the placeholder information [here](https://github.com/ArthurHoeke/cyclops/blob/main/LICENSE#L189).
| **0b.** | Documentation | <ul><li>[x] </li></ul>|[link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) | The readme files provide sufficient documentation. Some documentaiton is inconsistent with the implementation. For example, you state that you can register a user via `login/register` while the actual endpoint is `user/register`. Make sure that the documentation is consistent with your code.
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>|[link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) | Tests pass successfully. See General note 3. However, the database.db was not deleted for me at the end of the test run. I had to manually delete it. |
| **0d.** | Docker | <ul><li>[x] </li></ul>|[link](https://hub.docker.com/r/arthurhoeke/cyclops) | Image is on DockerHub. 
| 1. | Express API endpoints | <ul><li>[x] </li></ul>|[link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) | Good. Small inconsistencies in naming. For example, documentation states `users/login` while actual route is `user/login`. When testing, the auth token has to be constantly included in the payload. 
| 2. | Database structure | <ul><li>[x] </li></ul>|[link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) | Good.
| 3. | SMTP functionality | <ul><li>[x] </li></ul>|[link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/app/Services/mail.services.js) | Good. Can you add a unit test to test the functionality of the service? 
| 4. | Subscan API | <ul><li>[x] </li></ul>|[link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/app/Utils/subscan.utils.js) | Good.



## General Notes

1. Your front-end npm packages have few severe vulnerabilities. You might want to look into that.

```
2 high severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
```
2. Your front-end is not compatible with nodejs 16.5. I had to update to latest to run it.
```
Node.js version v16.5.0 detected.
The Angular CLI requires a minimum Node.js version of either v14.20, v16.13 or v18.10.
```

3. Test pass successfully 

```
Attempt: ping webservice
OK
Attempt: register user
OK, received JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGNvbXBhbnkuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkU2c2d3F2QU8xcmVlTkxjMWpVdnJPZS53NnloZC9QdTAzY2xRL3V6RlFlZE1sY2xsZ01vaTIiLCJyb2xlIjoxLCJpYXQiOjE2Nzk0MDU4MTcsImV4cCI6MTY4MjA4NDIxN30.zWk0XONDW6ZbcSTqpSPpKqw_-SKocdmbDiikSJAY48I
Attempt: login user
OK
Attempt: add network
OK
Attempt: get network list
OK
Attempt: add validator
OK
Attempt: get validator list
OK, test succesful!
```
4. When testing with Postman, the auth token has to be constantly used in the payload. 

```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJcInRlc3RAZ21haWwuY29tXCIiLCJwYXNzd29yZCI6IiQyYSQxMCQ2ajFwMzQvRmJxT3EvMXRManRvUEguY0RpOGVzYjMuQUVtUEZpMEdHNEhNSmpvQVk0dmdPRyIsInJvbGUiOjAsImlhdCI6MTY3OTQwNjc5NSwiZXhwIjoxNjgyMDg1MTk1fQ.r3WpRlEa68Ir3KqLYgPxvehged78MkODu1DhSY0NVT8"
}
```

5. Why are you defining your configuration both as global variables and in the database? 

```
//global config variables
JWT_SECRET = null;
SUBSCAN_APIKEY = null;
SMTP_HOST = null;
SMTP_PORT = null;
SMTP_USERNAME = null;
SMTP_PASSWORD = null;
```

## General Improvements

Instead of using web2 JWT based authentication, consider integrating your application with [polkadotjs](https://polkadot.js.org/extension/) wallet. This should simplify your architecture.