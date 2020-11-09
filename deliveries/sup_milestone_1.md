# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/65
* **Milestone Number:** 1

Just run:

```
$ cargo install sup
$ sup new <node-template>
$ cd <node-template> && cargo build
```

And it will work.

| Number | Deliverable                    | Specification                             |
| ------ | ------------------------------ | ----------------------------------------- |
| 0      | `sup new <node-template>`      | New node-template in one command          |
| 1      | `sup update`                   | Update sup registry                       |
| 2      | `sup source --query <pattern>` | List substrate dependencies with versions |
| 3      | `sup tag --limit <n>`          | List avaiable registry tags               |
