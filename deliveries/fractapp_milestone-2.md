# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/51
* **Milestone Number:** 2

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Profile |[Link](https://github.com/fractapp/fractapp/blob/alpha-v1.0.0/src/screens/EditProfile.tsx)| Fractapp user profile |  
|    |         |[Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/controller/profile/profile.go)|                                           |
| 2. | Connect phone number/email | [Link](https://github.com/fractapp/fractapp/blob/master/src/screens/Connecting.tsx) | Users can connect phone numbers/email for an account. Users can search to find a user by phone number/email/username. (For phone number it is work if two users have contacts each other in the phone number book)  |  
|    |         |[Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/controller/auth/auth.go)|
| 3. | Push-Notification service for transaction | [Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/scanner/scanner.go) | Push-Notification service notifies users about transactions | 
| 4. | Backend for profile storage | [Link](https://github.com/fractapp/fractapp-server/tree/alpha-v1.0.0) | Golang backend for storing fractapp profiles  |
| 5. | Docker | [Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/Dockerfile) | Docker image for backend and push-notification service | 
| 6. | Documentation | [Auth](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/AUTH.md) | A standalone document, describing usage | 
|    |         |[Swagger](https://api.fractapp.com/swagger/index.html)|
|    |         |[App](https://github.com/fractapp/fractapp/blob/master/docs/index.html)|
| 7. | Unit-testing | [Link](https://github.com/fractapp/fractapp/tree/master/__tests__) | Unit tests covering at least 75% of the code | 
|    |         |[Link](https://github.com/fractapp/fractapp-server/blob/alpha-v1.0.0/README.md)|
| 8. | Distributing | [Link](https://github.com/fractapp/fractapp/releases/tag/alpha-v1.0.0) | We will provide .apk files for Android | 
|    |         |[Link](https://github.com/fractapp/fractapp-server/releases/tag/alpha-v1.0.0)|
| Bonus | Chats | [Link](https://github.com/fractapp/fractapp/blob/alpha-v1.0.0/src/screens/Chats.tsx) | Payment chat (not have messages). Users will be able to send crypto via chat.  (From Milestone #3) | 
