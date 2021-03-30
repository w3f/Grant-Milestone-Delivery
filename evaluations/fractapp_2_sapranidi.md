# Evaluation

> Don't remove any of the mandatory parts presented in bold letters or as headlines!
> Lines starting with `>`, such as this one, can be removed.

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Grant-Milestone-Delivery/pull/117
- **Milestone:** 2
- **Kusama Identity:** GtQGjMx6hdCwxh6t3zy7HLU66oKQcJgkgRxU83ExFg58sLx
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- |------------- |
| 1. | Profile |<ul><li>[x] </li></ul>|[Link](https://github.com/fractapp/fractapp/blob/alpha-v1.0.0/src/screens/EditProfile.tsx)| Adding/editing profile info works properly, including changing profile pic. A couple of UX improvements for searching functionality are needed: for instance, a nickname search needs to start with an @ symbol, which is not intuitive. Also, if a user does not enter a name or a username after registration, other users will only see the avatar i.e. the name and username fields will be empty.  |  
|    |         |<ul><li>[x] </li></ul>|[Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/controller/profile/profile.go)|                                           |
| 2. | Connect phone number/email |<ul><li>[x] </li></ul>| [Link](https://github.com/fractapp/fractapp/blob/master/src/screens/Connecting.tsx) | Both “authentication” methods (sms/email) work, however the email ended up in spam (Gmail). |  
|    |         |<ul><li>[x] </li></ul>|[Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/controller/auth/auth.go)|
| 3. | Push-Notification service for transaction |<ul><li>[ ] </li></ul>| [Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/scanner/scanner.go) | It turns out that Push-Notifications can’t be tested easily via yarn and require an installation of extra packages: this needs to be additionally described in readme's. | 
| 4. | Backend for profile storage |<ul><li>[ ] </li></ul>| [Link](https://github.com/fractapp/fractapp-server/tree/alpha-v1.0.0) | Profile pics are stored persistently and can be modified. |
| 5. | Docker |<ul><li>[x] </li></ul>| [Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/Dockerfile) | Recommendation: a Docker Hub image might be convenient to have.  | 
| 6. | Documentation |<ul><li>[x] </li></ul>| [Auth](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/AUTH.md) | Overall, the documentation is sufficiently detailed but needs improvement in some aspects. | 
|    |         |<ul><li>[x] </li></ul>|[Swagger](https://api.fractapp.com/swagger/index.html)|
|    |         |<ul><li>[x] </li></ul>|[App](https://github.com/fractapp/fractapp/blob/master/docs/index.html)|
| 7. | Unit-testing |<ul><li>[x] </li></ul>| [Link](https://github.com/fractapp/fractapp/tree/master/__tests__) | Test Suites: 73 passed, 73 total; Tests: 420 passed, 420 total; Coverage corresponds to what is stated in the milestone delivery| 
|    |         |<ul><li>[x] </li></ul>|[Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/README.md)|
| 8. | Distributing |<ul><li>[x] </li></ul>| [Link](https://github.com/fractapp/fractapp/releases/tag/alpha-v1.0.0) | Tested on Android emulator Pixel_XL_Api_30 | 
|    |         |<ul><li>[x] </li></ul>|[Link](https://github.com/fractapp/fractapp-server/releases/tag/alpha-v1.0.0)|
| Bonus | Chats |<ul><li>[x] </li></ul>| [Link](https://github.com/fractapp/fractapp/blob/alpha-v1.0.0/src/screens/Chats.tsx) | Payment chat loads too slowly before sending transactions. The chat window properly renders received and sent transactions. “Enter amount” screen needs UX improvement, such as the addition of the remaining balance information and more detailed descriptions in modals. | 

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

* Repo documentation needs more details on how to test & run the app through an Android emulator/Minor improvements in the order and formatiing of commands (such as keystore generation)
* Probably required to bump google-services to 4.3.5, according to the Firebase documentation
* Several UI/UX corrections would be nice: e.g. resetting the field when entering incorrect seed (in touch with the author about the improvements)
* Minor typos in the app
* Loading times could be improved (although might be a side-effect of using an emulator, needs further testing and comparison)
