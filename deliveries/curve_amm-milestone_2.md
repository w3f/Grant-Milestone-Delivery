# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/225
* **Milestone Number:** #2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1.a. | We will implement methods to work with asset pools: add liquidity.  | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/milestone-2/pallets/equilibrium-curve-amm/src/lib.rs#L406 |  | 
| 1.b. | We will implement methods to work with asset pools: remove liquidity.  | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/milestone-2/pallets/equilibrium-curve-amm/src/lib.rs#L681 |  |
| 2. | We will implement methods to exchange assets within pools. | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/milestone-2/pallets/equilibrium-curve-amm/src/lib.rs#L582 |  |
| 3. | We will implement liquidity superfluidity: assets locked inside Curve liquidity pools may be further used in various lending protocols across the Polkadot ecosystem. |  | Any runtime that successfully integrated Equilibrium Curve Amm Pallet is able to generate LP tokens using underlying asset implementation. |
| 4. | We will implement a mechanism to reward liquidity providers with LP tokens.  | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/milestone-2/pallets/equilibrium-curve-amm/src/lib.rs#L624 | LP tokens represent balances supplied to the protocol. Users earn interest from exchange fees through the LP token's exchange rate appreciation when LP tokens increases in value relative to underlying assets. |
| 5. | The code will have complete unit-test coverage to ensure functionality and robustness. | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/milestone-2/pallets/equilibrium-curve-amm/src/tests.rs |  |
| 6. | We will publish the code in the Equilibrium’s public GitHub repository. | https://github.com/equilibrium-eosdt/equilibrium-curve-amm |  |
| 7. | We will provide detailed technical documentation describing pallet logic, storage, interfaces, subscriptions. | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/milestone-2/pallets/equilibrium-curve-amm/src/lib.rs | See rustocs and comments throughout entire file. |


