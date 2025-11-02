# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/dotnix-follow-up.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|https://github.com/sporyon/dotnix-core/tree/3b7109add350469fb1e7a0b4afead04228cb8678/LICENSE| MIT|
| 0b. | Documentation | <ul><li>[x] </li></ul>|https://github.com/sporyon/dotnix-core/tree/3b7109add350469fb1e7a0b4afead04228cb8678/README.md, https://github.com/sporyon/dotnix-core/tree/3b7109add350469fb1e7a0b4afead04228cb8678/example.nix | Documentation for `polkadot-validator` script currently lacking - agreed to complete in M2, see general notes |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul>|https://github.com/sporyon/dotnix-core/tree/3b7109add350469fb1e7a0b4afead04228cb8678/checks/ | Test suite ran & confirmed passing natively on NixOS outside Docker container |
| 0d. | Docker | <ul><li>[x] </li></ul>|https://github.com/sporyon/dotnix-core/blob/3b7109add350469fb1e7a0b4afead04228cb8678/example.nix#L56-L92 | - |
| 1. | SELinux | <ul><li>[x] </li></ul>|https://github.com/sporyon/dotnix-core/tree/main/pkgs/selinux | Initially hardcoded ports & no full PAM coverage. Fixed in followups by grantee. |
| 2. | Usability |<ul><li>[x] </li></ul>| https://github.com/sporyon/dotnix-core/commit/ddff867f8a6c4aa80778abd06f5312d5181adce3 | tested manually & via test linked in commit |

## General Notes

Initial delivery had some issues, but grantee was very receptive to feedback and handled it productively & efficiently - see discussion on https://github.com/w3f/Grant-Milestone-Delivery/pull/1278 for details.

Note that two issues remain:
1. Lack of multivalidator support
2. `polkadot-validator` bash script still quite barebones / not user friendly: no `--help` command nor completion.

Agreed with grantee to delay handling these two issues to milestone 2 - see discussion.
