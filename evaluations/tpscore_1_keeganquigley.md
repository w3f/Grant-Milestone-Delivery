# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/TPScore.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| **0a.** | License | <ul><li>[x] </li></ul> |[Licence](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/LICENSE)| GPLv3|
| **0b.** | Documentation | <ul><li>[x] </li></ul> |[Documentation](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/README.md)| Great docs.
| **0c.** | Tests and Testing Guide | <ul><li>[x] </li></ul> |[Tests](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/airflow/dags/test_get_data_tpscore.py), [Testing Guide](https://github.com/BCS-Labs/tpscore-etl-system/tree/main#testing-guide)| Looks good. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Airflow container](https://github.com/BCS-Labs/tpscore-etl-system/tree/main/airflow), [MySQL container](https://github.com/BCS-Labs/tpscore-etl-system/tree/main/db), [Installation Guide](https://github.com/BCS-Labs/tpscore-etl-system/tree/main#installation)| Looks good. |
| 1. | Database schema | <ul><li>[x] </li></ul> |[DB Schema](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/db/db_schema.sql)| Looks good. |
| 2. | Airflow DAGs  | <ul><li>[x] </li></ul> |[Airflow DAG](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/airflow/dags/dag_get_data_tpscore.py)| Looks good. |

# General Notes

Great work! Code is clean and well documented. I appreciate the comprehensive docs. I was able to run sample queries in both the local UI and the command line. Looking forward to the second milestone.

Docker instructions work. One container exits but I'm assuming this is normal since it's just an init.
```
[+] Running 5/5
 ✔ Container airflow-postgres-1           Healthy                                                                                                        1.3s 
 ✔ Container airflow-airflow-init-1       Exited                                                                                                        19.3s 
 ✔ Container airflow-airflow-triggerer-1  Started                                                                                                       19.7s 
 ✔ Container airflow-airflow-webserver-1  Started                                                                                                       20.0s 
 ✔ Container airflow_scheduler            Started                                                                                                       19.7s 
ubuntu@ip-172-31-27-185:~/tpscore-etl-system/airflow$ docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS                             PORTS                                       NAMES
231fd75b8b92   airflow-airflow-triggerer   "/usr/bin/dumb-init …"   44 seconds ago   Up 24 seconds (health: starting)   8080/tcp                                    airflow-airflow-triggerer-1
dfd623f828b5   airflow-airflow-webserver   "/usr/bin/dumb-init …"   44 seconds ago   Up 23 seconds (health: starting)   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   airflow-airflow-webserver-1
073f99ca54a7   airflow-airflow-scheduler   "/usr/bin/dumb-init …"   44 seconds ago   Up 24 seconds (health: starting)   8080/tcp                                    airflow_scheduler
399936d7c87e   postgres:13                 "docker-entrypoint.s…"   5 minutes ago    Up 5 minutes (healthy)             5432/tcp                                    airflow-postgres-1
d3b5b37b1403   mysql_tpscore               "/entrypoint.sh mysq…"   7 minutes ago    Up 7 minutes (healthy)             3306/tcp, 33060-33061/tcp                   db_mysql
ubuntu@ip-172-31-27-185:~/tpscore-etl-system/airflow$ 
```
I'm also able to use Docker Compose to get them all running locally on my Apple machine:

<br>![init](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/1d1632bc-7864-4611-9f86-45eb6d149970)

## UI

I'm able to build/run all the containers and use the `get_data_tpscore` DAG and see it in action.

<br><img width="1433" alt="airflow" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/00a7b0b9-448b-4c1c-8fc7-91ff19eed6b9">

## MySQL connection from command line

I'm able to successfully run queries on the database:
```sql
Database changed
mysql> SELECT * FROM tps ORDER BY tps DESC LIMIT 3;
+-----------------------+------------+---------------------+---------------------+-------------+--------------+---------------------+------------+
| processing_started_at | chain_name | datetime_start      | datetime_finish     | block_start | block_finish | avg_n_txns_in_block | tps        |
+-----------------------+------------+---------------------+---------------------+-------------+--------------+---------------------+------------+
| 2023-08-22 23:15:52   | Polkadot   | 2023-08-22 23:05:54 | 2023-08-22 23:15:48 |    16962858 |     16962957 |                0.22 |  0.0370995 |
| 2023-08-22 23:16:11   | Nodle      | 2023-08-21 23:25:13 | 2023-08-21 23:46:25 |     3351753 |      3351852 |                0.29 |  0.0227987 |
| 2023-08-22 23:15:52   | Astar      | 2023-08-22 22:55:48 | 2023-08-22 23:15:36 |     4280399 |      4280498 |                0.07 | 0.00589226 |
+-----------------------+------------+---------------------+---------------------+-------------+--------------+---------------------+------------+
3 rows in set (0.00 sec)
```

## Tests

Unit tests: 3 tests pass on both Ubuntu and macOS.
```py
(venv_tpscore) ubuntu@ip-172-31-18-91:~/tpscore-etl-system$ pytest
==================================================================== test session starts =====================================================================
platform linux -- Python 3.8.10, pytest-7.4.0, pluggy-1.2.0
rootdir: /home/ubuntu/tpscore-etl-system
collected 3 items                                                                                                                                            

airflow/dags/test_get_data_tpscore.py ...                                                                                                              [100%]

===================================================================== 3 passed in 0.33s ======================================================================
(venv_tpscore) ubuntu@ip-172-31-18-91:~/tpscore-etl-system$ 
```
