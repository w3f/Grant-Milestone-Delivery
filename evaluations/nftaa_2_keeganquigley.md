# General Notes

Docker compose up works for stick indexer:
```sh
docker compose up -d
[+] Running 4/4
 ✔ Container subsquid_db        Healthy                                                                               5.7s 
 ✔ Container stick-migrator-1   Exited                                                                                7.4s 
 ✔ Container stick-processor-1  Started                                                                               7.7s 
 ✔ Container stick-api-1        Started
```
Successfully builds:
```ts
npm run build
node --require=dotenv/config lib/processor.js
┌──────────────────┬──────────────────────────────────────────────────────────────┐
│     (index)      │                            Values                            │
├──────────────────┼──────────────────────────────────────────────────────────────┤
│      CHAIN       │                         'substrate'                          │
│   ARCHIVE_URL    │ 'https://v2.archive.subsquid.io/network/asset-hub-substrate' │
│     NODE_URL     │               'ws://host.docker.internal:9920'               │
│  STARTING_BLOCK  │                              60                              │
│ COLLECTION_OFFER │                              ''                              │
│ UNIQUES_ENABLED  │                            false                             │
│   disabledRPC    │                            false                             │
│   environment    │                         'production'                         │
└──────────────────┴──────────────────────────────────────────────────────────────┘
18:33:20 INFO  squid:log PROCESSING ~~ SUBSTRATE ~~ EVENTS
18:33:20 INFO  sqd:processor processing blocks from 60
18:33:20 INFO  sqd:processor using chain RPC data source
```

## Testing

Unit tests passing:
```rust
running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test mock::test_genesis_config_builds ... ok
test tests::create_nftaa_fails_if_not_owner ... ok
test tests::create_nftaa_fails_if_already_exists ... ok
test tests::create_nftaa_works ... ok
test tests::proxy_call_fails_if_not_nftaa_owner ... ok
test tests::proxy_call_fails_if_nftaa_listed ... ok
test tests::proxy_call_works ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests pallet_nftaa

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
Indexer runs but gives an error:
<details>
  <summary>Output</summary>

```rust
docker compose up

[+] Running 15/15
 ✔ db Pulled                                                                                                         10.3s 
   ✔ 254e724d7786 Pull complete                                                                                       2.7s 
   ✔ ac379e2bd186 Pull complete                                                                                       2.7s 
   ✔ 5ebb07a8d82c Pull complete                                                                                       2.9s 
   ✔ b4459b13c31a Pull complete                                                                                       3.0s 
   ✔ ad17893ba08f Pull complete                                                                                       3.5s 
   ✔ 14b13a3bb1ac Pull complete                                                                                       3.6s 
   ✔ cb88279483de Pull complete                                                                                       3.6s 
   ✔ ee8f03968487 Pull complete                                                                                       3.7s 
   ✔ f8420f6a18be Pull complete                                                                                       8.4s 
   ✔ b7a7f7224ea8 Pull complete                                                                                       8.4s 
   ✔ ce05938ddc62 Pull complete                                                                                       8.5s 
   ✔ d69dacf01a8c Pull complete                                                                                       8.5s 
   ✔ e75d9f6b1b90 Pull complete                                                                                       8.5s 
   ✔ f3f8ac0006a9 Pull complete                                                                                       8.6s 
Compose can now delegate builds to bake for better performance.
 To do so, set COMPOSE_BAKE=true.
[+] Building 48.8s (60/80)                                                                                  docker:default
 => [migrator internal] load build definition from Dockerfile                                                         0.0s
 => => transferring dockerfile: 1.22kB                                                                                0.0s
 => [processor internal] load metadata for docker.io/library/node:20-alpine                                           1.6s
 => [migrator internal] load .dockerignore                                                                            0.0s
 => => transferring context: 82B                                                                                      0.0s
 => [migrator internal] load build context                                                                            0.1s
 => => transferring context: 1.05MB                                                                                   0.1s
 => [processor node 1/1] FROM docker.io/library/node:20-alpine@sha256:c628bdc7ebc7f95b1b23249a445eb415ce68ae9def8b68  3.0s
 => => resolve docker.io/library/node:20-alpine@sha256:c628bdc7ebc7f95b1b23249a445eb415ce68ae9def8b68364b35ee15e3065  0.0s
 => => sha256:a54ab62fca2da06cf1bd0418fcd2dbb09ba6f43db517f705291fdfb723fbc642 42.95MB / 42.95MB                      0.7s
 => => sha256:6bf3eed75316cc1c58cc9bd678ce26260a7aacf7847462efa4a1cbf240a7c4d8 1.26MB / 1.26MB                        0.4s
 => => sha256:c628bdc7ebc7f95b1b23249a445eb415ce68ae9def8b68364b35ee15e3065b0f 7.67kB / 7.67kB                        0.0s
 => => sha256:b18325f01afbb59e65e32609c3337f46358ebcb13784103e6d4e41cee6180fa0 1.72kB / 1.72kB                        0.0s
 => => sha256:0160beacba2dcf6695e3cf292ed8003aa36f538b6a6fd931878bfc4ea7914555 6.21kB / 6.21kB                        0.0s
 => => sha256:f18232174bc91741fdf3da96d85011092101a032a93a388b79e99e69c2d5c870 3.64MB / 3.64MB                        0.2s
 => => extracting sha256:f18232174bc91741fdf3da96d85011092101a032a93a388b79e99e69c2d5c870                             0.2s
 => => sha256:efb51bda5e8760a6e79d8bf56d88f21d5255ac614cb6dd14ee65a868e7aa8387 445B / 445B                            0.4s
 => => extracting sha256:a54ab62fca2da06cf1bd0418fcd2dbb09ba6f43db517f705291fdfb723fbc642                             1.9s
 => => extracting sha256:6bf3eed75316cc1c58cc9bd678ce26260a7aacf7847462efa4a1cbf240a7c4d8                             0.1s
 => => extracting sha256:efb51bda5e8760a6e79d8bf56d88f21d5255ac614cb6dd14ee65a868e7aa8387                             0.0s
 => CACHED [api node-with-gyp 1/1] RUN apk add --no-cache python3 make g++ && ln -sf python3 /usr/bin/python          6.1s
 => CACHED [api squid  1/11] WORKDIR /squid                                                                           6.1s
 => CACHED [api builder  1/10] WORKDIR /squid                                                                         0.1s
 => [migrator builder  2/10] ADD package.json .                                                                       0.1s
 => [migrator builder  3/10] ADD package-lock.json .                                                                  0.1s 
 => [migrator deps 4/4] RUN npm ci --production                                                                      13.4s 
 => [migrator builder  4/10] ADD assets assets                                                                        0.1s 
 => [migrator builder  5/10] ADD db db                                                                                0.1s 
 => [migrator builder  6/10] ADD schema.graphql .                                                                     0.1s
 => [migrator builder  7/10] RUN npm ci                                                                              14.9s
 => [migrator builder  8/10] ADD tsconfig.json .                                                                      0.1s 
 => [migrator builder  9/10] ADD src src                                                                              0.1s 
 => [migrator builder 10/10] RUN npm run build                                                                        8.1s 
 => [migrator squid  2/11] COPY --from=deps /squid/package.json .                                                     0.1s 
 => [migrator squid  3/11] COPY --from=deps /squid/package-lock.json .                                                0.1s 
 => [migrator squid  4/11] COPY --from=deps /squid/node_modules node_modules                                          1.9s 
 => [migrator squid  5/11] COPY --from=builder /squid/lib lib                                                         0.1s 
 => [migrator squid  6/11] COPY --from=builder /squid/assets assets                                                   0.1s 
 => [migrator squid  7/11] COPY --from=builder /squid/db db                                                           0.1s 
 => [migrator squid  8/11] COPY --from=builder /squid/schema.graphql schema.graphql                                   0.1s 
 => [migrator squid  9/11] ADD commands.json .                                                                        0.1s 
 => [migrator squid 10/11] RUN echo -e "loglevel=silent\nupdate-notifier=false" > /squid/.npmrc                       0.3s 
 => [migrator squid 11/11] RUN npm i -g @subsquid/commands && mv $(which squid-commands) /usr/local/bin/sqd          10.3s
 => [migrator] exporting to image                                                                                     2.2s
 => => exporting layers                                                                                               2.2s
 => => writing image sha256:7391629ed2cd540e23ba239114c799ccfeaf485141d8a23f8ff20bfcf8529e36                          0.0s
 => => naming to docker.io/library/stick-migrator                                                                     0.0s
 => [migrator] resolving provenance for metadata file                                                                 0.0s
 => [processor internal] load build definition from Dockerfile                                                        0.0s
 => => transferring dockerfile: 1.22kB                                                                                0.0s
 => [api internal] load build definition from Dockerfile                                                              0.1s
 => => transferring dockerfile: 1.22kB                                                                                0.0s
 => [api internal] load .dockerignore                                                                                 0.0s
 => => transferring context: 82B                                                                                      0.0s
 => [processor internal] load .dockerignore                                                                           0.1s
 => => transferring context: 82B                                                                                      0.0s
 => [api internal] load build context                                                                                 0.0s
 => => transferring context: 11.42kB                                                                                  0.0s
 => [processor internal] load build context                                                                           0.1s
 => => transferring context: 1.05MB                                                                                   0.0s
 => CACHED [api builder  2/10] ADD package.json .                                                                     0.0s
 => CACHED [api builder  3/10] ADD package-lock.json .                                                                0.0s
 => CACHED [api deps 4/4] RUN npm ci --production                                                                     0.0s
 => CACHED [api squid  2/11] COPY --from=deps /squid/package.json .                                                   0.0s
 => CACHED [api squid  3/11] COPY --from=deps /squid/package-lock.json .                                              0.0s
 => CACHED [api squid  4/11] COPY --from=deps /squid/node_modules node_modules                                        0.0s
 => CACHED [api builder  4/10] ADD assets assets                                                                      0.0s
 => CACHED [api builder  5/10] ADD db db                                                                              0.0s
 => CACHED [api builder  6/10] ADD schema.graphql .                                                                   0.0s
 => CACHED [api builder  7/10] RUN npm ci                                                                             0.0s
 => CACHED [api builder  8/10] ADD tsconfig.json .                                                                    0.0s
 => CACHED [api builder  9/10] ADD src src                                                                            0.0s
 => CACHED [api builder 10/10] RUN npm run build                                                                      0.0s
 => CACHED [api squid  5/11] COPY --from=builder /squid/lib lib                                                       0.0s
 => CACHED [api squid  6/11] COPY --from=builder /squid/assets assets                                                 0.0s
 => CACHED [api squid  7/11] COPY --from=builder /squid/db db                                                         0.0s
 => CACHED [api squid  8/11] COPY --from=builder /squid/schema.graphql schema.graphql                                 0.0s
 => CACHED [api squid  9/11] ADD commands.json .                                                                      0.0s
 => CACHED [api squid 10/11] RUN echo -e "loglevel=silent\nupdate-notifier=false" > /squid/.npmrc                     0.0s
 => CACHED [processor squid 11/11] RUN npm i -g @subsquid/commands && mv $(which squid-commands) /usr/local/bin/sqd   0.0s
 => [api] exporting to image                                                                                          0.0s
 => => exporting layers                                                                                               0.0s
 => => writing image sha256:1b683a5e23dc8f1beceb9495a909488329d7d079516d0d61461dbf64919cb281                          0.0s
 => => naming to docker.io/library/stick-api                                                                          0.0s
 => [processor] exporting to image                                                                                    0.0s
 => => exporting layers                                                                                               0.0s
 => => writing image sha256:efbf300de8adb91ccbba08b9546c59c5b6160343d6c8136541b6dedba7498105                          0.0s
 => => naming to docker.io/library/stick-processor                                                                    0.0s
 => [api] resolving provenance for metadata file                                                                      0.0s
 => [processor] resolving provenance for metadata file                                                                0.0s
[+] Running 8/8
 ✔ api                          Built                                                                                 0.0s 
 ✔ migrator                     Built                                                                                 0.0s 
 ✔ processor                    Built                                                                                 0.0s 
 ✔ Network stick_default        Created                                                                               0.1s 
 ✔ Container subsquid_db        Created                                                                               0.1s 
 ✔ Container stick-migrator-1   Created                                                                               0.1s 
 ✔ Container stick-processor-1  Created                                                                               0.1s 
 ✔ Container stick-api-1        Created                                                                               0.1s 
Attaching to api-1, migrator-1, processor-1, subsquid_db
subsquid_db  | The files belonging to this database system will be owned by user "postgres".
subsquid_db  | This user must also own the server process.
subsquid_db  | 
subsquid_db  | The database cluster will be initialized with locale "en_US.utf8".
subsquid_db  | The default database encoding has accordingly been set to "UTF8".
subsquid_db  | The default text search configuration will be set to "english".
subsquid_db  | 
subsquid_db  | Data page checksums are disabled.
subsquid_db  | 
subsquid_db  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
subsquid_db  | creating subdirectories ... ok
subsquid_db  | selecting dynamic shared memory implementation ... posix
subsquid_db  | selecting default max_connections ... 100
subsquid_db  | selecting default shared_buffers ... 128MB
subsquid_db  | selecting default time zone ... Etc/UTC
subsquid_db  | creating configuration files ... ok
subsquid_db  | running bootstrap script ... ok
subsquid_db  | performing post-bootstrap initialization ... ok
subsquid_db  | syncing data to disk ... ok
subsquid_db  | 
subsquid_db  | 
subsquid_db  | Success. You can now start the database server using:
subsquid_db  | 
subsquid_db  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
subsquid_db  | 
subsquid_db  | initdb: warning: enabling "trust" authentication for local connections
subsquid_db  | initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
subsquid_db  | waiting for server to start....2025-04-29 16:48:25.286 UTC [48] LOG:  starting PostgreSQL 15.12 (Debian 15.12-1.pgdg120+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
subsquid_db  | 2025-04-29 16:48:25.288 UTC [48] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
subsquid_db  | 2025-04-29 16:48:25.295 UTC [51] LOG:  database system was shut down at 2025-04-29 16:48:25 UTC
subsquid_db  | 2025-04-29 16:48:25.301 UTC [48] LOG:  database system is ready to accept connections
subsquid_db  |  done
subsquid_db  | server started
subsquid_db  | CREATE DATABASE
subsquid_db  | 
subsquid_db  | 
subsquid_db  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
subsquid_db  | 
subsquid_db  | waiting for server to shut down....2025-04-29 16:48:25.490 UTC [48] LOG:  received fast shutdown request
subsquid_db  | 2025-04-29 16:48:25.495 UTC [48] LOG:  aborting any active transactions
subsquid_db  | 2025-04-29 16:48:25.502 UTC [48] LOG:  background worker "logical replication launcher" (PID 54) exited with exit code 1
subsquid_db  | 2025-04-29 16:48:25.503 UTC [49] LOG:  shutting down
subsquid_db  | 2025-04-29 16:48:25.505 UTC [49] LOG:  checkpoint starting: shutdown immediate
subsquid_db  | 2025-04-29 16:48:25.536 UTC [49] LOG:  checkpoint complete: wrote 918 buffers (5.6%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.019 s, sync=0.006 s, total=0.033 s; sync files=301, longest=0.002 s, average=0.001 s; distance=4222 kB, estimate=4222 kB
subsquid_db  | 2025-04-29 16:48:25.544 UTC [48] LOG:  database system is shut down
subsquid_db  |  done
subsquid_db  | server stopped
subsquid_db  | 
subsquid_db  | PostgreSQL init process complete; ready for start up.
subsquid_db  | 
subsquid_db  | 2025-04-29 16:48:25.612 UTC [1] LOG:  starting PostgreSQL 15.12 (Debian 15.12-1.pgdg120+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
subsquid_db  | 2025-04-29 16:48:25.612 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
subsquid_db  | 2025-04-29 16:48:25.612 UTC [1] LOG:  listening on IPv6 address "::", port 5432
subsquid_db  | 2025-04-29 16:48:25.615 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
subsquid_db  | 2025-04-29 16:48:25.620 UTC [64] LOG:  database system was shut down at 2025-04-29 16:48:25 UTC
subsquid_db  | 2025-04-29 16:48:25.627 UTC [1] LOG:  database system is ready to accept connections
migrator-1   | query: SELECT * FROM current_schema()
migrator-1   | query: SELECT version();
migrator-1   | query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = 'public' AND "table_name" = 'migrations'
migrator-1   | query: CREATE TABLE "migrations" ("id" SERIAL NOT NULL, "timestamp" bigint NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id"))
migrator-1   | query: SELECT * FROM "migrations" "migrations" ORDER BY "id" DESC
migrator-1   | 0 migrations are already loaded in the database.
migrator-1   | 18 migrations were found in the source code.
migrator-1   | 18 migrations are new migrations must be executed.
migrator-1   | query: START TRANSACTION
migrator-1   | query: CREATE TABLE "collection_event" ("id" character varying NOT NULL, "block_number" numeric, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "caller" text NOT NULL, "current_owner" text, "interaction" character varying(12) NOT NULL, "meta" text NOT NULL, "collection_id" character varying, CONSTRAINT "PK_5071dfbea812b4caade2ede2139" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_93f81f26d6b052b289167b3ae3" ON "collection_event" ("collection_id") 
migrator-1   | query: CREATE TABLE "metadata_entity" ("id" character varying NOT NULL, "name" text, "description" text, "image" text, "attributes" jsonb, "animation_url" text, "type" text, CONSTRAINT "PK_2cb9d5d4ae99d9a27497bf8d2e8" PRIMARY KEY ("id"))
migrator-1   | query: CREATE TABLE "event" ("id" character varying NOT NULL, "block_number" numeric, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "caller" text NOT NULL, "current_owner" text NOT NULL, "interaction" character varying(12) NOT NULL, "meta" text NOT NULL, "nft_id" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_9380d479563e5a664759359470" ON "event" ("nft_id") 
migrator-1   | query: CREATE TABLE "nft_entity" ("attributes" jsonb, "block_number" numeric, "burned" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "current_owner" text NOT NULL, "hash" text NOT NULL, "id" character varying NOT NULL, "image" text, "issuer" text NOT NULL, "lewd" boolean NOT NULL, "media" text, "metadata" text, "name" text, "price" numeric, "recipient" text, "royalty" numeric, "sn" text NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "collection_id" character varying, "meta_id" character varying, CONSTRAINT "PK_ed09c6a38c0f0a867d5a7b63f0d" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_4b98bf4d630de0037475b9bbb7" ON "nft_entity" ("collection_id") 
migrator-1   | query: CREATE INDEX "IDX_0a42c2c09b35a7535045d4a2f4" ON "nft_entity" ("current_owner") 
migrator-1   | query: CREATE INDEX "IDX_16e57ac8478b6ea1f383e3eb03" ON "nft_entity" ("hash") 
migrator-1   | query: CREATE INDEX "IDX_2bfc45b91959a14ab8b2d734cd" ON "nft_entity" ("meta_id") 
migrator-1   | query: CREATE INDEX "IDX_54ca209d76ebe11ccc3c4e75d1" ON "nft_entity" ("name") 
migrator-1   | query: CREATE TABLE "collection_entity" ("attributes" jsonb, "block_number" numeric, "burned" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "current_owner" text NOT NULL, "distribution" integer NOT NULL, "floor" numeric NOT NULL, "hash" text NOT NULL, "highest_sale" numeric NOT NULL, "id" character varying NOT NULL, "image" text, "issuer" text NOT NULL, "max" integer, "media" text, "metadata" text, "name" text, "nft_count" integer NOT NULL, "owner_count" integer NOT NULL, "supply" integer NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "volume" numeric NOT NULL, "meta_id" character varying, CONSTRAINT "PK_5d44e140c4fcb3d961f9e83405f" PRIMARY KEY ("id"))
migrator-1   | query: CREATE UNIQUE INDEX "IDX_90561baea428b17fdaf8e484d7" ON "collection_entity" ("hash") 
migrator-1   | query: CREATE INDEX "IDX_014542183f297493eab0cd8bdf" ON "collection_entity" ("meta_id") 
migrator-1   | query: CREATE INDEX "IDX_b0d709797451c6237e8ec0fee8" ON "collection_entity" ("name") 
migrator-1   | query: ALTER TABLE "collection_event" ADD CONSTRAINT "FK_93f81f26d6b052b289167b3ae3e" FOREIGN KEY ("collection_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "event" ADD CONSTRAINT "FK_9380d479563e5a664759359470a" FOREIGN KEY ("nft_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "nft_entity" ADD CONSTRAINT "FK_4b98bf4d630de0037475b9bbb7a" FOREIGN KEY ("collection_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "nft_entity" ADD CONSTRAINT "FK_2bfc45b91959a14ab8b2d734cd2" FOREIGN KEY ("meta_id") REFERENCES "metadata_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "collection_entity" ADD CONSTRAINT "FK_014542183f297493eab0cd8bdf8" FOREIGN KEY ("meta_id") REFERENCES "metadata_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1683034190372,"Data1683034190372"]
migrator-1   | Migration Data1683034190372 has been  executed successfully.
migrator-1   | query: ALTER TABLE "nft_entity" ADD "version" integer NOT NULL
migrator-1   | query: ALTER TABLE "collection_entity" ADD "version" integer NOT NULL
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1685040565005,"Data1685040565005"]
migrator-1   | Migration Data1685040565005 has been  executed successfully.
migrator-1   | query: CREATE TABLE "asset_entity" ("id" character varying NOT NULL, "name" text, "symbol" text, "decimals" integer, CONSTRAINT "PK_038b7b28b83db2205747ef9912e" PRIMARY KEY ("id"))
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1686843738130,"Data1686843738130"]
migrator-1   | Migration Data1686843738130 has been  executed successfully.
migrator-1   | query: CREATE TABLE "token_entity" ("id" character varying NOT NULL, "block_number" numeric, "hash" text NOT NULL, "image" text, "media" text, "name" text, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "count" integer NOT NULL, "collection_id" character varying, CONSTRAINT "PK_687443f2a51af49b5472e2c5ddc" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_0eb2ed7929c3e81941fa1b51b3" ON "token_entity" ("collection_id") 
migrator-1   | query: CREATE INDEX "IDX_40d6049fd30532dada71922792" ON "token_entity" ("hash") 
migrator-1   | query: CREATE INDEX "IDX_47b385945a425667b9e690bc02" ON "token_entity" ("name") 
migrator-1   | query: ALTER TABLE "nft_entity" ADD "token_id" character varying
migrator-1   | query: CREATE INDEX "IDX_060d0f515d293fac1d81ee61a7" ON "nft_entity" ("token_id") 
migrator-1   | query: ALTER TABLE "token_entity" ADD CONSTRAINT "FK_0eb2ed7929c3e81941fa1b51b35" FOREIGN KEY ("collection_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "nft_entity" ADD CONSTRAINT "FK_060d0f515d293fac1d81ee61a79" FOREIGN KEY ("token_id") REFERENCES "token_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1689623692588,"Data1689623692588"]
migrator-1   | Migration Data1689623692588 has been  executed successfully.
migrator-1   | query: CREATE INDEX "IDX_8fed68c917920ff529994c2c65" ON "nft_entity" ("block_number") 
migrator-1   | query: CREATE INDEX "IDX_86a1515e09897c4de46f530734" ON "nft_entity" ("price") 
migrator-1   | query: CREATE INDEX "IDX_fb5a810a729fee4b0b0d3301eb" ON "nft_entity" ("sn") 
migrator-1   | query: CREATE INDEX "IDX_b250112ffe307b3141f83181e7" ON "nft_entity" ("updated_at") 
migrator-1   | query: CREATE INDEX "IDX_703bf1a1b47a340c5675fdda85" ON "collection_entity" ("block_number") 
migrator-1   | query: CREATE INDEX "IDX_b09e3db203a007fa67648832be" ON "collection_entity" ("created_at") 
migrator-1   | query: CREATE INDEX "IDX_72ed70f83555fc3c80bac8e38a" ON "collection_entity" ("floor") 
migrator-1   | query: CREATE INDEX "IDX_01cdb33e93f9accb9902831788" ON "collection_entity" ("highest_sale") 
migrator-1   | query: CREATE INDEX "IDX_ca72b774ddea4dc39fbb5bf6c4" ON "collection_entity" ("nft_count") 
migrator-1   | query: CREATE INDEX "IDX_8ae50565da6e56f122ccad6c57" ON "collection_entity" ("supply") 
migrator-1   | query: CREATE INDEX "IDX_fba85326b71638259b87a35197" ON "collection_entity" ("updated_at") 
migrator-1   | query: CREATE INDEX "IDX_c359c4f500cfa8d2dcabb8755d" ON "collection_entity" ("volume") 
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1693998172302,"Data1693998172302"]
migrator-1   | Migration Data1693998172302 has been  executed successfully.
migrator-1   | query: ALTER TABLE "token_entity" ADD "metadata" text
migrator-1   | query: ALTER TABLE "token_entity" ADD "supply" integer NOT NULL
migrator-1   | query: ALTER TABLE "token_entity" ADD "cheapest_id" character varying
migrator-1   | query: ALTER TABLE "token_entity" ADD "meta_id" character varying
migrator-1   | query: CREATE INDEX "IDX_637db5c040f1d9f935817ae1e8" ON "token_entity" ("cheapest_id") 
migrator-1   | query: CREATE INDEX "IDX_ae4ff3b28e3fec72aa14124d1e" ON "token_entity" ("meta_id") 
migrator-1   | query: ALTER TABLE "token_entity" ADD CONSTRAINT "FK_637db5c040f1d9f935817ae1e8a" FOREIGN KEY ("cheapest_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "token_entity" ADD CONSTRAINT "FK_ae4ff3b28e3fec72aa14124d1e1" FOREIGN KEY ("meta_id") REFERENCES "metadata_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1696751796584,"Data1696751796584"]
migrator-1   | Migration Data1696751796584 has been  executed successfully.
migrator-1   | query: ALTER TABLE "token_entity" DROP CONSTRAINT "FK_637db5c040f1d9f935817ae1e8a"
migrator-1   | query: DROP INDEX "public"."IDX_637db5c040f1d9f935817ae1e8"
migrator-1   | query: ALTER TABLE "token_entity" DROP COLUMN "cheapest_id"
migrator-1   | query: ALTER TABLE "collection_entity" ADD "recipient" text
migrator-1   | query: ALTER TABLE "collection_entity" ADD "royalty" numeric
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1700144394115,"Data1700144394115"]
migrator-1   | Migration Data1700144394115 has been  executed successfully.
migrator-1   | query: ALTER TABLE "metadata_entity" ADD "banner" text
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1702294404882,"Data1702294404882"]
migrator-1   | Migration Data1702294404882 has been  executed successfully.
migrator-1   | query: DROP INDEX "public"."IDX_fb5a810a729fee4b0b0d3301eb"
migrator-1   | query: ALTER TABLE "nft_entity" DROP COLUMN "sn"
migrator-1   | query: ALTER TABLE "nft_entity" ADD "sn" numeric NOT NULL
migrator-1   | query: CREATE INDEX "IDX_fb5a810a729fee4b0b0d3301eb" ON "nft_entity" ("sn") 
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1704901579526,"Data1704901579526"]
migrator-1   | Migration Data1704901579526 has been  executed successfully.
migrator-1   | query: ALTER TABLE "collection_entity" ADD "type" character varying(8)
migrator-1   | query: ALTER TABLE "collection_entity" ADD "settings" jsonb
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1706015961189,"Data1706015961189"]
migrator-1   | Migration Data1706015961189 has been  executed successfully.
migrator-1   | query: CREATE TABLE "cache_status" ("id" character varying NOT NULL, "last_block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_1001e39eb0aa38d043d96f7f4fa" PRIMARY KEY ("id"))
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1706035705537,"Data1706035705537"]
migrator-1   | Migration Data1706035705537 has been  executed successfully.
migrator-1   | query: ALTER TABLE "token_entity" ADD "deleted" boolean NOT NULL
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1711017751137,"Data1711017751137"]
migrator-1   | Migration Data1711017751137 has been  executed successfully.
migrator-1   | query: CREATE INDEX "IDX_f0abf665028feb26e32d4201c5" ON "nft_entity" ("created_at") 
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1712590816868,"Data1712590816868"]
migrator-1   | Migration Data1712590816868 has been  executed successfully.
migrator-1   | query: ALTER TABLE "collection_entity" ADD "base_uri" text
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1719489409922,"Data1719489409922"]
migrator-1   | Migration Data1719489409922 has been  executed successfully.
migrator-1   | query: CREATE TABLE "offer" ("id" character varying NOT NULL, "block_number" numeric NOT NULL, "caller" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "expiration" numeric NOT NULL, "price" numeric NOT NULL, "status" character varying(9) NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE, "considered_id" character varying, "desired_id" character varying, "nft_id" character varying, CONSTRAINT "REL_71609884f4478ed41be6672a66" UNIQUE ("nft_id"), CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_004a20a1eed4189bc23b13efa0" ON "offer" ("considered_id") 
migrator-1   | query: CREATE INDEX "IDX_f8c1e3faf9cdba27703e0ea2c5" ON "offer" ("desired_id") 
migrator-1   | query: CREATE UNIQUE INDEX "IDX_71609884f4478ed41be6672a66" ON "offer" ("nft_id") 
migrator-1   | query: CREATE TABLE "swap" ("id" character varying NOT NULL, "block_number" numeric NOT NULL, "caller" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "expiration" numeric NOT NULL, "price" numeric, "status" character varying(9) NOT NULL, "surcharge" character varying(7), "updated_at" TIMESTAMP WITH TIME ZONE, "considered_id" character varying, "desired_id" character varying, "nft_id" character varying, CONSTRAINT "REL_4a045cf15c5c5c44e6cf52e70c" UNIQUE ("nft_id"), CONSTRAINT "PK_4a10d0f359339acef77e7f986d9" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_ef7a3bc067c4f3dd314c90f79a" ON "swap" ("considered_id") 
migrator-1   | query: CREATE INDEX "IDX_ded173f5a5ff89483d9ffa4dce" ON "swap" ("desired_id") 
migrator-1   | query: CREATE UNIQUE INDEX "IDX_4a045cf15c5c5c44e6cf52e70c" ON "swap" ("nft_id") 
migrator-1   | query: ALTER TABLE "offer" ADD CONSTRAINT "FK_004a20a1eed4189bc23b13efa0d" FOREIGN KEY ("considered_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "offer" ADD CONSTRAINT "FK_f8c1e3faf9cdba27703e0ea2c54" FOREIGN KEY ("desired_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "offer" ADD CONSTRAINT "FK_71609884f4478ed41be6672a668" FOREIGN KEY ("nft_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "swap" ADD CONSTRAINT "FK_ef7a3bc067c4f3dd314c90f79a5" FOREIGN KEY ("considered_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "swap" ADD CONSTRAINT "FK_ded173f5a5ff89483d9ffa4dce6" FOREIGN KEY ("desired_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "swap" ADD CONSTRAINT "FK_4a045cf15c5c5c44e6cf52e70c2" FOREIGN KEY ("nft_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1721653971599,"Data1721653971599"]
migrator-1   | Migration Data1721653971599 has been  executed successfully.
migrator-1   | query: ALTER TABLE "metadata_entity" ADD "kind" character varying(6)
migrator-1   | query: ALTER TABLE "collection_entity" ADD "kind" character varying(6)
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1726485003107,"Data1726485003107"]
migrator-1   | Migration Data1726485003107 has been  executed successfully.
migrator-1   | query: CREATE TABLE "nftaa_entity" ("id" character varying NOT NULL, "block_number" numeric, "address" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "version" integer NOT NULL, "hash" text NOT NULL, "collection_id" character varying, CONSTRAINT "PK_96f18d58a44c13956c7498f72e5" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_eb506f89587094be53e7ba6c4f" ON "nftaa_entity" ("collection_id") 
migrator-1   | query: CREATE INDEX "IDX_7ff29b76cf5125e01c577f78a9" ON "nftaa_entity" ("block_number") 
migrator-1   | query: CREATE INDEX "IDX_530e9446c5c5b1cf477e15f5c4" ON "nftaa_entity" ("address") 
migrator-1   | query: CREATE INDEX "IDX_159b83e62324f4823a161f2247" ON "nftaa_entity" ("created_at") 
migrator-1   | query: CREATE INDEX "IDX_c984c88a11739c92a249d2fbdc" ON "nftaa_entity" ("updated_at") 
migrator-1   | query: CREATE INDEX "IDX_74cc95da665289486ab53b11bd" ON "nftaa_entity" ("hash") 
migrator-1   | query: CREATE TABLE "nftaa_transfer" ("id" character varying NOT NULL, "block_number" numeric, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "version" integer NOT NULL, "hash" text NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "nftaa_id" character varying, CONSTRAINT "PK_a190498d79895a799b88310eae4" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_0ce8b6bb5911b71635a5e020e1" ON "nftaa_transfer" ("nftaa_id") 
migrator-1   | query: CREATE INDEX "IDX_ef5b024f9f9144864e34703aa4" ON "nftaa_transfer" ("block_number") 
migrator-1   | query: CREATE INDEX "IDX_bdf36d7ff8a4704fa7f3b09b4d" ON "nftaa_transfer" ("created_at") 
migrator-1   | query: CREATE INDEX "IDX_7d8608e1885e882d7738d3b198" ON "nftaa_transfer" ("updated_at") 
migrator-1   | query: CREATE INDEX "IDX_2afa7397c55193b0b95c7bd789" ON "nftaa_transfer" ("hash") 
migrator-1   | query: CREATE TABLE "nftaa_proxy_execution" ("id" character varying NOT NULL, "block_number" numeric, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "version" integer NOT NULL, "hash" text NOT NULL, "nftaa_id" character varying, CONSTRAINT "PK_22ec91974ded420c06e847f439c" PRIMARY KEY ("id"))
migrator-1   | query: CREATE INDEX "IDX_4f8ff5395cd74b0f966845bf07" ON "nftaa_proxy_execution" ("nftaa_id") 
migrator-1   | query: CREATE INDEX "IDX_38e5f0b25c137e88734fef2ed5" ON "nftaa_proxy_execution" ("block_number") 
migrator-1   | query: CREATE INDEX "IDX_8cc523c7f142074fe8559e15fb" ON "nftaa_proxy_execution" ("created_at") 
migrator-1   | query: CREATE INDEX "IDX_96115b69bfbd0a71bab464a23d" ON "nftaa_proxy_execution" ("updated_at") 
migrator-1   | query: CREATE INDEX "IDX_e62ef0fff9024201e16745c66b" ON "nftaa_proxy_execution" ("hash") 
migrator-1   | query: ALTER TABLE "collection_event" DROP COLUMN "interaction"
migrator-1   | query: ALTER TABLE "collection_event" ADD "interaction" character varying(14) NOT NULL
migrator-1   | query: ALTER TABLE "event" DROP COLUMN "interaction"
migrator-1   | query: ALTER TABLE "event" ADD "interaction" character varying(14) NOT NULL
migrator-1   | query: ALTER TABLE "nftaa_entity" ADD CONSTRAINT "FK_eb506f89587094be53e7ba6c4fd" FOREIGN KEY ("collection_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "nftaa_transfer" ADD CONSTRAINT "FK_0ce8b6bb5911b71635a5e020e1e" FOREIGN KEY ("nftaa_id") REFERENCES "nftaa_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: ALTER TABLE "nftaa_proxy_execution" ADD CONSTRAINT "FK_4f8ff5395cd74b0f966845bf07f" FOREIGN KEY ("nftaa_id") REFERENCES "nftaa_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1743160895043,"Data1743160895043"]
migrator-1   | Migration Data1743160895043 has been  executed successfully.
migrator-1   | query: ALTER TABLE "nftaa_entity" DROP COLUMN "version"
migrator-1   | query: ALTER TABLE "nftaa_transfer" DROP COLUMN "version"
migrator-1   | query: ALTER TABLE "nftaa_proxy_execution" DROP COLUMN "version"
migrator-1   | query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1743421653711,"Data1743421653711"]
migrator-1   | Migration Data1743421653711 has been  executed successfully.
migrator-1   | query: COMMIT
migrator-1 exited with code 0
processor-1  | {"level":2,"time":1745945312720,"ns":"sqd:commands","msg":"MIGRATION:APPLY"}
api-1        | {"level":2,"time":1745945312780,"ns":"sqd:commands","msg":"SERVE:PROD"}
processor-1  | query: SELECT * FROM current_schema()
processor-1  | query: SELECT version();
processor-1  | query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = 'public' AND "table_name" = 'migrations'
processor-1  | query: SELECT * FROM "migrations" "migrations" ORDER BY "id" DESC
processor-1  | No migrations are pending
processor-1  | {"level":2,"time":1745945313500,"ns":"sqd:commands","msg":"PROCESS:PROD"}
processor-1  | ┌──────────────────┬──────────────────────────────────────────────────────────────┐
processor-1  | │ (index)          │ Values                                                       │
processor-1  | ├──────────────────┼──────────────────────────────────────────────────────────────┤
processor-1  | │ CHAIN            │ 'substrate'                                                  │
processor-1  | │ ARCHIVE_URL      │ 'https://v2.archive.subsquid.io/network/asset-hub-substrate' │
processor-1  | │ NODE_URL         │ 'ws://host.docker.internal:9920'                             │
processor-1  | │ STARTING_BLOCK   │ 60                                                           │
processor-1  | │ COLLECTION_OFFER │ ''                                                           │
processor-1  | │ UNIQUES_ENABLED  │ false                                                        │
processor-1  | │ disabledRPC      │ false                                                        │
processor-1  | │ environment      │ 'production'                                                 │
processor-1  | └──────────────────┴──────────────────────────────────────────────────────────────┘
api-1        | {"level":3,"time":1745945314297,"ns":"sqd:graphql-server","msg":"enabling dumb in-memory cache (size: 100mb, ttl: 1000ms, max-age: 1000ms)"}
processor-1  | {"level":2,"time":1745945314308,"ns":"squid:log","msg":"PROCESSING ~~ SUBSTRATE ~~ EVENTS"}
processor-1  | {"level":2,"time":1745945314453,"ns":"sqd:processor","msg":"processing blocks from 60"}
processor-1  | {"level":2,"time":1745945314453,"ns":"sqd:processor","msg":"using chain RPC data source"}
api-1        | {"level":2,"time":1745945314461,"ns":"sqd:graphql-server","msg":"listening on port 4350"}
processor-1  | {"level":3,"time":1745945314466,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945314466,"ns":"sqd:processor:rpc","msg":"will pause new requests for 10ms","rpcUrl":"ws://host.docker.internal:9920"}
processor-1  | {"level":3,"time":1745945314482,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945314482,"ns":"sqd:processor:rpc","msg":"will pause new requests for 100ms","rpcUrl":"ws://host.docker.internal:9920"}
processor-1  | {"level":3,"time":1745945314586,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945314586,"ns":"sqd:processor:rpc","msg":"will pause new requests for 500ms","rpcUrl":"ws://host.docker.internal:9920"}
processor-1  | {"level":3,"time":1745945315091,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945315091,"ns":"sqd:processor:rpc","msg":"will pause new requests for 2000ms","rpcUrl":"ws://host.docker.internal:9920"}
processor-1  | {"level":3,"time":1745945317096,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945317096,"ns":"sqd:processor:rpc","msg":"will pause new requests for 10000ms","rpcUrl":"ws://host.docker.internal:9920"}
processor-1  | {"level":3,"time":1745945327100,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945327101,"ns":"sqd:processor:rpc","msg":"will pause new requests for 20000ms","rpcUrl":"ws://host.docker.internal:9920"}
processor-1  | {"level":3,"time":1745945347106,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945347107,"ns":"sqd:processor:rpc","msg":"will pause new requests for 20000ms","rpcUrl":"ws://host.docker.internal:9920"}
processor-1  | {"level":3,"time":1745945367111,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
processor-1  | {"level":3,"time":1745945367111,"ns":"sqd:processor:rpc","msg":"will pause new requests for 20000ms","rpcUrl":"ws://host.docker.internal:9920"}
```
</details>
