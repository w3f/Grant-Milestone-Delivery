# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Faucet.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** [Ink Explorer M1](https://github.com/w3f/Grant-Milestone-Delivery/pull/578)

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [LICENCE](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/LICENSE) | Apache 2.0, Ok |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [README.md](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/README.md) | - |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| Inside [README.md](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/README.md#testing) | - |
| 0d. | Article |<ul><li>[x] </li></ul>| [Google Docs link](https://docs.google.com/document/d/1PKMPsfVBZx7TPq0IIS6fWd15Fs8d8HgUAaFHuA18Pao) | - |
| 1. | User Interface |<ul><li>[x] </li></ul>| [```/pages/index.tsx```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/pages/index.tsx) | - |  
| 2. | Authentication |<ul><li>[x] </li></ul>| [```/pages/api/auth/[...nextauth].ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/pages/api/auth/%5B...nextauth%5D.ts) | - |  
| 3. | User status |<ul><li>[x] </li></ul>| [```/pages/api/claim/status.ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/pages/api/claim/status.ts) | - |  
| 4. | Faucet drip |<ul><li>[x] </li></ul>| [```/pages/api/claim/new.ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/pages/api/claim/new.ts) | - |
<br/>

## General Notes v3 - Oct 11, 2022
After a minor change inside [```/tests/e2e/index.spec.ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/18073a60fd96f5ff01e01ce527830c6e1d3b9133/tests/e2e/index.spec.ts#L26) (from ```domain: "localhost"``` to ```domain: "127.0.0.1"```), the last e2e test correctly passes, so everything is now set for the evaluation to be accepted.
<br/>
<br/>
## General Notes v2 - Oct 6, 2022
After the changes, everything noted in **General Notes v1** has been fixed:
- **0b. Documentation** has been improved:
  - **Getting Started *section*** has been improved: added an installation command and a *note* about the importance of setting all the environment variables;
  - Inside **Configuration *section***, the callback URL for GitHub has been specified; also, the fact that the Redis instance is mocked has been added (so ```REDIS_ENDPOINT``` can be empty);
- **0c. Testing Guide**, specifically the tests suite, has been improved:
  - All the files are now tested, and coverage is high (everywhere above 90%, most 100%);
  - Tests are now divided into *frontend*, *backend* and *e2e*;
- The error in **4. Faucet drip** has been fixed.
- Inside ```.env.sample```, default Twitter and GitHub OAuth have been set, so local development configuration is now even easier; also, Twitter OAuth credentials are v1.0, so they can be used to work locally, avoiding problems cited inside **General Notes v1**.
- Now it is impossible to claim more than once per email or address, which was possible before and noted by @dsm-w3f in his [evaluation document](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/Faucet_1_dsm-w3f.md).

Other improvements can be found in this [comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/573#issuecomment-1268528110).

Overall this is almost perfect; I've just found a minor problem in the test suite:

### 0c. Testing Guide
The testing guide is fine, but if I run the ```e2e``` tests, I get an error:
```
Test timeout of 30000ms exceeded.
locator.fill: Target closed
=========================== logs ===========================
waiting for selector "[data-testid="wallet-input"]"
============================================================

  42 |   const walletInput = page.locator('[data-testid="wallet-input"]');
  43 |
> 44 |   await walletInput.fill("incorrect-address");
     |                     ^
  45 |   await expect(claimBtn).toHaveText("Claim");
  46 |   await claimBtn.click();
  47 |

    at /home/matteo/Desktop/GitHub/sybil-resistant-substrate-faucet/tests/e2e/index.spec.ts:44:
```
I have configured the environment variables, as stated in the docs

Specifically, the error is at [```/e2e/index.spec.ts:44```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/1ca52e21edea3445d91d5c316340419662987452/tests/e2e/index.spec.ts#L44); maybe there is a synchronization issue? However, all the other tests are passing.
<br/>
<br/>
## General Notes v1 - Oct 1, 2022

The application works smoothly in *local* and [*online*](https://sybil-resistant-substrate-faucet.vercel.app/) versions. The documentation is well-curated and precise, especially the *Configuration* section. All the automated tests are passing.

To test it locally, I used https://playground.substrate.dev/ and https://polkadot.js.org/; while testing, it can be viewed that the claim works correctly. Also, as expected, I can't re-claim with the same authorized account. 

Authentication works well both for Twitter and GitHub in the *online* demo, but **Twitter OAuth can't be tested locally**: while setting up the ```callback URL``` when creating the application in [Twitter Developer Portal](https://developer.twitter.com/), it is impossible to use ```localhost``` as a domain. However, Twitter OAuth works correctly in the *online* version, so **this should not be an issue**. (<u>EDIT POST TEST</u>: I found a possible workaround to test Twitter OAuth locally, see [this](https://stackoverflow.com/questions/800827/twitter-oauth-callbackurl-localhost-development) StackOverflow answer).

### 0b. Documentation
As already stated, the documentation is exhaustive and precise; however, I suggest the following changes.

#### - Getting Started *section*

If I run ```npm i``` I get the following error:
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: next-auth@4.12.2
npm ERR! Found: next@12.2.4
npm ERR! node_modules/next
npm ERR!   next@"12.2.4" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer next@"^12.2.5" from next-auth@4.12.2
npm ERR! node_modules/next-auth
npm ERR!   next-auth@"^4.12.2" from the root project
npm ERR! 
npm ERR! Conflicting peer dependency: next@12.3.1
npm ERR! node_modules/next
npm ERR!   peer next@"^12.2.5" from next-auth@4.12.2
npm ERR!   node_modules/next-auth
npm ERR!     next-auth@"^4.12.2" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```
As written, it can be run the command ```npm i --legacy-peer-deps``` and the installation works.

I'd fix the package dependencies to avoid this error, and insert the command ```npm i``` in the ```README.md``` file, in the **Getting Started** section.

#### - Configuration *section*
- Here (as in the ```.env.sample``` file), I suggest adding the default ```REDIS_ENDPOINT```, which should be ```6379```.
- I'd insert the callback URL also for GitHub if needed (it should be ```https://www.faucet.com/api/auth/callback/github```); otherwise, specify that it is not required.

### 0c. Testing Guide

Both ```unit/integration``` tests and ```e2e``` tests are passing.

All the functionalities are tested in ```unit/integration``` tests, but I'd suggest adding a test for the ```/pages/api/claim/new.ts``` file to test the *claim* functionality. 
I've seen the claiming process is tested in ```e2e``` tests, so maybe a lack of that test should not be a big issue; I'd add those tests if it shouldn't take too much time.

### 4. Faucet drip

Here is a minor issue: in [line 41](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/pages/api/claim/new.ts#L41) of ```/pages/api/claim/new.ts```, the ```FAUCET_MNEMONIC``` variable should match the one in ```.env.sample``` file ([```FAUCET_SECRET```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/.env.sample#L14)).
