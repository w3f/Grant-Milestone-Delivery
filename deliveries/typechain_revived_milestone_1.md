# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typechain_revived.md
- **Milestone Number:** 1

**Context**
This milestone focuses on crucial updates to the Typechain-Polkadot project to enhance its functionality and compatibility with the latest ink! 5, remove unnecessary complexities, and improve the overall development experience. These updates are essential for maintaining the reliability and usability of the Typechain-Polkadot library and its associated tools.
Current state is available here https://github.com/C-Forge/typechain-polkadot/tree/91d3dbfd4b3147eac105576e33d2667bffd13f2f

**Deliverables**

| Number  | Deliverable               | Link                                                                                                                                                                                                                             | Notes                                                                                                                                                                                       |
| ------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | [MIT License](https://github.com/C-Forge/typechain-polkadot/blob/main/LICENSE)                                                                                                                                                   | MIT license is present.                                                                                                                                                                     |
| **0b.** | Documentation             | [Documentation](https://github.com/C-Forge/typechain-polkadot/blob/main/docs/about.md)                                                                                                                                           | Documentation updated to cover the changes and newly added features.                                                                                                                        |
| **0c.** | Testing and Testing Guide | [Tests and Guide](https://github.com/C-Forge/typechain-polkadot/tree/main/tests)                                                                                                                                                 | Existing tests updated and additional tests provided to ensure proper behavior.                                                                                                             |
| **1.**  | Update to support ink! 5  | [ink! 5 Support Commit](https://github.com/C-Forge/typechain-polkadot/commit/fa0691843585ab6fc1fe8ed10240a2d89a108357) [cleanup] (https://github.com/C-Forge/typechain-polkadot/commit/d746c4e0fc801bfaf0725cefebc97ea042f70786) | Updated Typechain-Polkadot library to work with ink! 5 smart contracts. Ensured contracts compiled with previous versions of ink work.                                                      |
| **2.**  | Remove ReturnNumber       | [Remove ReturnNumber Commit](https://github.com/C-Forge/typechain-polkadot/commit/fa0691843585ab6fc1fe8ed10240a2d89a108357)                                                                                                      | Removed ReturnNumber class and replaced it with BN. Code cleanup performed.                                                                                                                 |
| **3.**  | Testing and Testing Guide | [Additional Tests and Guide](https://github.com/C-Forge/typechain-polkadot/tree/main/tests)                                                                                                                                      | Existing tests updated and additional tests provided to ensure proper behavior.                                                                                                             |
| **4.**  | Update Typechain-compiler | [Update Typechain-compiler Commit](https://github.com/C-Forge/typechain-polkadot/commit/d746c4e0fc801bfaf0725cefebc97ea042f70786)                                                                                                | Typechain-compiler updated to work with both non-workspace and workspace projects out of the box. Improved logging and artifact handling. Added regex feature. Fixed default config values. |
| **5.**  | Generate Enums for events | [Generate Enums Commit](https://github.com/C-Forge/typechain-polkadot/commit/d746c4e0fc801bfaf0725cefebc97ea042f70786)                                                                                                           | Generated enums for events to make working with event listening in TypeScript more intuitive.                                                                                               |

**Additional Information**
Note that the effort made to ensure the library is compatible both with ink! 5 and previous versions, as well as the removal of unnecessary complexities turned out to be more time-consuming than initially anticipated.
The documentation, precise changelog with update guide will be provided upon milestone 2 delivery. Here, we've focused on making crucial changes to the documentation so it provides correct information.
We appreciate your understanding and patience.

**In-repo testing**
Run updated & new tests using the following commands:
(in a separate terminal/shell)

```bash
pnpm localNode
```

(in main terminal/shell)

```bash
pnpm i
pnpm test
```

Command pnpm start-typechain will process the contracts in `artifacts` folder (a `vester` contract is provided as an example (contains some logic, events, simple & complex types etc) - [source](https://github.com/Pendzl/pendzl/blob/main/examples/vester/lib.rs) ).

**Outside of the repo testing**
Version published on NPM corresponding to this milestone is `0.2.0` for all packages:

- [Typechain Polkadot](https://www.npmjs.com/package/@c-forge/typechain-polkadot)

```bash
npm i --save @c-forge/typechain-polkadot@0.2.0
```

- [Typechain Compiler](https://www.npmjs.com/package/@c-forge/typechain-compiler)

```bash
npm i --save @c-forge/typechain-compiler@0.2.0
```

- [Typechain Types](https://www.npmjs.com/package/@c-forge/typechain-types)

```bash
npm i --save @c-forge/typechain-types@0.2.0
```

- [Typechain Parser](https://www.npmjs.com/package/@c-forge/typechain-polkadot-parser)

```bash
npm i --save @c-forge/typechain-polkadot-parser@0.2.0
```

**Outside of the repo testing - Example Usage**
To test the library outside of the repo, install/run packages as CLI - follow README.md docs for detailed info. For example, to use compiler:

```bash
npx @c-forge/typechain-compiler --typechainGeneratedPath typechain-gen --regex "*mock"
```

The above command will generate types for all contracts with `mock` in their name and output types to `typechain-gen` folder. Read more in the [README.md](https://github.com/C-Forge/typechain-polkadot/blob/main/packages/typechain-compiler/README.md).
Simarly, [Typechain Polkadot CLI](https://github.com/C-Forge/typechain-polkadot/blob/main/packages/typechain-polkadot/README.md)
