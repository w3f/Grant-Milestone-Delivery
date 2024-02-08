
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Validator_Monitoring_Service.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| Apache 2.0 |  |
| 0b. | Documentation | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service/blob/main/docs/overview.md |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service#events-exporters-and-grafana-dashboard |  |
| 0d. | Docker | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service |  |
| 1. | Events exporter | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service/tree/main/exporters/events |  |
| 2. | Telegram bot UI + support chat upgrades | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service/tree/main/bot |  |
| 3. | Create a landing page | <ul><li>[x] </li></ul>| https://maas.p2p.org/ |  |

## Evaluation V4

### Bot 

The problems reported in Evaluation V3 are solved.

## Evaluation V3

### Docker

Docker is working again.

### Bot

I received the link to the dashboard this time, but when I used the command `destroy my_id`, I got this log in the docker.

<details>

```
polkadot_monitoring_service-bot-1                     	| ERROR:asyncio:Task exception was never retrieved
polkadot_monitoring_service-bot-1                     	| future: <Task finished name='Task-23' coro=<Dispatcher._process_polling_updates() done, defined at /usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py:407> exception=NameError("name 'functions' is not defined")>
polkadot_monitoring_service-bot-1                     	| Traceback (most recent call last):
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py", line 415, in _process_polling_updates
polkadot_monitoring_service-bot-1                     	| 	for responses in itertools.chain.from_iterable(await self.process_updates(updates, fast)):
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py", line 235, in process_updates
polkadot_monitoring_service-bot-1                     	| 	return await asyncio.gather(*tasks)
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/handler.py", line 117, in notify
polkadot_monitoring_service-bot-1                     	| 	response = await handler_obj.handler(*args, **partial_data)
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py", line 256, in process_update
polkadot_monitoring_service-bot-1                     	| 	return await self.message_handlers.notify(update.message)
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/handler.py", line 117, in notify
polkadot_monitoring_service-bot-1                     	| 	response = await handler_obj.handler(*args, **partial_data)
polkadot_monitoring_service-bot-1                     	|   File "/app/./handlers/destroy.py", line 25, in command_destroy
polkadot_monitoring_service-bot-1                     	| 	functions.deploy(chat_id,'destroy')
polkadot_monitoring_service-bot-1                     	| NameError: name 'functions' is not defined
```

</details>

I tried to build again and received this log. (In MY_ID is my Telegram ID)

<details>

```
polkadot_monitoring_service-bot-1                     	| ERROR:asyncio:Task exception was never retrieved
polkadot_monitoring_service-bot-1                     	| future: <Task finished name='Task-29' coro=<Dispatcher._process_polling_updates() done, defined at /usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py:407> exception=Exception('Aborting attempt to copy existing app. Chat ID: MY_ID')>
polkadot_monitoring_service-bot-1                     	| Traceback (most recent call last):
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py", line 415, in _process_polling_updates
polkadot_monitoring_service-bot-1                     	| 	for responses in itertools.chain.from_iterable(await self.process_updates(updates, fast)):
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py", line 235, in process_updates
polkadot_monitoring_service-bot-1                     	| 	return await asyncio.gather(*tasks)
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/handler.py", line 117, in notify
polkadot_monitoring_service-bot-1                     	| 	response = await handler_obj.handler(*args, **partial_data)
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/dispatcher.py", line 256, in process_update
polkadot_monitoring_service-bot-1                     	| 	return await self.message_handlers.notify(update.message)
polkadot_monitoring_service-bot-1                     	|   File "/usr/local/lib/python3.10/dist-packages/aiogram/dispatcher/handler.py", line 117, in notify
polkadot_monitoring_service-bot-1                     	| 	response = await handler_obj.handler(*args, **partial_data)
polkadot_monitoring_service-bot-1                     	|   File "/app/./handlers/build.py", line 28, in command_build
polkadot_monitoring_service-bot-1                     	| 	deploy(chat_id,'./values.yml')
polkadot_monitoring_service-bot-1                     	|   File "/app/./functions/functions.py", line 10, in deploy
polkadot_monitoring_service-bot-1                     	| 	raise Exception("Aborting attempt to copy existing app. Chat ID: {}".format(chat_id))
polkadot_monitoring_service-bot-1                     	| Exception: Aborting attempt to copy existing app. Chat ID: MY_ID
```

</details>

I was able to use the support function. I was able to send a message, receive, and respond. But I couldn't close the conversation and start a new one. This application has some problems if the user chat is the same as the admin chat.

I used `deactivate_support My_ID` and received the message "Deactivated.", but when I used `/support` again, I received "You already have an active support conversation."


## Evaluation V2

### Documentation

Links are working fine.

### Docker and Bot

This time, the bot didn't start with Docker.

<details>

```
user@localhost:~/Documents/monitoringService/polkadot_monitoring_service$ docker start polkadot_monitoring_service-bot-1 
polkadot_monitoring_service-bot-1


user@localhost:~/Documents/monitoringService/polkadot_monitoring_service$ docker ps -a
CONTAINER ID   IMAGE                                                    COMMAND                  CREATED          STATUS                              PORTS                                            NAMES
7b9d35eda7ea   grafana/grafana:latest                                   "/run.sh"                14 minutes ago   Up 14 minutes                       0.0.0.0:3000->3000/tcp, :::3000->3000/tcp        polkadot_monitoring_service-grafana-1
133abc02efc1   polkadot_monitoring_service-polkadot_common_exporter     "python3 app.py"         14 minutes ago   Up 14 minutes                                                                        polkadot_monitoring_service-polkadot_common_exporter-1
4d444f1af99b   postgres:13                                              "docker-entrypoint.s…"   14 minutes ago   Up 14 minutes                       0.0.0.0:5432->5432/tcp, :::5432->5432/tcp        postgres
d07defa8aa9d   polkadot_monitoring_service-kusama_finality_exporter     "python3 app.py"         14 minutes ago   Up 14 minutes                                                                        polkadot_monitoring_service-kusama_finality_exporter-1
2dd50eb90473   polkadot_monitoring_service-bot                          "python3 ./"             14 minutes ago   Exited (1) Less than a second ago                                                    polkadot_monitoring_service-bot-1
cb2f1716d517   polkadot_monitoring_service-polkadot_events_exporter     "/app/events-exporter"   14 minutes ago   Up 14 minutes                                                                        polkadot_monitoring_service-polkadot_events_exporter-1
bd2f0920ca45   dpage/pgadmin4                                           "/entrypoint.sh"         14 minutes ago   Up 14 minutes                       443/tcp, 0.0.0.0:5050->80/tcp, :::5050->80/tcp   pgadmin
3322cb40d48f   prom/prometheus:latest                                   "/bin/prometheus --c…"   14 minutes ago   Up 14 minutes                       0.0.0.0:9090->9090/tcp, :::9090->9090/tcp        polkadot_monitoring_service-prometheus-1
51a9e3189070   polkadot_monitoring_service-polkadot_finality_exporter   "python3 app.py"         14 minutes ago   Up 14 minutes                                                                        polkadot_monitoring_service-polkadot_finality_exporter-1
09a98c2082ee   polkadot_monitoring_service-kusama_events_exporter       "/app/events-exporter"   14 minutes ago   Up 14 minutes                                                                        polkadot_monitoring_service-kusama_events_exporter-1
2a0ca52a80f0   prom/alertmanager:latest                                 "/bin/alertmanager -…"   14 minutes ago   Up 14 minutes                       0.0.0.0:9093->9093/tcp, :::9093->9093/tcp        polkadot_monitoring_service-alertmanager-1
bc6ef33e3d19   polkadot_monitoring_service-kusama_common_exporter       "python3 app.py"         14 minutes ago   Up 14 minutes                                                                        polkadot_monitoring_service-kusama_common_exporter-1


user@localhost:~/Documents/monitoringService/polkadot_monitoring_service$ docker logs polkadot_monitoring_service-bot-1 
Traceback (most recent call last):
  File "/usr/lib/python3.10/runpy.py", line 196, in _run_module_as_main
    return _run_code(code, main_globals, None,
  File "/usr/lib/python3.10/runpy.py", line 86, in _run_code
    exec(code, run_globals)
  File "/app/./__main__.py", line 6, in <module>
    from aiogram.contrib.fsm_storage.memory import MemoryStorage
ModuleNotFoundError: No module named 'aiogram.contrib'

```

</details>

## Evaluation V1

### About this Milestone

I noticed the Deliverables of this milestone delivery has some differences compared with the Application Document. Have you opened an [amendment request](https://github.com/w3f/Grants-Program#changes-to-a-grant-after-approval)? If not, you need to do it for change the deliverables of the milestones.

### Documentation

I noticed some broken links in the README, [the docker installation instructions](https://github.com/p2p-org/polkadot_monitoring_service/blob/main/README.md#how-to-setup-run-and-test), and all [links in the References](https://github.com/p2p-org/polkadot_monitoring_service/blob/main/README.md#how-to-setup-run-and-test). The documentation can be improved to better instructions to use the bot.

### Docker

The docker starts without problems.

### Telegram Bot

I created a new bot and used the commands `/start` and `/build`. After the build, I checked the `values.yml` (I changed the original Id).  

```
root@865c7112c54c:/app# cat values.yml
applications:
- 2784512564
```

Then, I used the command `/destroy` and checked again the `values.yml`.

```
root@865c7112c54c:/app# cat values.yml
applications: []
```

I built again and activated the `/promealert` and waited for the personalized Dashboard, but the bot didn't return anything related to the Dashboard. 

When I was testing the Dashboard, I received two alerts at different times.

```
Prometheus alerting

Severity: high
Alert name: Common exporter availibility
Message: Common exporter kusama_common_exporter is down.

You can always disable notification such this by calling /promalert

Feel free to contact us /support if any questions.
```

```
Prometheus alerting

Severity: high
Alert name: Common exporter availibility
Message: Common exporter polkadot_common_exporter is down.

You can always disable notification such this by calling /promalert

Feel free to contact us /support if any questions.
```

After receiving these alerts, I restarted the docker containers.

### Dashboard

For some reason, the docker container stopped working properly before the bot reported the problems mentioned above, but the functionalities of the dashboard seems to be fine.
