# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/uke-protocol.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
 0a. | License | <ul><li>[x] </li></ul> | [LICENSE.md](https://github.com/Uke-Messaging/uke/blob/43f061398bac16569a2b76f87693fd86de93c701/LICENSE.md) | - |
| 0b.  | Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/Uke-Messaging/uke/blob/43f061398bac16569a2b76f87693fd86de93c701/README.md) | See **General Notes** | 
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> | [README.md#testing](https://github.com/Uke-Messaging/uke/blob/43f061398bac16569a2b76f87693fd86de93c701/README.md#testing) | - | 
| 0d.  | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Uke-Messaging/uke/blob/43f061398bac16569a2b76f87693fd86de93c701/Dockerfile) | - | 
| 0e.  | Article | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@muchbader/breaking-web3-the-first-walletless-purely-blockchain-chat-app-introducing-the-uke-alpha-8c2297f2af68) | - | 
| 1a.  | Uke Ionic Application: Data Models | <ul><li>[x] </li></ul> | [/src/app/model](https://github.com/Uke-Messaging/uke/tree/43f061398bac16569a2b76f87693fd86de93c701/src/app/model) | - | 
| 1b.  |  Uke Ionic Application: Login and Signup Service | <ul><li>[x] </li></ul> | [/src/app/services/keyring.service.ts](https://github.com/Uke-Messaging/uke/blob/43f061398bac16569a2b76f87693fd86de93c701/src/app/services/keyring.service.ts) | See **General Notes** | 
| 1c.  | Uke Ionic Application: Message Delivery & Configuration | <ul><li>[x] </li></ul> | [/src/app/services/ukepallet.service.ts](https://github.com/Uke-Messaging/uke/blob/43f061398bac16569a2b76f87693fd86de93c701/src/app/services/ukepallet.service.ts) | - | 
| 1d.  | Uke Ionic Application: In-App Notification System | <ul><li>[x] </li></ul> | [/src/app/services/notif.service.ts](https://github.com/Uke-Messaging/uke/blob/43f061398bac16569a2b76f87693fd86de93c701/src/app/services/notif.service.ts) | See **General Notes** |
<br/>

## General Notes v2 - Nov 28, 2022

All the issues mentioned in **General Notes v1** have been fixed:
- Documentation has been improved in [this commit](https://github.com/Uke-Messaging/uke/commit/0cccdb444ade4bcab55cf842205aabf4a130a940)
- The login issue has been fixed in [this commit](https://github.com/Uke-Messaging/uke/commit/43f061398bac16569a2b76f87693fd86de93c701), and now one must login with both the right credentials
- The developer [said](https://github.com/w3f/Grant-Milestone-Delivery/pull/634#issuecomment-1327943508) the notification system will probably be reworked, so that minor issue will be considered further on.

<br/>

## General Notes v1 - Nov 25, 2022

The application is already working well (at least, in its lowest possible scale of 2 users). I tested it with the creator and exchanged a few messages. Also, I used different platforms and sent messages between those (website, iOS app, and Android app), and everything works good (also the in-app notifications).

The developer mentioned the fact it's a PoC, so there could be bugs and UI/UX glitches. Nothing big to report, just the fact that if you create an account (**user_id** + **password**), you can later access it writing whatever **user_id** you write, because the login only checks the password correctness. The developer is already aware of it, and should be easy to fix it checking both the data.

The test coverage is a bit low (~60%), but the developer specified it's not part of the milestone in the delivery document.

Some parts of the code ([/model](https://github.com/Uke-Messaging/uke/tree/d98105e129875c1e2f99ab9ab9f1b29b5077d22e/src/app/model) and [/services](https://github.com/Uke-Messaging/uke/tree/d98105e129875c1e2f99ab9ab9f1b29b5077d22e/src/app/services)) are already well documented.

I've only found some minor things to add in the documentation.

Overall, the idea of the on-chain messaging app is great, but the challenging thing will be making it scalable in some way (messages would be registered not before a new block is created, also with a lot of users will be saved too many on-chain things, for how the application is built now). These thoughts are also shared by the developer in his article on Medium linked above.

### 0b. Documentation
These are the things I'd improve:
- In **Building** section, I'd add `npm install` before `npm build` for consistency with the other parts of the README
- For iOS building, I'd had to run `npm install cordova-plugin-file` to make it work, so I'd add it
- For **Testing**, I had to run `npm test` instead of `ng test`, so I'd change it. Also, would be great to add `--code-coverage` in the `npm test` inside the `package.json`.

### 1b. Uke Ionic Application: Login and Signup Service
I'd fix the mentioned login problem before accepting the delivery. The signup works though.

### 1d. Uke Ionic Application: In-App Notification System
The notification system works, but if I login I receive a notification about the last message, also if I've already received it during the previous session. This is just a minor bug (as soon as you didn't defined to behave like this) that I wanted to mention.