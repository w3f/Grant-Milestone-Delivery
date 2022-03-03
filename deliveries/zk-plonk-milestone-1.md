# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** [znSNARK Plonk](https://github.com/w3f/Grants-Program/pull/454).
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Plonk pallet functions test |https://github.com/AstarNetwork/plonk/blob/master/src/tests.rs|This tests check whether [`plonk-pallet`](https://github.com/AstarNetwork/plonk/blob/master/src/lib.rs) works correctly. You can also check with run `$ cargo test` or `$ docker-compose up` command on root directry.|
| 2.  | Imported from other pallet test |https://github.com/AstarNetwork/plonk/blob/master/examples/src/tests.rs|This tests check whether the other pallet can import the `plonk-pallet` and the functions `trusted setup` and `verify` work correctly.|
| 3.  | Documentation |https://docs.rs/plonk-pallet/latest/plonk_pallet/|The document describes about `plonk-pallet`.|
| 4.  | Tutorial |https://astarnetwork.github.io/plonk/|The tutorial describes how to import `plonk-pallet` to user own pallet and test these functionality.|
