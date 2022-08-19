# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sol2ink.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** all by cruikshankss

**Deliverables** (ALL ACCEPTED)

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a | License | https://github.com/Supercolony-net/sol2ink/blob/main/LICENSE | MIT License |
| 0b | Documentation | https://www.sol2ink.com | Code is documented with inline docs |
| 1 | Sol2Ink CLI	 | https://github.com/Supercolony-net/sol2ink | Instructions with how to run Sol2Ink are in the repository README file |
| 2 | Integrate OpenBrush	 | https://github.com/Supercolony-net/sol2ink | Sol2Ink is using OpenBrush macros when creating the ink! smart contract |
| 3 | Website with guides | https://www.sol2ink.com |  |

<br>
<br>
<br>
<br>
<br>

# initial feedback

thank you for your milestone 1 (m1) delivery including documentation and a testing guide. 

now i return you my m1 evaluation documentation and a testing guide. :) 

all of these sections are a work in process and please refer to sol2!nk for the official documentation

<br>
<br>
<br>
<br>
<br>

# prerequisites / beginner tutorial

first, `git clone` the `sol_to_ink` repo on github . for the link, please see their docs and read their docs from the beginning because they're very excellent and will orient you to build this properly. even just read the very first sentence of the very first intro on their website home page

then, copy the raw text of [`ERC20.sol` Solidity smart contract](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

then preparing my mind for the commands:

what I'm planning to do is:

`mv` or `ERC20.sol` to somewhere
`cd` to where `./sol_to_ink` `ERC20.sol` resides

the build process will make a new folder called `ERC20` which has:
1. Cargo.toml: dependencies
2. lib.rs: will contain the parsed ink! smart contract

but first you need the proper `rust` roolchain and then `cargo-contract`. please visit the [m1 delivery conversation tab on github](https://github.com/w3f/Grant-Milestone-Delivery/pull/533) for more documentation on the `rust` toolchain. it's fast-moving, so you may need to find updated info elsewhere. then, please search for the official `cargo-contract` documentation if you don't have this dev tool yet

i already had `rust` and `cargo-contract` installed, but i needed to update the `rust` toolchain. the transpiler runs on nightly version (currently) (check sol2ink docs for updated info). 


<br>
<br>
<br>
<br>
<br>



# create new solidity contract 

then i did:
- open Mac `terminal`
- `cd` to `sol_2_ink` `dir`  
- I opened VSCode (my IDE) by doing `code .`
- Back to `terminal`
- `mkdir cruikshankss_eval_solidity_contract` create a new folder
- `cd cruikshankss_eval_solidity_contract` go into that folder
- `touch contract.sol` create a new empty file
- Then go to GitHub
- copied the raw text content from the solidity contract on github (linked above) 
- Back to VSCode
- paste into empty `contract.sol` file



<br>
<br>
<br>
<br>
<br>


# prepare events 

the blockchain is a giant ledger. a record. one of the best-use cases for a record is a financial transaction. this facilitates trading and helps humans reach the ideal of secure economies to reliably store the value of how much work you've done in your life.

so a transaction (Tx) is an event. someone starts it. it's processed and it changes through different states, the simplest one being a completed/finalized transaction.

the language used on the ethereum blockchain is the Solidity language. the language used on the polkadot blockchain is ink! (also stylized "!nk"--see the DOTs in ink!)

this sol2!nk transpiler is a translator + compiler blend

Ethereum/Solidity has a standard for events called the IERC-20 interface (linked above)

we use this interface to prepare the Solidity contract in order to transpile it to !nk

right now, the sol2!nk transpiler can't do this alone and needs the dev's help with Tx, events, & time. ;-)


<br>
<br>
<br>
<br>
<br>


# change _msgSender() to msg.sender

this preparation step is a lesson in how to manually transpile Solidity to !nk to work in tune with the sol2!nk transpiler

<br>
<br>
<br>
<br>
<br>


# run build command(s)

- `cargo-contract build`
- use `cargo +nightly run` or switch default toolchain to nightly 
- `cargo run contract.sol` once you have `contract.sol` in the working `dir`
- "There are some test contracts and interfaces in examples directory, running `cargo +nightly test` will transpile these, or for example `cargo +nightly run examples/contracts/ERC20/ERC20.sol`, but nothing will change since the transpiled example contracts are already in the repo."




<br>
<br>
<br>
<br>
<br>




# additional notes

dear sol2!nk team,

congratulations on the completion of your successful w3f grant!

on behalf of w3f grants, thank you for your engineering, inventing, & computer science work!

wishing you continued success with building & maintaining sol2!nk.

sincerely,
ashley 

to anyone else reading this: please see the [m1 delivery conversation tab on github](https://github.com/w3f/Grant-Milestone-Delivery/pull/533) for more notes. thank you!
