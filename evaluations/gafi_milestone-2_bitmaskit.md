# Evaluation

- **Status:** In Progress
- **Application
  Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Gafi.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by bitmaskit

| Number | Deliverable           | Link                                                                  | Notes                                                                                                                                                                                                                                                                              |
|--------|-----------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.     | Documentation         | https://wiki.gafi.network/                                            | Documentation on how to build Gafi Network is missing/incomplete, otherwise everything is well documented.                                                                                                                                                                         | 
| 0a.    | Pallets Testing Guide | https://github.com/cryptoviet/gafi#test                               | All tests compile and run successfully                                                                                                                                                                                                                                             | 
| 0b.    | Client Testing Guide  | https://github.com/cryptoviet/gafi/tree/master/tests                  | The client unit-test. All tests passed successfully.                                                                                                                                                                                                                               | 
| 0c.    | Docker                | https://github.com/cryptoviet/gafi#run-in-docker                      | Running in docker needs more work. There is an extra step to create `.local` folder. Also there was an issue running the `./scripts/docker_run.sh` on MacOS. On Linux there was compile error.                                                                                     | 
| 0d.    | Demo                  | https://wiki.gafi.network/how-to-guides/how-to-use-sponsored-pool     | Demo Sponsored Pool. Well written and works as expected.                                                                                                                                                                                                                           | 
| 0e.    | Benchmarking          | https://github.com/cryptoviet/gafi#benchmarking                       | Benchmarks run successfully                                                                                                                                                                                                                                                        | 
| 1.     | pallet sponsored-pool | https://github.com/cryptoviet/gafi/tree/master/pallets/sponsored-pool | One more option for players to participate in Gafi Network, reduce transaction fees and help game projects appeals to their users. [Wiki](https://wiki.gafi.network/learn/sponsored-pool). <br/> Unit tests pass, but on front end I don't see "Withdraw pool" or "Change targets" | 
| 2.     | pallet gafi-tx        | https://github.com/cryptoviet/gafi/tree/master/pallets/gafi-tx        | Gafi TX is the controller to keep the balance of Gafi Network, distribute fee rewards to the Game creator. [Wiki](https://wiki.gafi.network/learn/gafi-tx) . <br/> Unit tests Pass                                                                                                 | 
| 3.     | pallet-cache          | https://github.com/cryptoviet/gafi/tree/master/pallets/pallet-cache   | The Pallet Cache provides functions to store data temporary. <br/> Unit tests pass.                                                                                                                                                                                                |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the
software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

#### Readme.md and/or Makefile needs updating:

- `make run-dev` does not work (on MacOS)
- `make build` missing

#### Lots of warnings during compilation

Not critical, but it would be nice if there are not that many warnings when building.

#### Error running Docker on MacOS 
###### - maybe slow connection not necessary related to MacOS

```
 % ./scripts/docker_run.sh
*** Start Gafi Node ***
[+] Running 1/0
 ⠿ Network gafi_default  Removed                                                                                                    0.1s
[+] Running 1/0
 ⠿ Network gafi_default  Created                                                                                                    0.0s
warning: /var/www/gafi-node/runtime/template/Cargo.toml: unused manifest key: dev
warning: /var/www/gafi-node/tests/Cargo.toml: unused manifest key: dev-dependencies.gafi-primitives.default-fetures
warning: /var/www/gafi-node/pallets/upfront-pool/Cargo.toml: unused manifest key: dev-dependencies.sponsored-pool.default-feature
warning: /var/www/gafi-node/runtime/devnet/Cargo.toml: unused manifest key: dev
warning: /var/www/gafi-node/runtime/gaki-testnet/Cargo.toml: unused manifest key: dependencies.pallet-cache.versopm
warning: /var/www/gafi-node/runtime/gaki-testnet/Cargo.toml: unused manifest key: dev
    Updating git repository `https://github.com/cryptoviet/ethereum`
    Updating git repository `https://github.com/cryptoviet/evm`
    Updating crates.io index
bash: line 1:     8 Killed                  cargo build --release            
```

##### Error running Docker on Linux
###### - maybe docker image needs additional components

```
 % ./scripts/docker_run.sh
 ...
 ...
 Some errors have detailed explanations: E0283, E0412, E0432, E0433.
For more information about an error, try `rustc --explain E0283`.
warning: `gafi-node` (bin "gafi-node") generated 1 warning
The following warnings were emitted during compilation:

warning: Failed to execute git command: No such file or directory (os error 2)

error: could not compile `gafi-node` due to 69 previous errors; 1 warning emitted

```

#### Wrap-up
Main delivery "Sponsored Pool" was tested and works as expected. There were minor issues with compilations and setting up environment. I would mark it as approved after discussion with the team and nessary fixes are implemented.