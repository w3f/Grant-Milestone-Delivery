# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/12 
* **Milestone Number:** 3

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | schnorrkel/sr25519 module | https://github.com/emeraldpay/polkaj | module `polkaj-schnorrkel` |  
| 2. | Signing and signature validation module | https://github.com/emeraldpay/polkaj | module `polkaj-tx` |
| 3. | Example App | https://github.com/emeraldpay/polkaj/tree/master/examples | `keys` example shows how to use Schnorrkel for Secret/Public Keys. `balance` gives exampels on listening to storage changes, getting information about account and making a transfer |
| 4. | Unit Tests | https://codecov.io/gh/emeraldpay/polkaj (coverage) | Tests are in each module in src/tests/ dir. The current coverage is 86% |
| 5. | Documentation | https://github.com/emeraldpay/polkaj/tree/master/docs | New sections covering Schnorrkel, Extrinsics and Balance  

With this delivery the Polkaj library covers most of use cases related to access Storage, operate Secret Keys, and create and sign Extrinsics.
It provides a ready to use wrappers for Balance related operations (get current and make a transfer).
Some of other kinds of extrinsics/queries may need to implement simple container classes and SCALE encoding rules, but in general the library is designed to be Runtime agnostic and supposed to support any kind of extrinsics/queries.

The milestone also provides many bugfixes and extensions to previous modules, such as API, standard SCALE and JSON types, and other improvements.        