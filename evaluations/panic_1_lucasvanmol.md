# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/panic.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic/blob/master/LICENSE | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic/blob/master/README.md | Great inline documentation and READMEs throughout all the components of the projects. | 
| 0c.  | Testing guide |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic#running-the-panic-test-suite | Everything passes and there is extensive coverage | 
| 0d.  | Docker |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic/blob/master/docker-compose.yml | Modular docker setup that spins up all the containers required for this application | 
| 0e.  | Article |<ul><li>[x] </li></ul>| https://docs.google.com/document/d/18J3DdySEKxpMpxpzpDkr5VObVblvySDNxEWgRfIXFFg/edit?usp=sharing | Shared with grantspr | 
| 1.  | Research |<ul><li>[x] </li></ul>| https://docs.google.com/spreadsheets/d/1qvbmQIo0Kjnnwlu98KS-vc09n8QBynVQ1gCOHVUj-5s/edit?usp=sharing | Document containing information about the metrics provided by a polkadot node | 
| 2.  | Monitors |<ul><li>[x] </li></ul>|https://github.com/SimplyVC/panic/tree/master/alerter/src/monitors/network, https://github.com/SimplyVC/panic/blob/master/alerter/src/monitors/substrate.py | | 
| 3.  | Data transformers |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic/blob/master/alerter/src/data_transformers/node/substrate.py, https://github.com/SimplyVC/panic/blob/master/alerter/src/data_transformers/networks/substrate.py | |
| 4.  | Data store |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic/blob/master/alerter/src/data_store/stores/network/substrate.py, https://github.com/SimplyVC/panic/blob/master/alerter/src/data_store/stores/node/substrate.py | Provides data store in redis/mongo as required | 
| 5.  | Alerter |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic/blob/master/alerter/src/alerter/alerts/node/substrate.py, https://github.com/SimplyVC/panic/blob/master/alerter/src/alerter/alerts/network/substrate.py | Provides substrate-specific alert messages for their generic `Alert` class. Alerts were tested using the Telegram alert channel, in addition to the provided UI/logs themselves. Many more alert channels are possible (Slack, Email, OpsGenie, Pagerduty, Twilio). | 
| 6.  | UI |<ul><li>[x] </li></ul>| https://github.com/SimplyVC/panic/tree/master/ui | Works | 
| 7.  | UAT |<ul><li>[x] </li></ul>| https://drive.google.com/file/d/1aLOZSfFdlxyU3Fo3wPExrPcfAutIXUMI/view?usp=sharing | User Acceptance Testing document with various tests of the system as a whole | 


## General Notes

Congratulations on successfully leveraging your previous work in order to deliver a great amount of functionality for the substrate network. 

The extensive testing in both the testing suite and the UAT document gave me confidence in the large amount of alert types and alert channels offered seeing as it would be impractical to exhaustively test.
