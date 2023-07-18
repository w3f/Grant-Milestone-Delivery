# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/LICENSE | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/README.md, https://github.com/blockcoders/kuma-wallet/blob/main/README-es.md |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet#running-locally |  |
| 1. | XCM/XVM standard for transfers | <ul><li>[x] </li></ul> | [Link](https://github.com/kumawallet/extension/blob/main/src/constants/xcm.ts) |  |
| 2. | Call to custom smart contracts | <ul><li>[x] </li></ul> | [Link](https://github.com/kumawallet/extension/blob/main/src/pages/callContract/CallContract.tsx) |  |
| 3. | Transactions to custom smart contracts | <ul><li>[x] </li></ul> | [Link](https://github.com/kumawallet/extension/blob/main/src/providers/txProvider/TxProvider.tsx) |  |
| 4. | Open Beta | <ul><li>[x] </li></ul> | [Link1](https://kumawallet.io/), [Link2](https://chrome.google.com/webstore/detail/kuma-wallet/hbinmkhlebcnghpikoekkbeljbealbje), [Link3](https://addons.mozilla.org/en-US/firefox/addon/kuma-wallet/), [Link4](https://twitter.com/getkuma/status/1678075363165888513) |  |

# General Notes

In general the wallet has a very MetaMask like feel and is easy to use. I'm unable to test out XCM functionality due to not being able to transfer between testnets (Rococo, Westend). Would be nice if this could be implemented.

Right now the main display only shows the dollar conversion amount. Just a suggestion for an added feature might be the ability to switch it to show the underlying currency instead.

## Tests
```js
 ✓ src/accounts/AccountManager.test.ts (20)
   ✓ AccountManager (20)
     ✓ formatAddress (2)
       ✓ should format evm account
       ✓ should return the same address
     ✓ should get valid name
     ✓ should create account
     ✓ addAccount (1)
       ✓ should return created account
     ✓ importAccount (1)
       ✓ should add imported evm account
     ✓ derive (2)
       ✓ should return derived account
       ✓ should throw error
     ✓ getAccount (2)
       ✓ should return account by key
       ✓ should show error
     ✓ changeName (2)
       ✓ should change name
       ✓ should return error
     ✓ getAll (2)
       ✓ shoudl return all wasm accounts
       ✓ shoudl return undefined
     ✓ areAccountsInitialized (1)
       ✓ should return true
     ✓ saveBackup (3)
       ✓ should save backup
       ✓ should throw recovery_phrase_required error
       ✓ should throw invalid_recovery_phrase error
     ✓ restorePassword (2)
       ✓ should restore password
       ✓ should throw backup_not_found error
 ✓ src/Extension.test.ts (66)
   ✓ Extension (66)
     ✓ validatePasswordFormat (3)
       ✓ should be valid
       ✓ should return password_required error
       ✓ should return password_invalid error
     ✓ validatePrivateKeyOrSeedFormat (3)
       ✓ should be valid
       ✓ should return private_key_or_seed_required error
       ✓ should return private_key_or_seed_invalid error
     ✓ signUp (2)
       ✓ should signUp
       ✓ should throw error
     ✓ should be authorized
     ✓ createAccounts (2)
       ✓ should create accounts
       ✓ should create accounts with isSignUp in false
     ✓ importAccount (2)
       ✓ should import account
       ✓ should import account with isSignUp in false
     ✓ should restore password
     ✓ should remove key
     ✓ should change name
     ✓ resetWallet (2)
       ✓ should reset wallet
       ✓ should throw error
     ✓ signIn
     ✓ should be signed up
     ✓ areAccountsInitialized (3)
       ✓ should true
       ✓ should return false
       ✓ should return with catch error false
     ✓ should sign out
     ✓ should session be active
     ✓ showKey (2)
       ✓ should return key
       ✓ should return undefined
     ✓ get account
     ✓ getAllAccounts (2)
       ✓ should return all accounts
       ✓ should return empty array
     ✓ should derive account
     ✓ should set network
     ✓ should return selected account
     ✓ should return selected network
     ✓ should get network
     ✓ getGeneralSettings (2)
       ✓ should return general settings
       ✓ should return error
     ✓ getAdvancedSettings (2)
       ✓ should return general settings
       ✓ should return error
     ✓ getSetting (2)
       ✓ should return general settings
       ✓ should return error
     ✓ updateSetting (2)
       ✓ should return settings
       ✓ should return error
     ✓ getContacts (2)
       ✓ should return contacts
       ✓ should return error
     ✓ getRegistryAddresses (4)
       ✓ should return registry addresses
       ✓ should return registry error
       ✓ should return network error
       ✓ should return network error
     ✓ save contact (1)
       ✓ should save contact
     ✓ removeContact
     ✓ getActivity
     ✓ getAllChains (2)
       ✓ should return all chains
       ✓ should return error
     ✓ saveCustomChain
     ✓ removeCustomChain
     ✓ getXCMChains (3)
       ✓ should return xcm chains
       ✓ should return chain error
       ✓ should return chains error
     ✓ addActivity
     ✓ updateActivity
     ✓ addAsset
     ✓ getAssetsByChain
     ✓ getTrustedSites
     ✓ addTrustedSite
     ✓ removeTrustedSite
 ✓ src/providers/assetProvider/AssetProvider.test.tsx (7)
   ✓ AssetProvider (7)
     ✓ reducer (6)
       ✓ should loading assets
       ✓ should end loading
       ✓ should set assets
       ✓ should update assets
       ✓ should update one assets
       ✓ shoudn't update one assets
     ✓ wasm assets (1)
       ✓ should load assests
 ✓ src/providers/networkProvider/NetworkProvider.test.tsx (18)
   ✓ NetworkProvider (18)
     ✓ reducer (8)
       ✓ init
       ✓ select-network (3)
         ✓ with rpc and type
         ✓ without rpc
         ✓ without type
       ✓ set-api (3)
         ✓ with rpc
         ✓ without rpc
         ✓ default
       ✓ refresh-networks (1)
         ✓ should refresh networks
     ✓ useEffect (2)
       ✓ should init
       ✓ should show error
     ✓ setSelectedNetwork (2)
       ✓ should set new evm chain
       ✓ should show error
     ✓ getSelectedNetwork (2)
       ✓ should getSelectedNetwork
       ✓ should show error
     ✓ setNewRpc (2)
       ✓ should keep the current rpc
       ✓ should set new rpc if chain support WASM and EVM
     ✓ refreshNetworks (2)
       ✓ should refresh networks
       ✓ should show error
 ✓ src/storage/entities/activity/Activity.test.ts (14)
   ✓ Activity (14)
     ✓ shoud instance
     ✓ should init
     ✓ addRecord (3)
       ✓ should add record
       ✓ should throw Activity.get error
       ✓ should throw SelectedAccount.get error
     ✓ getRecords (3)
       ✓ should throw SelectedAccount.get error
       ✓ should throw Activity.get error
       ✓ should throw Activity.get error
     ✓ update record status (4)
       ✓ should update record status
       ✓ should throw SelectedAccount.get error
       ✓ should throw Activity.get error
       ✓ should throw activity.data error
     ✓ add record
     ✓ get records
 ✓ src/storage/entities/Vault.test.ts (15)
   ✓ Vault (15)
     ✓ init (3)
       ✓ should init keyrings
       ✓ should throw vault_not_found error by Storage error
       ✓ should throw vault_not_found error by Auth error
     ✓ alreadySignedUp (2)
       ✓ should return true
       ✓ should return undefined
     ✓ getEncryptedVault (2)
       ✓ should return stored
       ✓ should return undefined
     ✓ set
     ✓ should save keyring
     ✓ getKeyring (3)
       ✓ should return keyring
       ✓ should call addHDKeyring
       ✓ should throw error
     ✓ addHDKeyring (2)
       ✓ should add WASM hd keyring
       ✓ should add EVM hd keyring
     ✓ is invalid
 ✓ src/pages/send/components/WasmForm.test.tsx (3) 3101ms
   ✓ WasmForm (3) 3101ms
     ✓ should call confirmTx 1064ms
     ✓ should call confirmTx with created asset 1016ms
     ✓ should call confirmTx with xcm 1018ms
 ✓ src/storage/entities/registry/Registry.test.ts (21)
   ✓ Registry (21)
     ✓ should instance
     ✓ shoud get default value
     ✓ should init
     ✓ add contact (2)
       ✓ should add contact
       ✓ should throw error
     ✓ get contact (2)
       ✓ should get contact
       ✓ should throw error
     ✓ change contact name (3)
       ✓ should change contact name
       ✓ should throw registry error
       ✓ should throw contract error
     ✓ remove contact (2)
       ✓ should remove contact
       ✓ should throw registry error
     ✓ add recent (2)
       ✓ should add recent
       ✓ should throw registry error
     ✓ get recent (2)
       ✓ should get recent
       ✓ should throw registry error
     ✓ should add contact
     ✓ get contact
     ✓ add recent
     ✓ get recent
     ✓ get all contacts
 ✓ src/providers/authProvider/AuthProvider.test.tsx (12)
   ✓ AuthProvider (12)
     ✓ reducer
     ✓ createAccount (2)
       ✓ should return true
       ✓ should return seed_required error
     ✓ importAccount (4)
       ✓ should return true
       ✓ should return password_required error
       ✓ should return private_key_or_seed_required error
       ✓ should return account_type_required error
     ✓ deriveAccount (2)
       ✓ should return true
       ✓ should return account_type_required error
     ✓ restoreAccount (3)
       ✓ should return true
       ✓ should return recovery_phrase_required error
       ✓ should return password_required error
 ✓ src/providers/txProvider/TxProvider.test.tsx (2)
   ✓ TxProvider (2)
     ✓ should load wasm activity
     ✓ should load evm activity
 ✓ src/storage/Auth.test.ts (19)
   ✓ Auth (19)
     ✓ should instance
     ✓ should return isUnlocked
     ✓ should return password
     ✓ should return isSessionActive
     ✓ should return isSessionActive
     ✓ should return false if there is no password
     ✓ should return true if there is a password
     ✓ loadAuthFromCache (2)
       ✓ should set isUnlocked from cache
       ✓ should signOut
     ✓ decryptVault
     ✓ encryptVault
     ✓ signIn (2)
       ✓ should signIn
       ✓ should throw decrypt error
     ✓ encryptBackup (2)
       ✓ should return encrypted backup
       ✓ should return error
     ✓ decryptBackup (2)
       ✓ should return encrypted backup
       ✓ should return error
     ✓ restorePassword (2)
       ✓ should return password
       ✓ should throw error
 ✓ src/storage/entities/Chains.test.ts (19)
   ✓ Chains (19)
     ✓ should instance
     ✓ get instance (2)
       ✓ should return instance
       ✓ should return same instance
     ✓ shoud init
     ✓ should return default value
     ✓ load chains (2)
       ✓ should load chains
       ✓ should throw error
     ✓ save custom chain (3)
       ✓ should chain_already_added throw error
       ✓ should throw failed_to_save_custom_chain error
       ✓ should chain_already_added throw error
     ✓ remove custom chain (2)
       ✓ remove custom chain
       ✓ should throw error
     ✓ get by chain (5)
       ✓ should return in mainnets
       ✓ should return in testnets
       ✓ should return in custom
       ✓ should return undefined
       ✓ should throw failed_to_get_chain_by_name
     ✓ should get all
     ✓ should already addes
 ✓ src/providers/accountProvider/AccountProvider.test.tsx (9)
   ✓ AccountProvider (9)
     ✓ reducer (2)
       ✓ should set accounts
       ✓ should update account name
     ✓ should create account
     ✓ should import account
     ✓ should derive account
     ✓ should call get selected account
     ✓ should call get all accounts
     ✓ should change account name
     ✓ should set selected account
 ✓ src/storage/entities/Accounts.test.ts (18)
   ✓ Account (18)
     ✓ should instance
     ✓ should init
     ✓ should update
     ✓ removeAccout (2)
       ✓ should remove account
       ✓ should return error
     ✓ add (3)
       ✓ should add account
       ✓ should return  failed_to_add_account error
       ✓ should return  failed_to_add_account error
     ✓ should return isEmpty as true
     ✓ should add account
     ✓ should remove account
     ✓ get (2)
       ✓ should return account value by key
       ✓ should return undefined
     ✓ should getAll
     ✓ should update
     ✓ should return false alreadyExists
     ✓ first (2)
       ✓ should return first account
       ✓ should return undefined
 ✓ src/tests/utils/assets.test.ts (15)
   ✓ assets (15)
     ✓ getNatitveAssetBalance (5)
       ✓ should use polkadot api
       ✓ should use ethereum api
       ✓ should return same amount
       ✓ should return same amount
       ✓ should throw error
     ✓ should format amount with decimals
     ✓ should return 0
     ✓ should format bn
     ✓ should format bn, returning 0
     ✓ should format usd amount
     ✓ get asset USD price (3)
       ✓ should return eth price
       ✓ should return 0
       ✓ should throw error
     ✓ getWasmAssets (2)
       ✓ get assets
       ✓ get assets Astar case
 ✓ src/storage/entities/TrustedSites.test.ts (13)
   ✓ Trusted Sites (13)
     ✓ should instance
     ✓ should get default value
     ✓ should init
     ✓ get all (2)
       ✓ should get all
       ✓ should throw error
     ✓ add site (2)
       ✓ should add site
       ✓ should throw error
     ✓ remove site (2)
       ✓ should remove site
       ✓ should throw error
     ✓ add site (2)
       ✓ should add site
       ✓ should throw error
     ✓ remove site (2)
       ✓ should remove site
       ✓ should throw error
 ✓ src/pages/send/components/EvmForm.test.tsx (2)
   ✓ EvmForm (2)
     ✓ should call confirmTx with native asset
     ✓ should call confirmTx with erc20 asset
 ✓ src/pages/accountForm/AccountForm.test.tsx (5)
   ✓ AccountForm (5)
     ✓ import account (1)
       ✓ should render
     ✓ create account (2)
       ✓ should render
       ✓ should submit
     ✓ restore password (1)
       ✓ should render
     ✓ derive account (1)
       ✓ should render
 ✓ src/storage/entities/settings/Settings.test.ts (13)
   ✓ Settings (13)
     ✓ should instance
     ✓ should init
     ✓ should be empty
     ✓ should add to general
     ✓ should add to advanced
     ✓ should add to security
     ✓ should get from general
     ✓ should get from advanced
     ✓ should get from security
     ✓ get
     ✓ get all
     ✓ update
     ✓ allready exists
 ✓ src/storage/Storage.test.ts (4)
   ✓ Storage (4)
     ✓ should instance
     ✓ init (2)
       ✓ should init
       ✓ should throw already_signed_up error
     ✓ reset wallet
 ✓ src/pages/signMessage/SignMessage.test.tsx (2)
   ✓ SignMessage (2)
     ✓ should sign evm message
     ✓ should sign wasm message
 ✓ src/pages/manageAssets/ManageAssets.test.tsx (3)
   ✓ ManageAssets (3)
     ✓ should render evm
     ✓ should fill the form and submit
     ✓ should show error on submit
 ✓ src/storage/entities/Assets.test.ts (8)
   ✓ Assets (8)
     ✓ should instance
     ✓ should return default value
     ✓ should init
     ✓ getByChain (2)
       ✓ should get by chain
       ✓ should show error
     ✓ addAsset (3)
       ✓ should add asset
       ✓ should add new asset in existing chain
       ✓ should throw error when asset already added
 ✓ src/pages/balance/components/ChainSelector.test.tsx (2)
   ✓ ChainSelector (2)
     ✓ should render
     ✓ should change account
 ✓ src/storage/entities/BaseEntity.test.ts (7)
   ✓ BaseEntity (7)
     ✓ should init
     ✓ getDefaultValue
     ✓ fromData
     ✓ get (2)
       ✓ should return stored data
       ✓ should return undefined
     ✓ set
     ✓ remove
 ✓ src/pages/balance/components/AccountList.test.tsx (1)
   ✓ AccountList (1)
     ✓ should render accounts
 ✓ src/pages/send/components/ConfirmTx.test.tsx (2)
   ✓ ConfirmTx (2)
     ✓ should render correctly
     ✓ should call onConfirm when confirm button is clicked
 ✓ src/storage/entities/keyrings/hd/EVMKeyring.test.ts (8)
   ✓ EVMKeyring (8)
     ✓ should return next account path
     ✓ should return address
     ✓ get key (2)
       ✓ should return key
       ✓ should throw error if key pair not found
     ✓ should return json object
     ✓ should throw error if mnemonic is invalid
     ✓ should derive key pair
     ✓ should return json object
 ✓ src/tests/utils/accounts-utils.test.ts (9)
   ✓ account-utils (9)
     ✓ cropAccount (2)
       ✓ should return cropAccount
       ✓ should return empty
     ✓ formatAccount (2)
       ✓ should format EVM account
       ✓ should format WASM account
     ✓ formatAddress (3)
       ✓ format ROCOCO format to x format
       ✓ should return the same EVM Account
       ✓ should return empty
     ✓ getAccountType (2)
       ✓ should format imported account type
       ✓ should return the same account type
 ✓ src/pages/send/components/Destination.test.tsx (2)
   ✓ Destination (2)
     ✓ should render options
     ✓ should filter
 ✓ src/storage/entities/CacheAuth.test.ts (5)
   ✓ CacheAuth (5)
     ✓ should instance
     ✓ shoud filled entity
     ✓ hasExpired (2)
       ✓ should return hasExpired as false
       ✓ should return hasExpired as true
     ✓ unlock (1)
       ✓ should unlock
 ✓ src/pages/settings/Contacts.test.tsx (3)
   ✓ Contacts (3)
     ✓ should render
     ✓ should show no contacts
     ✓ should create contact
 ✓ src/pages/balance/components/TotalBalance.test.tsx (4)
   ✓ TotalBalance (4)
     ✓ should render
     ✓ should render total balance
     ✓ should hide balance
     ✓ should update account name
 ✓ src/pages/settings/General.test.tsx (3)
   ✓ General (3)
     ✓ should render
     ✓ should call showTestnets
     ✓ should call "manage networks"
 ✓ src/pages/balance/components/Activity.test.tsx (2)
   ✓ Actvity (2)
     ✓ should render
     ✓ should filter by network
 ✓ src/pages/send/components/SelectableAsset.test.tsx (3)
   ✓ SelectableAsset (3)
     ✓ should render
     ✓ should render all assets
     ✓ should call change asset
 ✓ src/storage/entities/keyrings/imported/ImportedEVMKeyring.test.ts (4)
   ✓ ImportedEVMKeyring (4)
     ✓ getImportedData
     ✓ fromJSON
     ✓ getKey (2)
       ✓ should return key
       ✓ should throw error
 ✓ src/storage/entities/Network.test.ts (5)
   ✓ Network (5)
     ✓ should instance
     ✓ should init
     ✓ should return default value
     ✓ should set new chain
     ✓ should set new chain without static methods
 ✓ src/storage/entities/keyrings/hd/WASMKeyring.test.ts (5)
   ✓ WASMKeyring (5)
     ✓ should return next account path
     ✓ should return address
     ✓ get key (2)
       ✓ should return key
       ✓ should throw error if key pair not found
     ✓ should return json object
 ✓ src/pages/settings/Security.test.tsx (2)
   ✓ Security (2)
     ✓ should render
     ✓ should show sites
 ✓ src/pages/send/components/Fees.test.tsx (2)
   ✓ Fees (2)
     ✓ should render native assets fees
     ✓ should render no native assets fees
 ✓ src/storage/entities/keyrings/imported/ImportedWASMKeyring.test.ts (2)
   ✓ ImportedWASMKeyring (2)
     ✓ getImportedData
     ✓ fromJSON
 ✓ src/storage/entities/SelectedAccount.test.ts (2)
   ✓ SelectedAccount (2)
     ✓ fromAccount
     ✓ getDefaultValue
 ✓ src/pages/signIn/SignIn.test.tsx (3)
   ✓ SignIn (3)
     ✓ should render
     ✓ should sign in
     ✓ should go to forgot password
 ✓ src/pages/balance/components/AccountSelected.test.tsx (2)
   ✓ AccountSelected (2)
     ✓ should render selectedAccount
     ✓ should copy account
 ✓ src/pages/receive/Receive.test.tsx (2)
   ✓ Receive (2)
     ✓ should render
     ✓ should copy to clipboard
 ✓ src/storage/entities/settings/Setting.test.ts (7)
   ✓ Setting (7)
     ✓ should instance
     ✓ should format name
     ✓ should return string true
     ✓ should return number
     ✓ should return boolean
     ✓ should return object
     ✓ should return language array
 ✓ src/pages/balance/components/Assets.test.tsx (1)
   ✓ Assets (1)
     ✓ should render assets
 ✓ src/pages/send/components/SelectableChain.test.tsx (2)
   ✓ SelectableChain (2)
     ✓ should render
     ✓ should render null
 ✓ src/tests/utils/utils.test.ts (3)
   ✓ utils (3)
     ✓ should return formatted date
     ✓ should parse query
     ✓ should make querys
 ✓ src/pages/addAccount/AddAccount.test.tsx (2)
   ✓ AddAccount (2)
     ✓ should render
     ✓ should open new tab
 ✓ src/hooks/common/useToast.test.tsx (2)
   ✓ useToast (2)
     ✓ showErrorToast
     ✓ showSuccessToast
 ✓ src/hooks/common/useLoading.test.tsx (2)
   ✓ useLoading (2)
     ✓ should set isLoading to true
     ✓ should set isLoading to false
 ✓ src/pages/settings/BugReport.test.tsx (1)
   ✓ BugReport (1)
     ✓ should render
 ✓ src/pages/welcome/Welcome.test.tsx (2)
   ✓ Welcome (2)
     ✓ should render
     ✓ should call goToAccount function
 ✓ src/storage/entities/settings/LangaugeSetting.test.ts (2)
   ✓ LanguageSettings (2)
     ✓ should get default language
     ✓ should get all languages
 ✓ src/pages/settings/AboutUs.test.tsx (1)
   ✓ AboutUs (1)
     ✓ should render
 ✓ src/storage/entities/Backup.test.ts (2)
   ✓ Backup (2)
     ✓ should instance
     ✓ should init
 ✓ src/storage/entities/Account.test.ts (1)
   ✓ Account (1)
     ✓ sholuld instance
 ✓ src/storage/entities/registry/Register.test.ts (1)
   ✓ Register (1)
     ✓ should create register
 ✓ src/storage/entities/registry/Contact.test.ts (1)
   ✓ Contact (1)
     ✓ should create contact

 Test Files  61 passed (61)
      Tests  418 passed (418)
   Start at  17:35:18
   Duration  16.79s (transform 1.14s, setup 10.07s, collect 22.82s, tests 5.96s, environment 16.37s, prepare 3.55s)
```
