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
| 1c.    | Smart contract builder        | https://github.com/Brushfam/patron-backend/tree/master/crates/builder/src                                      |                                                                                           |
| 2a.    | Web UI                        | https://patron.works/                                                                                          | can be used for authentication, searching contracts details, review user build sessions   |
| 2b.    | Detailed contract information | https://github.com/Brushfam/patron-frontend/blob/master/src/pages/CodeHashWindow.tsx                           | provided fields such as code hash, timestamp, session build logs, contract addresses etc. |
| 2c.    | User authentication           | https://github.com/Brushfam/patron-backend/blob/master/crates/patron/src/commands/auth.rs                      | Patron uses SubConnect integration                                                        |
| 3a.    | Developer CLI utility         | https://github.com/Brushfam/patron-backend/tree/master/crates/patron                                           | developer-oriented CLI utility                                                            |

Testing this delivery:
- Deliverable 0b.:
    - The documentation for usage is available in the [main project repository](https://github.com/Brushfam/patron-backend):
        - CLI documentation: https://github.com/Brushfam/patron-backend/blob/master/docs/cli.md
        - Self-hosting documentation: https://github.com/Brushfam/patron-backend/blob/master/docs/self-hosted.md
- Deliverable 0c.:
    - Ensure that you have a Rust toolchain available (if you don't, you can use the Nix development shell to acquire one, `nix develop`)
    - We provide unit tests for API server, which can be launched with the following command:
      ```sh
      cargo test
      ```
- Deliverable 0d.:
    - We provide Docker images for the contract builder process and API server. Contract builder process image
      is used to provide an environment for the contract build itself, and is a necessary component that has to be used with a container engine such as Docker.
      The API server is provided as a Docker image too, but can also be built and deployed without Docker.
        - API server Docker image can be downloaded from [main project repository](https://github.com/Brushfam/patron-backend) releases
          or built with Nix tooling:
            ```sh
            nix build .#docker.server
            ```
            - Contract builder process Docker image can be built with Nix tooling
              (it's necessary to provide a way to modify self-hosted domain):
            ```sh
            nix build .#docker.ink-builder
            ```
- Deliverable 0e.:
    - [Article](https://medium.com/brushfam/patron-is-your-one-stop-smart-contract-manager-for-polkadot-ecosystem-b1f89a48ba40)
- Deliverable 1a.:
    - To test this deliverable, you need to prepare a working instance of a PostgreSQL database and configure your local project
      with instructions available in the [self-hosting documentation](https://github.com/Brushfam/patron-backend/blob/master/docs/self-hosted.md).
    - Build the project with `cargo` or `nix`:
        ```sh
        cargo build --release
        ```
      or
        ```sh
        nix build .#
        ```
    - Run database migrations:
        ```sh
        ./target/release/migration
        ```
- Deliverable 1b.:
    - Ensure that you have the database prepared with instructions from the deliverable 1a.
    - Initialize the database with the following command:
        ```sh
        ./target/release/event_client initialize [name] [url] [schema]
        ```
      For example, to initialize an Astar node:
        ```sh
        ./target/release/event_client initialize astar wss://1rpc.io:443/astr astar
        ```
    - Start watching for new events from this node using the following command:
        ```sh
        ./target/release/event_client watch astar
        ```
    - See [self-hosting documentation](https://github.com/Brushfam/patron-backend/blob/master/docs/self-hosted.md) for more
      details on how to use the event client (also known as sync server).
- Deliverable 1c.:
    - Ensure that you have the database prepared with instructions from the deliverable 1a.
    - For testing this deliverable, you can either use hosted or self-hosted versions of smart contract builder.
    - For testing the hosted version, refer to deliverable 3a testing instructions.
    - For testing self-hosted version, you'll need a Linux server with Docker, `udisks2`, `fallocate` and `mkfs.ext4` available.
        - More information on why these components are required is available [here](https://github.com/Brushfam/patron-backend/blob/master/docs/self-hosted.md#smart-contract-builder)
    - Build the smart contract builder Docker image with Nix, while changing the preferred domain to a custom one in a
      [flake.nix file](https://github.com/Brushfam/patron-backend/blob/202c60325a51af0b7762e1b72e4d609adbbdd56e/flake.nix#L61):
      ```sh
      nix build .#docker.ink-builder
      ```
    - Load the resulting image with `docker` CLI:
      ```sh
      docker load < result
      ```
    - Configure the smart contract builder according to the [self-hosting documentation](https://github.com/Brushfam/patron-backend/blob/master/docs/self-hosted.md).
    - Start the smart contract builder with the following command:
      ```sh
      ./target/release/builder serve
      ```
- Deliverable 2a.:
    - You can use [our website](https://patron.works) to test the hosted version of the web UI. You can use data from Astar
      network to test the hosted version.
    - [Self-hosted version](https://github.com/Brushfam/patron-frontend) can be built with the following command:
      ```sh
      npm i
      REACT_APP_SERVER_URL=https://api.example.com npm run build
      ```
      Replace `https://api.example.com` with the URL of your API server.

      To test non-production builds with built-in HTTP server you can use the following command:
      ```sh
      npm i
      REACT_APP_SERVER_URL=https://api.example.com npm start
      ```
- Deliverable 2b.:
    - You can search contract addresses and verified code hashes using the main page search bar.
    - Contract address info will provide you with information on the contract's code hash, events,
      source code and build log (if available).
    - Verified code hashes will provide you with the source code and build log.
- Deliverable 2c.:
    - There are two separate authentication flows available - website and CLI flow.
    - For CLI flow refer to deliverable 3a.
    - For website flow, open either [hosted](https://patron.works) or self-hosted versions of a website.
    - Click on the "Log in" button in the top-right corner of a screen.
    - Choose a wallet that you would like to use for authentication purposes.
    - Sign a message with the provided wallet (there are no fees associated with any wallet interactions).
- Deliverable 3a.:
    - Ensure that you have a Rust toolchain available
      (`cargo-contract` installation is optional, as the CLI will attempt to download it automatically)
    - Your project needs to have a `Deploy.toml` file, which describes the tooling versions with which
      it has to be built. Consult the [CLI documentation](https://github.com/Brushfam/patron-backend/blob/master/docs/cli.md#deploy)
      for more information on that.
    - CLI provides developers with two commands - `auth` and `deploy`.
        - `auth`
            - `auth` command allows users to authenticate themselves to the API server.
            - To use `auth` in a self-hosted environment you need to pass additional `-s` and `-w` flags:
            ```sh
            patron auth -s https://api.example.com -w https://example.com
            ```
          Where `https://api.example.com` is the URL of your API server, and `https://example.com`
          is the URL of your web UI.
            - Omit `-s` and `-w` flags to use the hosted version of an API server and web UI.
            - After running the `auth` command, the CLI will automatically try to open the browser
              for authentication purposes. If your platform does not support that functionality,
              you can always open the URL manually, as it's in the same terminal.
            - Use the same authentication instructions as were provided in the deliverable 2c.
        - `deploy`
            - `deploy` command is your entrypoint for smart contract deployment purposes.
            - The interface is similar to that of a `cargo-contract`, and many flags that
              are available to upload and instantiate a contract are available here.
            - For testing, we can deploy to local `substrate-contracts-node` instance, which can be built using these commands:
              ```sh
              git clone https://github.com/paritytech/substrate-contracts-node
              cd substrate-contracts-node
              cargo run
              ```
            - To deploy your smart contract, write the following command, replacing placeholders with the correct values for your contract:
              ```sh
              patron deploy [constructor] --suri [suri]
              ```
              `[constructor]` placeholder is the constructor method name, that will be called during instantiation phase.
              `[suri]` is your secret URI string, which is passed verbatim to `cargo-contract`. For testing purposes we can use `//Alice`.
            - The build process will start as soon as there are available smart contract builder instances. In this case,
              you should see build logs appearing on your screen, allowing you to trace the build itself.