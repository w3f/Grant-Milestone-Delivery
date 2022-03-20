# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [lip_payments.md](https://github.com/w3f/Grants-Program/blob/master/applications/lip_payments.md)
* **Milestone Number:** 2. Payment pallet extensions

**Context**  
This milestone extends the simple escrow system to be a more complete payment solution, 
besides we propose it for inclusion in the Open Runtime Module Library so it can be used more easily 
by the community that is already familiar with ORML the repository.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Documentation | [Updated README][docs] | - |
| 0b. | Article | [Virto Website PR][post] | Blog post can be reviewed as a markdown file that will be published in our newly created blog section once ready |
| 1. | Stand-alone | [ORML PR][orml] | This opened PR can be a place for feedback and discussion |  
| 2. | Fee processing | [FeeHandler PR][PR2] | Configurable system to allow custom logic to charge extra fees that might be used by merchants. | 
| 3. | Remarks system | [Pay with remark PR][PR3] | Making payments with metadata to allow custom login react differently based on the payment information. |  

[docs]: https://github.com/virto-network/virto-node/blob/master/pallets/payment/README.md
[post]: https://github.com/virto-network/website/pull/13
[orml]: https://github.com/open-web3-stack/open-runtime-module-library/pull/691
[PR2]: https://github.com/virto-network/virto-node/pull/161
[PR3]: https://github.com/virto-network/virto-node/pull/163

**Additional Information**

Since the proposed new features were finished prior our first milestone review, the required features of this milestone are technically already reviewed, 
nonetheless we recommend checking the latest version of the code included in the ORML Pull Request which still contains features of points 2 and 3 with updates and fixes we've found in the last month of development.  
Although outside of the scope of the milestone review, feedback on the latest state of the code that we plan to merge in ORML is 
very much welcomed, it includes some of the extra features we've been working that we'd like to propose for a follow-up grant featuring [payments pallet v1](https://github.com/virto-network/open-runtime-module-library/milestone/1) and a high-level payments and merchants "decentralizable API" powered by our [*Valor*](https://github.com/virto-network/valor) runtime.
