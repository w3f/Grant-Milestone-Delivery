# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md
- **Milestone:** 1
- **Kusama Identity:** GbxefAnqRioX195Vc5jApLdUi8qc2D7A6FNzLPe2JmVLVRm
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License: Apache 2.0 |<ul><li>[X] </li></ul>| [Link](https://github.com/Fair-Squares/fair-squares/blob/main/LICENSE)| |
| 0b. | Documentation & tutorial |<ul><li>[X] </li></ul>| [Link](https://docs.google.com/document/d/186XCQliGloijWBnk4N5HivKt9TyXG3PUM1I6C1994CQ/edit#heading=h.wpxzjrnoi4x) | Functional. Minor typos and some requirements questions. R1 Fixed and answered. |
| 0c. | Testing Guide |<ul><li>[X] </li></ul>| [Link](https://github.com/Fair-Squares/fair-squares#run-all-tests)| Minor problem for running with docker. R1 Fixed.|
| 0d. | Dockerfile |<ul><li>[X] </li></ul>| [Link](https://github.com/Fair-Squares/fair-squares/blob/main/Dockerfile)| Functional.|
| 0d. | Article |<ul><li>[X] </li></ul>| [Link](https://docs.google.com/document/d/1YT5tLNmcCsrmn4_2W9UHZb1QgTiRo0inVWUUvr8sr5M/edit?usp=sharing)| Minor suggestion.|
| 1.  | pallet-roles |<ul><li>[X] </li></ul>| [Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/roles) | Needs better testing. R1 Ok, valid argumentation. |
| 2.  | pallet-housing-fund |<ul><li>[X] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/housing_fund) | Needs better testing. R1 Ok, valid argumentation. |
| 3.  | role-verifier |<ul><li>[X] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/roles/src/lib.rs#L208-L251) | Needs better testing. R1 Ok, valid argumentation. |
| 4.  | fs-node M1 |<ul><li>[X] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares) |  |


## General Notes

### Documentation & tutorial

I was able to run the application and go step-by-step running the tutorial. I found some minor typos and missing words in the tutorial document:

- "Go to the developer tab (top) in Polkadot-js and in the **develop** drop-down select extrinsics, we will make a transaction to set a role.". 
- "This gets taken along when the housing fund assembles a set **of** investors."
- "The housingfund keeps up with how much money is contributed by each user **,** that has the investor role.". This comma could be removed.  

There are some questions about the requirements of the modules delivered in this milestone that I had during tutorial execution:

Regarding this comment: "Currently we have set it that you can only acquire one role, you should be able to get two, but for simplicity reasons we have chosen to limit it to one at the moment. ".
 - In which milestone this will be adjusted? 
 - This would add more scope and effort to other Milestones that are currently planned? 
 - How this could affect the project?

During the execution of the tutorial, I tried some options that were not in the path of the tutorial, doing exploratory testing. I found two situations that left me with doubts about the expected behavior of the software.
 - I was able to perform a role approval to myself. Any problem to perform this kind of approval in this application? Usually, this requires approval from another person.
 - The hasWithdraw flag is mentioned as set to true when the investors have funds to withdraw. However, when I tested to withdraw all funds the flag is still set to true. Is that a problem? Besides that, I was not able to withdraw more funds than I had.

### Testing Guide

For running the application with docker following the testing guide I had a few minor problems with the commands:
 - `Docker build .`. Docker command starting with a capital letter.
 - `./scripts/docker_run.sh`. The script is not with execution permission set in the file in the repository.
 - After running the above command, it fails because I don't have the `.local` folder in the root directory of the project. I needed to create it besides this instruction is not present in the testing guide.

### Article

Just one question. The phrase "We aim to make our way to rococo.", what is the intended meaning of this phrase? Maybe the readers of the article would have the same doubt as me. 
A clarification or reference link could solve this possible problem.

### Code, artifacts documentation and automated tests

The code is functional (running).
The code has Rust documentation and I was able to generate the HTML files from the source code. 
There are simple sequence diagrams that show the interaction between components.
There are automated test suites for the pallets with 5 test cases for roles pallet and 25 for house_fund, all running and passing. 
I measured the code coverage of automated test suites using tarpaulin. The overall coverage was 61.21%, which indicates a possible lack of testing.
Considering only the pallets house_fund has 94.03% of code coverage and roles 81.90%. 
House_fund has an acceptable code coverage but there is a doubt about hasWithdraw which seems not to be tested. 
Regarding roles, the code coverage is currently low and there is a relevant part of the code that has not been automated tested.

An additional suggestion is better documentation of requirements and business rules related to the roles. This could help to solve doubts about approvals for example and could lead to better testing as well.
