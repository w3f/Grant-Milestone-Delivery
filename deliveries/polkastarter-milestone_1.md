# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/204
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Crowdloan DApp |https://github.com/polkastarter/polkastarter-crowdloan| This the main deliverable and it includes a web based application that interacts with the westend runtime. | 
| 2.  | Polkadot launch config file |https://github.com/polkastarter/polkastarter-crowdloan/blob/main/polkadot-launch/config.json| Public networks do not support the crowdloan module; thus we'll have to run a local netwrok using the polkadot-launch cli too. This will spin up the westend runtime which has integrated the crowdloan module. We'll be using this local runtime to interact with the module. | 
| 3.  | Westend runtime binary |https://drive.google.com/file/d/1lwkSjOnS1uJxUUfaXj6-zbVU0X7fVbK4| This is a pre-built binary of the westend runtime that includes the crowdloan module.|
| 4.  | Documentation |https://github.com/polkastarter/polkastarter-crowdloan/blob/main/README.md| A thorough description of the crowdloan module and how one can interact by sending extrinsics either via the Polkadot.js Apps or the Polkastarter Crowdloan DApp.|
| 5.  | Initial manual integration of the crowdloan module |https://github.com/Apocentre/polkadot/pull/1/files| When we started implementing the DApp we were at a stage where there were no integration of the crowdloan on the official polkadot repository. The module itself was implemented but it was not included in any of the runtimes. In order to overcome this blocker we had to manually integrate the module ourselves with one of the runtime.|
