# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substats.md
- **Milestone:** 3
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/README.md) <br /> [component-introduction.md](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/documents/component-introduction.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [testing-guide.md](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/documents/testing-guide.md) |  |
| 0d. | Article | <ul><li>[x] </li></ul> | [Customize Your Blockchain Explorer Quickly with Substats](https://medium.com/@CESS_LAB/customize-your-blockchain-explorer-quickly-with-substats-ae7880eb14d1) |  |
| 1a. | Front-end Framework | <ul><li>[x] </li></ul> | [ui/README.md](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/ui/README.md) <br />  [customized-and-extended.md](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/documents/customized-and-extended.md) |  |
| 1b. | API | <ul><li>[x] </li></ul> | [api-docs.md](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/documents/api-docs.md) | See **General Notes** |
| 1c. | Develop Interface | <ul><li>[x] </li></ul> | [run-guide](https://github.com/CESSProject/substats/tree/8f8581411cee81ac82610ceb00021227e3285fea#5-run-guide) |  |
| 2. | UI Design | <ul><li>[x] </li></ul> | [ui/README.md](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/ui/README.md) | See **General Notes** |
| 3. | Operation Manual | <ul><li>[x] </li></ul> | [Operation Manual](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/README.md)  <br />  [customized and extended](https://github.com/CESSProject/substats/blob/8f8581411cee81ac82610ceb00021227e3285fea/documents/customized-and-extended.md) |  |
<br/>

## General Notes v2 - Mar 8, 2023
Here is the response from the team. I found it more than reasonable, and they already fixed some minor issues, other than the more important ones.

### Possible problems
> 1. The Transactions trend chart seems to not work properly, both in the Kusama and Moonbeam demos you provided and locally. Also, days go from right to the left in the x axis.

- a. The reason is that the server request RPC frequently. So the server reject the request and the data updating is failed. The resource of server is limited, we closed Kusama and Moonbeam server. Polkadot demo is running: https://polkadot.cess.cloud/
- b. The order of the X axis has been changed.

> 2. I tried other RPCs (Rococo Contracts and Statemint) and the first 127 blocks have 0 txs and 1970-01-01 01:00:00 as time. Do you know if it's a problem on your end or on the RPCs? For those blocks, I see this in the console:

- We tested Rococo Contracts（wss://rococo-contracts-rpc.polkadot.io）, and we can not find the problem. We suppose that "npm run reset" has not been executed after you updated RPC. 

> 3. If I go to the Blocks page, which are the first blocks shown?

- It depends on when the block starts to synchronize. If the developer starts syncing from the first block,  users can see all the blocks.

> 4. There are accounts with millions of coins and no transactions, is it something on your end or the RPC data is wrong / they're some edge cases?

 - Because the block is not synchronized from the first block, some transaction can not be found . The demo just for testing and the data is from database instead of chain. It is normal.

> 5. While the server is retrieving the blocks, I try to search for a one that has just been found, but I get the error.

- The reason is that the local has not been synchronized timely. 
- This is a phenomenon caused by the mechanism of the system. We will fix this BUG in the future if there is a large scale application. Thanks for your advice, we added an error message.

> 6. Note: this is the block I'm looking for, maybe the blocknumber is 516 instead of 3316885 and I misinterpreted the logs?

- 3316885 is latest block height, 516 is the block height where synchronizing to local. The log hint is inaccurate, we have fixed the log.

### UI suggestions

Thanks for your suggestions, it sounds advisable.

Most of suggestions has been adopted:

> 1. I'd rename "Transfers" to "Transactions", as it's more general;

- "Transfers" sounds more correct, so it has been changed.

> 2. I'd make possible to zoom in/out the Transactions trend chart;

- Sorry, the component is unsupported to zoom in/out.

> 3. If I input something in the research bar and search and then I change page, I'd remove the input value;

- It has been changed.

> 4. In the Account page, I'd make the txs shrinkable (and already shrinked if I open the page), so that I can see more txs at once;

- It has been changed.

> 5. In the Transfer detail page, the first column resizes if I change the selected event.

- It has been changed.

<br/>

## General Notes v1 - Mar 1, 2023
The delivery is good, and the UI is easy to use. The setup is particularly easy.

That said, I identified some minor problems, and I have some suggestions for (UI) improvements.

### Possible problems
- The `Transactions trend` chart seems to not work properly, both in the Kusama and Moonbeam demos you provided and locally. Also, days go from right to the left in the x axis.
- I tried other RPCs (Rococo Contracts and Statemint) and the first 127 blocks have 0 txs and `1970-01-01 01:00:00` as time. Do you know if it's a problem on your end or on the RPCs? For those blocks, I see this in the console:

  <img width="1230" alt="Screenshot 2023-03-01 at 11 52 35" src="https://user-images.githubusercontent.com/22419450/222134266-aa61ef22-8611-4159-bec2-89dede7a9c0f.png"/>

- If I go to the `Blocks` page, which are the first blocks shown?
- There are accounts with millions of coins and no transactions, is it something on your end or the RPC data is wrong / they're some edge cases?

  ![Screenshot 2023-03-01 at 11 04 19](https://user-images.githubusercontent.com/22419450/222134147-61039c49-c130-4316-b9a1-d152a235a678.png)

- While the server is retrieving the blocks, I try to search for a one that has just been found, but I get the error:

  ![Screenshot 2023-03-01 at 12 51 49](https://user-images.githubusercontent.com/22419450/222133475-86fce356-796a-4969-869c-0d54f58895f7.png)
  
  Note: this is the block I'm looking for, maybe the blocknumber is 516 instead of 3316885 and I misinterpreted the logs?
  
  <img width="692" alt="Screenshot 2023-03-01 at 12 02 40" src="https://user-images.githubusercontent.com/22419450/222134060-5fabdff0-3fd8-41f3-aee7-1c1c13e73dad.png"/>




### UI suggestions (feel free to ignore them)
- In the sidebar, I'd rename "Transfers" to "Transactions", as it's more general;
- I'd make possible to zoom in/out the `Transactions trend` chart;
- If I input something in the research bar and search and then I change page, I'd remove the input value;
- In the `Account` page, I'd make the txs shrinkable (and already shrinked if I open the page), so that I can see more txs at once;
- In the `Transfer detail` page, the first column resizes if I change the selected event.
