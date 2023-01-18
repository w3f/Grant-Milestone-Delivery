# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** Link to the merged contract - https://github.com/w3f/Grants-Program/blob/master/applications/panic.md
* **Milestone Number:** 1

**Context** 

PANIC is a monitoring and alering tool for node operators. This version brings PANIC closer to the Substrate validator community through the introduction of high priority monitorables.  
Operators can now monitor and be alerted on their nodes (non-validator and validator) and on the networks their nodes are connected to.


**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/SimplyVC/panic/blob/master/LICENSE| ...| 
| 0b.  | Documentation |https://github.com/SimplyVC/panic/blob/master/README.md| ...| 
| 0c.  | Testing guide |https://github.com/SimplyVC/panic#running-the-panic-test-suite| ...| 
| 0d.  | Docker |https://github.com/SimplyVC/panic/blob/master/docker-compose.yml| ...| 
| 0e.  | Article |https://docs.google.com/document/d/18J3DdySEKxpMpxpzpDkr5VObVblvySDNxEWgRfIXFFg/edit?usp=sharing| This first draft of the article has been shared with the foundation for review.| 
| 1.  | Research |https://docs.google.com/spreadsheets/d/1qvbmQIo0Kjnnwlu98KS-vc09n8QBynVQ1gCOHVUj-5s/edit?usp=sharing| ...| 
| 2.  | Monitors |https://github.com/SimplyVC/panic/tree/master/alerter/src/monitors/network, https://github.com/SimplyVC/panic/blob/master/alerter/src/monitors/substrate.py| ...| 
| 3.  | Data transformers |https://github.com/SimplyVC/panic/blob/master/alerter/src/data_transformers/node/substrate.py, https://github.com/SimplyVC/panic/blob/master/alerter/src/data_transformers/networks/substrate.py| ...|
| 4.  | Data store |https://github.com/SimplyVC/panic/blob/master/alerter/src/data_store/stores/network/substrate.py, https://github.com/SimplyVC/panic/blob/master/alerter/src/data_store/stores/node/substrate.py| ...| 
| 5.  | Alerter |https://github.com/SimplyVC/panic/blob/master/alerter/src/alerter/alerts/node/substrate.py, https://github.com/SimplyVC/panic/blob/master/alerter/src/alerter/alerts/network/substrate.py| ...| 
| 6.  | UI |https://github.com/SimplyVC/panic/tree/master/ui| ...| 
| 7.  | UAT |https://drive.google.com/file/d/1aLOZSfFdlxyU3Fo3wPExrPcfAutIXUMI/view?usp=sharing| ...| 

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
