# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot.md
* **Milestone Number:** 1

**Context** (optional)
First Milestone for Typechain-Polkadot includes parsing types, generating output, examples, and testing.
To parse types, we have investigated how the Polkadot-js library uses types. So we have come to make a recursive algorithm that generates all types before using them. When the parser gets a request to generate a type, it first checks the type' type and then decides what to do next. Ink! Smart contracts can produce Composite, Variant, Sequence, Array, Tuple, Primitive, and we have a different approach for every type.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a | License | https://github.com/Supercolony-net/typechain-polkadot/blob/master/LICENSE | MIT License |
| 0b | Documentation | https://github.com/Supercolony-net/typechain-polkadot/tree/master/docs | We will add more documentation and examples in the second milestone with covering upcoming features and explaination of typechain logic. |
| 1 | TS types | https://github.com/Supercolony-net/typechain-polkadot/blob/master/src/index.ts | While testing everything, we figured out that types for arguments and types for return values are not the same; for example, if we have u128 as an argument, we can pass number, string, BN, bigint, but polkadot.js if it's return type can return only number or string, so we are processing types depending on its usage. |
| 2 | Runtime code | https://github.com/Supercolony-net/typechain-polkadot/tree/master/src/templates | We use the Handlebars library to quickly generate output files with template format (src/templates). |
| 3 | Testing | https://github.com/Supercolony-net/typechain-polkadot/tree/master/tests | Covered psp22, psp34 and enums usage.
| 4 | NPM Packaging | https://github.com/Supercolony-net/typechain-polkadot/packages/1500761 | In the 2nd Milestone we will have two packages for typechain: typechain and typchain-parser. |


**Additional Information**

#### General usage
- Login to github npm registry with ```npm login --registry https://npm.pkg.github.com```
- Create a new project with `npm init`
- Create a new directory for your contracts' abi's (for example /artifacts)
- Add .npmrc file to your project directory that will contain following:
```npmrc
@supercolony-net:registry=https://npm.pkg.github.com/

engine-strict=true
```
- Add to your package.json file the following and install it with `npm i ...`:
```json
"dependencies": {
  "@supercolony-net/typechain-polkadot": "0.1.1",
  "@types/node": "^17.0.34",
  "ts-node": "^10.7.0",
  "typescript": "^4.6.4",
  "@polkadot/api": "^8.6.2",
  "@polkadot/api-contract": "^8.6.2",
  "@polkadot/keyring": "^9.3.1",
  "@types/bn.js": "^5.1.0"
}
```
- Run typechain with
```bash
npx typechain-polkadot --in artifacts --out out
```
