# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**

* **PR Link:** [https://github.com/w3f/Open-Grants-Program/pull/23](https://github.com/w3f/Open-Grants-Program/pull/23).
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1.  | keypair creation |[code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L121), [example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L27)| |
| 2.  | keypair derivation |[derive keypair hard code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L138), [derive keypair hard example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L118), [derive keypair soft code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L155), [derive keypair soft example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L77), [derive public soft code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L187), [derive public soft example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L100)| |
| 3.  | sign/verify message |[sign code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L211), [sign example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L45), [verify code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L281), [verify example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L64)| |
| 4.  | random number generator  |[code](https://github.com/TerenceGe/sr25519-donna/blob/master/src/sr25519-randombytes.h), [build option](https://github.com/TerenceGe/sr25519-donna#random-options)| This library uses a build-in random number generator by default. user can u also se a custom random function|
| 5.  | curve operation |[code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/ristretto255.c#L7), [build option](https://github.com/TerenceGe/sr25519-donna#curve-operation-options)| This library supports both 32bit and 64bit curve operations, the default is according to your machine. You can force the use of 32 bit routines even when compiling for 64 bit.|
| 6.  | add documentation |[readme](https://github.com/TerenceGe/sr25519-donna)| |
