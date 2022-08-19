thank you for your milestone 1 (m1) delivery including documentation and a testing guide. 

now i return you my m1 evaluation documentation and a testing guide. :) 

`git clone` sol_to_ink repo 
`git clone` ERC20.sol repo

`mv` `ERC20.sol` to somewhere
`cd` to where `./sol_to_ink` `ERC20.sol` resides

the build process will make a new folder called `ERC20` which has:
1. Cargo.toml: dependencies
2. lib.rs: will contain the parsed ink! smart contract

but first you need the proper `rust` roolchain and then `cargo-contract`. please visit the [m1 delivery conversation tab on github](https://github.com/w3f/Grant-Milestone-Delivery/pull/533) for more documentation on the `rust` toolchain. it's fast-moving, so you may need to find updated info elsewhere. then, please search for the official `cargo-contract` documentation if you don't have this dev tool yet

i already had `rust` and `cargo-contract` installed, but i needed to update the `rust` toolchain. the transpiler runs on nightly version (currently) (check sol2ink docs for updated info). 

important notes from my [convo with the sol2ink team](https://github.com/w3f/Grant-Milestone-Delivery/pull/533):

`cargo +nightly run` or switch default toolchain to nightly 
`cargo run contract.sol` once you have `contract.sol` in the working `dir`

