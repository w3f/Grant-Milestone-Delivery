# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dotnix.md
* **Milestone Number:** 1

**Context** (optional)
-
**Deliverables**

| Number | Deliverable | Link | 
| -----: | ----------- | ------------- |
| **0a.** | License | https://github.com/sporyon/dotnix-core/blob/main/LICENSE |
| **0b.** | Documentation | https://github.com/sporyon/dotnix-core/blob/main/README.md |
| **0c.** | Testing and Testing Guide | https://github.com/sporyon/dotnix-core/tree/main/checks |
| **0d.** | Docker | https://github.com/sporyon/dotnix-core/blob/main/docker.nix|
| **0e.** | Article | https://github.com/sporyon/dotnix-core/blob/main/article.md |
| 1. | Package Polkadot binary | https://github.com/sporyon/dotnix-core/blob/main/flake.nix#L31 |
| 2. | NixOS Validator Module | https://github.com/sporyon/dotnix-core/blob/main/nixosModules/polkadot-validator.nix |
| 3. | Secret Management | https://github.com/sporyon/dotnix-core/blob/main/nixosModules/polkadot-validator.nix#L61-L97 |
| 4. | Tests for secret maangement | https://github.com/sporyon/dotnix-core/blob/main/checks/polkadot-validator-secrets.nix |
| 5. | Basic Security Hardening | https://github.com/sporyon/dotnix-core/blob/main/nixosModules/polkadot-validator.nix#L112 |
|  |  |  |
