# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell_follow-up2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[MIT SDK](https://github.com/paraspell/sdk/blob/main/LICENSE), [MIT UI-V2](https://github.com/paraspell/ui-v2/blob/main/LICENSE)| | 
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Everything documented in official docs](https://paraspell.github.io/docs/)|  | 
| 0c.  | Testing guide |<ul><li>[x] </li></ul>|[SDK](https://github.com/paraspell/xcm-sdk#-development), [UI-V2](https://github.com/paraspell/ui-v2#3-installation), [Testing guide is also in docs](https://paraspell.github.io/docs/)|  | 
| 0d.  | Docker |<ul><li>[x] </li></ul>|[Commit updating UI-V2 to newest version of SDK](https://github.com/paraspell/ui-v2/commit/af94dbe2dea0ee8b9de9551c1ddbb9db849ad6b8), [Guide on launching dockerized version](https://github.com/paraspell/ui#start-application-in-docker-container) | | 
| 0e.  | Create Medium article about development of Phase 3 ParaSpell |<ul><li>[x] </li></ul>|[Link](https://medium.com/@dudo50/paraspell-xcm-sdk-phase-3-innovations-upgrades-8309c6393bbd)|  | 
| 1. | Merge currencyId & currency in XCM Transfers |<ul><li>[x] </li></ul>|[Commit merging currency & currencyID into currency](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455), [Commit updating docs](https://github.com/paraspell/docs/commit/313608b29d57a22e94b4cb6a11c34fcfe6f8fed0)|  | 
| 2.a  | Add support for new compatible nodes in DMP Scenario (Downwards message passing) |<ul><li>[x] </li></ul>|[Commit adding new compatible nodes I](https://github.com/paraspell/xcm-sdk/commit/1d370faa5bd5850becab7d8e6fc2bf17de0620a6), [Commit adding new compatible nodes II](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455) |   | 
| 2.b  | Add support for new compatible nodes in UMP Scenario (Upwards message passing) |<ul><li>[x] </li></ul>|[Commit adding new compatible nodes I](https://github.com/paraspell/xcm-sdk/commit/1d370faa5bd5850becab7d8e6fc2bf17de0620a6), [Commit adding new compatible nodes II](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455) |  | 
| 2.c  | Add support for new compatible nodes in HRMP Scenario (Horizontall message passing) |<ul><li>[x] </li></ul>|[Commit adding new compatible nodes I](https://github.com/paraspell/xcm-sdk/commit/1d370faa5bd5850becab7d8e6fc2bf17de0620a6), [Commit adding new compatible nodes II](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455) |  | 
| 3.  | Rework Utils.ts to remove huge switch that constructs message |<ul><li>[x] </li></ul>|[Reworked switch PR](https://github.com/paraspell/xcm-sdk/pull/31)|  | 
| 4.a  | Deprecate Parachain-launch & replace it with Zombienet I |<ul><li>[x] </li></ul>|[UI-V2 Zombienet release commit](https://github.com/paraspell/ui-v2/commit/935639a6cbd106d6842958c3d23ebcc9966ef1fb)| | 
| 4.b  | Deprecate Parachain-launch & replace it with Zombienet II |<ul><li>[x] </li></ul>|[Zombienet DOCS guide commit](https://github.com/paraspell/docs/commit/f164c33e6ac95b0b981471c9dccb04a1df90e166), [Zombienet readme guide](https://github.com/paraspell/ui-v2#zombienet---linux)|  | 
| 5.  | Add suggestions we received in our previous grant evaluations (If not added already) |<ul><li>[x] </li></ul>|[Issue opened (As we are no longer in charge of subscaffold)](https://github.com/kodadot/sub-scaffold/issues/52),  [Issue opened & resolved on suggestion from phase 1 delivery](https://github.com/paraspell/docs/issues/1)|  |

## #valuation V2

### Test

The new tests for the Derivable 2 passed, and I could check the new code format in use, thanks for providing them.

```
✓ src/pallets/xcmPallet/transfer.test.ts (6)
 ✓ src/nodes/supported/Crust.test.ts (1) 1929ms
 ✓ src/pallets/pallets.test.ts (4)
 ✓ src/nodes/supported/Turing.test.ts (1) 2477ms
 ✓ src/nodes/supported/Ipci.test.ts (1) 2150ms
 ✓ src/nodes/supported/Efinity.test.ts (1) 1902ms
 ✓ src/nodes/supported/Unique.test.ts (1) 3898ms
 ✓ src/pallets/assets/assets.test.ts (10)
 ✓ src/nodes/supported/Equilibrium.test.ts (1) 2693ms
 ✓ src/pallets/builder/builders/Builder.test.ts (12) 22160ms
 ✓ src/pallets/assets/assetsUtils.test.ts (5)
 ✓ src/utils.test.ts (2)

 Test Files  12 passed (12)
  	Tests  45 passed (45)
   Start at  10:40:35
   Duration  25.57s (transform 910ms, setup 2ms, collect 25.67s, tests 37.40s, environment 5ms, prepare 1.90s)

 % Coverage report from c8
----------------------------------|---------|----------|---------|---------|----------------------------------------------------------------------------------------------
File                          	| % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                       	 
----------------------------------|---------|----------|---------|---------|----------------------------------------------------------------------------------------------
All files                     	|	77.3 |	90.87 |   73.91 |	77.3 |                                                                                         	 
 src                          	|   41.05 |   	60 |   83.33 |   41.05 |                                                                                         	 
  utils.ts                    	|   41.05 |   	60 |   83.33 |   41.05 | 11,15-16,21,33-61,64-124,144-154,156-169,187-220,250-260,263-282,284-309,342-352,364-375,389
 src/errors                   	|   57.14 |  	100 |  	25 |   57.14 |                                                                                         	 
  InvalidCurrencyError.ts     	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  NoXCMSupportImplementedError.ts |  	50 |  	100 |   	0 |  	50 | 5-8                                                                                     	 
  NodeNotSupportedError.ts    	|   33.33 |  	100 |   	0 |   33.33 | 3-6                                                                                     	 
  ScenarioNotSupportedError.ts	|  	50 |  	100 |   	0 |  	50 | 5-8                                                                                     	 
 src/maps                     	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  consts.ts                   	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
 src/nodes                    	|  	56 |  	100 |   44.44 |  	56 |                                                                                         	 
  ParachainNode.ts            	|   61.11 |  	100 |   57.14 |   61.11 | 20-21,24-25,57-87                                                                       	 
  PolkadotXCMTransferImpl.ts  	|   46.66 |  	100 |   	0 |   46.66 | 5-12                                                                                    	 
  XTokensTransferImpl.ts      	|  	40 |  	100 |   	0 |  	40 | 6-17                                                                                    	 
 src/nodes/supported          	|	77.8 |	96.61 |   57.57 |	77.8 |                                                                                         	 
  Acala.ts                    	|   76.47 |  	100 |  	50 |   76.47 | 11-14                                                                                   	 
  Altair.ts                   	|   68.18 |  	100 |   33.33 |   68.18 | 11-14,17-19                                                                             	 
  Amplitude.ts                	|   86.66 |  	100 |  	50 |   86.66 | 11-12                                                                                   	 
  Astar.ts                    	|   72.22 |  	100 |  	50 |   72.22 | 11-15                                                                                   	 
  Bajun.ts                    	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  Basilisk.ts                 	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  BifrostKusama.ts            	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  BifrostPolkadot.ts          	|   73.33 |  	100 |   66.66 |   73.33 | 11-14                                                                                   	 
  Bitgreen.ts                 	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  Calamari.ts                 	|   76.47 |  	100 |  	50 |   76.47 | 11-14                                                                                   	 
  Centrifuge.ts               	|   73.33 |  	100 |   66.66 |   73.33 | 11-14                                                                                   	 
  Clover.ts                   	|   57.14 |  	100 |   33.33 |   57.14 | 12-21,24-25                                                                             	 
  ComposableFinance.ts        	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  Crab.ts                     	|  	70 |  	100 |  	50 |  	70 | 12-17                                                                                   	 
  Crust.ts                    	|   78.57 |   	75 | 	100 |   78.57 | 15-20                                                                                   	 
  CrustShadow.ts              	|   57.14 |  	100 |   33.33 |   57.14 | 12-21,24-25                                                                             	 
  Darwinia.ts                 	|  	70 |  	100 |  	50 |  	70 | 12-17                                                                                   	 
  Dorafactory.ts              	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Efinity.ts                  	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  Encointer.ts                	|  	56 |  	100 |  	50 |  	56 | 12-22                                                                                   	 
  Equilibrium.ts              	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  HydraDX.ts                  	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Imbue.ts                    	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Integritee.ts               	|   86.66 |  	100 |  	50 |   86.66 | 11-12                                                                                   	 
  Interlay.ts                 	|   76.47 |  	100 |  	50 |   76.47 | 11-14                                                                                   	 
  InvArchTinker.ts            	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Ipci.ts                     	|  	95 |	66.66 | 	100 |  	95 | 16                                                                                      	 
  Karura.ts                   	|   76.47 |  	100 |  	50 |   76.47 | 11-14                                                                                   	 
  Kico.ts                     	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Kintsugi.ts                 	|   76.47 |  	100 |  	50 |   76.47 | 11-14                                                                                   	 
  Kylin.ts                    	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Litentry.ts                 	|   86.66 |  	100 |  	50 |   86.66 | 11-12                                                                                   	 
  Litmus.ts                   	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Mangata.ts                  	|   86.66 |  	100 |  	50 |   86.66 | 11-12                                                                                   	 
  Moonbeam.ts                 	|   76.47 |  	100 |  	50 |   76.47 | 11-14                                                                                   	 
  Moonriver.ts                	|   76.47 |  	100 |  	50 |   76.47 | 11-14                                                                                   	 
  Parallel.ts                 	|   86.66 |  	100 |  	50 |   86.66 | 11-12                                                                                   	 
  ParallelHeiko.ts            	|   86.66 |  	100 |  	50 |   86.66 | 11-12                                                                                   	 
  Picasso.ts                  	|   86.66 |  	100 |  	50 |   86.66 | 11-12                                                                                   	 
  Pichiu.ts                   	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Pioneer.ts                  	|   81.25 |  	100 |  	50 |   81.25 | 11-13                                                                                   	 
  Quartz.ts                   	|  	70 |  	100 |  	50 |  	70 | 12-17                                                                                   	 
  Robonomics.ts               	|   52.17 |  	100 |  	50 |   52.17 | 10-20                                                                                   	 
  Shiden.ts                   	|   68.42 |  	100 |  	50 |   68.42 | 11-16                                                                                   	 
  Statemine.ts                	|   68.42 |  	100 |  	50 |   68.42 | 11-16                                                                                   	 
  Statemint.ts                	|   68.42 |  	100 |  	50 |   68.42 | 11-16                                                                                   	 
  Turing.ts                   	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  Unique.ts                   	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
 src/pallets                  	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  pallets.ts                  	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
 src/pallets/assets           	|	97.5 |	94.28 |  	90 |	97.5 |                                                                                         	 
  assets.ts                   	|   96.49 |	91.66 |   88.88 |   96.49 | 56-57                                                                                   	 
  assetsUtils.ts              	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  index.ts                    	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
 src/pallets/builder/builders 	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  AddLiquidityBuilder.ts      	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  Builder.ts                  	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  BuyBuilder.ts               	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  CloseChannelBuilder.ts      	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  CreatePoolBuilder.ts        	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  OpenChannelBuilder.ts       	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  RelayToParaBuilder.ts       	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  RemoveLiquidityBuilder.ts   	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  SellBuilder.ts              	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  SendBuilder.ts              	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
 src/pallets/hrmp             	|   53.84 |  	100 |  	50 |   53.84 |                                                                                         	 
  channelsClose.ts            	|  	50 |  	100 |  	50 |  	50 | 6-11                                                                                    	 
  index.ts                    	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
 src/pallets/parasSudoWrapper 	|   33.33 |  	100 |  	50 |   33.33 |                                                                                         	 
  channels.ts                 	|  	30 |  	100 |  	50 |  	30 | 6-19                                                                                    	 
  index.ts                    	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
 src/pallets/xcmPallet        	|   60.86 |  	100 |  	75 |   60.86 |                                                                                         	 
  index.ts                    	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  transfer.ts                 	|   60.29 |  	100 |  	75 |   60.29 | 41-67                                                                                   	 
 src/pallets/xyk              	|   44.44 |  	100 |  	50 |   44.44 |                                                                                         	 
  index.ts                    	| 	100 |  	100 | 	100 | 	100 |                                                                                         	 
  xyk.ts                      	|   43.39 |  	100 |  	50 |   43.39 | 11,15-22,26-32,36-41,45-52                                                              	 
----------------------------------|---------|----------|---------|---------|----------------------------------------------------------------------------------------------
```

I tested the scripts to update the assets and pallets it seems to be working fine.

I understand the Sub-Scaffold repository isn't in your control anymore, the video already was requested. This is not a problem.

### UI-V2

Changing the node version resolved the problem, with node 18 working fine.

This part was already evaluated before but when I tried to start the Zombienet this time didn't work. Please check if this part is not broken because of the new commits.

## Evaluation V1

### Test

All tests passed, with good coverage.

```
user@localhost:~/Documents/paraspell/xcm-sdk$ pnpm test
> @paraspell/sdk@1.1.2 test /home/user/Documents/paraspell/xcm-sdk
> vitest run --coverage
 RUN  v0.30.1 /home/user/Documents/paraspell/xcm-sdk
  	Coverage enabled with c8
 ✓ src/pallets/pallets.test.ts (4)
 ✓ src/pallets/assets/assets.test.ts (10)
 ✓ src/pallets/assets/assetsUtils.test.ts (5)
 ✓ src/pallets/xcmPallet/transfer.test.ts (6)
 ✓ src/utils.test.ts (2)
 ✓ src/pallets/builder/builders/Builder.test.ts (12) 23006ms
 Test Files  6 passed (6)
  	Tests  39 passed (39)
   Start at  09:12:05
   Duration  25.26s (transform 556ms, setup 2ms, collect 3.26s, tests 23.20s, environment 3ms, prepare 826ms)
 % Coverage report from c8
------------------------------|---------|----------|---------|---------|-------------------------------------------------------
File                      	| % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                	 
------------------------------|---------|----------|---------|---------|-------------------------------------------------------
All files                 	|   58.63 |	95.06 |   83.21 |   58.63 |                                                  	 
 src                      	|	5.58 |   	90 |  	30 |	5.58 |                                                  	 
  utils.ts                	|	5.58 |   	90 |  	30 |	5.58 | 9-11,14-22,25-188,191-295,298-343,346-468,471-662,675
 src/maps                 	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  consts.ts               	| 	100 |  	100 | 	100 | 	100 |                                                  	 
 src/pallets              	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  pallets.ts              	| 	100 |  	100 | 	100 | 	100 |                                                  	 
 src/pallets/assets       	| 	100 |	94.59 | 	100 | 	100 |                                                  	 
  assets.ts               	| 	100 | 	92.3 | 	100 | 	100 | 23,52                                            	 
  assetsUtils.ts          	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  index.ts                	| 	100 |  	100 | 	100 | 	100 |                                                  	 
 src/pallets/builder/builders | 	100 |  	100 | 	100 | 	100 |                                                  	 
  AddLiquidityBuilder.ts  	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  Builder.ts              	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  BuyBuilder.ts           	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  CloseChannelBuilder.ts  	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  CreatePoolBuilder.ts    	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  OpenChannelBuilder.ts   	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  RelayToParaBuilder.ts   	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  RemoveLiquidityBuilder.ts   | 	100 |  	100 | 	100 | 	100 |                                                  	 
  SellBuilder.ts          	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  SendBuilder.ts          	| 	100 |  	100 | 	100 | 	100 |                                                  	 
 src/pallets/hrmp         	|   53.84 |  	100 |  	50 |   53.84 |                                                  	 
  channelsClose.ts        	|  	50 |  	100 |  	50 |  	50 | 6-11                                             	 
  index.ts                	| 	100 |  	100 | 	100 | 	100 |                                                  	 
 src/pallets/parasSudoWrapper |   33.33 |  	100 |  	50 |   33.33 |                                                  	 
  channels.ts             	|  	30 |  	100 |  	50 |  	30 | 6-19                                             	 
  index.ts                	| 	100 |  	100 | 	100 | 	100 |                                                  	 
 src/pallets/xcmPallet    	|   58.69 |	81.48 |	62.5 |   58.69 |                                                  	 
  InvalidCurrencyError.ts 	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  index.ts                	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  nodeNotSupportedError.ts	|   33.33 |  	100 |   	0 |   33.33 | 3-6                                              	 
  transfer.ts             	|	57.6 |   	80 |  	75 |	57.6 | 57-64,66-73,75-83,94,98-124                      	 
 src/pallets/xyk          	|   44.44 |  	100 |  	50 |   44.44 |                                                  	 
  index.ts                	| 	100 |  	100 | 	100 | 	100 |                                                  	 
  xyk.ts                  	|   43.39 |  	100 |  	50 |   43.39 | 11,15-22,26-32,36-41,45-52                       	 
------------------------------|---------|----------|---------|---------|-------------------------------------------------------
```

The Derivable 1 was tested in `Builder.test.ts`
```
 it('should initiatie a para to relay transfer with currency symbol', async () => {
    const spy = vi.spyOn(xcmPallet, 'send').mockImplementation(() => {
      return undefined as any
    })
    Builder(api).from(NODE).currency(CURRENCY).amount(AMOUNT).address(ADDRESS).build()
    expect(spy).toHaveBeenCalledWith(api, NODE, CURRENCY, AMOUNT, ADDRESS, undefined)
  })
  it('should initiatie a para to relay transfer with currency id', async () => {
    const spy = vi.spyOn(xcmPallet, 'send').mockImplementation(() => {
      return undefined as any
    })
    Builder(api).from(NODE).currency(CURRENCY_ID).amount(AMOUNT).address(ADDRESS).build()
    expect(spy).toHaveBeenCalledWith(api, NODE, CURRENCY_ID, AMOUNT, ADDRESS, undefined)
  })
```
Could you provide me a way to test the Derivable 2 and explain better the Derivable 3? The changes from Deliverable 3 was many, how they were performed and tested?

The Derivable 4 has instructions to use the Zombienet.

The Derivable 5 doesn't have the video yet but has the instructions for modifying the local networking. This Derivable wasn't fully evaluated yet. 

### UI-V2

When I ran `pnpm install` got this error:

```
 ERROR  The "name" argument must be specified                                                                                                                                                        	09:47:51
  at new NodeError (node:internal/errors:399:5)
  at Performance.mark (node:internal/perf/performance:125:13)
  at normalizedModule (node_modules/.pnpm/@nuxt+kit@3.3.1_rollup@3.19.1/node_modules/@nuxt/kit/dist/index.mjs:168:30)
  at async installModule (node_modules/.pnpm/@nuxt+kit@3.3.1_rollup@3.19.1/node_modules/@nuxt/kit/dist/index.mjs:451:15)
  at async initNuxt (node_modules/.pnpm/nuxt@3.3.1_eslint@8.32.0_sass@1.57.1_typescript@4.9.4/node_modules/nuxt/dist/index.mjs:2469:7)
  at async loadNuxt (node_modules/.pnpm/nuxt@3.3.1_eslint@8.32.0_sass@1.57.1_typescript@4.9.4/node_modules/nuxt/dist/index.mjs:2523:5)
  at async loadNuxt (node_modules/.pnpm/@nuxt+kit-edge@3.1.1-rc.0-27911047.7d812db/node_modules/@nuxt/kit-edge/dist/index.mjs:519:19)
  at async Object.invoke (node_modules/.pnpm/nuxi@3.3.1/node_modules/nuxi/dist/chunks/prepare.mjs:37:18)
  at async _main (node_modules/.pnpm/nuxi@3.3.1/node_modules/nuxi/dist/cli.mjs:49:20)
 ELIFECYCLE  Command failed with exit code 1.
```
That error prevented me to run the system without docker.

### Docker

Docker works without problem.

### Code quality

`pnpm lint` returned no warnings


```
user@localhost:~/Documents/paraspell/xcm-sdk$ pnpm lint
> @paraspell/sdk@1.1.2 lint /home/user/Documents/paraspell/xcm-sdk
> eslint --fix src/**/*.ts
```
