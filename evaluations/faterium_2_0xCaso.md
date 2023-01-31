# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/faterium.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/faterium/faterium-dapp/blob/abc90464081379d84780a87a99ec08e318321b02/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [faterium-dapp/README.md](https://github.com/faterium/faterium-dapp/blob/abc90464081379d84780a87a99ec08e318321b02/README.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [faterium-dapp/README.md#local-testing-setup](https://github.com/faterium/faterium-dapp/blob/abc90464081379d84780a87a99ec08e318321b02/README.md#local-testing-setup) | See **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Faterium Server Dockerfile](https://github.com/faterium/faterium-server/blob/9ef9f0aae522ed03aa04cff87223d676fb1a819c/Dockerfile) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@dodorare/power-of-voting-why-does-the-world-need-a-universal-voting-platform-e98cf64e06c9) | |
| 1. | Create design for Faterium dApp | <ul><li>[x] </li></ul> | https://dapp.faterium.com |  |
| 2. | Extend Faterium server | <ul><li>[x] </li></ul> | [faterium-server](https://github.com/faterium/faterium-server/tree/9ef9f0aae522ed03aa04cff87223d676fb1a819c) |  |
| 3. | All web pages for dApp | <ul><li>[ ] </li></ul> | https://dapp.faterium.com | See **General Notes** |
<br/>

## General Notes v3 - Jan 31, 2023
The team improved a lot of things (you can see in the PR conversation):
>1. **Added categories creation**;
>2. **Improved docker** (thanks for mentioning the docker-compose ports issue, I fixed it and added the same file to the `faterium-dapp` repository to enhance developer experience);
>3. **Better error handling** (now errors look better for PocketBase issues and create a link for a specific block for Substrate errors);
>4. **Tests** (now it's possible to run against `testnet` and `local`);
>5. **Issue with minimum balance** (I fixed it by checking the correct amount on the frontend side because I think it should be more than 0 by design).

So now everything from the evaluations v1 and v2 is fixed.

Then, I had problems with the local setup becuase of a browser's cache problem. Deleting the cache worked, but they also added in the code the cache reset.

Finally, I comment the last three things that I noticed:
1. One should be able to link a community to a category (during its creation);
2. Polls that are not made in a community should have a default "non-community" image (or no community image) and the “@” removed, examples (**POLL 1** and **Test**):

   ![Screenshot 2023-01-31 at 16 56 55](https://user-images.githubusercontent.com/22419450/215819719-d634fefd-7b99-468f-87e4-0c789ea86a35.png)
3. Polls that have not the banner are cut:

   ![Screenshot 2023-01-31 at 16 55 08](https://user-images.githubusercontent.com/22419450/215819776-512ce15d-8c70-4c71-b693-2a2201b24023.png)

<br/>

## General Notes v2 - Jan 30, 2023
In **General Notes v1** please ignore:
- (in **0c. Testing Guide**) the testing errors, as they didn't appear in another testing machine;
- (in **3. All web pages for dApp**) I managed to see the created asset in polkadot.js. I didn't see it because the dApp redirected me to https://dapp-apps.faterium.com/#/assets, which of course won't show me the asset as that is the hosted node, and I'm working in local (the other comments about this are still valid).

Finally, I add a comment about the [`docker-compose.yml`](https://github.com/faterium/faterium-server/blob/7eab035357e6bd2bd3f9fc1ed4e3183874b7f953/infra/local/docker-compose.yml) file, related to the server.
Be aware that if you run this, you open the ports to the entire internet and not just "locally". To do so, you should replace each `port:` config like this:
from
```
port:
    XXXX:XXXX
```
to
```
port:
    127.0.0.1:XXXX:XXXX
```
<br/>

## General Notes v1 - Jan 30, 2023
From the last milestone, the team added some functionalities to the dApp (both on-chain and off-chain), they did a good job in my opinion.

I had just a question about the server: for adding the new "entities" (like the community, category...) is it sufficient to define them inside the file `collections.json`? How does it work?

Anyway, the followings are my comments about the deliverables:

### 0c. Testing Guide
If I try to run the e2e tests, I get the following error:
```
Error: EACCES: permission denied, 
open '/tmp/playwright-transform-cache/56/
playwrightconfig_56f8666318003ed951b052b242a24342d1122f10.map’
```
or also
```
[WebServer] node:fs:590
  handleErrorFromBinding(ctx);
  ^

Error: EACCES: permission denied, open '/home/matteo/faterium-dapp/node_modules/.vite/deps_temp/package.json'
    at Object.openSync (node:fs:590:3)
    at Object.writeFileSync (node:fs:2202:35)
    at writeFile (file:///home/matteo/faterium-dapp/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:11975:10)
    at runOptimizeDeps (file:///home/matteo/faterium-dapp/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:41427:5)
    at Timeout._onTimeout (file:///home/matteo/faterium-dapp/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:40832:54) {
  errno: -13,
  syscall: 'open',
  code: 'EACCES',
  path: '/home/matteo/faterium-dapp/node_modules/.vite/deps_temp/package.json'
}
```
Other than this, in the [faterium-server](https://github.com/faterium/faterium-server) repo README, I would add `cd infra` (and optionally, as you explained, choose `local` or `testnet` through `cd local` or `cd testnet`) before `docker-compose up`.

### 3. All web pages for dApp
- Is there a way to create/see `categories` in the local setup? I only managed to see it in your hosted dApp;
- The only error that I encountered was with the `create asset` functionality: if I put `minimum balance` to 0, it gets the following error:

    ```
    Server returned the following error: 
    [{"module":{"index":8,"error":"0x07000000"}},{"weight":152167000,
    "class":"Normal","paysFee":"Yes"}]
    ```

    In general, if there are other errors like this, I would make them more understandable for the user.
    
    By the way, if I change `minimum balance` to an amount > 0, it lets me sign two transactions, and after that it says that the creation was successfull, but if I check on https://dapp-apps.faterium.com/#/assets I don't see the asset that I created.
