# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/65
* **Milestone Number:** 2


Run: 

```
$ sup update --tag <substrate-tag> --project <project-path>
```

+ Upgrades the registry of substrate by tags for the target project.
+ Supports customized subtrate registry(including substrate-based registry)


| Number | Deliverable                               | Specification                                                |
| ------ | ------------------------------------      | ------------------------------------------------------------ |
| 0      | `sup new <node-template> --tag <t> `      | New node-template with specified tag and registry            |
| 1      | `sup config edit/set/list `               | Show or edit the config file                                 |
| 2      | `sup list source/tag`                     | List substrate dependencies or tags                          |
| 4      | `sup update --tag <tag> --project <path>` | Switch registry tags for target project                      |

> Note: 
> 
> Here are some changes in this deliverable.
> 
> ## `config.toml`
>
> We use a `config.toml` under `~/.sup/config.toml` to handle the customize
> subtrate registry instead of adding `--registry` flag to every commands, and use `sup switch` replacing `sup `

