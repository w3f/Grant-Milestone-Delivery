# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Faucet.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [LICENCE](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/LICENSE) | Apache 2.0, Ok |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| [README.md](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/README.md) | Problems with Twitter autentication locally. Other minor improvements. |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| Inside [README.md](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/README.md#testing) | Problems with Twitter autentication locally. Other minor improvements. |
| 0d. | Article |<ul><li>[x] </li></ul>| [Google Docs link](https://docs.google.com/document/d/1PKMPsfVBZx7TPq0IIS6fWd15Fs8d8HgUAaFHuA18Pao) | - |
| 1. | User Interface |<ul><li>[ ] </li></ul>| [```/pages/index.ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/pages/index.tsx) | Documentation improvements. |  
| 2. | Authentication |<ul><li>[ ] </li></ul>| [```/pages/api/auth/[...nextauth].ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/pages/api/auth/%5B...nextauth%5D.ts) | Documentation improvements. Possible bug.|  
| 3. | User status |<ul><li>[ ] </li></ul>| [```/pages/api/claim/status.ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/pages/api/claim/status.ts) | Documentation improvements. |  
| 4. | Faucet drip |<ul><li>[ ] </li></ul>| [```/pages/api/claim/new.ts```](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/b7142070f2333d8d2aa3455a9cefae5d92e8d6be/pages/api/claim/new.ts) | Bug, testing and documentation improvements. |

## General Notes

### Documentation and Tutorial

Please specify the node version needed to run compilation/development env, otherwise, users could have installation problems. I used yarn to run with node 16 and worked well. Would be nice to add `npm i` or `yarn install` to the instructions for running the system. I also needed to install Playwright to run e2e tests. The instruction to install Playwright is not in the tutorial.

The tutorial should help the user to understand that all env variables are mandatory to run the system and help to configure them. The instructions are very high level, and sometimes this could lead to user errors in the configuration. For example, I was not able to authenticate using Twitter locally and I don't know if this was a problem in my configuration or a bug in the software. Providing a fully configured .env file even with dummy accounts would be nice for testing and experimenting with the software.

Github authentication worked locally, but I got this error during the callback call. In this way, I needed to click again in the authentication button to properly authenticate: 

``` 
https://next-auth.js.org/errors#oauth_callback_error checks.state argument is missing {
error: TypeError: checks.state argument is missing
	at Client.oauthCallback (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/openid-client/lib/client.js:518:13)
	at oAuthCallback (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next-auth/core/lib/oauth/callback.js:125:29)
	at processTicksAndRejections (node:internal/process/task_queues:96:5)
	at async Object.callback (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next-auth/core/routes/callback.js:50:11)
	at async NextAuthHandler (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next-auth/core/index.js:201:28)
	at async NextAuthNextHandler (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next-auth/next/index.js:23:19)
	at async /home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next-auth/next/index.js:59:32
	at async Object.apiResolver (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next/dist/server/api-utils/node.js:184:9)
	at async DevServer.runApi (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next/dist/server/next-server.js:381:9)
	at async Object.fn (/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/node_modules/next/dist/server/base-server.js:491:37) {
name: 'OAuthCallbackError',
code: undefined
},
providerId: 'github',
message: 'checks.state argument is missing'
}

```

I also notice the difference in the name of env variables FAUCET_MNEMONIC to FAUCET_SECRET was causing an error on `api/claim/new.ts`.

I was not able to authenticate using Twitter locally, please provide proper instructions to configure Twitter authentication for this part to be tested.


### Code quality and code documentation

Some files are not covered by unit/integration tests at all: `/pages/api/claim/new.tx`, `utils/encode.ts`, `utils/getDerivedEncryptionKey.ts`. Please improve.

There are a few files with code documentation. Please improve including JSDoc compatible documentation for the code, especially for functions/classes header documentation.

Eslint generated 42 problems (41 errors, 1 warning). Most of them seem to be false positives. At least the one below could be fixed:

```
/home/diogo/workspace/w3f/sybil-resistant-substrate-faucet/components/button.tsx
1:10  warning  'string' is defined but never used  @typescript-eslint/no-unused-vars
```

### Exploratory testing

Testing online I was able to request some funds using the faucet authenticated with Twitter and GitHub. Locally, I was only able to authenticate using GitHub.

Considering the definition: "The Sybil attack in computer security is an attack wherein a reputation system is subverted by creating multiple identities." (see https://en.wikipedia.org/wiki/Sybil_attack) the faucet should be resistant to the usage of multiple identities by the same entity. 

I was able to get airdrops to the same address using different accounts, one for GitHub and one for Twitter, created with the same e-mail. I think, if is not too difficult, this case could be blocked since is the same entity (email). Usually, email is a primary entity for fraud prevention and the age of the email/account is also an important factor to decide if an account is valid or not for certain operations. This is something to think about for future work.

I also was able to claim airdrop for the same address with different accounts on GitHub. Shouldn't the address be part of the primary key for counting the time for the next airdrop?








