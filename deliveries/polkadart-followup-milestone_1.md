# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadart_extension.md
* **Milestone Number:** 1

**Context**

We have divided this grant into two milestones:
1 - Make a full developer-friendly documentation of what has been developed already
2 - New features and more documentation

Though this milestone was focused on documentation we have made significant progress into items from milestone 2:
- https://github.com/leonardocustodio/polkadart/pull/489
- https://github.com/leonardocustodio/polkadart/pull/487

And that's the reason it took more time than antecipated to submit this milestone.

We have made a documentation focused website that can be accessed at https://polkadart.dev
The documentation repository is also public and accepts contributions from any developer, located at: https://github.com/polkadart/docs

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/polkadart/docs/blob/main/LICENSE | | 
| 0b.  | Documentation | https://polkadart.dev | | 
| 1a.  | API docs | https://polkadart.dev/api/overview | | 
| 1c.  | API examples | https://polkadart.dev/api/state/#sample-usage | | 
| 2a.  | Metadata docs | https://polkadart.dev/metadata/overview | | 
| 2b.  | Metadata examples | https://polkadart.dev/metadata/overview/#example-stateapi | | 
| 3a.  | Keyring docs | https://polkadart.dev/keyring-signer/overview | | 
| 3b.  | Keyring examples | https://polkadart.dev/keyring-signer/keypair | | 
| 1d.  | API faq | http://polkadart.dev/guides/listen-blocks | | 
| 2c.  | Metadata faq | https://polkadart.dev/guides/read-storage | | 
| 3c.  | Keyring faq | http://localhost:4321/guides/make-transfer | | 

We have renamed the `Metadata` section to `Blockchain API` the reason for that is that our `polkadart_cli` tool uses the metadata to generate all interfaces to each network.
We have replaced `FAQs` by `Guides` as we don't really have any "frequently asked questions" being asked right now. Each of those shows common use-cases that people would "ask how to do it" in each of those areas.

**Additional Information**

We have been investing a good amount of time in making the documentation as good as possible. We believe that just like polkadot.wiki a good well-structured, clean, and easy to follow documentation is more important than just a huge amount of information that people can't follow. If the person only wants access to reference we have provided references to all methods/apis from every package in the website as well. Finally, we are starting to setup a community to help people to use Polkadart, we have setup a dev group at https://t.me/polkadart which can be used for doubts or help.
