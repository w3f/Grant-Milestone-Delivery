# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**

* **PR Link:** [https://github.com/w3f/Open-Grants-Program/pull/23](https://github.com/w3f/Open-Grants-Program/pull/23).
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1.  | keypair creation |[https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L121](code) [](example)| |
| 2.  | keypair derivation |[https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L138](derive keypair hard code) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L118](derive keypair hard example) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L155](derive keypair soft code) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L77](derive keypair soft example) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L187](derive public soft code) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L100](derive public soft example)| |
| 3.  | sign/verify message |[https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L211](sign code) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L45](example) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L281](verify code) [https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L64](verify example)| |
| 4.  | random number generator  |[https://github.com/TerenceGe/sr25519-donna/blob/master/src/sr25519-randombytes.h](code) [https://github.com/TerenceGe/sr25519-donna#random-options](build option)| This library uses a build-in random number generator by default. user can u also se a custom random function|
| 5.  | curve operation |[https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/ristretto255.c#L7](code) [https://github.com/TerenceGe/sr25519-donna#curve-operation-options](build option)| This library supports both 32bit and 64bit curve operations, the default is according to your machine. You can force the use of 32 bit routines even when compiling for 64 bit.|
| 6.  | add documentation |[https://github.com/TerenceGe/sr25519-donna](readme))| |
