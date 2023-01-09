# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/774
- **Milestone:** 2

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | [x] | [LICENSE](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/LICENSE) | MIT License |
| 0b. | Documentation | [x] | 1. [Examples](https://github.com/Blackprint/nodes-polkadot.js/tree/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example) <br> 2. [Guide for importing the module and load examples](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/README.md) | Exceptionally high quality docs. |
| 0c. | Testing Guide | [x] | 1. [Guide](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/README.md#development) for the node module <br> 2. [Guide](https://github.com/Blackprint/Blackprint/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/README.md#build-and-run-the-unit-test) for main [Blackprint](https://github.com/Blackprint/Blackprint)'s repository | Very clear, thank you! |
| 0d. | Docker | [x] | [Test files](https://github.com/Blackprint/nodes-polkadot.js/tree/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests), [GitHub Action](https://github.com/Blackprint/nodes-polkadot.js/runs/5645423590?check_suite_focus=true#step:7:67) | Tested examples manually in browser and ran tests locally from source as well. |
| 1. | Event node | [x] | 1. [Events/Account/Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Events/Account/Balance.js) <br> 2. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/transfer-balance.js#L86-L172) | Great job progressing to visually programming events with accounts and balance! |
| 2. | Browser Extension | [x] | 1. [Example - Send Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example/send-balance-extension.json) <br> 2. [Example - Sign data](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example/sign-verify-extension.json) <br> 2. [Connection/Extension](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Connection/Extension.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/browser-extension.js) | Looks great. |
| 3. | Balance transfer node |  [x] | 1. [Example- Send Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example/send-balance-mnemonic.json) <br> 2. [Account/Transfer/Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Account/Transfer/Balance.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/transfer-balance.js) | Looks great. 
| 4. | Payment info node | [x] | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/11a27d89879a4f15e8c745f607ac31fdb9048c49/example/payment-info.json) <br> 2. [Transaction/PaymentInfo](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Transaction/PaymentInfo.js) <br> 4. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/transfer-balance.js#L68-L84) | Slightly different testing process, see below. |
| 5. | Package v0.3 | [x] | [NPM Registry](https://www.npmjs.com/package/@blackprint/nodes-polkadot.js) | Thank you for publishing an updated version on the registry! Great open-source community contribution! |


 

# Additional Information

See the [Conversation tab of M2 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/405) for more in-depth testing guide.

1. I downloaded [this repo](https://github.com/Blackprint/nodes-polkadot.js) and followed its `README` testing guide.

2. I created an `.env` file based on `.env.example` with two WND addresses that were funded with WND. 

3. I ran these commands to run the tests locally from source:

```
  npm install
  npm run build-prod
  npm test
```

   
4. Then I went to [this website](https://blackprint.github.io/) and tested these [examples](https://github.com/Blackprint/nodes-polkadot.js/tree/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example).  

5. For deliverables 1, 2 & 3, I loaded the examples from the [browser sandbox](https://blackprint.github.io/) and imported the `nodes-polkadot` example list.

6. For deliverable 4, I tested in incognito mode to prevent caching issues & copied in the [json example](https://github.com/Blackprint/nodes-polkadot.js/blob/11a27d89879a4f15e8c745f607ac31fdb9048c49/example/payment-info.json).


#### All Github repos:
   1. https://github.com/Blackprint/Blackprint
   2. https://github.com/Blackprint/nodes-polkadot.js 

#### Additional important links:
   1. [project roadmap on GitHub](https://github.com/Blackprint/Blackprint#blackprint-roadmap)
   2. [highly detailed M1 eval](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/blackprint_1_cruikshankss.md)