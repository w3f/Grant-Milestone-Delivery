# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Shivarthu](https://github.com/w3f/Grants-Program/blob/master/applications/Shivarthu.md) 
* **Milestone Number:** 2

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence |https://github.com/reaudito/shivarthu/blob/main/LICENSE | GNU General Public License v3.0| 
| 0b.  | Documentation | https://github.com/reaudito/shivarthu/blob/main/README.md | Technical Details and some documentation is written in comments with the code | 
| 0c.  |  Testing Guide |  https://github.com/reaudito/shivarthu-client-tests <br/> https://github.com/reaudito/shivarthu/blob/main/README.md  | Tests for UI and tests for project tips, positive-externality, department-funding |
| 0d.  | Docker | https://github.com/reaudito/shivarthu/blob/main/Containerfile | Docker compose file | 
| 0e. | Article | https://github.com/reaudito/shivarthu/blob/main/docs/Shivarthu.md | Technical Details and whitepaper |
|  1.  |  Substrate module: Peer review system | https://github.com/reaudito/shivarthu/tree/main/custom-pallets/departments <br/> https://github.com/reaudito/shivarthu/tree/main/custom-pallets/department-funding |Department and project review is done through schelling game|
| 2. | Substrate module: Fund allocation | https://github.com/reaudito/shivarthu/tree/main/custom-pallets/positive-externality <br/> https://github.com/reaudito/shivarthu/tree/main/custom-pallets/project-tips <br/> https://github.com/reaudito/shivarthu/tree/main/custom-pallets/department-funding| Fund is allocated for creation of positive externality through score schelling game <br/> Also fund allocation is done for departments and project tips|
| 3. | User interface | https://github.com/reaudito/shivarthu-client <br/> https://github.com/reaudito/shivarthu-client-tests  | User interface for the app and testing the ui of the app|
| 4. | Search Engine | https://github.com/reaudito/shivarthu_offchain_computing| Search feature for projects |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
