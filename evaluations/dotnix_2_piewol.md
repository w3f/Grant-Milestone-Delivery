# Evaluation

- **Status:** accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dotnix.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/sporyon/dotnix-core/blob/470096931e56374ebc3fcc0af821dd774ef44d10/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/README.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [/checks](https://github.com/sporyon/dotnix-core/tree/470096931e56374ebc3fcc0af821dd774ef44d10/checks) | Testing guide works well |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [docker.nix](https://github.com/sporyon/dotnix-core/blob/470096931e56374ebc3fcc0af821dd774ef44d10/docker.nix) | works |
| 1. | Audit Trail | <ul><li>[x] </li></ul> | [trail](https://github.com/sporyon/dotnix-core/blob/470096931e56374ebc3fcc0af821dd774ef44d10/pkgs/list-dependencies.nix) | node keys can be set and the validator starts up |
| 2 | CLI Tool Development | <ul><li>[x] </li></ul> | [CLI](https://github.com/sporyon/dotnix-core/blob/470096931e56374ebc3fcc0af821dd774ef44d10/nixosModules/polkadot-validator.nix) | all commands are working |
| 2a. | Functions| <ul><li>[x] </li></ul> | [polkadot-validator.nix](https://github.com/sporyon/dotnix-core/blob/470096931e56374ebc3fcc0af821dd774ef44d10/nixosModules/polkadot-validator.nix) | ok |


## General Notes
The validator runs fine in Docker. Also visible in the westend telemetry. Sorry for the delay on my side. Some failures were caused by a faulty ubuntu image.

<details>

```
● polkadot-validator.service - Polkadot Validator
     Loaded: loaded (/etc/systemd/system/polkadot-validator.service; linked; preset: enabled)
     Active: activating (auto-restart) (Result: exit-code) since Tue 2024-07-30 22:52:36 UTC; 10s ago
       Docs: https://github.com/paritytech/polkadot
    Process: 514 ExecStart=/nix/store/88ikqbzkq5d7vnlj77l6gjbpw6ph23nx-polkadot-1.14.0/bin/polkadot --validator --name=dotnix-docker --chain=westend --base-pa>
   Main PID: 514 (code=exited, status=1/FAILURE)
         IP: 1.0K in, 780B out
        CPU: 45ms
```
turns out that there seems to be an issue with setting the node key. Even after running
```
$ polkadot key generate-node-key | polkadot-validator --set-node-key
```
The shortened error output after running 
```
$ journalctl -n 1000 -f -u polkadot-validator.service
```

```[root@bc3024fea3c8:~]# polkadot key generate-node-key | polkadot-validator --set-node-key
12D3KooWPihimSqbZkEV89YmWnnv8sKEWk68Z1nqRyZsE4jfksmi

[root@bc3024fea3c8:~]# systemctl status polkadot-validator.service
● polkadot-validator.service - Polkadot Validator
     Loaded: loaded (/etc/systemd/system/polkadot-validator.service; linked; pr>
     Active: active (running) since Thu 2024-08-08 08:02:21 UTC; 15min ago
```
</details>

## Audit Trail

works, command can be used within docker. It's annoying to search for the right path but I assume there is nothing you can do about it.

## Testing
All tests are finishing

<details>

```
vm-test-run-list-dependencies> (finished: must succeed: list-dependencies --all /nix/store/axpdxi5n90bsh2l6pk0l2f5804v8bg63-mockdep-a | sort | sha256sum -c /nix/store/axdc284j54rqvfwlh1bq8v9japjcbp7g-all-dependencies.sha256sum, in 103.28 seconds)
vm-test-run-list-dependencies> alice: must succeed: list-dependencies --runtime /nix/store/axpdxi5n90bsh2l6pk0l2f5804v8bg63-mockdep-a | sort | sha256sum -c /nix/store/grx7vv5vg9n7y3qn9l4k9i2q7m18fjam-runtime-dependencies.sha256sum
vm-test-run-list-dependencies> alice # [  104.644609] systemd[1]: Finished Networking Setup.
vm-test-run-list-dependencies> alice # [  104.895981] systemd[1]: Starting Extra networking commands....
vm-test-run-list-dependencies> alice # [  106.089879] systemd[1]: Finished Extra networking commands..
vm-test-run-list-dependencies> alice # [  106.155521] systemd[1]: Reached target Network.
vm-test-run-list-dependencies> alice # [  106.314988] systemd[1]: Starting Permit User Sessions...
vm-test-run-list-dependencies> (finished: must succeed: list-dependencies --runtime /nix/store/axpdxi5n90bsh2l6pk0l2f5804v8bg63-mockdep-a | sort | sha256sum -c /nix/store/grx7vv5vg9n7y3qn9l4k9i2q7m18fjam-runtime-dependencies.sha256sum, in 6.00 seconds)
vm-test-run-list-dependencies> (finished: run the VM test script, in 109.28 seconds)
vm-test-run-list-dependencies> alice # [  107.865705] systemd[1]: Finished Permit User Sessions.
vm-test-run-list-dependencies> alice # [  108.157429] systemd[1]: Started Getty on tty1.
vm-test-run-list-dependencies> alice # [  108.239855] systemd[1]: Reached target Login Prompts.
vm-test-run-list-dependencies> test script finished in 110.66s
```
</details>



