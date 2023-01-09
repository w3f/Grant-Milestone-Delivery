# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/keysafe_network.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [License](https://github.com/keysafe-protocol/keysafe-app/blob/7c93f7a72b7a8661fc378d08adb0b00456b34ccc/License) | See **General Notes** |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [User tutorial](https://github.com/keysafe-protocol/documents/blob/d7ccc01cc382152910f6b717a3d38f9bca1e9303/demo_flow/keysafe_demo_guide.md), [Tech doc](https://github.com/keysafe-protocol/documents/blob/d7ccc01cc382152910f6b717a3d38f9bca1e9303/README.md) | - |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [/README.md#unit-test](https://github.com/keysafe-protocol/keysafe-app/blob/2f487b80600783796c978ad39c78a4fed82d3152/README.md#unit-test) | See **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [/README.md#setup-with-docker](https://github.com/keysafe-protocol/keysafe-app/blob/2f487b80600783796c978ad39c78a4fed82d3152/README.md#setup-with-docker) | - |
| 1. | Core Protocol | <ul><li>[x] </li></ul> | [keysafe-app](https://github.com/keysafe-protocol/keysafe-app/tree/2f487b80600783796c978ad39c78a4fed82d3152) | - |
| 2. | TEE Implementation | <ul><li>[x] </li></ul> | [keysafe-sgx](https://github.com/keysafe-protocol/keysafe-sgx/tree/50aa4c078803f41ce3dd09b0a1d1a1d4bb0ec16b) | - |
| 3. | Smart Contract | <ul><li>[x] </li></ul> | [/contracts/ink/lib2.rs](https://github.com/keysafe-protocol/contracts/blob/472477f9ca0c8b7357d05f59e32c2002216d6d16/ink/lib2.rs) | - |
| 4. | Web Server | <ul><li>[x] </li></ul> | [keysafe-app](https://github.com/keysafe-protocol/keysafe-app/tree/fbb15cb3a2445f6344f011c3fe6d08c1b8585bec) | - |
| 5. | Support Polkadot.js | <ul><li>[x] </li></ul> | [keysafe-front/commit/80ced2f](https://github.com/keysafe-protocol/keysafe-front/commit/80ced2f0bc9a9c0f6f6f0b3e5aaf7b647a08d8d5) | - |
<br/>

## General Notes v1 - Jan 6, 2022

The setup without docker is pretty challenging, because of all the requirements needed. On the other hand, the docker setup is pretty straightforward.

You can find the live demo at https://keysafe-front-keysafe.vercel.app/ (could not work in the future I guess).

**Note**: to test locally you'll need to run the backend in a machine with Intel CPU, referring to [this](https://github.com/w3f/Grant-Milestone-Delivery/pull/639#issuecomment-1373178387) comment.

The main functionalities work: it is possible to register an account through an email, store different private keys for different networks, link to the account some recovery methods (such as email verification, password, Google/GitHub 2FA) and recover the keys with such methods.

At first there were two issues in the configuration files, fixed by the devs (see the comments [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/639#issuecomment-1330743092)).

I just need some minor changes and/or clarifications for the following points (**0a. License** and **0c. Testing Guide**):

### 0a. License
The problem here is minor: in the application document you wrote Apache 2.0 as license, but used MIT instead. If it was on purpose, then no problem.

### 0c. Testing Guide
I'd like to have some clarifications about the tests. Like:
- Which functions have been covered? Runnable tests cover just the authentication functions, or am I wrong?
- How high is the coverage?
- The ink contract basically doesn't have tests, is it possible to develop them?

### Other notes
Here I write some "minor" issues that I noticed, and probably you'll be already aware of some of these, but they are not crucial for the milestone acceptance:
- In the `readme` of `keysafe-app`, in the **build** section I would underline to set the right branch through `git checkout polkadot`;
- Always in this `readme`, in the `docker` section, I'd replace
```
docker exec -it ks-db bash
# inside docker, create db, user and schema
mysql -h localhost -u root -pks123
copy app/schema.sql to mysql shell
exit # mysql shell
exit # mysql docker instance
```
with
```
docker exec -it ks-db bash
touch schema.sql
cat > schema.sql
# paste the content of app/schema.sql
mysql -h localhost -u root -pks123 < schema.sql
exit
```
- Is the *transfer* functionality working? If yes, I couldn't manage to transfer funds (cannot click "confirm" button);
- *Balance* is wrong (I've tried with Boba Rinkeby, and it doesn't show the correct balance);
- I can't understand what's the point of choosing the Network for different EVMs blockchains (if I put a private key, it should be the same for every Network);
- When I try to recover an account's keys, it asks the Network and the Key: I shouldn't be able to export an Ethereum Key with "Polkadot" selected, but I can; maybe it has more sense to ask only the Key;
- When I set the same signup email for the authentication, it shouldn't re-ask the verification;
- GitHub authentication redirects to the old frontend, so it's not possible to use it for the recovery; also, Google and Twitter are not implemented yet in *My Web2 Accounts*, right?
- I assumed *My Auth Conditions* and *General Settings* are not yet implemented;
- In the old UI, during the signup phase, if I switched through *Google Authenticator* and *password* while setting the recovery methods, the password was filled with strange characters, somehow seemed related to the generated QR code (couldn't retry in the new UI, maybe try to check if the error persists);
- Generally UI/UX is to improve, some things are not so clear: for example how many authentications are needed in order to retrieve the keys; but it's pretty normal I guess since this is a demo.