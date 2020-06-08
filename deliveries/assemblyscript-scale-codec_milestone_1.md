
# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** [https://github.com/w3f/Open-Grants-Program/pull/13](https://github.com/w3f/Open-Grants-Program/pull/13)
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Implementing the Library |Repo Link: [https://github.com/LimeChain/as-scale-codec](https://github.com/LimeChain/as-scale-codec) <br> Release: [version 0.0.2](https://github.com/LimeChain/as-scale-codec/releases/tag/0.0.2)| All of the specified types have been implemented, excluding the `Tuples`. We had technical dificulties implementing a general `Tuples` encoder/decoder due to AssemblyScript limitations (AS does not support reflection and `tuples`). After consulting with the AssemblyScript Dev team, we've decided to mitigate the task by not implementing a general `Tuples` encoder/decoder, but rather implement the concrete Objects (`Block`, `Extrinsic` etc..). We will be extending the library with the object types while we are working on the AS Runtime Generation Grant. | 
| 2.  | Unit Tests |Tests: [https://github.com/LimeChain/as-scale-codec/tree/master/assembly/__tests__](https://github.com/LimeChain/as-scale-codec/tree/master/assembly/__tests__) <br> Release: [version 0.0.2](https://github.com/LimeChain/as-scale-codec/releases/tag/0.0.2)| There are unit tests for all of the supported types. | 
| 3.  | Documentation |[https://github.com/LimeChain/as-scale-codec](https://github.com/LimeChain/as-scale-codec)| Documentation on how to import and use all of the types is provided, as well as instructions on how to run the unit tests of the library.|
