
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/iris-followup_1_cruikshankss.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[ ] </li></ul>| https://github.com/ideal-lab5/iris |  Two Licenses | 
| 0b.  | Documentation|<ul><li>[ ] </li></ul> | https://ideal-lab5.github.io | Not fully evaluated yet | 
| 0c.  | Testing Guide|<ul><li>[ ] </li></ul> | https://docs.google.com/document/d/1GYizRCtMYxfZEdpaB8_VBwSaZdG3kZQAhRJI3OGmZqA/edit?usp=sharing | Not fully evaluated yet |
| 0d.  | Docker|<ul><li>[x] </li></ul> |  Iris node: https://hub.docker.com/repository/docker/ideallabs/iris, Iris UI:  https://hub.docker.com/repository/docker/ideallabs/iris-ui | |
| 0e.  | Article|<ul><li>[x] </li></ul> | https://medium.com/ideal-labs/iris-update-milestone-2-29dcd8b79134 | |
| 1.  | Substrate Module: IrisProxy|<ul><li>[ ] </li></ul> | https://github.com/ideal-lab5/iris/tree/main/pallets/iris-proxy | Not fully evaluated yet |
| 2.  | Substrate Module: IPFS|<ul><li>[ ] </li></ul> | https://github.com/ideal-lab5/iris/tree/main/pallets/ipfs | Not fully evaluated yet |
| 3.  | Substrate Module: Gateway|<ul><li>[ ] </li></ul> | https://github.com/ideal-lab5/iris/tree/main/pallets/gateway | Not fully evaluated yet |
| 4.  | Encryption Mechanism|<ul><li>[ ] </li></ul> | Key fragment generation starts here: https://github.com/ideal-lab5/iris/blob/73735046ddf1776b912859daeab789a769130e72/pallets/iris-proxy/src/lib.rs#L584, see the whitepaper as well: https://github.com/ideal-lab5/whitepaper/blob/main/IRIS_PROTOCOL_DRAFT_0.0.1.pdf | Not fully evaluated yet |
| 5.  | RPC: Encryption RPC|<ul><li>[ ] </li></ul> | https://github.com/ideal-lab5/iris/blob/ff95f2e811386f6231c441fafe3a1204ed82676b/pallets/iris-proxy/src/lib.rs#L518 | Not fully evaluated yet |
| 6.  | RPC: Decryption RPC|<ul><li>[ ] </li></ul> | https://github.com/ideal-lab5/iris/blob/ff95f2e811386f6231c441fafe3a1204ed82676b/pallets/iris-proxy/src/lib.rs#L390 | Not fully evaluated yet |
| 7. | Testnet Setup|<ul><li>[ ] </li></ul> | Documentation of hosted node setup: https://ideal-lab5.github.io/developers/nodes/ec2_setup.html | Not fully evaluated yet |
| 8. | User Interface|<ul><li>[ ] </li></ul> | https://github.com/ideal-lab5/ui | Not fully evaluated yet |

**General Notes** 

### License 

There are more than one license file. Please specify which one is the valid for the software.
 
 
### Code Quality  
 
 * Automated tests fail to compile with the following error:
 
 ```
 Compiling pallet-data-spaces v1.0.0 (/home/diogo/workspace/iris/pallets/data-spaces)
error[E0433]: failed to resolve: unresolved import
   --> pallets/data-spaces/src/mock.rs:317:41
    |
317 |     type AuthorityId = pallet_data_spaces::crypto::TestAuthId;
    |                                            ^^^^^^
    |                                            |
    |                                            unresolved import
    |                                            help: a similar path exists: `frame_support::crypto`

   Compiling pallet-authorization v1.0.0 (/home/diogo/workspace/iris/pallets/authorization)
For more information about this error, try `rustc --explain E0433`.
error: could not compile `pallet-data-spaces` due to previous error
 ```
 
cargo clippy returned many warnings. Part of them are listed bellow. 

```
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:328:5
    |
328 |                 consumer.clone(), 
    |                 ^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:331:41
    |
331 |                     verifying_key: verifying_public_key.clone(),
    |                                                        ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:331:21
    |
331 |                     verifying_key: verifying_public_key.clone(),
    |                                    ^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:332:36
    |
332 |                     secret: encrypted_receiving_sk.clone(),
    |                                                   ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:332:14
    |
332 |                     secret: encrypted_receiving_sk.clone(),
    |                             ^^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:333:40
    |
333 |                     verified_kfrags: kfrag_assignments.clone(),
    |                                                       ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:333:23
    |
333 |                     verified_kfrags: kfrag_assignments.clone(),
    |                                      ^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:334:48
    |
334 |                     ephemeral_public_key: receiving_public_key.clone(),
    |                                                               ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:334:28
    |
334 |                     ephemeral_public_key: receiving_public_key.clone(),
    |                                           ^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:338:46
    |
338 |             KeyFragGenerationRequests::<T>::mutate(who.clone(), |reqs| {
    |                                                       ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:338:43
    |
338 |             KeyFragGenerationRequests::<T>::mutate(who.clone(), |reqs| {
    |                                                    ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:364:21
    |
364 |                 capsule: capsule.clone(),
    |                                 ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:364:14
    |
364 |                 capsule: capsule.clone(),
    |                          ^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:367:42
    |
367 |             ProxyCodes::<T>::insert(proxy.clone(), public_key.clone(), encrypted_sk_box.clone());
    |                                          ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:367:37
    |
367 |             ProxyCodes::<T>::insert(proxy.clone(), public_key.clone(), encrypted_sk_box.clone());
    |                                     ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:367:88
    |
367 |             ProxyCodes::<T>::insert(proxy.clone(), public_key.clone(), encrypted_sk_box.clone());
    |                                                                                        ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:367:72
    |
367 |             ProxyCodes::<T>::insert(proxy.clone(), public_key.clone(), encrypted_sk_box.clone());
    |                                                                        ^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:368:48
    |
368 |             T::QueueManager::add_ingestion_staging(owner.clone(), public_key.clone());
    |                                                         ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:368:43
    |
368 |             T::QueueManager::add_ingestion_staging(owner.clone(), public_key.clone());
    |                                                    ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:368:68
    |
368 |             T::QueueManager::add_ingestion_staging(owner.clone(), public_key.clone());
    |                                                                             ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:368:58
    |
368 |             T::QueueManager::add_ingestion_staging(owner.clone(), public_key.clone());
    |                                                                   ^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: very complex type used. Consider factoring parts into `type` definitions
   --> pallets/gateway/src/lib.rs:589:20
    |
589 |         initial_proxies: &Vec<(T::AccountId, T::AccountId, BalanceOf<T>, ProxyStatus)>
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: redundant clone
   --> pallets/gateway/src/lib.rs:623:42
    |
623 |         Proxies::<T>::insert(who.clone(), prefs.clone());
    |                                                ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> pallets/gateway/src/lib.rs:623:37
    |
623 |         Proxies::<T>::insert(who.clone(), prefs.clone());
    |                                           ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: using `clone` on type `u32` which implements the `Copy` trait
   --> pallets/gateway/src/lib.rs:626:34
    |
626 |         Slot::<T>::insert(who.clone(), primes[num_proxies].clone());
    |                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `primes[num_proxies]`                                                                                                           
    |
    = note: `#[warn(clippy::clone_on_copy)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: redundant clone
   --> pallets/gateway/src/lib.rs:681:30
    |
681 |                     <Ledger<T>>::insert(acct.clone(), ledger);
    |                                             ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/gateway/src/lib.rs:681:26
    |
681 |                     <Ledger<T>>::insert(acct.clone(), ledger);
    |                                         ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: you seem to be trying to use `match` for destructuring a single pattern. Consider using `if let`
   --> pallets/gateway/src/lib.rs:674:3
    |
674 | /         match <Ledger<T>>::get(acct.clone()) {
675 | |             Some(mut ledger) => {
676 | |                 let new_active_amount = ledger.active - balance;
677 | |                 // Q: should it be >= instead?
...   |
688 | |             }
689 | |         }
    | |_________^
    |
    = note: `#[warn(clippy::single_match)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#single_match
help: try this
    |
674 ~         if let Some(mut ledger) = <Ledger<T>>::get(acct.clone()) {
675 ~                   let new_active_amount = ledger.active - balance;
676 ~                   // Q: should it be >= instead?
677 ~                   if new_active_amount > Zero::zero() {
678 ~                       ledger.active = new_active_amount;
679 ~                       ledger.reserved = balance;
680 ~                       <Ledger<T>>::insert(acct.clone(), ledger);
681 ~                   } else {
682 ~                       // should we do anything?
683 ~                   }
684 ~               }
    |

warning: redundant clone
   --> pallets/gateway/src/lib.rs:699:31
    |
699 |             CallCount::<T>::insert(acct.clone(), index);
    |                                        ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/gateway/src/lib.rs:699:27
    |
699 |             CallCount::<T>::insert(acct.clone(), index);
    |                                    ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:416:12
    |
416 |                 acct_id.clone(), 
    |                        ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:416:5
    |
416 |                 acct_id.clone(), 
    |                 ^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:418:24
    |
418 |                 metadata.public_key.clone(),
    |                                    ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:418:5
    |
418 |                 metadata.public_key.clone(),
    |                 ^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:449:14
    |
449 |             account_id.clone(), delegating_public_key.clone()
    |                       ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:449:4
    |
449 |             account_id.clone(), delegating_public_key.clone()
    |             ^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:453:66
    |
453 |         let delegating_pk = PublicKey::from_bytes(delegating_public_key.clone()).unwrap();
    |                                                                        ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:453:45
    |
453 |         let delegating_pk = PublicKey::from_bytes(delegating_public_key.clone()).unwrap();
    |                                                   ^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:457:49
    |
457 |         let capsule_data = encryption_artifact.capsule.clone();
    |                                                       ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:457:22
    |
457 |         let capsule_data = encryption_artifact.capsule.clone();
    |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:481:91
    |
481 |         let pk = iris_primitives::vec_to_box_public_key(&reencryption_artifact.secret.public_key.clone());
    |                                                                                                 ^^^^^^^^ help: remove this                                                                                                              
    |
note: cloned value is neither consumed nor mutated
   --> pallets/iris-proxy/src/lib.rs:481:52
    |
481 |         let pk = iris_primitives::vec_to_box_public_key(&reencryption_artifact.secret.public_key.clone());
    |                                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:484:6
    |
484 |             pk.clone(),
    |               ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:484:4
    |
484 |             pk.clone(),
    |             ^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:485:13
    |
485 |             x25519_sk.clone(),
    |                      ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:485:4
    |
485 |             x25519_sk.clone(),
    |             ^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:487:38
    |
487 |             reencryption_artifact.secret.nonce.clone(),
    |                                               ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:487:4
    |
487 |             reencryption_artifact.secret.nonce.clone(),
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:489:67
    |
489 |         let decrypted_sk = SecretKey::from_bytes(decrypted_tpre_sk_bytes.clone()).unwrap();
    |                                                                         ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:489:44
    |
489 |         let decrypted_sk = SecretKey::from_bytes(decrypted_tpre_sk_bytes.clone()).unwrap();
    |                                                  ^^^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:538:70
    |
538 |             return Self::do_encrypt(plaintext_as_slice, acct_id, proxy_acct_id.clone());
    |                                                                               ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:538:57
    |
538 |             return Self::do_encrypt(plaintext_as_slice, acct_id, proxy_acct_id.clone());
    |                                                                  ^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: unnecessary use of `to_vec`
   --> pallets/iris-proxy/src/lib.rs:537:55
    |
537 |             let plaintext_as_slice: &[u8] = &plaintext.to_vec();
    |                                                       ^^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::unnecessary_to_owned)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_to_owned

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:563:12
    |
563 |             &mut rng.clone(), &pk, plaintext)
    |                     ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:563:9
    |
563 |             &mut rng.clone(), &pk, plaintext)
    |                  ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:577:27
    |
577 |             proxy: proxy_account_id.clone(),
    |                                    ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:577:11
    |
577 |             proxy: proxy_account_id.clone(),
    |                    ^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:585:43
    |
585 |                 return Bytes::from(ciphertext.to_vec().clone());
    |                                                       ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:585:24
    |
585 |                 return Bytes::from(ciphertext.to_vec().clone());
    |                                    ^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: unneeded `return` statement
   --> pallets/iris-proxy/src/lib.rs:585:5
    |
585 |                 return Bytes::from(ciphertext.to_vec().clone());
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: remove `return`: `Bytes::from(ciphertext.to_vec().clone())`                                                                                                      
    |
    = note: `#[warn(clippy::needless_return)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return

warning: unneeded `return` statement
   --> pallets/iris-proxy/src/lib.rs:589:5
    |
589 | ...   return Bytes::from(b"An error occurred while submitting the unsigned tx. Please try again. If the issue persists, restart your node and try again.".to_vec());
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: remove `return`: `Bytes::from(b"An error occurred while submitting the unsigned tx. Please try again. If the issue persists, restart your node and try again.".to_vec())`           
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return

warning: using `clone` on type `[u8; 32]` which implements the `Copy` trait
   --> pallets/iris-proxy/src/lib.rs:731:51
    |
731 |                 let kfrag_enc_public_key = BoxPublicKey::from(pk_array.clone());
    |                                                               ^^^^^^^^^^^^^^^^ help: try dereferencing it: `*pk_array`                                                                                                                  
    |
    = note: `#[warn(clippy::clone_on_copy)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `[u8; 32]` which implements the `Copy` trait
   --> pallets/iris-proxy/src/lib.rs:769:40
    |
769 |                 let caller_pk = BoxPublicKey::from(caller_pk_array.clone());
    |                                                    ^^^^^^^^^^^^^^^^^^^^^^^ help: try dereferencing it: `*caller_pk_array`                                                                                                               
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: redundant clone
   --> pallets/iris-proxy/src/lib.rs:818:90
    |
818 |         let proxy = EncryptionArtifacts::<T>::get(data_public_key.clone()).unwrap().proxy.clone();
    |                                                                                          ^^^^^^^^ help: remove this                                                                                                                     
    |
note: this value is dropped without further use
   --> pallets/iris-proxy/src/lib.rs:818:21
    |
818 |         let proxy = EncryptionArtifacts::<T>::get(data_public_key.clone()).unwrap().proxy.clone();
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: `pallet-gateway` (lib) generated 10 warnings
warning: `pallet-iris-proxy` (lib) generated 40 warnings
    Checking pallet-authorization v1.0.0 (/home/diogo/workspace/iris/pallets/authorization)
warning: redundant clone
   --> pallets/authorization/src/lib.rs:131:54
    |
131 |                 Self::check_asset_class_ownership(who.clone(), id.clone()), 
    |                                                      ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> pallets/authorization/src/lib.rs:131:51
    |
131 |                 Self::check_asset_class_ownership(who.clone(), id.clone()), 
    |                                                   ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/authorization/src/lib.rs:134:70
    |
134 |             <Registry::<T>>::insert(id.clone(), rule_executor_address.clone());
    |                                                                      ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/authorization/src/lib.rs:134:49
    |
134 |             <Registry::<T>>::insert(id.clone(), rule_executor_address.clone());
    |                                                 ^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: using `clone` on type `<T as pallet_assets::Config>::AssetId` which implements the `Copy` trait
   --> pallets/authorization/src/lib.rs:131:64
    |
131 |                 Self::check_asset_class_ownership(who.clone(), id.clone()), 
    |                                                                ^^^^^^^^^^ help: try removing the `clone` call: `id`                                                                                                                     
    |
    = note: `#[warn(clippy::clone_on_copy)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<T as pallet_assets::Config>::AssetId` which implements the `Copy` trait
   --> pallets/authorization/src/lib.rs:134:37
    |
134 |             <Registry::<T>>::insert(id.clone(), rule_executor_address.clone());
    |                                     ^^^^^^^^^^ help: try removing the `clone` call: `id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: redundant clone
   --> pallets/authorization/src/lib.rs:165:40
    |
165 |                     ensure!(addr == who.clone(), Error::<T>::InvalidRuleExecutor);
    |                                        ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/authorization/src/lib.rs:165:37
    |
165 |                     ensure!(addr == who.clone(), Error::<T>::InvalidRuleExecutor);
    |                                     ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/authorization/src/lib.rs:175:58
    |
175 | ...                   data_consumer_address.clone(), 
    |                                            ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/authorization/src/lib.rs:175:37
    |
175 | ...                   data_consumer_address.clone(), 
    |                       ^^^^^^^^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: using `clone` on type `<T as pallet_assets::Config>::AssetId` which implements the `Copy` trait
   --> pallets/authorization/src/lib.rs:163:40
    |
163 |             match <Registry::<T>>::get(asset_id.clone()) {
    |                                        ^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `asset_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: the borrowed expression implements the required traits
   --> pallets/authorization/src/lib.rs:169:65
    |
169 |                     <Lock::<T>>::insert(&data_consumer_address, &asset_id, execution_result);
    |                                                                 ^^^^^^^^^ help: change this to: `asset_id`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: using `clone` on type `<T as pallet_assets::Config>::AssetId` which implements the `Copy` trait
   --> pallets/authorization/src/lib.rs:171:76
    |
171 |                         match <T as pallet::Config>::MetadataProvider::get(asset_id.clone()) {
    |                                                                            ^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `asset_id`                                                                                             
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: redundant clone
   --> pallets/authorization/src/lib.rs:215:46
    |
215 |             Some(owned) => owned.owner == who.clone(),
    |                                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/authorization/src/lib.rs:215:43
    |
215 |             Some(owned) => owned.owner == who.clone(),
    |                                           ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: using `clone` on type `<T as pallet_assets::Config>::AssetId` which implements the `Copy` trait
   --> pallets/authorization/src/lib.rs:213:59
    |
213 |         let opt_asset = <pallet_assets::Pallet<T>>::asset(id.clone());
    |                                                           ^^^^^^^^^^ help: try removing the `clone` call: `id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: `pallet-authorization` (lib) generated 11 warnings
    Checking pallet-ipfs v1.0.0 (/home/diogo/workspace/iris/pallets/ipfs)
warning: this import is redundant
  --> pallets/ipfs/src/lib.rs:40:1
   |
40 | use log;
   | ^^^^^^^^ help: remove it entirely
   |
   = note: `#[warn(clippy::single_component_path_imports)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#single_component_path_imports

warning: constants have by default a `'static` lifetime
  --> pallets/ipfs/src/lib.rs:65:24
   |
65 | pub const LOG_TARGET: &'static str = "runtime::proxy";
   |                       -^^^^^^^---- help: consider removing `'static`: `&str`
   |
   = note: `#[warn(clippy::redundant_static_lifetimes)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_static_lifetimes

warning: unnecessary use of `to_owned`
   --> pallets/ipfs/src/ipfs.rs:193:23
    |
193 |     req_body.push_str(&"}".to_owned());
    |                       ^^^^^^^^^^^^^^^ help: use: `"}"`
    |
    = note: `#[warn(clippy::unnecessary_to_owned)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_to_owned

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/ipfs/src/ipfs.rs:198:22
    |
198 |                 .url(&endpoint)
    |                      ^^^^^^^^^ help: change this to: `endpoint`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: unneeded `return` statement
   --> pallets/ipfs/src/ipfs.rs:241:13
    |
241 |             return Ok(v);
    |             ^^^^^^^^^^^^^ help: remove `return`: `Ok(v)`
    |
    = note: `#[warn(clippy::needless_return)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return

warning: unneeded `return` statement
   --> pallets/ipfs/src/ipfs.rs:245:13
    |
245 |             return Err(e)
    |             ^^^^^^^^^^^^^ help: remove `return`: `Err(e)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return

warning: writing `&Vec` instead of `&[_]` involves a new object where a slice will do
   --> pallets/ipfs/src/ipfs.rs:258:10
    |
258 |     key: &Vec<u8>,
    |          ^^^^^^^^ help: change this to: `&[u8]`
    |
    = note: `#[warn(clippy::ptr_arg)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg

warning: writing `&Vec` instead of `&[_]` involves a new object where a slice will do
   --> pallets/ipfs/src/ipfs.rs:259:12
    |
259 |     value: &Vec<u8>,
    |            ^^^^^^^^ help: change this to: `&[u8]`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg

warning: calling `push_str()` using a single-character string literal
   --> pallets/ipfs/src/ipfs.rs:267:21
    |
267 |                     endpoint.push_str("=");
    |                     ^^^^^^^^^^^^^^^^^^^^^^ help: consider using `push` with a character literal: `endpoint.push('=')`                                                                                                                   
    |
    = note: `#[warn(clippy::single_char_add_str)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#single_char_add_str

warning: calling `push_str()` using a single-character string literal
   --> pallets/ipfs/src/ipfs.rs:270:25
    |
270 |                         endpoint.push_str("&");
    |                         ^^^^^^^^^^^^^^^^^^^^^^ help: consider using `push` with a character literal: `endpoint.push('&')`                                                                                                               
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#single_char_add_str

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:242:67
    |
242 | ...                   T::OffchainKeyManager::process_decryption_delegation(addr.clone(), authorities);
    |                                                                                ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:242:63
    |
242 | ...                   T::OffchainKeyManager::process_decryption_delegation(addr.clone(), authorities);
    |                                                                            ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:284:58
    |
284 |             let new_asset_id = T::ProxyProvider::next_asset_id(who.clone());
    |                                                                   ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:284:55
    |
284 |             let new_asset_id = T::ProxyProvider::next_asset_id(who.clone());
    |                                                                ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:309:68
    |
309 |             <BootstrapNodes::<T>>::insert(public_key.clone(), multiaddresses.clone());
    |                                                                             ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:309:54
    |
309 |             <BootstrapNodes::<T>>::insert(public_key.clone(), multiaddresses.clone());
    |                                                               ^^^^^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:310:49
    |
310 |             <SubstrateIpfsBridge::<T>>::insert(public_key.clone(), who.clone());
    |                                                          ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:310:39
    |
310 |             <SubstrateIpfsBridge::<T>>::insert(public_key.clone(), who.clone());
    |                                                ^^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:311:52
    |
311 |             Self::deposit_event(Event::IdentitySubmitted(who.clone()));
    |                                                             ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:311:49
    |
311 |             Self::deposit_event(Event::IdentitySubmitted(who.clone()));
    |                                                          ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:322:61
    |
322 |             Self::deposit_event(Event::ConfigurationSyncSubmitted(who.clone()));
    |                                                                      ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:322:58
    |
322 |             Self::deposit_event(Event::ConfigurationSyncSubmitted(who.clone()));
    |                                                                   ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:350:18
    |
350 |                 return Ok(out.clone());
    |                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:350:15
    |
350 |                 return Ok(out.clone());
    |                           ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: unneeded `return` statement
   --> pallets/ipfs/src/lib.rs:350:5
    |
350 |                 return Ok(out.clone());
    |                 ^^^^^^^^^^^^^^^^^^^^^^^ help: remove `return`: `Ok(out.clone())`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return

warning: unneeded `return` statement
   --> pallets/ipfs/src/lib.rs:354:5
    |
354 |                 return Err(Error::<T>::IpfsNotAvailable);
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: remove `return`: `Err(Error::<T>::IpfsNotAvailable)`                                                                                                                    
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:399:40
    |
399 |         match T::ProxyProvider::prefs(account.clone()) {
    |                                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:399:33
    |
399 |         match T::ProxyProvider::prefs(account.clone()) {
    |                                       ^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:407:14
    |
407 |                     key: key.clone(),
    |                             ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:407:11
    |
407 |                     key: key.clone(),
    |                          ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> pallets/ipfs/src/lib.rs:408:16
    |
408 |                     value: val.clone(),
    |                               ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> pallets/ipfs/src/lib.rs:408:13
    |
408 |                     value: val.clone(),
    |                            ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: you seem to be trying to use `match` for destructuring a single pattern. Consider using `if let`
   --> pallets/ipfs/src/lib.rs:415:5
    |
415 | /                 match stat_response["StorageMax"].clone().as_u64() {
416 | |                     Some(actual_storage) => {
417 | |                         // 3. report result on chain
418 | |                         let signer = Signer::<T, <T as pallet::Config>::AuthorityId>::all_accounts();
...   |
439 | |                     }
440 | |                 }
    | |_________________^
    |
    = note: `#[warn(clippy::single_match)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#single_match
help: try this
    |
415 ~                 if let Some(actual_storage) = stat_response["StorageMax"].clone().as_u64() {
416 ~                             // 3. report result on chain
417 ~                             let signer = Signer::<T, <T as pallet::Config>::AuthorityId>::all_accounts();
418 ~                             if !signer.can_sign() {
419 ~                                 log::error!(
420 ~                                     "No local accounts available. Consider adding one via `author_insertKey` RPC.",                                                                                                                     
421 ~                                 );
422 ~                             }
423 ~                             let results = signer.send_signed_transaction(|_account| { 
424 ~                                 Call::submit_config_complete{
425 ~                                     reported_storage_size: actual_storage.into(),
426 ~                                 }
427 ~                             });
428 + 
429 ~                             for (_, res) in &results {
430 ~                                 match res {
431 ~                                     Ok(()) => log::info!("Submitted results successfully"),
432 ~                                     Err(e) => log::error!("Failed to submit transaction: {:?}",  e),
433 ~                                 }
434 ~                             }
435 ~                         }
    |

warning: `pallet-ipfs` (lib) generated 23 warnings
warning: this operation has no effect
   --> runtime/src/lib.rs:385:26
    |
385 |     pub const Period: u32 = 1 * MINUTES;
    |                             ^^^^^^^^^^^ help: consider reducing it to: `MINUTES`
    |
    = note: `#[warn(clippy::identity_op)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:433:43
    |
433 |     pub const AssetAccountDeposit: Balance = 1 * DOLLARS;
    |                                              ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:434:39
    |
434 |     pub const ApprovalDeposit: Balance = 1 * DOLLARS;
    |                                          ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:437:46
    |
437 |     pub const MetadataDepositPerByte: Balance = 1 * DOLLARS;
    |                                                 ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:551:41
    |
551 |     pub const MinVestedTransfer: Balance = 1 * MILLICENTS;
    |                                            ^^^^^^^^^^^^^^ help: consider reducing it to: `MILLICENTS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: unneeded `return` statement
    --> runtime/src/lib.rs:1087:17
     |
1087 |                 return Err(DispatchError::Other("Unimplemented func_id"))
     |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: remove `return`: `Err(DispatchError::Other("Unimplemented func_id"))`                                                                                  
     |
     = note: `#[warn(clippy::needless_return)]` on by default
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return

warning: useless conversion to the same type: `u128`
    --> runtime/src/lib.rs:1058:14
     |
1058 |                     origin, amount.into(),
     |                             ^^^^^^^^^^^^^ help: consider removing `.into()`: `amount`
     |
     = note: `#[warn(clippy::useless_conversion)]` on by default
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: `iris-runtime` (lib) generated 7 warnings
warning: redundant clone
  --> node/src/rpc.rs:70:47
   |
70 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
   = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
  --> node/src/rpc.rs:70:43
   |
70 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
  --> node/src/rpc.rs:75:37
   |
75 |     module.merge(Encryption::new(client.clone()).into_rpc())?;
   |                                        ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:75:31
   |
75 |     module.merge(Encryption::new(client.clone()).into_rpc())?;
   |                                  ^^^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: very complex type used. Consider factoring parts into `type` definitions
  --> node/src/service.rs:58:6
   |
58 |   ) -> Result<
   |  ______^
59 | |     sc_service::PartialComponents<
60 | |         FullClient,
61 | |         FullBackend,
...  |
76 | |     ServiceError,
77 | | > {
   | |_^
   |
   = note: `#[warn(clippy::type_complexity)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: writing `&String` instead of `&str` involves a new object where a slice will do
   --> node/src/service.rs:169:26
    |
169 | fn remote_keystore(_url: &String) -> Result<Arc<LocalKeystore>, &'static str> {
    |                          ^^^^^^^ help: change this to: `&str`
    |
    = note: `#[warn(clippy::ptr_arg)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg

warning: `iris-node` (lib) generated 4 warnings
warning: redundant clone
   --> node/src/command_helper.rs:110:7
    |
110 |         call.clone(),
    |             ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> node/src/command_helper.rs:110:3
    |
110 |         call.clone(),
    |         ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/command_helper.rs:112:40
    |
112 |         runtime::Signature::Sr25519(signature.clone()),
    |                                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/command_helper.rs:112:31
    |
112 |         runtime::Signature::Sr25519(signature.clone()),
    |                                     ^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/command_helper.rs:113:8
    |
113 |         extra.clone(),
    |              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/command_helper.rs:113:3
    |
113 |         extra.clone(),
    |         ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
  --> node/src/rpc.rs:70:47
   |
70 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:70:43
   |
70 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: `iris-node` (bin "iris-node") generated 7 warnings (3 duplicates)
    Finished dev [unoptimized + debuginfo] target(s) in 29.90s

```

* cargo audit found some problems, consider to review the dependencies of the project. 

```
error: 5 vulnerabilities found!
warning: 5 allowed warnings found
```

* frontend

No automated unit tests.

Some warnings after running eslint:

```
eslint src

/home/diogo/workspace/w3f/ui/src/App.js
  6:10  warning  'FormControlLabel' is defined but never used  no-unused-vars
  6:28  warning  'FormGroup' is defined but never used         no-unused-vars
  6:39  warning  'Switch' is defined but never used            no-unused-vars
  8:10  warning  'FontAwesomeIcon' is defined but never used   no-unused-vars
  9:10  warning  'faGithub' is defined but never used          no-unused-vars

/home/diogo/workspace/w3f/ui/src/components/apps/asset-exchange/asset-exchange.component.js
  20:10  warning  'abi' is assigned a value but never used  no-unused-vars

/home/diogo/workspace/w3f/ui/src/components/apps/asset-exchange/publish-sale/publish-sale.component.js
  33:6  warning  React Hook useEffect has missing dependencies: 'props.account' and 'unsub_assetClasses'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

/home/diogo/workspace/w3f/ui/src/components/apps/asset-exchange/view-registry/view-registry.component.js
  32:6  warning  React Hook React.useEffect has a missing dependency: 'loadAvailableAssets'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

/home/diogo/workspace/w3f/ui/src/components/apps/asset-exchange/view-registry/view-registry.modal.js
  47:6  warning  React Hook React.useEffect has missing dependencies: 'handleQueryAssetClassDetails' and 'props.assetId'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

/home/diogo/workspace/w3f/ui/src/components/assets/asset-class-detail/asset-class-detail.component.js
   9:33  warning  'hexToU8a' is defined but never used                                                                                                                                                no-unused-vars
  26:10  warning  'publicKey' is assigned a value but never used                                                                                                                                      no-unused-vars
  62:6   warning  React Hook useEffect has missing dependencies: 'props.api', 'queryAssetClassDetails', 'queryMetadata', and 'queryRuleExecutor'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

/home/diogo/workspace/w3f/ui/src/components/assets/asset-class-details.component.js
  34:9  warning  'StyledTableRow' is assigned a value but never used                                                            no-unused-vars
  46:9  warning  'navigate' is assigned a value but never used                                                                  no-unused-vars
  52:6  warning  React Hook useEffect has a missing dependency: 'props.ipfs'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

/home/diogo/workspace/w3f/ui/src/components/block-monitor/block-monitor.component.js
   2:20  warning  'useEffect' is defined but never used                 no-unused-vars
   3:8   warning  'Typography' is defined but never used                no-unused-vars
   5:10  warning  'encrypt' is defined but never used                   no-unused-vars
   6:10  warning  'stringToU8a' is defined but never used               no-unused-vars
   6:23  warning  'u8aToHex' is defined but never used                  no-unused-vars
   7:10  warning  'call_create_request' is defined but never used       no-unused-vars
   7:31  warning  'query_ingestion_staging' is defined but never used   no-unused-vars
   8:10  warning  'Button' is defined but never used                    no-unused-vars
  12:10  warning  'historyDepth' is assigned a value but never used     no-unused-vars
  12:24  warning  'setHistoryDepth' is assigned a value but never used  no-unused-vars
  13:10  warning  'blockData' is assigned a value but never used        no-unused-vars
  13:21  warning  'setBlockData' is assigned a value but never used     no-unused-vars
  15:9   warning  'BlockData' is assigned a value but never used        no-unused-vars

/home/diogo/workspace/w3f/ui/src/components/home/home.component.js
   14:22  warning  'Router' is defined but never used                                                                                                                  no-unused-vars
  157:8   warning  React Hook useEffect has missing dependencies: 'initializeApi', 'props.host', and 'props.port'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

/home/diogo/workspace/w3f/ui/src/components/upload/upload.component.js
   3:8   warning  'Typography' is defined but never used                                                                                                                                                                                                                                                                                                                                                                         no-unused-vars
  35:15  warning  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching  react-hooks/exhaustive-deps
  43:8   warning  React Hook useEffect has missing dependencies: 'navigate', 'props.account', 'props.api', 'props.ipfs', and 'subscribe_ingestion_staging'. Either include them or remove the dependency array                                                                                                                                                                                                                   react-hooks/exhaustive-deps

✖ 33 problems (0 errors, 33 warnings)

```

-----------
### Running the system:

I could spin up a single node but to configure all nodes I don't have access to AWS EC2 instances to follow the tutorial. The ideal situation is to run all nodes in a single machine to test the system. This is probably possible by configuring ports and connecting the nodes in some way. A docker-compose file that spins up all nodes and services needed to test the system would be very suitable for this task.

### cryptographic scheme:

Just one doubt, what is currently preventing a peer collect all parts of the threshold cryptography and reconstructing the key? Is that a problem for your cryptographic scheme?

