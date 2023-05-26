# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/patron.md
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable                   | Link                                                                                                           | Notes                                                                                     |
|--------|-------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 0a.    | License                       | https://github.com/Brushfam/patron-backend/blob/master/LICENSE                                                 |                                                                                           |
| 0b.    | Documentation                 | https://github.com/Brushfam/patron-backend/tree/master/docs                                                    |                                                                                           |
| 0c.    | Testing guidelines            |                                                                                                                | The server is covered by unit tests                                                       |                                                                                               
| 0d.    | Docker                        | https://github.com/Brushfam/patron-backend/blob/master/crates/builder/src/process/container.rs                 | Containers are instantiated for each contract verification individually                   |
| 0e.    | Article                       | https://medium.com/brushfam/patron-is-your-one-stop-smart-contract-manager-for-polkadot-ecosystem-b1f89a48ba40 |                                                                                           |
| 1a.    | Backend storage               | https://github.com/Brushfam/patron-backend/tree/master/crates/db                                               | PostgreSQL, S3-compatible storage                                                         |
| 1b.    | Sync server                   | https://github.com/Brushfam/patron-backend/tree/master/crates/server                                           |                                                                                           |
| 1c.    | Smart contract builder        | https://github.com/Brushfam/patron-backend/blob/master/crates/cli/src/commands/deploy.rs                       |                                                                                           |
| 2a.    | Web UI                        | https://patron.works/                                                                                          | can be used for authentication, searching contracts details, review user build sessions   |
| 2b.    | Detailed contract information | https://github.com/Brushfam/patron-frontend/blob/master/src/pages/CodeHashWindow.tsx                           | provided fields such as code hash, timestamp, session build logs, contract addresses etc. |
| 2c.    | User authentication           | https://github.com/Brushfam/patron-backend/blob/master/crates/cli/src/commands/auth.rs                         | Patron uses SubConnect integration                                                        |
| 3a.    | Developer CLI utility         | https://github.com/Brushfam/patron-backend/tree/master/crates/cli                                              | developer-oriented CLI utility                                                            |

Testing this delivery:
- Deliverable 0b.:
    - Documentation describes Patron CLI usage and provide information how to self-host server.
- Deliverable 0d.:
    - The contract build process is done on our platform side using isolated containers and contract verification workflow, while the
      deployment itself is done on user's side, without delegating any private keys to us. After build is finished, contract will be deployed automatically.
- Deliverable 0e.:
    - The article describes problem Patron solves and ways you can use Patron.
- Deliverable 1a, 1b, 1c.:
    - For test how Patron contract build works, you need upload your code and run deploy command:
        - run `patron auth` command and login into system. After that CLI automatically gets authentication token;
        - after first step, you need to config your `Config.toml`
        - second and the last command is `patron deploy constructor_name --suri //Alice`. Second argument is secret URI. More
          about arguments you can find [here](https://github.com/Brushfam/patron-backend/blob/master/docs/cli.md). After this command
          Patron archive send user code and send it to server for build. After build process, Patron automatically deploy contract
          with `cargo-contract` and public key.
- Deliverable 2a.:
    - We implemented app where you can see your deployed contracts and search to find other contract details.
      There is several pages: login, profile, main page, smart contract and code hash pages.
- Deliverable 2b.:
    - Each build sessions has own code hash and timestamp. On smart contract and code hash pages you can also see "verified" icon and check tabs with logs and source code.
- Deliverable 2c.:
    - For login via Patron UI you just need go to login page, choose account for your SubWallet extension and sign the message to login. Registration
      is automatic. If Patron see that record with user doesn't exist, it creates account and execute login process.
    - For login via Patron CLI you need to run `patron auth`. After you sign the message, you can use Patron CLI.
- Deliverable 3a.:
    - Patron CLI is one of the main Patron features. Using CLI, developers can verify and deploy their contracts in one go, just with 2 commands.
      Patron CLI flow was described in `Deliverable 1a, 1b, 1c.` step. 