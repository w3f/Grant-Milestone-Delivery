# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/65
* **Milestone Number:** 2


Run: 

```
$ sup upgrade --tag <substrate-tag> --registry <substrate-based-registry>
```

+ Upgrades the registry of substrate by tag for the current project.
+ Supports customize subtrate registry(including substrate-based registry)


| Number | Deliverable                          | Specification                                                    |
| ------ | ------------------------------------ | ------------------------------------------------------------     |
| 0      | `sup new <node-template> --tag <t> ` | New node-template with specified tag and registry                |
| 1      | `sup config --edit --registry <r>`   | Show or edit the config file                                     |
| 2      | `sup source --tag <t>`               | List substrate dependencies with tag flag                        |
| 3      | `sup tag`                            | List avaiable tags of the registry in config                     |
| 4      | `sup switch --tag <t>`               | Switch the tag of the target project to the target or latest tag |

> Note: 
> 
> Here are some changes in this deliverable.
> 
> ## `config.toml`
>
> We use a `config.toml` under `~/.sup/config.toml` to handle the customize
> subtrate registry instead of adding `--registry` flag to every commands, and use `sup switch` replacing `sup `
>
> ## `sup switch`
> 
> We use `sup switch` to replace `sup upgrade`, because the `upgrade` command is easy to be mixed up with `update`.




