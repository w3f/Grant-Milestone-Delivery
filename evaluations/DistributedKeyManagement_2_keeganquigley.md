# Evaluation

- **Status:** Accepted.
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DistributedKeyManagement.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. |  License | <ul><li>[x] </li></ul> | | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> |https://www.kryptik.app/blog| Looks good. | 
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> | https://www.kryptik.app/developer/recovery | 18 unit tests all pass. | 
| 0d. | Docker | <ul><li>[x] </li></ul> | - |  | 
| 0e. | Article | <ul><li>[x] </li></ul> |https://www.kryptik.app/blog/wallets| Looks good. | 
| 1.  | Vault Module | <ul><li>[x] </li></ul> | https://github.com/KryptikApp/swordExample/blob/main/src/handlers/wallet/vaultHandler.ts | Looks good. |
| 2.  | Encryption Module | <ul><li>[x] </li></ul> | https://github.com/KryptikApp/swordExample/blob/main/components/wallet/LockWalletCard.tsx#L30 | Looks good. |
| 3.  | Share Module | <ul><li>[x] </li></ul> | https://github.com/KryptikApp/swordExample/blob/7626b1c049480ea6fdf74acb58e3b58ef4e761b7/src/helpers/wallet/index.ts#L52 | Looks good. |
| 4.  | Sync Module | <ul><li>[x] </li></ul> | https://github.com/KryptikApp/swordExample/blob/main/src/handlers/sync/index.ts | Looks good. |
| 5.  | Web Deployment | <ul><li>[x] </li></ul> | https://sword.kryptik.app/ | App works well. |

# General Notes

Everything works well, both on deployed webapp as well as a local build. 18 unit tests all pass.

Very cool illustration of the SWORD cryptography tech. Love the slick videos as well. The sync technology is really cool and I love the idea of using animated metadata codes to sync on different devices, I think it's pretty easy for the average user to figure out how to do this.
