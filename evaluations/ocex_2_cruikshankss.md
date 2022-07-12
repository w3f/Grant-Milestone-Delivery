- **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/on-chain-cash.md
* **Milestone Number:** 2
- **Previously successfully merged evaluation:** all by cruikshankss


**Deliverables** (ALL ACCEPTED)

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. :heavy_check_mark: | License | [LICENSE](https://github.com/bsn-si/ocex-cli/blob/main/LICENSE) | Apache 2.0 license |
| 0b. :heavy_check_mark: | Documentation | [Readme.md](https://github.com/bsn-si/ocex-cli#readme) | Explaining basic features |
| 0c. :heavy_check_mark: | Testing Guide | [Readme.md](https://github.com/bsn-si/ocex-cli#install--usage) | Additional videos: <br /> [![How to install](https://user-images.githubusercontent.com/98888366/177416297-a831c2b5-2b60-43ed-81ef-b4ba1ea83561.jpg)](https://www.youtube.com/watch?v=qw6D-8Ktp9Q) <br /> [![How to run tests](https://user-images.githubusercontent.com/98888366/177415759-f9c9818e-9728-4328-8496-19951eb1a52a.jpg)](https://www.youtube.com/watch?v=fNvra1Op8_c)|
| 0d. :heavy_check_mark: | Docker | [Dockerfile](https://github.com/bsn-si/ocex-cli/blob/main/Dockerfile) | You can run CLI tools from this docker |
| 0e. :heavy_check_mark: | Article | [Medium](https://medium.com/@bela-supernova/on-chain-cash-exchange-ocex-for-the-polkadot-network-eliminating-the-need-for-a-crypto-wallet-3e9cd041f5fa) | On-chain cash exchange (OCEX) for the Polkadot network: eliminating the need for a crypto wallet for day-to-day transactions |
| 1. :heavy_check_mark: | Management back-end | [OCEX CLI](https://github.com/bsn-si/ocex-cli) | Service provider’s CLI tools for coupon lifecycle management: coupon generation, storage, registration. Liquidity pool management: assets top-up and withdrawal |  
| 2. :heavy_check_mark: | Buyer's web interface | [coupon activation](https://github.com/bsn-si/ocex-activation) | A simple web UI for coupons redemption |  


# Notes

### Important notes from their docs:

"a service for minting and validating coupons using 2 keys, one of which is known only to the buyer"

"our proposed app offers a fully decentralized service with a front-end communicating straight to the smart-contract with Polkadot.js and the centralized back-end will be used only for coupons generation and pushing them to the smart-contract, as well as for managing the service provider’s liquidity pool"

"we’ve made a docker set-up so you can build the smartcontract in a container, isolated from the main environment"

"Through a partnership with Kraken exchange and leading Slovenian companies – Petrol and Telekom Slovenije, Bitins became a widely used ramp to crypto that doesn’t include the need for a crypto-wallet or even a banking account."


"In this milestone we've developed a Centralized management back-end, that includes CLI tools for coupon lifecycle management and a user's basic web interface for coupons redemption."

### My notes 

Thanks for focusing on the ideal of democratization with a fiat on-ramp! They're so important!! Good luck with security along your business roadmap following this proof of concept grant! In my understanding this is a POC grant and grant funding does not include getting it fully production-ready of course. 

You said ~"coupons are technically utility tokens by definition". Thanks for idealizing this! Utility tokens by definition are useful, and have more of a Layer-0 security type of feel to me. If you consider doing Layer 0 security work for your project after this grant, please feel free to apply for more grants, treasury funding, etc., and feel free to email grants@web3.foundation or ashleyg@web3.foundation. :)

REALLY GREAT TESTING DEMO VIDEO! It helps me so much. Seriously, thanks.

Really nice terminal feedback / cli messages that helped me update the tool easily.

I think your UI is very aesthetic. Also, in general, great to see such a well-rounded team in UI/UX, front-end and substrate back-end!

Was so happy to see "found 0 vulnerabilities" -- SUPER CLEAN npm build! That's rare imho!

I think this is a very logical, practical and useful idea. Idealizes democratization. :) Well executed. Looking forward to the evolution of your project to reach as many ideals as you need/aspire to!

Really excellent article! Thanks for teaching the community how complicated wallet setup & security is while providing a solution.

Congratulations on your successful M2 & wishing you success in completing all 5 modules!