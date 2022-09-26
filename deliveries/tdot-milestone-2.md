# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones.
>
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **Application Document:** [tDOT](https://github.com/w3f/Grants-Program/blob/master/applications/tdot.md).
* **Milestone Number:** 2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work.
>
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0b. | Documentation |[architecture](https://github.com/nutsfinance/stable-asset/blob/a8487db99beb186a380965c3e1700e2bfee12a7e/architecture.png)||
| 0c.  | Testing |[xcm](https://github.com/nutsfinance/stable-asset/blob/a8487db99beb186a380965c3e1700e2bfee12a7e/lib/stable-asset-xcm/src/tests.rs#L158-L251) [stable-asset](https://github.com/nutsfinance/stable-asset/blob/a8487db99beb186a380965c3e1700e2bfee12a7e/lib/stable-asset/src/tests.rs#L1070-L1107)||
| 0d.  | Docker |[Acala](https://github.com/AcalaNetwork/Acala/blob/ad240e9b96d4338a66fe7daad5bf53d8bb6a25f8/scripts/Dockerfile) [bifrost](https://github.com/nutsfinance/bifrost/blob/f0cba77760cf7e9b4576f6a255c6496edd36aad0/Dockerfile) [Local](https://github.com/nutsfinance/stable-asset/blob/a8487db99beb186a380965c3e1700e2bfee12a7e/Dockerfile)||
| 1.  | Substrate module: Stable Asset Pallet |[code](https://github.com/nutsfinance/stable-asset/blob/a8487db99beb186a380965c3e1700e2bfee12a7e/lib/stable-asset/src/lib.rs#L765-L796)||
| 2.  | Substrate module: Stable Asset XCM Pallet |[code](https://github.com/nutsfinance/stable-asset/blob/a8487db99beb186a380965c3e1700e2bfee12a7e/lib/stable-asset-xcm/src/lib.rs#L297-L316) [local invocation](https://github.com/AcalaNetwork/Acala/blob/ad240e9b96d4338a66fe7daad5bf53d8bb6a25f8/runtime/karura/src/lib.rs#L1627-L1774) [xcm invocation](https://github.com/nutsfinance/bifrost/blob/f0cba77760cf7e9b4576f6a255c6496edd36aad0/runtime/bifrost-kusama/src/lib.rs#L1976-L1997)||
