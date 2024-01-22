# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence | [Plutonication](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/LICENSE) | MIT |
| 0b. | Documentation | Docs for running all codes is in the [Readme](https://github.com/RostislavLitovkin/Plutonication/blob/main/README.md).  |
| 0c. | Testing and Testing guide | Guide for running tests is in the [Readme](https://github.com/RostislavLitovkin/Plutonication/blob/main/README.md). |  |
| 0d. | Docker | [Sample React dApp Dockerfile](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/example_dapp/Dockerfile) |  |
| 1. | PlutonicationDAppClient | [PlutonicationDAppClient.ts](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/src/PlutonicationDAppClient.ts) |  |
| 1a. | initializePlutonicationDAppClient | [initializePlutonicationDAppClient](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L18C23-L18C56) |  |
| 1b. | onReceivePubkey | [onReceivePubkey](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L20C3-L20C3) |  |
| 1c. | signPayload | [signPayload](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L64C13-L64C24) |  |
| 1d. | SendRawAsync | [SendRawAsync](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L77) |  |
| 2. | PlutonicationWalletClient | [PlutonicationWalletClient](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/src/PlutonicationWalletClient.ts) |  |
| 2a. | SendAddress | [SendAddress](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationWalletClient.ts#L54) |  |
| 2b. | sendPayloadSignature | [sendPayloadSignature](https://github.com/RostislavLitovkin/Plutonication/blob/be67381fcb03f2afae20a150b1bcca2577a47e54/src/PlutonicationWalletClient.ts#L57C7-L57C7) |  |
| 2c. | sendRawSignature | [sendRawSignature](https://github.com/RostislavLitovkin/Plutonication/blob/be67381fcb03f2afae20a150b1bcca2577a47e54/src/PlutonicationWalletClient.ts#L60C5-L60C21) |  |
| 3. | PlutonicationModal | [PlutonicationModal](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/src/components/PlutonicationModal.ts) |  |
| 4. | NPM package | [NPM package](https://www.npmjs.com/package/@plutonication/plutonication) |  |
| 5. | Sample React dApp | [Sample React dApp](https://github.com/RostislavLitovkin/Plutonication/tree/Grant-delivery/example_dapp) |  |

# General Notes

<details>
  <summary>Docker builds and runs sucessfully.</summary>

```sh
docker run -p 3000:3000 plutonication-react-dapp-example

> example_dapp@0.1.0 start
> react-scripts start

(node:36) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:36) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
Starting the development server...

Compiled successfully!

You can now view example_dapp in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.17.0.2:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
Compiling...
No issues found.
Compiled successfully!
webpack compiled successfully
No issues found.
^C
```
</details>
