# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/galaxy.md
* **Milestone Number:** 2

**Context** (optional)

**Deliverables**

| Number | Deliverable | Link | Notes |
|-------|-------------|------|-------|
| **0a.** | License | [LICENSE](https://github.com/7flash/galaxy-polkadot/blob/milestone2/LICENSE) | MIT |
| **0b.** | Documentation | [README](https://github.com/7flash/galaxy-polkadot/blob/milestone2/README.md) | Includes inline documentation and tutorial |
| **0c.** | Testing and Testing Guide | [Galaxy.test.js](https://github.com/7flash/galaxy-polkadot/blob/milestone2/tests/Galaxy.test.js) | Comprehensive unit tests |
| **0d.** | Docker | [Dockerfile](https://github.com/7flash/galaxy-polkadot/blob/milestone2/Dockerfile) | Setup development environment |
| 0e. | Article | [Article Link](https://telegra.ph/Galaxy-Browser-v111-09-28) | Telegraph blogpost |
| 0e. | Video | [Video Link](https://www.youtube.com/watch?v=U1TshR00K8Q) | Demo User Video |
| 1. | Galaxy Browser | [Main Repository](https://github.com/7flash/galaxy-polkadot/tree/milestone2) | Frontend App and submodules |
| 2. | Smart contract | [Smart Contract Submodule](https://github.com/7flash/galaxy-polkadot/tree/milestone2/contract) | `5E1zfVZmokEX29W9xVzMYJAzvwnXWE7AVcP3d1rXzWhC4sxi` deployed at the Rococo testnet |

**Additional Information**
### Submodules

| Number | Link | Notes |
|-------|------|-------|
| 3. | [Galaxy Desktop](https://github.com/7flash/galaxy-desktop-app/tree/main) | |
|     | [main.ts](https://github.com/7flash/galaxy-desktop-app/blob/main/main.ts) | Deno Backend |
|     | [build.ts](https://github.com/7flash/galaxy-desktop-app/blob/main/build.ts) | Bundles executable to .dmg |
| 4. | [Excalidraw](https://github.com/7flash/galaxydraw/tree/master) | fork excalidraw |
| 5. | [Dist](https://github.com/7flash/galaxy-dist/tree/a02cde286d6f0b50935e4d8ba75d4f0b958dd8e2) | Frontend build (retrieved by main.ts) |
| 6. | [WebUI](https://github.com/7flash/webui/tree/main) | fork webui |
| 7. | [Deno WebUI](https://github.com/7flash/deno-webui/tree/main) | fork deno-webui |
| 8. | [Import](https://github.com/7flash/import/tree/main) | fork dynamicImport |
| 9. | [Deno Modern Installer](https://github.com/7flash/deno_modern_installer/tree/main) | fork installer (used by build.ts) |

### Galaxy Browser Evaluation on macOS

1. **Download**: 
   - Go to [Galaxy Polkadot Releases](https://github.com/7flash/galaxy-polkadot/releases) and download the latest build for macOS.
  
2. **Polkadot Wallet**: 
   - Ensure your default browser has the **Polkadot wallet** installed in its default profile.

3. **Run Unsigned App**: 
   - Right-click the app icon and select 'Open'.
   - When prompted, confirm you want to run the unsigned app.

4. **Functionality Test**: 
   - Follow visual instructions in [demo video](https://www.youtube.com/watch?v=U1TshR00K8Q) to test:
     - **Open** 
     - **Save**
     - **Publish** functions.
