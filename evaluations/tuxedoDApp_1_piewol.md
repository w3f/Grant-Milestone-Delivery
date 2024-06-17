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
| **0e.** | Docker | <ul><li>[ ] </li></ul> | [webservice-wallet](https://github.com/mlabs-haskell/Tuxedo/blob/webservice-redeemer-gen-debug-with-lks/webservice-wallet/Dockerfile)  | not working. see notes |
| **0f.** | Frontend, CLI wallet and core | <ul><li>[ ] </li></ul> | [main DApp repo](https://github.com/mlabs-haskell/TuxedoDapp), [CLI Wallet and core repo](https://github.com/mlabs-haskell/Tuxedo)  | dApp doesn't start up following testing guide. |


## General Notes
Thanks for providing the testing guide.


## Testing
Sadly following your testing guide I am not able to run the dApp. 
You specify node and yarn version which I both use yet ``yarn start`` doesn't make the dApp available.

Have you made sure that the testing guide for the dApp is actually working? 

webservice and chain seem to work fine following the testing guide. 

## Docker 
```
webservice-wallet % docker build .         
                                  0.0s
 => ERROR [builder 4/4] RUN cargo build --locked --release -p tuxedo-template-wallet                                      0.4s
------                                                                                                                         
 > [builder 4/4] RUN cargo build --locked --release -p tuxedo-template-wallet:
0.434 error: failed to parse manifest at `/wallet/Cargo.toml`
0.434 
0.434 Caused by:
0.434   error inheriting `anyhow` from workspace root manifest's `workspace.dependencies.anyhow`
0.434 
0.434 Caused by:
0.434   failed to find a workspace root
------
Dockerfile:11
--------------------
   9 |     #TODO The Workdir and Copy command is different here than in the node...
  10 |     COPY . .
  11 | >>> RUN cargo build --locked --release -p tuxedo-template-wallet
  12 |     
  13 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c cargo build --locked --release -p tuxedo-template-wallet" did not complete successfully: exit code: 101
```

I am using the main branch as requested in the testing guide.

## Documentation 
The API documentation is currently in an excel spreadsheet which makes for a very cluttered look. Not that this is your fault but excel doesn't seem to be a great tool for API documentation and management.

## Article
It would have been amazing if there were a short and high level overview of your work to be published on e.g. medium for the general community to read. This deliverable is accepted though as it wasn't specified in the agreement. The agreed upon items for this deliverable have been delivered.

The part about the CLI wallet extension isn't explicitly linked but I saw it in the readme of the wallet. 

