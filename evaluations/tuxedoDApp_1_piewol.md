# Evaluation

- **Status:** In Progress
- **Application Document:** [tuxedoDapp](https://github.com/w3f/Grants-Program/blob/master/applications/TuxedoDapp.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License file](https://github.com/mlabs-haskell/TuxedoDapp?tab=Apache-2.0-1-ov-file#readme)  | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> |[README](https://github.com/mlabs-haskell/TuxedoDapp/blob/master/README.md), [Demo wallet integration](https://www.loom.com/share/e1270ecea79a4689aff5732e8acfae14), [CLI-wallet - Demo part 1/3](https://youtu.be/Mom3BV_HozY), [CLI-wallet - Demo  part 2/3](https://youtu.be/GfyiBW1XFW0), [CLI-wallet - Demo part 3/3](https://youtu.be/1T2oE0bfaCQ), [APIs spreadsheet](https://github.com/mlabs-haskell/TuxedoDapp/wiki/APIs-spreadsheet), [Build and run the project](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Build-and-run-the-project), [Frontend development libs](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Frontend-development-libs), [Game design](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Game-design),  [Wireframes](https://github.com/mlabs-haskell/TuxedoDapp/wiki/Wireframes), [GitHub project management tool](https://github.com/orgs/mlabs-haskell/projects/57/views/1)| See notes |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [CLI-Wallet test](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wardrobe/kitties/src/tests.rs) , [Tuxedo Template Wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/wallet/README.md) | see additional notes |
| **0d.** | Article | <ul><li>[x] </li></ul> | [Tuxedo DApp specification](https://docs.google.com/document/d/1dHsb_k3Xo5f4yFx802sMe22z6NYq3FeZc9l4bB0exMk/edit), [Talisman integration design](https://docs.google.com/presentation/d/1vsfJ5TYPXcvF4vmY7fHfM25lcNmZdjh6YfUyyoOzVAw/edit) |  |
| **0e.** | Docker | <ul><li>[ ] </li></ul> | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile)  | |
| **0f.** | Frontend, CLI wallet and core | <ul><li>[ ] </li></ul> | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp), [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo)  |  |


## General Notes
Great job with the Talisman integration. I think this is a must have for a Tuxedo dApp to be adopted by users of the ecosystem.

Why was it necessary to have the webservice and the dApp as two distinct entities? Couldn't the webservice have been included in the dApp so that I need less entities for a fully functioning product? Looking forward to your thoughts on this. I'm asking out of interest and this is not a request for you to change it. Thanks :)

## Testing
There should be a dedicated testing guide to provide a walkthrough to test all of your work. This would include launching tuxedo, starting up the webservice and the dApp aswell as an example transaction with the CLI-wallet. A testing guide is mandatory for all technical deliverables. See our [FAQ](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide).

In your dApp readme you are listing a bunch of npm commands but not ``npm install`` which should be the first command to even allow the others to run. 

When running ``npm install`` I get the following error. Which node version would I need to use so that this works?
```
npm install
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: @talisman-connect/ui@1.1.1
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!   peer react@">=18" from @chakra-ui/accordion@2.3.1
npm ERR!   node_modules/@chakra-ui/accordion
npm ERR!     @chakra-ui/accordion@"2.3.1" from @chakra-ui/react@2.8.2
npm ERR!     node_modules/@chakra-ui/react
npm ERR!       @chakra-ui/react@"^2.8.2" from the root project
npm ERR!   99 more (@chakra-ui/alert, @chakra-ui/avatar, ...)
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react@"17.0.2" from @talisman-connect/ui@1.1.1
npm ERR! node_modules/@talisman-connect/ui
npm ERR!   @talisman-connect/ui@"^1.1.1" from the root project
npm ERR! 
npm ERR! Conflicting peer dependency: react@17.0.2
npm ERR! node_modules/react
npm ERR!   peer react@"17.0.2" from @talisman-connect/ui@1.1.1
npm ERR!   node_modules/@talisman-connect/ui
npm ERR!     @talisman-connect/ui@"^1.1.1" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
```

Also the tests of the webservice are partly failing on the ``main`` branch
```
test result: FAILED. 8 passed; 22 failed; 0 ignored; 0 measured; 0 filtered out; finished in 5.32s
```

## Documentation 
The API documentation is currently in an excel spreadsheet which makes for a very cluttered look. Not that this is your fault but excel doesn't seem to be a great tool for API documentation and management. I recently saw grantees deliver api related documentation with ``SwaggerHub``. I recommend you check this out. Please let me know if this tool doesn't suit your project. 

## Article
It would have been amazing if there were a short and high level overview of your work to be published on e.g. medium for the general community to read. This deliverable is accepted though as it wasn't specified in the agreement. The agreed upon items for this deliverable have been delivered.

The part about the CLI wallet extension isn't explicitly linked but I saw it in the readme of the wallet. 

