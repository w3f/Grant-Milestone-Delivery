# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadotjs-hardware.md
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Ledger API ECDSA signer | [pallet](https://github.com/AstarNetwork/astar-frame/tree/polkadot-v0.9.24/frame/custom-signatures), [UI](https://github.com/polkadot-js/apps/pull/5903/files) | Ledger support consist of two components: the pallet (that supports any signature schemes to send transactions), and UI that requests Metamask to sign custom data (the `Call` structure). |
| 2. | Improve documentation | [Link](https://github.com/gluneau/polkadotjs-ecdsa-hardware) | Added documentation page that describes provided functionality.  (Repo to be cloned into the w3f-grants-archive) |
| 3. | Demo video | [Link](https://user-images.githubusercontent.com/40356749/104814290-7137a700-5851-11eb-8cef-00b9495da0d6.mp4) | Attached to [PR](https://github.com/polkadot-js/apps/pull/5903). |
