# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sol2ink-follow-up.md
* **Milestone Number:** 2

**Context** (optional)

Second Milestone for Sol2Ink improves the output of Sol2Ink. Sol2Ink can now transpile basically any valid Solidity contract. Moreover, Sol2Ink can now parse a whole project. Currently Sol2Ink should be able to transpile any complex solidity project. However, the developer needs to check the contract and fix some issues which may occur after building (for example hex literals, address literals, string cloning). We aim to produce fully compilable ink! contracts in future updates. 

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a | License | https://github.com/727-Ventures/sol2ink/blob/main/LICENSE | MIT License |
| 0b | Documentation | https://727-ventures.github.io/sol2ink/ | Code is documented with inline docs. Detailed documentation is provided as well. |
| 0c | Testing and Testing guide | https://github.com/727-Ventures/sol2ink/tree/main/tests | Added unit tests which test if new changes to the application change the output. Testing guide is provided with the delivery. |
| 0d | Docker | https://github.com/727-Ventures/sol2ink/blob/main/.github/workflows/ci.yml | We added a docker file which runs the tests on PR to main and develop branches. |
| 1 | Website with guides	 | https://727-ventures.github.io/sol2ink/ | Website was updated to describe how Sol2Ink works after updates. |
| 2 | Split contract into traits	 | https://github.com/727-Ventures/sol2ink/blob/main/src/main.rs#L129 | Parsing a contract or a folder will now produce a comprehensive file structure and contract will be divided into trait definition, implementation of the trait and a contract definition |
| 3 | Sol2Ink transpiler update |  | Sol2Ink is now able to parse any valid Solidity code |
| 3a. | Functions with value | https://github.com/727-Ventures/sol2ink/commit/bc014edcbb738a66c0bbbe2e063d5c93d9df75b4 | Fixed |
| 3b. | Chained selectors | [Example](https://github.com/727-Ventures/sol2ink/blob/main/uniwap_v2/solidity/core/UniswapV2Pair.sol#L79) (`a.b.c`) which was parsed incorrectly in the previous version, [new output](https://github.com/727-Ventures/sol2ink/blob/main/uniwap_v2/generated/src/impls/uniswap_v_2_pair.rs#L363), [The fix](https://github.com/727-Ventures/sol2ink/blob/main/src/assembler.rs#L1427) | Fixed |
| 3c. | Updating structs inside of a mapping | [Fixed here](https://github.com/727-Ventures/sol2ink/commit/7bb959e4eabd5f9a922a26424e864dbf06036cff) | Fixed |
| 3d. | Modifiers | Calling functions inside of a modifier will now be parsed without the modifier, see [identifying such modifier](https://github.com/727-Ventures/sol2ink/blob/main/src/parser.rs#L723) and [assembling it](https://github.com/727-Ventures/sol2ink/blob/main/src/assembler.rs#L805) | Fixed |
| 3e. | Fix bugs | https://github.com/727-Ventures/sol2ink/tree/main/uniwap_v2 | Here is the code of Uniswap V2 parsed by Sol2Ink |
| 4. | Handling dependencies and generalization | Implmented [here](https://github.com/727-Ventures/sol2ink/pull/19) | Sol2Ink can parse base of a contract |
| 5. | Multi-file project parsing | Implemented [here](https://github.com/727-Ventures/sol2ink/blob/6533e9eaad2307f50c82f3e1fc0f9c1f9e619819/src/main.rs#L134) | Sol2Ink can parse whole directories and creates a project-like structure based on the files parsed. |

**Additional Information**

Sol2Ink is able to parse valid Solidity code base. Some features are harder to implement and we identified them as out of scope of this grant. For example, a parsed contract may fail to compile, because it contains two functions with the same name because Solidity allows overloading. Another example is with generalization, where Sol2Ink is able to identify a contract's base, but the user will have to do some cosmetic changes to implement the bases for the traits of the contract. We plan on implementing these and more features.

**Testing Guide**

- Deliverable 0b and 1
   - We created a detailed documentation which is also available at this [website](https://727-ventures.github.io/sol2ink/), as well as covered basic functionality of Sol2Ink with inline documentation
- Deliverable 0c and 0d
   - We created a [unit test](https://github.com/727-Ventures/sol2ink/tree/main/tests), which runs Sol2Ink on the example Solidity contracts, and checks if there are any changes. If yes, the test fails and the developer either made some mistake, or changed the behavior of Sol2Ink, therefore they need to update the content of `tests/generated` with newly parsed examples.
   - This test is also run by the [CI](https://github.com/727-Ventures/sol2ink/blob/main/.github/workflows/ci.yml) on PR to main and develop branch.
   - You can run these tests with `cargo test`
- Deliverable 2
  - Parsing any Solidity contract with Sol2Ink will generate a comprehensive file structure. You can see what the result structure looks like on [this page](https://727-ventures.github.io/sol2ink/capabilities), and you can test it by running Sol2Ink on some Solidity contract.
- Deliverables 3 - 3e.
  - All of the mentioned fixes were implemented in Sol2Ink. The crucial point is Deliverable 3e., which says Sol2Ink will be able to parse Uniswap, which implements the code which was previously parsed incorrectly. We parsed Uniswap V2 with Sol2Ink, you can check the result [here](https://github.com/727-Ventures/sol2ink/tree/main/uniwap_v2). You can test it yourself, by either running Sol2Ink on the provided folder with all Uniswap V2 files, or download them yourself from the official Uniswap github - [Uniswap v2-core](https://github.com/Uniswap/v2-core) and [Uniswap v2-periphery](https://github.com/Uniswap/v2-periphery).
- Deliverable 4
  - Sol2Ink will now parse Solidity library and produce a Rust file, which can be then imported in the parsed contracts. Our examples contain the [SafeMath library](https://github.com/727-Ventures/sol2ink/blob/main/examples/SafeMath.sol) which is parsed into this [library file](https://github.com/727-Ventures/sol2ink/blob/main/tests/generated/src/libs/safe_math.rs).
- Deliverable 5
  - Sol2Ink will implement the bases of a contract for the resulting contract. [This example](https://github.com/727-Ventures/sol2ink/blob/main/examples/ERC20.sol) contract inherits some bases, and you can see them implemented for such contract in [this parsed file](https://github.com/727-Ventures/sol2ink/blob/main/tests/generated/contracts/erc_20/lib.rs). You can test it yourself by parsing a contract which inherits other contracts.
- Deliverable 6
  - Sol2Ink now has an option to parse either single file or whole directory. In this case, it will traverse the file tree of the directory and parse all Solidity files within the tree, adding all of the transpiled files to the generated file structure. You can test this by creating a folder containing multiple folders with Solidity contracts, and running Sol2Ink with the folder as an argument, or you can try to parse our [examples folder](https://github.com/727-Ventures/sol2ink/tree/main/examples).
- Notes
  - Prior to testing, make sure that you have the nightly toolchain of rust installed. You can install it by `rustup toolchain add nightly`.

