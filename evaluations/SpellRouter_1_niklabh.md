# External Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SpellRouter-proposal.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by niklabh,nikw3f


**Deliverables**
| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License |  <ul><li>[x] </li> </ul> | [MIT XCM Router](https://github.com/paraspell/xcm-router/blob/main/LICENSE), [MIT DOCS](https://github.com/paraspell/docs/blob/main/LICENSE)| MIT License|
| 0b.  | Documentation | <ul><li>[x] </li> </ul> |  [XCM Router Readme.md](https://github.com/paraspell/xcm-router/blob/main/README.md), [Official SpellRouter documentation](https://paraspell.github.io/docs/router/getting-strtd.html)| Very well documented |
| 0c.  | Testing guide | <ul><li>[x] </li> </ul>  |[Readme.md testing guide](https://github.com/paraspell/xcm-router/tree/main?tab=readme-ov-file#-development--testing) | Unit tests worked fine |
| 0d.  | Medium article about the development of SpellRouter| <ul><li>[x] </li> </ul>  | [Medium article link](https://medium.com/@dudo50/the-first-xcm-router-in-the-polkadot-ecosystem-meant-to-boost-cross-chain-exchange-implementations-bdf59088051b) | Article covering early XCM Router version id good. It explains the process well. |
| 1.a | Integrate early version of XCM Router I | <ul><li>[x] </li> </ul>  |[PR adding XCM Router I](https://github.com/paraspell/xcm-router/pull/2), [Commit adding XCM Router I](https://github.com/paraspell/xcm-router/commit/4c4874cc49754125cc84a6b22e84b299fe7e7213) | Integrated XCM Router functionality - function style pattern looks good. |
| 1.b | Integrate early version of XCM Router II | <ul><li>[x] </li> </ul>  |[PR adding XCM Router II](https://github.com/paraspell/xcm-router/pull/2), [Commit adding XCM Router II](https://github.com/paraspell/xcm-router/commit/4c4874cc49754125cc84a6b22e84b299fe7e7213)| Integrated XCM Router functionality - builder pattern looks good. |
| 2. | Update docs to cover early XCM Router version | <ul><li>[x] </li> </ul>  |[PR adding documentation for early XCM Router version](https://github.com/paraspell/docs/pull/4)| Comprehensive guide that covers usage of early XCM Router version is well written. |
| 3. | Create unit tests for XCM Router | <ul><li>[x] </li> </ul>  | [PR adding core unit tests for XCM Router](https://github.com/paraspell/xcm-router/pull/2), [Commit adding core unit tests for XCM Router](https://github.com/paraspell/xcm-router/commit/4c4874cc49754125cc84a6b22e84b299fe7e7213) | Unit tests for core features in XCM Router is working fine. |

# General Notes

Great work team, milestone delivery is high quality! XCM router is very well documentated. API is very developer friendly. npm libraries for xcm-router worked as expected. Created a sample project here https://github.com/niklabh/xcm-router-test/tree/main. I was able to use xcm-router for run unit tests on ubuntu. While running the playground, I got an error. Seems like interlay APIs has changed. I have added the logs below.

# Evaluation

## Playground

Getting an error while running the playground. Seems like interlay APIs has changed.

<pre><font color="#2AA1B3"><b>± </b></font><font color="#26A269">|main U:2 ?:3 </font><font color="#C01C28">✗</font><font color="#26A269">| →</font> yarn dev

  <font color="#26A269"><b>VITE</b></font><font color="#26A269"> v5.0.7</font>  ready in <b>203</b> ms

  <font color="#26A269">➜</font>  <b>Local</b>:   <font color="#2AA1B3">http://localhost:</font><font color="#2AA1B3"><b>5173</b></font><font color="#2AA1B3">/</font>
<font color="#AAAAAA">  </font><font color="#196C46">➜</font><font color="#AAAAAA">  </font><font color="#AAAAAA"><b>Network</b></font><font color="#AAAAAA">: use </font><b>--host</b><font color="#AAAAAA"> to expose</font>
<font color="#196C46">  ➜</font><font color="#AAAAAA">  press </font><b>h + enter</b><font color="#AAAAAA"> to show help</font>
<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;getAllTradingPairs&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:9:
<font color="#D0CFCC">      13 │ import { </font><font color="#26A269">getAllTradingPairs</font><font color="#D0CFCC">, findBestTradeRecursively, StandardLiquidityPool, StableLiquidityPool, PoolType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools,...</font>
<font color="#D0CFCC">         ╵          </font><font color="#26A269">~~~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;findBestTradeRecursively&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:29:
<font color="#D0CFCC">      13 │ import { getAllTradingPairs, </font><font color="#26A269">findBestTradeRecursively</font><font color="#D0CFCC">, StandardLiquidityPool, StableLiquidityPool, PoolType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools,...</font>
<font color="#D0CFCC">         ╵                              </font><font color="#26A269">~~~~~~~~~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;StandardLiquidityPool&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:55:
<font color="#D0CFCC">      13 │ import { getAllTradingPairs, findBestTradeRecursively, </font><font color="#26A269">StandardLiquidityPool</font><font color="#D0CFCC">, StableLiquidityPool, PoolType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools,...</font>
<font color="#D0CFCC">         ╵                                                        </font><font color="#26A269">~~~~~~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;StableLiquidityPool&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:78:
<font color="#D0CFCC">      13 │ import { getAllTradingPairs, findBestTradeRecursively, StandardLiquidityPool, </font><font color="#26A269">StableLiquidityPool</font><font color="#D0CFCC">, PoolType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools,...</font>
<font color="#D0CFCC">         ╵                                                                               </font><font color="#26A269">~~~~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;PoolType&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:99:
<font color="#D0CFCC">      13 │ ...etAllTradingPairs, findBestTradeRecursively, StandardLiquidityPool, StableLiquidityPool, </font><font color="#26A269">PoolType</font><font color="#D0CFCC">, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools, isStab...</font>
<font color="#D0CFCC">         ╵                                                                                             </font><font color="#26A269">~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;encodeSwapParamsForStandardPoolsOnly&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:109:
<font color="#D0CFCC">      13 │ ...estTradeRecursively, StandardLiquidityPool, StableLiquidityPool, PoolType, </font><font color="#26A269">encodeSwapParamsForStandardPoolsOnly</font><font color="#D0CFCC">, encodeSwapParamsForStandardAndStablePools, isStableMultiPathElement, isSt...</font>
<font color="#D0CFCC">         ╵                                                                               </font><font color="#26A269">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;encodeSwapParamsForStandardAndStablePools&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:147:
<font color="#D0CFCC">      13 │ ...ol, StableLiquidityPool, PoolType, encodeSwapParamsForStandardPoolsOnly, </font><font color="#26A269">encodeSwapParamsForStandardAndStablePools</font><font color="#D0CFCC">, isStableMultiPathElement, isStableMetaPool, isStandardPool, StableLiqu...</font>
<font color="#D0CFCC">         ╵                                                                             </font><font color="#26A269">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;isStableMultiPathElement&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:190:
<font color="#D0CFCC">      13 │ ...lType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools, </font><font color="#26A269">isStableMultiPathElement</font><font color="#D0CFCC">, isStableMetaPool, isStandardPool, StableLiquidityMetaPool, } from &quot;./amm/&quot;;</font>
<font color="#D0CFCC">         ╵                                                                                            </font><font color="#26A269">~~~~~~~~~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;isStableMetaPool&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:216:
<font color="#D0CFCC">      13 │ ...lType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools, isStableMultiPathElement, </font><font color="#26A269">isStableMetaPool</font><font color="#D0CFCC">, isStandardPool, StableLiquidityMetaPool, } from &quot;./amm/&quot;;</font>
<font color="#D0CFCC">         ╵                                                                                                                      </font><font color="#26A269">~~~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;isStandardPool&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:234:
<font color="#D0CFCC">      13 │ ...lType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools, isStableMultiPathElement, isStableMetaPool, </font><font color="#26A269">isStandardPool</font><font color="#D0CFCC">, StableLiquidityMetaPool, } from &quot;./amm/&quot;;</font>
<font color="#D0CFCC">         ╵                                                                                                                                        </font><font color="#26A269">~~~~~~~~~~~~~~</font>

<font color="#C01C28">✘ </font><span style="background-color:#C01C28"><font color="#C01C28">[</font></span><span style="background-color:#C01C28"><font color="#FFFFFF">ERROR</font></span><span style="background-color:#C01C28"><font color="#C01C28">]</font></span> <b>No matching export in &quot;node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js&quot; for import &quot;StableLiquidityMetaPool&quot;</b>

    node_modules/@interlay/interbtc-api/build/esm/src/parachain/amm.js:13:250:
<font color="#D0CFCC">      13 │ ...lType, encodeSwapParamsForStandardPoolsOnly, encodeSwapParamsForStandardAndStablePools, isStableMultiPathElement, isStableMetaPool, isStandardPool, </font><font color="#26A269">StableLiquidityMetaPool</font><font color="#D0CFCC">, } from &quot;./amm/&quot;;</font>
<font color="#D0CFCC">         ╵                                                                                                                                                        </font><font color="#26A269">~~~~~~~~~~~~~~~~~~~~~~~</font>
</pre>

# Playgorund(Fixed)

Playground is working fine now. I have added the logs below. This is fixed after using correct yarn version as suggested by the team. https://github.com/w3f/Grant-Milestone-Delivery/pull/1081#issuecomment-1858827924

<pre>font color="#26A269"><b>VITE</b></font><font color="#26A269"> v5.0.10</font>  ready in <b>477</b> ms

  <font color="#26A269">➜</font>  <b>Local</b>:   <font color="#2AA1B3">http://localhost:</font><font color="#2AA1B3"><b>5173</b></font><font color="#2AA1B3">/</font>
<font color="#AAAAAA">  </font><font color="#196C46">➜</font><font color="#AAAAAA">  </font><font color="#AAAAAA"><b>Network</b></font><font color="#AAAAAA">: use </font><b>--host</b><font color="#AAAAAA"> to expose</font>
<font color="#196C46">  ➜</font><font color="#AAAAAA">  press </font><b>h + enter</b><font color="#AAAAAA"> to show help</font>
</pre>


I am able to:

- Transfer from origin chain to destination chain
- Receive and exchange on exchange chain
- Transfer from exchange chain to destination chain


![Screenshot from 2023-12-16 22-11-21](https://github.com/w3f/Grant-Milestone-Delivery/assets/874046/47d57301-40ea-493c-8855-a0eb16300afb)



## Unit Tests

Unit Tests are working fine.

<unittests>
 2023-12-16 18:29:35 ⌚  nikhil-Blade-14-RZ09-0370 in ~/w3f/xcm-router
± |main U:1 ?:2 ✗| → yarn test

<pre><font color="#5E5C64">stderr | findSiType (file:/home/nikhil/w3f/xcm-router/node_modules/@polkadot/types/metadata/decorate/storage/util.js:19:17)</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | apply (file:/home/nikhil/w3f/xcm-router/node_modules/@polkadot/util/logger.js:55:24)</font>
2023-12-16 18:29:48        REGISTRY: Unknown signed extensions SetEvmOrigin found, treating them as no-effect
2023-12-16 18:29:48        API/INIT: acala/2220: Not decorating unknown runtime apis: 0xe3df3f2aa8a5cc57/2

<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/transfer/transfer.test.ts &gt; transfer &gt; main transfer function - FULL_TRANSFER scenario</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | findSiType (file:/home/nikhil/w3f/xcm-router/node_modules/@polkadot/types/metadata/decorate/storage/util.js:19:17)</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stdout | src/transfer/utils.test.ts &gt; transfer utils &gt; buildToExchangeExtrinsic &gt; builds correct Extrinsic for Polkadot origin</font>
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stdout | src/transfer/utils.test.ts &gt; transfer utils &gt; buildToExchangeExtrinsic &gt; builds correct Extrinsic for non-Polkadot/Kusama origin</font>
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stdout | src/transfer/utils.test.ts &gt; transfer utils &gt; buildFromExchangeExtrinsic &gt; builds correct Extrinsic for Polkadot destination</font>
Generating AccountId32 address
Asigning fees for transfer to Relay chain

<font color="#5E5C64">stdout | src/transfer/utils.test.ts &gt; transfer utils &gt; buildFromExchangeExtrinsic &gt; builds correct Extrinsic for non-Polkadot/Kusama destination</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain

<font color="#5E5C64">stdout | src/transfer/utils.test.ts &gt; transfer utils &gt; submitTransferToExchange &gt; submits a transfer and returns a transaction hash</font>
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stdout | src/transfer/utils.test.ts &gt; transfer utils &gt; submitTransferToDestination &gt; submits a transfer and returns a transaction hash</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain

<font color="#5E5C64">stderr | warn (file:/home/nikhil/w3f/xcm-router/node_modules/@polkadot/util/versionDetect.js:67:13)</font>
@polkadot/rpc-core has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 10.11.1     node_modules/@polkadot/api-derive/node_modules/@polkadot/rpc-core/
        esm 10.11.1     node_modules/@polkadot/api/node_modules/@polkadot/rpc-core/

<font color="#5E5C64">stderr | warn (file:/home/nikhil/w3f/xcm-router/node_modules/@polkadot/util/versionDetect.js:67:13)</font>
@polkadot/rpc-core has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 10.11.1     node_modules/@polkadot/api-derive/node_modules/@polkadot/rpc-core/
        esm 10.11.1     node_modules/@polkadot/api/node_modules/@polkadot/rpc-core/

<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
&lt;empty line&gt;
<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stdout | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Polkadot</font>
Generating AccountId32 address
Asigning fees for transfer to Relay chain
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain

<font color="#5E5C64">stderr | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Polkadot</font>
2023-12-16 18:29:49        API/INIT: RPC methods not decorated: farming_getFarmingRewards, farming_getGaugeRewards, flexibleFee_getFeeTokenAndAmount, salp_getContribution, stable_pool_addLiquidityAmount, stable_pool_getSwapOutputAmount, ve_minting_balanceOf, ve_minting_findBlockEpoch, ve_minting_totalSupply, zenlinkProtocol_calculateRemoveLiquidity, zenlinkProtocol_getAmountInPrice, zenlinkProtocol_getAmountOutPrice, zenlinkProtocol_getBalance, zenlinkProtocol_getEstimateLptoken, zenlinkProtocol_getPairByAssetId
Unable to map [u8; 32] to a lookup index
2023-12-16 18:29:49        API/INIT: bifrost_polkadot/988: Not decorating unknown runtime apis: 0xf877468f4ca0e826/1, ZenlinkProtocolApi/1, 0xdc655468d8394120/1, 0x0d94b80c178630f0/1, 0x9bf5dfc64f15a24b/1, 0x56efef6dbb213baf/1

<font color="#5E5C64">stderr | src/transfer/transfer.test.ts &gt; transfer &gt; main transfer function - FULL_TRANSFER scenario</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/Mangata/MangataDex.test.ts &gt; MangataDex &gt; should build a transfer extrinsic without error</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
XCM to dest. fee: 2660002411 ACA
Swap fee: 2320007613 ACA
Total fee: 4980010024 ACA
Total fee human: 0.004980010024 ACA

<font color="#5E5C64">stderr | src/dexNodes/Mangata/MangataDex.test.ts &gt; MangataDex &gt; should build a transfer extrinsic without error</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Mangata/MangataDex.test.ts &gt; MangataDex &gt; should build a transfer extrinsic without error</font>
Original amount 1401830652183
Amount without fee 1338748272835

<font color="#5E5C64">stdout | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stderr | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error</font>
2023-12-16 18:29:50        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, dexGeneral_calculateRemoveLiquidity, dexGeneral_getAmountInPrice, dexGeneral_getAmountOutPrice, dexGeneral_getEstimateLptoken, dexGeneral_getPairByAssetId, dexStable_calculateCurrencyAmount, dexStable_calculateRemoveLiquidity, dexStable_calculateRemoveLiquidityOneCurrency, dexStable_calculateSwap, dexStable_getA, dexStable_getAPrecise, dexStable_getAdminBalance, dexStable_getAdminBalances, dexStable_getCurrencies, dexStable_getCurrency, dexStable_getCurrencyBalances, dexStable_getCurrencyIndex, dexStable_getCurrencyPrecisionMultipliers, dexStable_getLpCurrency, dexStable_getNumberOfCurrencies, dexStable_getVirtualPrice, escrow_balanceAt, escrow_freeStakable, escrow_totalSupply, issue_getIssueRequests, issue_getVaultIssueRequests, loans_getCollateralLiquidity, loans_getLiquidationThresholdLiquidity, loans_getMarketStatus, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, reward_computeEscrowReward, reward_computeFarmingReward, reward_computeVaultReward, reward_estimateEscrowRewardRate, reward_estimateFarmingReward, reward_estimateVaultRewardRate, txpool_content, txpool_inspect, txpool_status, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
Unable to map [u8; 32] to a lookup index
2023-12-16 18:29:50        API/INIT: interlay-parachain/1025003: Not decorating unknown runtime apis: LoansApi/1, DexGeneralApi/1, DexStableApi/1, BtcRelayApi/1, VaultRegistryApi/1, EscrowApi/1, RewardApi/1, IssueApi/1, RedeemApi/1, ReplaceApi/1

<font color="#5E5C64">stderr | src/dexNodes/Mangata/MangataDex.test.ts &gt; MangataDex &gt; should build a transfer extrinsic without error</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Mangata/MangataDex.test.ts &gt; MangataDex &gt; should build a transfer extrinsic without error</font>
Best amount 100072189055250
Min Amount out 99071467164697

<font color="#5E5C64">stderr | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Polkadot</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Polkadot</font>
price is 18.3304
Fee in bnc 106894193.87465631
Original amount 5000000000
Amount modified 4839658709
feePct <font color="#A2734C">0.3</font>
amount without swap fee 4817880245

<font color="#5E5C64">stderr | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Polkadot</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Polkadot</font>
out fee in bnc 195941333140
8.836146403485
8836146403485
8542234403775

<font color="#5E5C64">stderr | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error</font>
Original amount 5000000000
Amount without fee 4726106700.5

<font color="#5E5C64">stderr | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Kusama</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Acala</font>
Fee total currency from 0.00007567706484293843 DOT
Fee total currency from BN 756770.6484293843 DOT
XCM to exch. fee: 0.0182595533 DOT
XCM to exch. fee /w buffer: 0.02738932995 DOT
Original amount 5000000000
Amount modified 4725349929.8515706157
Calculated amount out: 45646577269012
Amount out decimals <font color="#A2734C">12</font>
Amount out fee 0.0039900036165 ACA
Amount out original 45.646577269012
Amount out modified 45642587265396

<font color="#5E5C64">stdout | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Kusama</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stderr | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Kusama</font>
2023-12-16 18:29:53        API/INIT: RPC methods not decorated: farming_getFarmingRewards, farming_getGaugeRewards, flexibleFee_getFeeTokenAndAmount, salp_getContribution, stableAmm_calculateRemoveLiquidityOneCurrency, stable_pool_addLiquidityAmount, stable_pool_getSwapOutputAmount, zenlinkProtocol_calculateRemoveLiquidity, zenlinkProtocol_getAmountInPrice, zenlinkProtocol_getAmountOutPrice, zenlinkProtocol_getBalance, zenlinkProtocol_getEstimateLptoken, zenlinkProtocol_getPairByAssetId, zenlinkStableAmm_calculateCurrencyAmount, zenlinkStableAmm_calculateRemoveLiquidity, zenlinkStableAmm_calculateSwap, zenlinkStableAmm_getA, zenlinkStableAmm_getAPrecise, zenlinkStableAmm_getAdminBalance, zenlinkStableAmm_getAdminBalances, zenlinkStableAmm_getCurrencies, zenlinkStableAmm_getCurrency, zenlinkStableAmm_getCurrencyBalances, zenlinkStableAmm_getCurrencyIndex, zenlinkStableAmm_getCurrencyPrecisionMultipliers, zenlinkStableAmm_getLpCurrency, zenlinkStableAmm_getNumberOfCurrencies, zenlinkStableAmm_getVirtualPrice
Unable to map [u8; 32] to a lookup index
2023-12-16 18:29:53        API/INIT: bifrost/987: Not decorating unknown runtime apis: 0xf877468f4ca0e826/1, ZenlinkProtocolApi/1, StableAmmApi/1, 0xdc655468d8394120/1, 0x0d94b80c178630f0/1, 0x56efef6dbb213baf/1

<font color="#5E5C64">stderr | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error on kintsugi</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Kusama</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Kusama</font>
price is 0.4283
Fee in bnc 457603817352.3231
Original amount 1000000000000
Amount modified 313594273972
feePct <font color="#A2734C">0.8999999999999999</font>
amount without swap fee 309360751273

<font color="#5E5C64">stdout | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error on kintsugi</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stderr | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error on kintsugi</font>
2023-12-16 18:29:54        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, dexGeneral_calculateRemoveLiquidity, dexGeneral_getAmountInPrice, dexGeneral_getAmountOutPrice, dexGeneral_getEstimateLptoken, dexGeneral_getPairByAssetId, dexStable_calculateCurrencyAmount, dexStable_calculateRemoveLiquidity, dexStable_calculateRemoveLiquidityOneCurrency, dexStable_calculateSwap, dexStable_getA, dexStable_getAPrecise, dexStable_getAdminBalance, dexStable_getAdminBalances, dexStable_getCurrencies, dexStable_getCurrency, dexStable_getCurrencyBalances, dexStable_getCurrencyIndex, dexStable_getCurrencyPrecisionMultipliers, dexStable_getLpCurrency, dexStable_getNumberOfCurrencies, dexStable_getVirtualPrice, escrow_balanceAt, escrow_freeStakable, escrow_totalSupply, issue_getIssueRequests, issue_getVaultIssueRequests, loans_getCollateralLiquidity, loans_getLiquidationThresholdLiquidity, loans_getMarketStatus, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, reward_computeEscrowReward, reward_computeFarmingReward, reward_computeVaultReward, reward_estimateEscrowRewardRate, reward_estimateFarmingReward, reward_estimateVaultRewardRate, txpool_content, txpool_inspect, txpool_status, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
Unable to map [u8; 32] to a lookup index
2023-12-16 18:29:54        API/INIT: kintsugi-parachain/1025003: Not decorating unknown runtime apis: BtcRelayApi/1, VaultRegistryApi/1, EscrowApi/1, RewardApi/1, IssueApi/1, RedeemApi/1, ReplaceApi/1, LoansApi/1, DexGeneralApi/1, DexStableApi/1

<font color="#5E5C64">stderr | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Kusama</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Bifrost/BifrostDex.test.ts &gt; BifrostDex &gt; should build a transfer extrinsic without error on Bifrost Kusama</font>
price is 76.3654
out fee in bnc 2566498898.3492526
0.001724271365
1724271365
-2125476983

<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
&lt;empty line&gt;
<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
&lt;empty line&gt;
<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
XCM to dest. fee: 2660002411 KAR
Swap fee: 2270005016 KAR
Total fee: 4930007427 KAR
Total fee human: 0.004930007427 KAR

<font color="#5E5C64">stderr | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error on kintsugi</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Interlay/InterlayDex.test.ts &gt; InterlayDex &gt; should build a transfer extrinsic without error on kintsugi</font>
Original amount 5000000000
Amount without fee 4088964839

<font color="#5E5C64">stderr | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/Acala/AcalaDex.test.ts &gt; AcalaDex &gt; should build a transfer extrinsic without error on Karura</font>
Fee total currency from 0.000042077710545785645 KSM
Fee total currency from BN 42077710.545785645 KSM
XCM to exch. fee: 0.000610690104 KSM
XCM to exch. fee /w buffer: 0.000916035156 KSM
Original amount 22000000000000
Amount modified 21999041887133.454214355
Calculated amount out: 3792393428268358
Amount out decimals <font color="#A2734C">12</font>
Amount out fee 0.0039900036165 KAR
Amount out original 3792.393428268358
Amount out modified 3792389438264742

<font color="#5E5C64">stderr | src/transfer/transfer.test.ts &gt; transfer &gt; main transfer function - TO_EXCHANGE scenario</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/transfer/transfer.test.ts &gt; transfer &gt; main transfer function - SWAP scenario</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/transfer/transfer.test.ts &gt; transfer &gt; main transfer function - SWAP scenario</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/transfer/transfer.test.ts &gt; transfer &gt; main transfer function - TO_DESTINATION scenario</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on HydraDx</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stdout | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on HydraDx</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on HydraDx</font>
2023-12-16 18:30:39        REGISTRY: Unknown signed extensions ValidateClaim found, treating them as no-effect
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on HydraDx</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on HydraDx</font>
XCM to exch. fee: 1770000300480 HDX
XCM to dest. fee: 1770000300480 HDX
Swap fee: 1560004560937 HDX
Total fee: 5100005161897 HDX
Total fee in currency from: 0.784947715688   ASTR
Total fee in currency from with buffer 50%: 1.177421573532   ASTR
Original amount 38821036538894063687
Amount modified 37643614965362063687

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on HydraDx</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on HydraDx</font>
Amount out fee 0.0046860040997526399 HDX
Amount out original 4303185696
Amount out modified 4256325655

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on Basilisk</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stdout | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on Basilisk</font>
Generating AccountId32 address
Asigning fees for transfer to another Parachain chain
Generating AccountId32 address
polkadotXCM Native currency to sender chain transfer

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on Basilisk</font>
Unable to map [u8; 32] to a lookup index

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on Basilisk</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on Basilisk</font>
XCM to exch. fee: 12670016500000 BSX
XCM to dest. fee: 12670016500000 BSX
Swap fee: 12650077121897 BSX
Total fee: 37990110121897 BSX
Total fee in currency from: 0.000155440787   KSM
Total fee in currency from with buffer 50%: 0.0002331611805   KSM
Original amount 1000000000000
Amount modified 999766838819.5

<font color="#5E5C64">stderr | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on Basilisk</font>
&lt;empty line&gt;
<font color="#5E5C64">stdout | src/dexNodes/HydraDx/HydraDxDex.test.ts &gt; HydraDxDex &gt; should build a transfer extrinsic without error on Basilisk</font>
Amount out fee 0.00200346494034518483 BSX
Amount out original 25552833
Amount out modified 25550830

 <font color="#26A269">✓</font> src/utils/submitTransaction.test.ts (3)
 <font color="#26A269">✓</font> src/utils/utils.test.ts (8)
 <font color="#26A269">✓</font> src/transfer/transferToDestination.test.ts (9)
 <font color="#26A269">✓</font> src/transfer/transferToExchange.test.ts (9)
 <font color="#26A269">✓</font> src/transfer/swap.test.ts (9)
 <font color="#26A269">✓</font> src/dexNodes/Acala/AcalaDex.test.ts (10)<font color="#A2734C"> 11257ms</font>
 <font color="#26A269">✓</font> src/dexNodes/HydraDx/HydraDxDex.test.ts (10)<font color="#A2734C"> 63559ms</font>
 <font color="#26A269">✓</font> src/dexNodes/Bifrost/BifrostDex.test.ts (10)<font color="#A2734C"> 7541ms</font>
 <font color="#26A269">✓</font> src/transfer/transfer.test.ts (12)<font color="#A2734C"> 45567ms</font>
 <font color="#26A269">✓</font> src/RouterBuilder.test.ts (3)
 <font color="#26A269">✓</font> src/transfer/utils.test.ts (10)<font color="#A2734C"> 2278ms</font>
 <font color="#26A269">✓</font> src/dexNodes/Interlay/InterlayDex.test.ts (10)<font color="#A2734C"> 9704ms</font>
 <font color="#26A269">✓</font> src/dexNodes/DexNodeFactory.test.ts (5)
 <font color="#26A269">✓</font> src/dexNodes/Acala/utils.test.ts (2)
 <font color="#26A269">✓</font> src/dexNodes/DexNode.test.ts (1)
 <font color="#26A269">✓</font> src/Logger/Logger.test.ts (1)
 <font color="#26A269">✓</font> src/dexNodes/Mangata/MangataDex.test.ts (9)<font color="#A2734C"> 1059ms</font>

<font color="#AAAAAA"> Test Files  </font><font color="#26A269"><b>17 passed</b></font><font color="#5E5C64"> (17)</font>
<font color="#AAAAAA">      Tests  </font><font color="#26A269"><b>121 passed</b></font><font color="#5E5C64"> (121)</font>
<font color="#AAAAAA">   Start at  18:29:43</font>
<font color="#AAAAAA">   Duration  67.20s (transform 283ms, setup 5ms, collect 29.53s, tests 141.12s, environment 5ms, prepare 2.93s)</font>


<span style="background-color:#26A269"><font color="#300A24"><b> PASS </b></font></span><font color="#26A269"> Waiting for file changes...</font>
       press <b>h</b><font color="#AAAAAA"> to show help, press </font><b>q</b><font color="#AAAAAA"> to quit</font>

</pre>
</unittests>
