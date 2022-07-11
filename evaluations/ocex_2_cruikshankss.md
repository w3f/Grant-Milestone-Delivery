POC. It should be a service for minting and validating coupons using 2-keys, one of which is known only to the buyer

our proposed app offers a fully decentralized service with a front-end communicating straight to the smart-contract with Polkadot.js and the centralized back-end will be used only for coupons generation and pushing them to the smart-contract, as well as for managing the service provider’s liquidity pool

 we’ve made a docker set-up so you can build the smartcontract in a container, isolated from the main environment

democratization (on-ramp)
 Through a partnership with Kraken exchange and leading Slovenian companies – Petrol and Telekom Slovenije, Bitins became a widely used ramp to crypto that doesn’t include the need for a crypto-wallet or even a banking account.

Coupons are technically utility tokens by definition

The system itself as it seen by BSN will have five functional modules:

Ink! smart contract, that executes all logic for cashflows and coupons operations;
Centralized system management module for stakeholders (coupons generation, invalidation and financial management);
Centralized system management module for service provider (commissions management and stats) with front-end service for new off-chain users: all-in-one service for wallet generation and immediate transaction with gas charged from service provider’s pool;
Management apps;
User apps.