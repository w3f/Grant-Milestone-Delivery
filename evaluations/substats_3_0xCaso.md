# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substats.md
- **Milestone:** 3
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/README.md) <br /> [component-introduction.md](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/documents/component-introduction.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [testing-guide.md](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/documents/testing-guide.md) |  |
| 0d. | Article | <ul><li>[x] </li></ul> | [Customize Your Blockchain Explorer Quickly with Substats](https://medium.com/@CESS_LAB/customize-your-blockchain-explorer-quickly-with-substats-ae7880eb14d1) |  |
| 1a. | Front-end Framework | <ul><li>[x] </li></ul> | [ui/README.md](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/ui/README.md) <br />  [customized-and-extended.md](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/documents/customized-and-extended.md) |  |
| 1b. | API | <ul><li>[ ] </li></ul> | [api-docs.md](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/documents/api-docs.md) | See **General Notes** |
| 1c. | Develop Interface | <ul><li>[x] </li></ul> | [run-guide](https://github.com/CESSProject/substats/tree/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9#5-run-guide) |  |
| 2. | UI Design | <ul><li>[ ] </li></ul> | [ui/README.md](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/ui/README.md) | See **General Notes** |
| 3. | Operation Manual | <ul><li>[x] </li></ul> | [Operation Manual](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/README.md)  <br />  [customized and extended](https://github.com/CESSProject/substats/blob/7258ab4c2374d709ce0e65c14c1befe85e8bfaf9/documents/customized-and-extended.md) |  |
<br/>

## General Notes v1 - Mar 1, 2023
The delivery is good, and the UI is easy to use. The setup is particularly easy.

That said, I identified some minor problems, and I have some suggestions for (UI) improvements.

### Possible problems
- The `Transactions trend` chart seems to not work properly, both in the Kusama and Moonbeam demos you provided and locally. Also, days go from right to the left in the x axis.
- I tried other RPCs (Rococo Contracts and Statemint) and the first 127 blocks have 0 txs and `1970-01-01 01:00:00` as time. Do you know if it's a problem on your end or on the RPCs? For those blocks, I see this in the console:

  <img width="1230" alt="Screenshot 2023-03-01 at 11 52 35" src="https://user-images.githubusercontent.com/22419450/222134266-aa61ef22-8611-4159-bec2-89dede7a9c0f.png">

- If I go to the `Blocks` page, which are the first blocks shown?
- There are accounts with millions of coins and no transactions, is it something on your end or the RPC data is wrong / they're some edge cases?

  ![Screenshot 2023-03-01 at 11 04 19](https://user-images.githubusercontent.com/22419450/222134147-61039c49-c130-4316-b9a1-d152a235a678.png)

- While the server is retrieving the blocks, I try to search for a one that has just been found, but I get the error:

  ![Screenshot 2023-03-01 at 12 51 49](https://user-images.githubusercontent.com/22419450/222133475-86fce356-796a-4969-869c-0d54f58895f7.png)
  
  Note: this is the block I'm looking for, maybe the blocknumber is 516 instead of 3316885 and I misinterpreted the logs?
  
  <img width="692" alt="Screenshot 2023-03-01 at 12 02 40" src="https://user-images.githubusercontent.com/22419450/222134060-5fabdff0-3fd8-41f3-aee7-1c1c13e73dad.png"/>




### Suggestions (feel free to ignore them)
- In the sidebar, I'd rename "Transfers" to "Transactions", as it's more general;
- I'd make possible to zoom in/out the `Transactions trend` chart;
- If I input something in the research bar and search and then I change page, I'd remove the input value;
- In the `Account` page, I'd make the txs shrinkable (and already shrinked if I open the page), so that I can see more txs at once;
- In the `Transfer detail` page, the first column resizes if I change the selected event.
