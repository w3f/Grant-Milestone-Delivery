# Evaluation

- **Status:** Accepted
- **Application
  Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Gafi.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by bitmaskit

| Number | Deliverable           | Link                                                                  | Notes                                                                                                                                                                                                                                 |
|--------|-----------------------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.     | Documentation         | https://wiki.gafi.network/                                            | Everything is well documented.                                                                                                                                                                                                        | 
| 0a.    | Pallets Testing Guide | https://github.com/cryptoviet/gafi#test                               | All tests compile and run successfully                                                                                                                                                                                                | 
| 0b.    | Client Testing Guide  | https://github.com/cryptoviet/gafi/tree/master/tests                  | The client unit-test. All tests passed successfully.                                                                                                                                                                                  | 
| 0c.    | Docker                | https://github.com/cryptoviet/gafi#run-in-docker                      | Running in docker was fixed and works correctly.                                                                                                                                                                                      | 
| 0d.    | Demo                  | https://wiki.gafi.network/how-to-guides/how-to-use-sponsored-pool     | Demo Sponsored Pool. Well written and works as expected.                                                                                                                                                                              | 
| 0e.    | Benchmarking          | https://github.com/cryptoviet/gafi#benchmarking                       | Benchmarks run successfully                                                                                                                                                                                                           | 
| 1.     | pallet sponsored-pool | https://github.com/cryptoviet/gafi/tree/master/pallets/sponsored-pool | One more option for players to participate in Gafi Network, reduce transaction fees and help game projects appeals to their users. [Wiki](https://wiki.gafi.network/learn/sponsored-pool). <br/> Unit tests pass and front-end works. | 
| 2.     | pallet gafi-tx        | https://github.com/cryptoviet/gafi/tree/master/pallets/gafi-tx        | Gafi TX is the controller to keep the balance of Gafi Network, distribute fee rewards to the Game creator. [Wiki](https://wiki.gafi.network/learn/gafi-tx) . <br/> Unit tests Pass                                                    | 
| 3.     | pallet-cache          | https://github.com/cryptoviet/gafi/tree/master/pallets/pallet-cache   | The Pallet Cache provides functions to store data temporary. <br/> Unit tests pass.                                                                                                                                                   |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the
software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

#### Readme.md and/or Makefile were updated after discussion:

#### Wrap-up
Main delivery "Sponsored Pool" was tested and works as expected. There were minor issues with compilations and setting up environment but they were fixed after discussion. 