# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/LiisaPortfolioTracker.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** semuelle

| Number | Deliverable  | Accepted | Link | Evaluation Notes |
| ------ | -----------  | ----------- | ----------------- | ----------- |
| 0a.    | License                   | <ul><li>[x] </li></ul> |  [LICENSE](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/e4ca40a0a29c60654ca9a755a33215ae2ae8acab/LICENSE.md) | Apache 2.0 |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> |  [README](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/30be68d4894d9f09262296e2986f18eb11a6f2c4/README.md) | ... |
| 0c.    | Testing Guide             | <ul><li>[x] </li></ul> |  [README](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/19a8574c491af2a682226618a204a30dbd1f5497/README.md#getting-started) | ... |
| 0d.    | Docker | <ul><li>[x] </li></ul> |  [Dockerfile](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/30be68d4894d9f09262296e2986f18eb11a6f2c4/multichain-indexer/Dockerfile)| ...|
| 0e.    | Article | <ul><li>[ ] </li></ul> |  (https://medium.com/@liisanft/introducing-liisas-multi-chain-portfolio-tracker-on-polkadot-5aeaaa334d88)| ...|
| 1a. | Bubble.io wallet plugins | <ul><li>[ ] </li></ul> |  (https://bubble.io/contributor/1556362159556x895666664689713800)| ...|
| 1b. | Wallet address transmission | <ul><li>[ ] </li></ul> |  [app](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/frontend/src/App.js)| ...|
| 2a. | Dashboard Structure Implementation | <ul><li>[ ] </li></ul> |  [src](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/tree/main/frontend/src)| ...|
| 2b. | Dynamic Dashboard Values | <ul><li>[ ] </li></ul> |[functions](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/tree/main/multichain-indexer/src/functions)| ...|

# General Notes

## Frontend

Frontend compiles successfully:

```ts
Compiled with warnings.

[eslint]
src/App.js
  Line 37:13:  'unsubscribe' is assigned a value but never used  no-unused-vars

src/components/Collections/CollectionItem.js
  Line 13:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint]
src/App.js
  Line 37:13:  'unsubscribe' is assigned a value but never used  no-unused-vars

src/components/Collections/CollectionItem.js
  Line 13:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

webpack compiled with 1 warning
```

<img width="1433" alt="liisa1" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/500d7a8c-dcdd-4f02-a406-99b9c4450a6f">

<img width="1433" alt="liisa2" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/15fb7dff-e263-4d57-8bd0-7ffd7f55c3ae">

## Backend

Docker image builds successfully:

```ts
15: Pulling from library/postgres
09f376ebb190: Pull complete
119215dfb3e3: Pull complete
94fccb772ad3: Pull complete
0fc3acb16548: Pull complete
d7dba7d03fe8: Pull complete
898ae395a1ca: Pull complete
088e651df7e9: Pull complete
ed155773e5e0: Pull complete
52df7d12fb73: Pull complete
bab1ecc22dc9: Pull complete
1655a257a5b5: Pull complete
978f02dfc247: Pull complete
d715d7d9aee0: Pull complete
b2e9251b2f8d: Pull complete
Digest: sha256:4b4da96c37fefd6f28c3f58e7470bbc6d2cb34ac5641b9df7221d962eb4bc55d
Status: Downloaded newer image for postgres:15
Creating multichain-indexer_db_1 ... done
```
`sqd migration:generate` works
```ts
ubuntu@ip-172-31-27-207:~/PolkadotNFTPortfolioTracker/multichain-indexer$ sqd migration:generate
CLEAN
BUILD
MIGRATION:CLEAN
MIGRATION:GENERATE
```

`sqd migration:apply` works:
```ts
MIGRATION:APPLY
query: SELECT * FROM current_schema()
query: SELECT version();
query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = 'public' AND "table_name" = 'migrations'
query: CREATE TABLE "migrations" ("id" SERIAL NOT NULL, "timestamp" bigint NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id"))
query: SELECT * FROM "migrations" "migrations" ORDER BY "id" DESC
0 migrations are already loaded in the database.
1 migrations were found in the source code.
1 migrations are new migrations must be executed.
query: START TRANSACTION
query: CREATE TABLE "collection_stats" ("id" character varying NOT NULL, "total_volume" numeric, "floor_price" double precision, "floor_price_usd" double precision, "token_count" integer, "market_cap" numeric, "highest_sale" double precision, "last_sale_date" TIMESTAMP WITH TIME ZONE, "supply" numeric, "sales_count24h" integer, "floor_price_change" double precision, "floor1h_dif" double precision, "floor1h_dif_usd" double precision, "floor24h_dif" double precision, "floor24h_dif_usd" double precision, "floor7d_dif" double precision, "floor7d_dif_usd" double precision, "floor30d_dif" double precision, "floor30d_dif_usd" double precision, "date" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_dc02ef85275d24f9ce8238b85fd" PRIMARY KEY ("id"))
query: CREATE TABLE "collection" ("id" character varying NOT NULL, "collection_type" character varying(7) NOT NULL, "created_at_block" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text, "stats_id" character varying, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))
query: CREATE INDEX "IDX_3fecce93788f86b3c2d76f5bb2" ON "collection" ("collection_type") 
query: CREATE INDEX "IDX_035df96c8ad5c55e4e49b53705" ON "collection" ("created_at_block") 
query: CREATE INDEX "IDX_f2c977a66579d262693a8cdbcd" ON "collection" ("created_at") 
query: CREATE INDEX "IDX_926e7bdc3f52cd582078a379f1" ON "collection" ("name") 
query: CREATE INDEX "IDX_dc02ef85275d24f9ce8238b85f" ON "collection" ("stats_id") 
query: CREATE TABLE "attribute" ("id" character varying NOT NULL, "type" text NOT NULL, "value" text NOT NULL, "rarity" numeric NOT NULL, "collection_id" character varying, CONSTRAINT "PK_b13fb7c5c9e9dff62b60e0de729" PRIMARY KEY ("id"))
query: CREATE INDEX "IDX_adaba2bde1f917be8521c42ebc" ON "attribute" ("collection_id") 
query: CREATE INDEX "IDX_0dbafd93b752dcf58fbd7caac6" ON "attribute" ("type") 
query: CREATE INDEX "IDX_953787c7913a93aee4b32e10aa" ON "attribute" ("rarity") 
query: CREATE TABLE "nf_token_attribute" ("id" character varying NOT NULL, "nftoken_id" character varying, "attribute_id" character varying, CONSTRAINT "PK_2b3e18bfee1c703f3356e8ee7d4" PRIMARY KEY ("id"))
query: CREATE INDEX "IDX_aa6394b7642a4003da7fe07cf7" ON "nf_token_attribute" ("nftoken_id") 
query: CREATE INDEX "IDX_e8ed82a576c20c5ff6cc09e6a6" ON "nf_token_attribute" ("attribute_id") 
query: CREATE TABLE "nf_token" ("id" character varying NOT NULL, "native_id" text NOT NULL, "name" text, "symbol" text, "image" text, "uri" text, "amount" numeric NOT NULL, "is_burned" boolean NOT NULL, "collection_id" character varying, "current_owner_id" character varying, CONSTRAINT "PK_4b875f332d287d53286f0120060" PRIMARY KEY ("id"))
query: CREATE INDEX "IDX_1e9e7fc05f92357bd73f9894e0" ON "nf_token" ("native_id") 
query: CREATE INDEX "IDX_062fda9c8d3cfc052e32dee8e4" ON "nf_token" ("name") 
query: CREATE INDEX "IDX_65b31e75b2f1d27835196b2be0" ON "nf_token" ("symbol") 
query: CREATE INDEX "IDX_edd78f0b817ba4d3f9d239d10d" ON "nf_token" ("collection_id") 
query: CREATE INDEX "IDX_70ed98b811638d56141fecf0fb" ON "nf_token" ("current_owner_id") 
query: CREATE INDEX "IDX_dbc8d2bdb09faa872564c761c2" ON "nf_token" ("amount") 
query: CREATE INDEX "IDX_d557eb6f61c799175d93db5a0d" ON "nf_token" ("is_burned") 
query: CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))
query: CREATE TABLE "uri_update_action" ("id" character varying NOT NULL, "new_value" text, "old_value" text, "block_number" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "txn_hash" text NOT NULL, "token_id" character varying, CONSTRAINT "PK_0de40fe0fe070f895e84d31ecd0" PRIMARY KEY ("id"))
query: CREATE INDEX "IDX_49f300aa0df73f4d20ec04e6bd" ON "uri_update_action" ("token_id") 
query: CREATE TABLE "nft_event" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "txn_hash" text NOT NULL, "event_type" character varying(8) NOT NULL, "marketplace" text NOT NULL, "price" numeric NOT NULL, "chain" text NOT NULL, "nf_token_id" character varying, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_eca59e3d53ba2009252626e64d9" PRIMARY KEY ("id"))
query: CREATE INDEX "IDX_c2de0162e445aa1fb8b750e553" ON "nft_event" ("block_number") 
query: CREATE INDEX "IDX_d73870c870add45d1e6a127f80" ON "nft_event" ("timestamp") 
query: CREATE INDEX "IDX_245b2edcc64293cf6cc4538f5c" ON "nft_event" ("txn_hash") 
query: CREATE INDEX "IDX_9f36a9739b49364cb5d438f384" ON "nft_event" ("nf_token_id") 
query: CREATE INDEX "IDX_042a25b0ac2ad607412431f1b4" ON "nft_event" ("event_type") 
query: CREATE INDEX "IDX_def5fef9e6c88052a20d6d598f" ON "nft_event" ("from_id") 
query: CREATE INDEX "IDX_6cf20818a7482297d8da0f2705" ON "nft_event" ("to_id") 
query: CREATE INDEX "IDX_965dcd17b4c88dd66fb39df397" ON "nft_event" ("marketplace") 
query: CREATE INDEX "IDX_ada19c579e2d8bdce8b23dad15" ON "nft_event" ("price") 
query: CREATE INDEX "IDX_dabbd7d695ef95e6ef83f433a1" ON "nft_event" ("chain") 
query: ALTER TABLE "collection" ADD CONSTRAINT "FK_dc02ef85275d24f9ce8238b85fd" FOREIGN KEY ("stats_id") REFERENCES "collection_stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "attribute" ADD CONSTRAINT "FK_adaba2bde1f917be8521c42ebc0" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "nf_token_attribute" ADD CONSTRAINT "FK_aa6394b7642a4003da7fe07cf74" FOREIGN KEY ("nftoken_id") REFERENCES "nf_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "nf_token_attribute" ADD CONSTRAINT "FK_e8ed82a576c20c5ff6cc09e6a69" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "nf_token" ADD CONSTRAINT "FK_edd78f0b817ba4d3f9d239d10d7" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "nf_token" ADD CONSTRAINT "FK_70ed98b811638d56141fecf0fb8" FOREIGN KEY ("current_owner_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "uri_update_action" ADD CONSTRAINT "FK_49f300aa0df73f4d20ec04e6bdc" FOREIGN KEY ("token_id") REFERENCES "nf_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "nft_event" ADD CONSTRAINT "FK_9f36a9739b49364cb5d438f3842" FOREIGN KEY ("nf_token_id") REFERENCES "nf_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "nft_event" ADD CONSTRAINT "FK_def5fef9e6c88052a20d6d598fa" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: ALTER TABLE "nft_event" ADD CONSTRAINT "FK_6cf20818a7482297d8da0f27059" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
query: INSERT INTO "migrations"("timestamp", "name") VALUES ($1, $2) -- PARAMETERS: [1716404354139,"Data1716404354139"]
Migration Data1716404354139 has been  executed successfully.
query: COMMIT
```

<details>
  <summary>Partial Output</summary>

```ts
[init] query: SELECT * FROM current_schema()
[init] query: SELECT version();
[init] query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = 'public' AND "table_name" = 'migrations'
[init] query: SELECT * FROM "migrations" "migrations" ORDER BY "id" DESC
[init] No migrations are pending
[Astar-processor] (node:8809) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Astar-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Moonbeam-processor] (node:8816) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Moonbeam-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Moonriver-processor] (node:8818) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Moonriver-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Astar-processor] (node:8838) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Astar-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Moonriver-processor] (node:8850) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Moonriver-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Moonbeam-processor] (node:8849) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Moonbeam-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[api] 19:20:01 INFO  sqd:commands SERVE
[Astar-processor] (node:8778) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Astar-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Moonriver-processor] (node:8780) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Moonriver-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Astar-processor] 19:20:01 INFO  sqd:processor processing blocks from 1670997
[Moonbeam-processor] (node:8779) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[Moonbeam-processor] (Use `node --trace-deprecation ...` to show where the warning was created)
[Moonriver-processor] 19:20:01 INFO  sqd:processor processing blocks from 1670997
[Moonbeam-processor] 19:20:01 INFO  sqd:processor processing blocks from 1670997
[Astar-processor] 19:20:01 INFO  sqd:processor using archive data source
[Astar-processor] 19:20:01 INFO  sqd:processor prometheus metrics are served at port 42137
[Moonriver-processor] 19:20:01 INFO  sqd:processor using archive data source
[Moonriver-processor] 19:20:01 INFO  sqd:processor prometheus metrics are served at port 42671
[Moonbeam-processor] 19:20:01 INFO  sqd:processor using archive data source
[Moonbeam-processor] 19:20:01 INFO  sqd:processor prometheus metrics are served at port 41615
[api] (node:8875) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[api] (Use `node --trace-deprecation ...` to show where the warning was created)
[api] 19:20:02 INFO  sqd:graphql-server listening on port 4350
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38733.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38734.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38735.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38736.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38737.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38738.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38739.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38740.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38741.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38742.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38743.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38744.json
[Moonbeam-processor] Final URL: https://www.glmrjungle.com/nfts/1700.json
[Moonbeam-processor] Tofu run: Transaction {
[Moonbeam-processor]   id: '0001671232-23305-000001',
[Moonbeam-processor]   transactionIndex: 1,
[Moonbeam-processor]   hash: '0xdc543a45c2e5411929a4662c8c9ad07d9b7a25b6aa2d21b380ae7904b79d507d',
[Moonbeam-processor]   from: '0x8a586cb7fe15067d3aaf4e912a53144d8444a228',
[Moonbeam-processor]   to: '0x7bc8b1b5aba4df3be9f9a32dae501214dc0e4f3f',
[Moonbeam-processor]   input: '0xba84775900000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000062000000000000000000000000000000000000000000000000000000000000006a0000000000000000000000000798de2e16e02833ef08d8a5615791366088622e100000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036a4cf636319c000000000000000000000000000000000000000000000000000000000002540be4008ab01f6cfb1252209462989ceda10ea67f8ba26941ec533c3e2fc95d6fc15281000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cb13945ca8104f813992e4315f8ffefe64ac49ca00000000000000000000000000000000000000000000000000000000000006a40000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000d2bdc096154f8267dcc122739b533cb4b46dbc05fbb5ecb31cc6805a763c9c57000000000000000000000000660c8251ca9ee617621ce4d3ca3c95e1a57ff67e0000000000000000000000000000000000000000000000000000000062fcd97a1f27e68096a21de26e4c17da072406d186384295938e4ebf94ea4e83194e5a5c000000000000000000000000000000000000000000000000000000000033e91a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000008a586cb7fe15067d3aaf4e912a53144d8444a22800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036a4cf636319c0000000000000000000000000000000000000000000000000000000000000000c35000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000002540be40000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000061a800000000000000000000000000000000000000000000000000000000000186a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d3cca77cd6dc2794f431ae435323dbe6f9bd82c300000000000000000000000042000cd92885a0fecc30a732d56b0649533c2f17000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cb13945ca8104f813992e4315f8ffefe64ac49ca00000000000000000000000000000000000000000000000000000000000006a40000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041230a10f7f80d7c7713bf66a04adf960c9e5a917779bf3cf1eba534b37a735d5f2c9d702e8931e42f0975662e1bac83007f327c8fa46617de2ca57b94a5e8a59d1b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000411fb889a9c62ecba2ade8a2abb5b91bb6802e70f65bdc725fe2b8c44bbaee866a062d9905f7a37ec85c986649b8328c17a7d9ea8fb49933630efe0020660173121c00000000000000000000000000000000000000000000000000000000000000',
[Moonbeam-processor]   value: 63000000000000000000n,
[Moonbeam-processor]   status: 1
[Moonbeam-processor] }
[Moonbeam-processor] Final URL: https://www.glmrjungle.com/nfts/1700.json
[Moonbeam-processor] Final URL: https://bafybeiaqkklaps635kujsuzb34wbyds2maihfa5hcanmutawixu6ny56de.ipfs.nftstorage.link/602.json
[Moonbeam-processor] Final URL: https://bafybeiaqkklaps635kujsuzb34wbyds2maihfa5hcanmutawixu6ny56de.ipfs.nftstorage.link/603.json
[Moonbeam-processor] Final URL: https://ipfs.io/ipfs/QmPB9SHeASoxyzL9dbeQKAcRFgXZksaqiqPGXKkxnHystC
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38745.json
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38746.json
[Moonbeam-processor] Final URL: https://bafybeiaqkklaps635kujsuzb34wbyds2maihfa5hcanmutawixu6ny56de.ipfs.nftstorage.link/604.json
[Moonbeam-processor] Final URL: https://bafybeiaqkklaps635kujsuzb34wbyds2maihfa5hcanmutawixu6ny56de.ipfs.nftstorage.link/605.json
[Moonbeam-processor] Final URL: QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf
[Moonbeam-processor] Error getting file from IPFS: AxiosError: connect ECONNREFUSED 127.0.0.1:80
[Moonbeam-processor]     at AxiosError.from (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/axios/dist/node/axios.cjs:841:14)
[Moonbeam-processor]     at RedirectableRequest.handleRequestError (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/axios/dist/node/axios.cjs:3106:25)
[Moonbeam-processor]     at RedirectableRequest.emit (node:events:520:28)
[Moonbeam-processor]     at eventHandlers.<computed> (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/follow-redirects/index.js:38:24)
[Moonbeam-processor]     at ClientRequest.emit (node:events:520:28)
[Moonbeam-processor]     at Socket.socketErrorListener (node:_http_client:502:9)
[Moonbeam-processor]     at Socket.emit (node:events:520:28)
[Moonbeam-processor]     at emitErrorNT (node:internal/streams/destroy:170:8)
[Moonbeam-processor]     at emitErrorCloseNT (node:internal/streams/destroy:129:3)
[Moonbeam-processor]     at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
[Moonbeam-processor]     at Axios.request (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/axios/dist/node/axios.cjs:4224:41)
[Moonbeam-processor]     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Moonbeam-processor]     at async getMetadata (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/utils/common.js:12:26)
[Moonbeam-processor]     at async getNftMetadata (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/utils/common.js:131:30)
[Moonbeam-processor]     at async NftTransferManager.getOrCreate (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/utils/classes/transfer.js:42:30)
[Moonbeam-processor]     at async Object.handleErc721Transfer (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/transfers/nftTransfers/erc721.js:33:22)
[Moonbeam-processor]     at async /home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/main.js:51:29
[Moonbeam-processor]     at async TypeormDatabase.performUpdates (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/@subsquid/typeorm-store/lib/database.js:139:13)
[Moonbeam-processor]     at async /home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/@subsquid/typeorm-store/lib/database.js:84:13
[Moonbeam-processor]     at async EntityManager.transaction (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/typeorm/entity-manager/EntityManager.js:73:28) {
[Moonbeam-processor]   port: 80,
[Moonbeam-processor]   address: '127.0.0.1',
[Moonbeam-processor]   syscall: 'connect',
[Moonbeam-processor]   code: 'ECONNREFUSED',
[Moonbeam-processor]   errno: -111,
[Moonbeam-processor]   config: {
[Moonbeam-processor]     transitional: {
[Moonbeam-processor]       silentJSONParsing: true,
[Moonbeam-processor]       forcedJSONParsing: true,
[Moonbeam-processor]       clarifyTimeoutError: false
[Moonbeam-processor]     },
[Moonbeam-processor]     adapter: [ 'xhr', 'http', 'fetch' ],
[Moonbeam-processor]     transformRequest: [ [Function: transformRequest] ],
[Moonbeam-processor]     transformResponse: [ [Function: transformResponse] ],
[Moonbeam-processor]     timeout: 0,
[Moonbeam-processor]     xsrfCookieName: 'XSRF-TOKEN',
[Moonbeam-processor]     xsrfHeaderName: 'X-XSRF-TOKEN',
[Moonbeam-processor]     maxContentLength: -1,
[Moonbeam-processor]     maxBodyLength: -1,
[Moonbeam-processor]     env: { FormData: [Function], Blob: [class Blob] },
[Moonbeam-processor]     validateStatus: [Function: validateStatus],
[Moonbeam-processor]     headers: Object [AxiosHeaders] {
[Moonbeam-processor]       Accept: 'application/json, text/plain, */*',
[Moonbeam-processor]       'Content-Type': undefined,
[Moonbeam-processor]       'User-Agent': 'axios/1.7.2',
[Moonbeam-processor]       'Accept-Encoding': 'gzip, compress, deflate, br'
[Moonbeam-processor]     },
[Moonbeam-processor]     method: 'get',
[Moonbeam-processor]     url: 'QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]     data: undefined
[Moonbeam-processor]   },
[Moonbeam-processor]   request: <ref *1> Writable {
[Moonbeam-processor]     _events: {
[Moonbeam-processor]       close: undefined,
[Moonbeam-processor]       error: [Function: handleRequestError],
[Moonbeam-processor]       prefinish: undefined,
[Moonbeam-processor]       finish: undefined,
[Moonbeam-processor]       drain: undefined,
[Moonbeam-processor]       response: [Function: handleResponse],
[Moonbeam-processor]       socket: [Function: handleRequestSocket]
[Moonbeam-processor]     },
[Moonbeam-processor]     _writableState: WritableState {
[Moonbeam-processor]       highWaterMark: 65536,
[Moonbeam-processor]       length: 0,
[Moonbeam-processor]       corked: 0,
[Moonbeam-processor]       onwrite: [Function: bound onwrite],
[Moonbeam-processor]       writelen: 0,
[Moonbeam-processor]       bufferedIndex: 0,
[Moonbeam-processor]       pendingcb: 0,
[Moonbeam-processor]       [Symbol(kState)]: 17580812,
[Moonbeam-processor]       [Symbol(kBufferedValue)]: null
[Moonbeam-processor]     },
[Moonbeam-processor]     _maxListeners: undefined,
[Moonbeam-processor]     _options: {
[Moonbeam-processor]       maxRedirects: 21,
[Moonbeam-processor]       maxBodyLength: Infinity,
[Moonbeam-processor]       protocol: 'http:',
[Moonbeam-processor]       path: '/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]       method: 'GET',
[Moonbeam-processor]       headers: [Object: null prototype],
[Moonbeam-processor]       agents: [Object],
[Moonbeam-processor]       auth: undefined,
[Moonbeam-processor]       family: undefined,
[Moonbeam-processor]       beforeRedirect: [Function: dispatchBeforeRedirect],
[Moonbeam-processor]       beforeRedirects: [Object],
[Moonbeam-processor]       hostname: 'localhost',
[Moonbeam-processor]       port: '',
[Moonbeam-processor]       agent: undefined,
[Moonbeam-processor]       nativeProtocols: [Object],
[Moonbeam-processor]       pathname: '/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf'
[Moonbeam-processor]     },
[Moonbeam-processor]     _ended: true,
[Moonbeam-processor]     _ending: true,
[Moonbeam-processor]     _redirectCount: 0,
[Moonbeam-processor]     _redirects: [],
[Moonbeam-processor]     _requestBodyLength: 0,
[Moonbeam-processor]     _requestBodyBuffers: [],
[Moonbeam-processor]     _eventsCount: 3,
[Moonbeam-processor]     _onNativeResponse: [Function (anonymous)],
[Moonbeam-processor]     _currentRequest: ClientRequest {
[Moonbeam-processor]       _events: [Object: null prototype],
[Moonbeam-processor]       _eventsCount: 7,
[Moonbeam-processor]       _maxListeners: undefined,
[Moonbeam-processor]       outputData: [],
[Moonbeam-processor]       outputSize: 0,
[Moonbeam-processor]       writable: true,
[Moonbeam-processor]       destroyed: false,
[Moonbeam-processor]       _last: true,
[Moonbeam-processor]       chunkedEncoding: false,
[Moonbeam-processor]       shouldKeepAlive: true,
[Moonbeam-processor]       maxRequestsOnConnectionReached: false,
[Moonbeam-processor]       _defaultKeepAlive: true,
[Moonbeam-processor]       useChunkedEncodingByDefault: false,
[Moonbeam-processor]       sendDate: false,
[Moonbeam-processor]       _removedConnection: false,
[Moonbeam-processor]       _removedContLen: false,
[Moonbeam-processor]       _removedTE: false,
[Moonbeam-processor]       strictContentLength: false,
[Moonbeam-processor]       _contentLength: 0,
[Moonbeam-processor]       _hasBody: true,
[Moonbeam-processor]       _trailer: '',
[Moonbeam-processor]       finished: true,
[Moonbeam-processor]       _headerSent: true,
[Moonbeam-processor]       _closed: false,
[Moonbeam-processor]       _header: 'GET /QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf HTTP/1.1\r\n' +
[Moonbeam-processor]         'Accept: application/json, text/plain, */*\r\n' +
[Moonbeam-processor]         'User-Agent: axios/1.7.2\r\n' +
[Moonbeam-processor]         'Accept-Encoding: gzip, compress, deflate, br\r\n' +
[Moonbeam-processor]         'Host: localhost\r\n' +
[Moonbeam-processor]         'Connection: keep-alive\r\n' +
[Moonbeam-processor]         '\r\n',
[Moonbeam-processor]       _keepAliveTimeout: 0,
[Moonbeam-processor]       _onPendingData: [Function: nop],
[Moonbeam-processor]       agent: [Agent],
[Moonbeam-processor]       socketPath: undefined,
[Moonbeam-processor]       method: 'GET',
[Moonbeam-processor]       maxHeaderSize: undefined,
[Moonbeam-processor]       insecureHTTPParser: undefined,
[Moonbeam-processor]       joinDuplicateHeaders: undefined,
[Moonbeam-processor]       path: '/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]       _ended: false,
[Moonbeam-processor]       res: null,
[Moonbeam-processor]       aborted: false,
[Moonbeam-processor]       timeoutCb: [Function: emitRequestTimeout],
[Moonbeam-processor]       upgradeOrConnect: false,
[Moonbeam-processor]       parser: null,
[Moonbeam-processor]       maxHeadersCount: null,
[Moonbeam-processor]       reusedSocket: false,
[Moonbeam-processor]       host: 'localhost',
[Moonbeam-processor]       protocol: 'http:',
[Moonbeam-processor]       _redirectable: [Circular *1],
[Moonbeam-processor]       [Symbol(shapeMode)]: false,
[Moonbeam-processor]       [Symbol(kCapture)]: false,
[Moonbeam-processor]       [Symbol(kBytesWritten)]: 0,
[Moonbeam-processor]       [Symbol(kNeedDrain)]: false,
[Moonbeam-processor]       [Symbol(corked)]: 0,
[Moonbeam-processor]       [Symbol(kChunkedBuffer)]: [],
[Moonbeam-processor]       [Symbol(kChunkedLength)]: 0,
[Moonbeam-processor]       [Symbol(kSocket)]: [Socket],
[Moonbeam-processor]       [Symbol(kOutHeaders)]: [Object: null prototype],
[Moonbeam-processor]       [Symbol(errored)]: null,
[Moonbeam-processor]       [Symbol(kHighWaterMark)]: 65536,
[Moonbeam-processor]       [Symbol(kRejectNonStandardBodyWrites)]: false,
[Moonbeam-processor]       [Symbol(kUniqueHeaders)]: null
[Moonbeam-processor]     },
[Moonbeam-processor]     _currentUrl: 'http://localhost/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]     [Symbol(shapeMode)]: true,
[Moonbeam-processor]     [Symbol(kCapture)]: false
[Moonbeam-processor]   },
[Moonbeam-processor]   cause: Error: connect ECONNREFUSED 127.0.0.1:80
[Moonbeam-processor]       at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1606:16) {
[Moonbeam-processor]     errno: -111,
[Moonbeam-processor]     code: 'ECONNREFUSED',
[Moonbeam-processor]     syscall: 'connect',
[Moonbeam-processor]     address: '127.0.0.1',
[Moonbeam-processor]     port: 80
[Moonbeam-processor]   }
[Moonbeam-processor] }
[Moonbeam-processor] Error decoding log: AxiosError: connect ECONNREFUSED 127.0.0.1:80
[Moonbeam-processor]     at AxiosError.from (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/axios/dist/node/axios.cjs:841:14)
[Moonbeam-processor]     at RedirectableRequest.handleRequestError (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/axios/dist/node/axios.cjs:3106:25)
[Moonbeam-processor]     at RedirectableRequest.emit (node:events:520:28)
[Moonbeam-processor]     at eventHandlers.<computed> (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/follow-redirects/index.js:38:24)
[Moonbeam-processor]     at ClientRequest.emit (node:events:520:28)
[Moonbeam-processor]     at Socket.socketErrorListener (node:_http_client:502:9)
[Moonbeam-processor]     at Socket.emit (node:events:520:28)
[Moonbeam-processor]     at emitErrorNT (node:internal/streams/destroy:170:8)
[Moonbeam-processor]     at emitErrorCloseNT (node:internal/streams/destroy:129:3)
[Moonbeam-processor]     at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
[Moonbeam-processor]     at Axios.request (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/axios/dist/node/axios.cjs:4224:41)
[Moonbeam-processor]     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Moonbeam-processor]     at async getMetadata (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/utils/common.js:12:26)
[Moonbeam-processor]     at async getNftMetadata (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/utils/common.js:131:30)
[Moonbeam-processor]     at async NftTransferManager.getOrCreate (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/utils/classes/transfer.js:42:30)
[Moonbeam-processor]     at async Object.handleErc721Transfer (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/mappings/transfers/nftTransfers/erc721.js:33:22)
[Moonbeam-processor]     at async /home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/lib/Moonbeam/main.js:51:29
[Moonbeam-processor]     at async TypeormDatabase.performUpdates (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/@subsquid/typeorm-store/lib/database.js:139:13)
[Moonbeam-processor]     at async /home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/@subsquid/typeorm-store/lib/database.js:84:13
[Moonbeam-processor]     at async EntityManager.transaction (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/typeorm/entity-manager/EntityManager.js:73:28) {
[Moonbeam-processor]   port: 80,
[Moonbeam-processor]   address: '127.0.0.1',
[Moonbeam-processor]   syscall: 'connect',
[Moonbeam-processor]   code: 'ECONNREFUSED',
[Moonbeam-processor]   errno: -111,
[Moonbeam-processor]   config: {
[Moonbeam-processor]     transitional: {
[Moonbeam-processor]       silentJSONParsing: true,
[Moonbeam-processor]       forcedJSONParsing: true,
[Moonbeam-processor]       clarifyTimeoutError: false
[Moonbeam-processor]     },
[Moonbeam-processor]     adapter: [ 'xhr', 'http', 'fetch' ],
[Moonbeam-processor]     transformRequest: [ [Function: transformRequest] ],
[Moonbeam-processor]     transformResponse: [ [Function: transformResponse] ],
[Moonbeam-processor]     timeout: 0,
[Moonbeam-processor]     xsrfCookieName: 'XSRF-TOKEN',
[Moonbeam-processor]     xsrfHeaderName: 'X-XSRF-TOKEN',
[Moonbeam-processor]     maxContentLength: -1,
[Moonbeam-processor]     maxBodyLength: -1,
[Moonbeam-processor]     env: { FormData: [Function], Blob: [class Blob] },
[Moonbeam-processor]     validateStatus: [Function: validateStatus],
[Moonbeam-processor]     headers: Object [AxiosHeaders] {
[Moonbeam-processor]       Accept: 'application/json, text/plain, */*',
[Moonbeam-processor]       'Content-Type': undefined,
[Moonbeam-processor]       'User-Agent': 'axios/1.7.2',
[Moonbeam-processor]       'Accept-Encoding': 'gzip, compress, deflate, br'
[Moonbeam-processor]     },
[Moonbeam-processor]     method: 'get',
[Moonbeam-processor]     url: 'QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]     data: undefined
[Moonbeam-processor]   },
[Moonbeam-processor]   request: <ref *1> Writable {
[Moonbeam-processor]     _events: {
[Moonbeam-processor]       close: undefined,
[Moonbeam-processor]       error: [Function: handleRequestError],
[Moonbeam-processor]       prefinish: undefined,
[Moonbeam-processor]       finish: undefined,
[Moonbeam-processor]       drain: undefined,
[Moonbeam-processor]       response: [Function: handleResponse],
[Moonbeam-processor]       socket: [Function: handleRequestSocket]
[Moonbeam-processor]     },
[Moonbeam-processor]     _writableState: WritableState {
[Moonbeam-processor]       highWaterMark: 65536,
[Moonbeam-processor]       length: 0,
[Moonbeam-processor]       corked: 0,
[Moonbeam-processor]       onwrite: [Function: bound onwrite],
[Moonbeam-processor]       writelen: 0,
[Moonbeam-processor]       bufferedIndex: 0,
[Moonbeam-processor]       pendingcb: 0,
[Moonbeam-processor]       [Symbol(kState)]: 17580812,
[Moonbeam-processor]       [Symbol(kBufferedValue)]: null
[Moonbeam-processor]     },
[Moonbeam-processor]     _maxListeners: undefined,
[Moonbeam-processor]     _options: {
[Moonbeam-processor]       maxRedirects: 21,
[Moonbeam-processor]       maxBodyLength: Infinity,
[Moonbeam-processor]       protocol: 'http:',
[Moonbeam-processor]       path: '/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]       method: 'GET',
[Moonbeam-processor]       headers: [Object: null prototype],
[Moonbeam-processor]       agents: [Object],
[Moonbeam-processor]       auth: undefined,
[Moonbeam-processor]       family: undefined,
[Moonbeam-processor]       beforeRedirect: [Function: dispatchBeforeRedirect],
[Moonbeam-processor]       beforeRedirects: [Object],
[Moonbeam-processor]       hostname: 'localhost',
[Moonbeam-processor]       port: '',
[Moonbeam-processor]       agent: undefined,
[Moonbeam-processor]       nativeProtocols: [Object],
[Moonbeam-processor]       pathname: '/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf'
[Moonbeam-processor]     },
[Moonbeam-processor]     _ended: true,
[Moonbeam-processor]     _ending: true,
[Moonbeam-processor]     _redirectCount: 0,
[Moonbeam-processor]     _redirects: [],
[Moonbeam-processor]     _requestBodyLength: 0,
[Moonbeam-processor]     _requestBodyBuffers: [],
[Moonbeam-processor]     _eventsCount: 3,
[Moonbeam-processor]     _onNativeResponse: [Function (anonymous)],
[Moonbeam-processor]     _currentRequest: ClientRequest {
[Moonbeam-processor]       _events: [Object: null prototype],
[Moonbeam-processor]       _eventsCount: 7,
[Moonbeam-processor]       _maxListeners: undefined,
[Moonbeam-processor]       outputData: [],
[Moonbeam-processor]       outputSize: 0,
[Moonbeam-processor]       writable: true,
[Moonbeam-processor]       destroyed: false,
[Moonbeam-processor]       _last: true,
[Moonbeam-processor]       chunkedEncoding: false,
[Moonbeam-processor]       shouldKeepAlive: true,
[Moonbeam-processor]       maxRequestsOnConnectionReached: false,
[Moonbeam-processor]       _defaultKeepAlive: true,
[Moonbeam-processor]       useChunkedEncodingByDefault: false,
[Moonbeam-processor]       sendDate: false,
[Moonbeam-processor]       _removedConnection: false,
[Moonbeam-processor]       _removedContLen: false,
[Moonbeam-processor]       _removedTE: false,
[Moonbeam-processor]       strictContentLength: false,
[Moonbeam-processor]       _contentLength: 0,
[Moonbeam-processor]       _hasBody: true,
[Moonbeam-processor]       _trailer: '',
[Moonbeam-processor]       finished: true,
[Moonbeam-processor]       _headerSent: true,
[Moonbeam-processor]       _closed: false,
[Moonbeam-processor]       _header: 'GET /QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf HTTP/1.1\r\n' +
[Moonbeam-processor]         'Accept: application/json, text/plain, */*\r\n' +
[Moonbeam-processor]         'User-Agent: axios/1.7.2\r\n' +
[Moonbeam-processor]         'Accept-Encoding: gzip, compress, deflate, br\r\n' +
[Moonbeam-processor]         'Host: localhost\r\n' +
[Moonbeam-processor]         'Connection: keep-alive\r\n' +
[Moonbeam-processor]         '\r\n',
[Moonbeam-processor]       _keepAliveTimeout: 0,
[Moonbeam-processor]       _onPendingData: [Function: nop],
[Moonbeam-processor]       agent: [Agent],
[Moonbeam-processor]       socketPath: undefined,
[Moonbeam-processor]       method: 'GET',
[Moonbeam-processor]       maxHeaderSize: undefined,
[Moonbeam-processor]       insecureHTTPParser: undefined,
[Moonbeam-processor]       joinDuplicateHeaders: undefined,
[Moonbeam-processor]       path: '/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]       _ended: false,
[Moonbeam-processor]       res: null,
[Moonbeam-processor]       aborted: false,
[Moonbeam-processor]       timeoutCb: [Function: emitRequestTimeout],
[Moonbeam-processor]       upgradeOrConnect: false,
[Moonbeam-processor]       parser: null,
[Moonbeam-processor]       maxHeadersCount: null,
[Moonbeam-processor]       reusedSocket: false,
[Moonbeam-processor]       host: 'localhost',
[Moonbeam-processor]       protocol: 'http:',
[Moonbeam-processor]       _redirectable: [Circular *1],
[Moonbeam-processor]       [Symbol(shapeMode)]: false,
[Moonbeam-processor]       [Symbol(kCapture)]: false,
[Moonbeam-processor]       [Symbol(kBytesWritten)]: 0,
[Moonbeam-processor]       [Symbol(kNeedDrain)]: false,
[Moonbeam-processor]       [Symbol(corked)]: 0,
[Moonbeam-processor]       [Symbol(kChunkedBuffer)]: [],
[Moonbeam-processor]       [Symbol(kChunkedLength)]: 0,
[Moonbeam-processor]       [Symbol(kSocket)]: [Socket],
[Moonbeam-processor]       [Symbol(kOutHeaders)]: [Object: null prototype],
[Moonbeam-processor]       [Symbol(errored)]: null,
[Moonbeam-processor]       [Symbol(kHighWaterMark)]: 65536,
[Moonbeam-processor]       [Symbol(kRejectNonStandardBodyWrites)]: false,
[Moonbeam-processor]       [Symbol(kUniqueHeaders)]: null
[Moonbeam-processor]     },
[Moonbeam-processor]     _currentUrl: 'http://localhost/QmfQv9EWDU1f7EbEKKHPjZ5qGkz9Jb9WdoXGVp7Hnf8Yvf',
[Moonbeam-processor]     [Symbol(shapeMode)]: true,
[Moonbeam-processor]     [Symbol(kCapture)]: false
[Moonbeam-processor]   },
[Moonbeam-processor]   cause: Error: connect ECONNREFUSED 127.0.0.1:80
[Moonbeam-processor]       at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1606:16) {
[Moonbeam-processor]     errno: -111,
[Moonbeam-processor]     code: 'ECONNREFUSED',
[Moonbeam-processor]     syscall: 'connect',
[Moonbeam-processor]     address: '127.0.0.1',
[Moonbeam-processor]     port: 80
[Moonbeam-processor]   }
[Moonbeam-processor] }
[Moonbeam-processor] Final URL: https://graphigo.prd.galaxy.eco/metadata/0x51737fa634e26f5687e45c6ca07604e064076350/38747.json
[Moonbeam-processor] Final URL: https://bafybeiaqkklaps635kujsuzb34wbyds2maihfa5hcanmutawixu6ny56de.ipfs.nftstorage.link/606.json
[Moonbeam-processor] Final URL: https://bafybeiaqkklaps635kujsuzb34wbyds2maihfa5hcanmutawixu6ny56de.ipfs.nftstorage.link/607.json
[Moonbeam-processor] Final URL: https://fairweb.livetree.com/api/Web3Extensions/NFTMetadata?nft=kb2ETiu2bP4i78wPHrr
```
</details>

`npm serve` works:

```ts
SERVE
(node:9838) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
19:23:17 INFO  sqd:graphql-server listening on port 4350
```

## Testing

Unit tests currently have some errors:

<details>
  <summary>Output</summary>

```ts
 PASS  tests/functions/fetchFloorPriceChange.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      startTimeISO:  2024-05-21T19:26:18.852Z

      at log (src/functions/nftEstimatedValue.js:13:13)

    console.log
      endTimeISO:  2024-05-22T19:26:18.852Z

      at log (src/functions/nftEstimatedValue.js:14:13)

    console.log
      undefined

      at log (src/functions/fetchAllStats.js:15:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)
          at async Promise.all (index 0)

    console.log
      undefined

      at log (src/functions/fetchNftMetadata.js:19:17)
          at async Promise.all (index 1)

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      metadata:  undefined

      at log (src/functions/nftEstimatedValue.js:19:17)
          at async Promise.all (index 1)

    console.error
      Error calculating NFT estimated value: Error: No NFT metadata found
          at nftEstimatedValue (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/nftEstimatedValue.js:22:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at async Promise.all (index 1)
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:8:68)

      66 |         return estimatedValue;
      67 |     } catch (error) {
    > 68 |         console.error('Error calculating NFT estimated value:', error);
         |                 ^
      69 |     }
      70 | }
      71 |

      at error (src/functions/nftEstimatedValue.js:68:17)
          at async Promise.all (index 1)
      at fetchNftUnrealizedPnL (src/functions/fetchNftUnrealizedPnL.js:8:68)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.log
      {}

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      {}

      at log (src/functions/fetchFloorPriceChange.js:24:17)

 PASS  tests/functions/fetchCollectionSales.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      startTimeISO:  2024-05-21T19:26:18.851Z

      at log (src/functions/nftEstimatedValue.js:13:13)

    console.log
      endTimeISO:  2024-05-22T19:26:18.851Z

      at log (src/functions/nftEstimatedValue.js:14:13)

    console.log
      undefined

      at log (src/functions/fetchAllStats.js:15:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)
          at async Promise.all (index 0)

    console.log
      undefined

      at log (src/functions/fetchNftMetadata.js:19:17)
          at async Promise.all (index 1)

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      metadata:  undefined

      at log (src/functions/nftEstimatedValue.js:19:17)
          at async Promise.all (index 1)

    console.error
      Error calculating NFT estimated value: Error: No NFT metadata found
          at nftEstimatedValue (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/nftEstimatedValue.js:22:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at async Promise.all (index 1)
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:8:68)

      66 |         return estimatedValue;
      67 |     } catch (error) {
    > 68 |         console.error('Error calculating NFT estimated value:', error);
         |                 ^
      69 |     }
      70 | }
      71 |

      at error (src/functions/nftEstimatedValue.js:68:17)
          at async Promise.all (index 1)
      at fetchNftUnrealizedPnL (src/functions/fetchNftUnrealizedPnL.js:8:68)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.log
      {
          "nftEvents": []
      }

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.error
      Error querying GraphQL: Network error

      29 |
      30 |     } catch (error) {
    > 31 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      32 |         if (error.response && error.response.errors) {
      33 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));
      34 |         }

      at error (src/functions/fetchCollectionSales.js:31:17)
      at Object.<anonymous> (tests/functions/fetchCollectionSales.test.js:55:5)

 PASS  tests/functions/fetchWalletActivity.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      {
          "nftEvents": []
      }

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.error
      Error querying GraphQL: Network error

      21 |         return response;
      22 |     } catch (error) {
    > 23 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      24 |         if (error.response && error.response.errors) {
      25 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));
      26 |         }

      at error (src/functions/fetchWalletActivity.js:23:17)
      at Object.<anonymous> (tests/functions/fetchWalletActivity.test.js:48:5)

 PASS  tests/functions/fetchNftMetadata.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      startTimeISO:  2024-05-21T19:26:19.035Z

      at log (src/functions/nftEstimatedValue.js:13:13)

    console.log
      endTimeISO:  2024-05-22T19:26:19.035Z

      at log (src/functions/nftEstimatedValue.js:14:13)

    console.log
      undefined

      at log (src/functions/fetchAllStats.js:15:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)
          at async Promise.all (index 0)

    console.log
      undefined

      at log (src/functions/fetchNftMetadata.js:19:17)
          at async Promise.all (index 1)

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      metadata:  undefined

      at log (src/functions/nftEstimatedValue.js:19:17)
          at async Promise.all (index 1)

    console.error
      Error calculating NFT estimated value: Error: No NFT metadata found
          at nftEstimatedValue (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/nftEstimatedValue.js:22:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at async Promise.all (index 1)
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:8:68)

      66 |         return estimatedValue;
      67 |     } catch (error) {
    > 68 |         console.error('Error calculating NFT estimated value:', error);
         |                 ^
      69 |     }
      70 | }
      71 |

      at error (src/functions/nftEstimatedValue.js:68:17)
          at async Promise.all (index 1)
      at fetchNftUnrealizedPnL (src/functions/fetchNftUnrealizedPnL.js:8:68)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.log
      {
          "nfTokens": []
      }

      at log (src/functions/fetchNftMetadata.js:19:17)

    console.error
      Error querying GraphQL: Network error

      20 |         return response;
      21 |     } catch (error) {
    > 22 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      23 |         if (error.response && error.response.errors) {
      24 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));
      25 |         }

      at error (src/functions/fetchNftMetadata.js:22:17)
      at Object.<anonymous> (tests/functions/fetchNftMetadata.test.js:44:5)

 PASS  tests/functions/fetchCollectionNfts.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      startTimeISO:  2024-05-21T19:26:19.042Z

      at log (src/functions/nftEstimatedValue.js:13:13)

    console.log
      endTimeISO:  2024-05-22T19:26:19.042Z

      at log (src/functions/nftEstimatedValue.js:14:13)

    console.log
      undefined

      at log (src/functions/fetchAllStats.js:15:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)
          at async Promise.all (index 0)

    console.log
      undefined

      at log (src/functions/fetchNftMetadata.js:19:17)
          at async Promise.all (index 1)

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      metadata:  undefined

      at log (src/functions/nftEstimatedValue.js:19:17)
          at async Promise.all (index 1)

    console.error
      Error calculating NFT estimated value: Error: No NFT metadata found
          at nftEstimatedValue (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/nftEstimatedValue.js:22:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at async Promise.all (index 1)
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:8:68)

      66 |         return estimatedValue;
      67 |     } catch (error) {
    > 68 |         console.error('Error calculating NFT estimated value:', error);
         |                 ^
      69 |     }
      70 | }
      71 |

      at error (src/functions/nftEstimatedValue.js:68:17)
          at async Promise.all (index 1)
      at fetchNftUnrealizedPnL (src/functions/fetchNftUnrealizedPnL.js:8:68)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.log
      {}

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.error
      Error querying GraphQL: Network error

      20 |         return response;
      21 |     } catch (error) {
    > 22 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      23 |         
      24 |         if (error.response && error.response.errors) {
      25 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));

      at error (src/functions/fetchCollectionNfts.js:22:17)
      at Object.<anonymous> (tests/functions/fetchCollectionNfts.test.js:42:5)

 PASS  tests/functions/fetchNftActivity.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      startTimeISO:  2024-05-21T19:26:19.172Z

      at log (src/functions/nftEstimatedValue.js:13:13)

    console.log
      endTimeISO:  2024-05-22T19:26:19.172Z

      at log (src/functions/nftEstimatedValue.js:14:13)

    console.log
      undefined

      at log (src/functions/fetchAllStats.js:15:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)
          at async Promise.all (index 0)

    console.log
      undefined

      at log (src/functions/fetchNftMetadata.js:19:17)
          at async Promise.all (index 1)

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      metadata:  undefined

      at log (src/functions/nftEstimatedValue.js:19:17)
          at async Promise.all (index 1)

    console.error
      Error calculating NFT estimated value: Error: No NFT metadata found
          at nftEstimatedValue (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/nftEstimatedValue.js:22:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at async Promise.all (index 1)
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:8:68)

      66 |         return estimatedValue;
      67 |     } catch (error) {
    > 68 |         console.error('Error calculating NFT estimated value:', error);
         |                 ^
      69 |     }
      70 | }
      71 |

      at error (src/functions/nftEstimatedValue.js:68:17)
          at async Promise.all (index 1)
      at fetchNftUnrealizedPnL (src/functions/fetchNftUnrealizedPnL.js:8:68)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.log
      {
          "nftEvents": []
      }

      at log (src/functions/fetchNftActivity.js:19:17)

    console.error
      Error querying GraphQL: Network error

      22 |
      23 |     } catch (error) {
    > 24 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      25 |         if (error.response && error.response.errors) {
      26 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));
      27 |         }

      at error (src/functions/fetchNftActivity.js:24:17)
      at Object.<anonymous> (tests/functions/fetchNftActivity.test.js:42:5)

 PASS  tests/functions/fetchNftAcquisitionPrice.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      {
          "acquisitionPrice": {
              "amount": 100,
              "currency": "ETH"
          }
      }

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.error
      Error querying GraphQL: Network error

      20 |         return response;
      21 |     } catch (error) {
    > 22 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      23 |         if (error.response && error.response.errors) {
      24 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));
      25 |         }

      at error (src/functions/fetchNftAcquisitionPrice.js:22:17)
      at Object.<anonymous> (tests/functions/fetchNftAcquisitionPrice.test.js:49:5)

(node:12008) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 PASS  tests/functions/fetchFloorPrice.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      startTimeISO:  2024-05-21T19:26:19.284Z

      at log (src/functions/nftEstimatedValue.js:13:13)

    console.log
      endTimeISO:  2024-05-22T19:26:19.284Z

      at log (src/functions/nftEstimatedValue.js:14:13)

    console.log
      undefined

      at log (src/functions/fetchAllStats.js:15:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)
          at async Promise.all (index 0)

    console.log
      undefined

      at log (src/functions/fetchNftMetadata.js:19:17)
          at async Promise.all (index 1)

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      metadata:  undefined

      at log (src/functions/nftEstimatedValue.js:19:17)
          at async Promise.all (index 1)

    console.error
      Error calculating NFT estimated value: Error: No NFT metadata found
          at nftEstimatedValue (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/nftEstimatedValue.js:22:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at async Promise.all (index 1)
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:8:68)

      66 |         return estimatedValue;
      67 |     } catch (error) {
    > 68 |         console.error('Error calculating NFT estimated value:', error);
         |                 ^
      69 |     }
      70 | }
      71 |

      at error (src/functions/nftEstimatedValue.js:68:17)
          at async Promise.all (index 1)
      at fetchNftUnrealizedPnL (src/functions/fetchNftUnrealizedPnL.js:8:68)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.log
      {}

      at log (src/functions/fetchFloorPrice.js:21:17)

    console.log
      {}

      at log (src/functions/fetchFloorPrice.js:21:17)

(node:12009) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 PASS  tests/functions/fetchNftUnrealizedPnL.test.js
  ● Console

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.error
      Error calculating unrealized P&L:  Error: Network error
          at Object.<anonymous> (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/tests/functions/fetchNftUnrealizedPnL.test.js:18:48)
          at Promise.then.completed (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/utils.js:231:10)
          at _callCircusTest (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/run.js:316:40)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at _runTest (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/run.js:252:3)
          at _runTestsForDescribeBlock (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/run.js:126:9)
          at _runTestsForDescribeBlock (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/run.js:121:9)
          at run (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/run.js:71:3)
          at runAndTransformResultsToJestFormat (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
          at jestAdapter (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
          at runTestInternal (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-runner/build/runTest.js:367:16)
          at runTest (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-runner/build/runTest.js:444:34)
          at Object.worker (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/jest-runner/build/testWorker.js:106:12)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)
      at Object.<anonymous> (tests/functions/fetchNftUnrealizedPnL.test.js:21:20)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  { acquisitionPriceResponse: 100, estimatedPriceResponse: 150 }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

 PASS  tests/functions/fetchAllStats.test.js
  ● Console

    console.log
      undefined

      at log (src/functions/fetchFloorPriceChange.js:24:17)

    console.log
      startTimeISO:  2024-05-21T19:26:19.326Z

      at log (src/functions/nftEstimatedValue.js:13:13)

    console.log
      endTimeISO:  2024-05-22T19:26:19.326Z

      at log (src/functions/nftEstimatedValue.js:14:13)

    console.log
      undefined

      at log (src/functions/fetchAllStats.js:15:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionNfts.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchCollectionSales.js:26:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)

    console.log
      undefined

      at log (src/functions/fetchNftAcquisitionPrice.js:19:17)
          at async Promise.all (index 0)

    console.log
      undefined

      at log (src/functions/fetchNftMetadata.js:19:17)
          at async Promise.all (index 1)

    console.log
      undefined

      at log (src/functions/fetchWalletActivity.js:19:17)

    console.log
      metadata:  undefined

      at log (src/functions/nftEstimatedValue.js:19:17)
          at async Promise.all (index 1)

    console.error
      Error calculating NFT estimated value: Error: No NFT metadata found
          at nftEstimatedValue (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/nftEstimatedValue.js:22:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at async Promise.all (index 1)
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:8:68)

      66 |         return estimatedValue;
      67 |     } catch (error) {
    > 68 |         console.error('Error calculating NFT estimated value:', error);
         |                 ^
      69 |     }
      70 | }
      71 |

      at error (src/functions/nftEstimatedValue.js:68:17)
          at async Promise.all (index 1)
      at fetchNftUnrealizedPnL (src/functions/fetchNftUnrealizedPnL.js:8:68)

    console.log
      acquisitionPriceResponse, estimatedPriceResponse:  {
        acquisitionPriceResponse: undefined,
        estimatedPriceResponse: undefined
      }

      at log (src/functions/fetchNftUnrealizedPnL.js:12:17)

    console.error
      Error calculating unrealized P&L:  Error: Failed to retrieve valid data for acquisition price or estimated value
          at fetchNftUnrealizedPnL (/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/src/functions/fetchNftUnrealizedPnL.js:16:19)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)

      22 |         return unrealizedPnL;
      23 |     } catch (error) {
    > 24 |         console.error(`Error calculating unrealized P&L: `, error);
         |                 ^
      25 |         return 0;
      26 |     }
      27 | }

      at error (src/functions/fetchNftUnrealizedPnL.js:24:17)

    console.log
      {
          "stats": []
      }

      at log (src/functions/fetchAllStats.js:15:17)

    console.error
      Error querying GraphQL: Network error

      16 |         return response;
      17 |     } catch (error) {
    > 18 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      19 |         if (error.response && error.response.errors) {
      20 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));
      21 |         }

      at error (src/functions/fetchAllStats.js:18:17)
      at Object.<anonymous> (tests/functions/fetchAllStats.test.js:36:5)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error querying GraphQL: request to http://localhost:4350/graphql failed, reason: connect ECONNREFUSED 127.0.0.1:4350".

      20 |         return response;
      21 |     } catch (error) {
    > 22 |         console.error("Error querying GraphQL:", error.message);
         |                 ^
      23 |         if (error.response && error.response.errors) {
      24 |             console.error("GraphQL Errors:", JSON.stringify(error.response.errors, null, 2));
      25 |         }

      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at error (src/functions/fetchNftAcquisitionPrice.js:22:17)


/home/ubuntu/PolkadotNFTPortfolioTracker/multichain-indexer/node_modules/cross-fetch/node_modules/node-fetch/lib/index.js:1501
                        reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
                               ^
FetchError {
  message: 'request to http://localhost:4350/graphql failed, reason: connect ECONNREFUSED 127.0.0.1:4350',
  type: 'system',
  errno: 'ECONNREFUSED',
  code: 'ECONNREFUSED'
}

Node.js v22.2.0
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |    92.8 |    54.68 |     100 |   92.72 |                   
 fetchAllStats.js            |   93.75 |       50 |     100 |   93.75 | 20                
 fetchCollectionNfts.js      |   94.11 |       50 |     100 |   94.11 | 25                
 fetchCollectionSales.js     |   94.11 |       50 |     100 |   94.11 | 33                
 fetchFloorPrice.js          |      80 |        0 |     100 |      80 | 24-26             
 fetchFloorPriceChange.js    |   81.25 |        0 |     100 |   81.25 | 27-29             
 fetchLastTraitSale.js       |   93.75 |       50 |     100 |   93.75 | 26                
 fetchNftAcquisitionPrice.js |   94.11 |       50 |     100 |   94.11 | 24                
 fetchNftActivity.js         |   93.75 |       50 |     100 |   93.75 | 26                
 fetchNftMetadata.js         |   93.75 |       50 |     100 |   93.75 | 24                
 fetchNftUnrealizedPnL.js    |     100 |      100 |     100 |     100 |                   
 fetchWalletActivity.js      |   94.11 |       50 |     100 |   94.11 | 25                
 fetchWalletSpending.js      |   93.75 |       50 |     100 |   93.75 | 25                
 getLiquidity.js             |   89.47 |       50 |     100 |    87.5 | 10-11             
 index.js                    |     100 |      100 |     100 |     100 |                   
 nftEstimatedValue.js        |   94.73 |    85.71 |     100 |   94.73 | 33,61             
-----------------------------|---------|----------|---------|---------|-------------------

Test Suites: 14 passed, 14 total
Tests:       27 passed, 27 total
Snapshots:   0 total
Time:        1.884 s
Ran all test suites.
```
</details>

