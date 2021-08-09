# Evaluation

- **Status:** In Progress 
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/190
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [The Unlicense node](https://github.com/stonedefi/stoneindex-node/blob/master/LICENSE), [The Unlicense UI](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/LICENSE) | Unlicense which is fine |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Readme](https://github.com/stonedefi/stoneindex-node/blob/master/README.md) | Readme just contains the grant application  |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Readme Frontend](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/README.md)  | Very basic testing guide, no installation instructions, No instruction on how to run the unit test |
| 0d. | Article/Tutorial | <ul><li>[ ] </li></ul> | [Tutorial](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/tutorial/Tutorial.md) | I'm currently unable to follow the tutorial see below errors |
| 1. | UI/UX for Stone Platform | <ul><li>[ ] </li></ul> | [UI](https://github.com/stonedefi/stone-index-substrate-ui) | Initially they didn't deliver the UI, now I get the below warnings and it also doesn't connect to substrate: "Error Connecting to Substrate{}". See console error below | 
| 2. | Indexed basket management | <ul><li>[ ] </li></ul> | [stone-index pallet](https://github.com/stonedefi/stoneindex-node/blob/master/pallets/stone-index/src/lib.rs) | Unit tests work |
| 3. | DEX integration | <ul><li>[ ] </li></ul> | [swaps-integration-demo](https://github.com/stonedefi/stoneindex-node/tree/master/pallets/swaps-integration-demo) | Unit tests work |

## General Notes

**Console error**
```
index.js:1 2021-08-09 09:37:18        REGISTRY: Error: Cannot construct unknown type Asset
    at new DoNotConstruct (:8000/static/js/0.chunk.js:166332)
    at new <anonymous> (:8000/static/js/0.chunk.js:166338)
    at new Type (:8000/static/js/0.chunk.js:146508)
    at initType (:8000/static/js/0.chunk.js:145713)
    at createTypeUnsafe (:8000/static/js/0.chunk.js:145733)
    at createType (:8000/static/js/0.chunk.js:145747)
    at TypeRegistry.createType (:8000/static/js/0.chunk.js:146465)
    at extendHeadMeta (:8000/static/js/0.chunk.js:113519)
    at extendPrefixedMap (:8000/static/js/0.chunk.js:113544)
    at createFunction (:8000/static/js/0.chunk.js:113567)
    at :8000/static/js/0.chunk.js:113720
    at Array.reduce (<anonymous>)
    at :8000/static/js/0.chunk.js:113718
    at Array.reduce (<anonymous>)
    at decorateStorage (:8000/static/js/0.chunk.js:113706)
    at expandMetadata (:8000/static/js/0.chunk.js:113332)
    at ApiPromise.injectMetadata (:8000/static/js/0.chunk.js:81713)
    at ApiPromise._initFromMeta (:8000/static/js/0.chunk.js:82729)
    at ApiPromise._loadMeta (:8000/static/js/0.chunk.js:82620)
    at async Promise.all (:8000/index 0)
    at async EventEmitter.value (:8000/static/js/0.chunk.js:82454)
console.<computed> @ index.js:1
index.js:1 2021-08-09 09:37:18        API/INIT: Error: FATAL: Unable to initialize the API: createType(Asset):: Cannot construct unknown type Asset
    at EventEmitter.value (:8000/static/js/0.chunk.js:82465)
```


<pre><font color="#A2734C">Compiled with warnings.</font>

src/AccountSelector.js
  <b>Line 10:3:</b>  &apos;Image&apos; is defined but never used  <font color="#A2734C"><u style="text-decoration-style:single">no-unused-vars</u></font>

src/Management.js
  <b>Line 5:37:</b>    Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 6:26:</b>    Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 8:1:</b>     Import in body of module; reorder to top        <font color="#A2734C"><u style="text-decoration-style:single">import/first</u></font>
  <b>Line 10:20:</b>   Missing space before function parentheses       <font color="#A2734C"><u style="text-decoration-style:single">space-before-function-paren</u></font>
  <b>Line 11:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 12:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 13:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 14:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 15:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 17:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 18:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 19:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 20:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 21:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 21:29:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 22:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 23:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 23:30:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 24:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 24:29:</b>   Strings must use singlequote                    <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 24:45:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 25:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 25:31:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 26:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 27:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 27:29:</b>   Strings must use singlequote                    <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 27:42:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 28:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 29:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 31:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 32:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 33:1:</b>    Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 34:1:</b>    Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 35:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 36:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 37:1:</b>    Trailing spaces not allowed                     <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 38:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 39:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 40:1:</b>    Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 41:1:</b>    Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 42:1:</b>    Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 43:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 44:1:</b>    Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 45:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 46:1:</b>    Trailing spaces not allowed                     <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 47:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 48:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 50:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 51:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 52:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 53:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 54:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 55:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 56:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 57:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 58:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 59:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 60:1:</b>    Expected indentation of 8 spaces but found 16   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 61:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 62:1:</b>    Expected indentation of 8 spaces but found 16   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 63:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 64:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 64:17:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 66:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 67:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 68:1:</b>    Expected indentation of 8 spaces but found 16   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 69:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 70:1:</b>    Expected indentation of 8 spaces but found 16   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 71:1:</b>    Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 72:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 72:17:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 74:1:</b>    Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 75:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 77:1:</b>    Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 87:1:</b>    Expected indentation of 22 spaces but found 24  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 87:32:</b>   Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 90:1:</b>    Expected indentation of 22 spaces but found 24  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 90:33:</b>   Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 93:1:</b>    Expected indentation of 22 spaces but found 24  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 102:1:</b>   Expected indentation of 34 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 103:1:</b>   Expected indentation of 36 spaces but found 40  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 104:1:</b>   Expected indentation of 36 spaces but found 40  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 104:65:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 105:1:</b>   Expected indentation of 34 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 105:38:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 116:1:</b>   Expected indentation of 34 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 117:1:</b>   Expected indentation of 36 spaces but found 40  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 118:1:</b>   Expected indentation of 36 spaces but found 40  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 118:63:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 119:1:</b>   Expected indentation of 34 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 119:38:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 182:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 182:6:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 185:19:</b>  Missing space before function parentheses       <font color="#A2734C"><u style="text-decoration-style:single">space-before-function-paren</u></font>
  <b>Line 186:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 187:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 188:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 189:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 190:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 191:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 192:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 193:1:</b>   Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 193:29:</b>  Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 194:1:</b>   Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 195:1:</b>   Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 195:24:</b>  Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 196:1:</b>   Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 196:29:</b>  Strings must use singlequote                    <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 196:48:</b>  Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 197:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 198:1:</b>   Expected indentation of 6 spaces but found 12   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 198:29:</b>  Strings must use singlequote                    <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 198:45:</b>  Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 199:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 200:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 202:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 203:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 204:1:</b>   Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 205:1:</b>   Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 206:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 207:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 208:1:</b>   Trailing spaces not allowed                     <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 209:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 210:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 211:1:</b>   Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 212:1:</b>   Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 213:1:</b>   Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 214:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 215:1:</b>   Expected indentation of 6 spaces but found 10   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 216:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 217:1:</b>   Trailing spaces not allowed                     <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 218:1:</b>   Expected indentation of 4 spaces but found 8    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 219:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 221:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 227:1:</b>   Expected indentation of 18 spaces but found 20  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 227:28:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 230:1:</b>   Expected indentation of 18 spaces but found 20  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 230:29:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 233:1:</b>   Expected indentation of 18 spaces but found 20  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 234:1:</b>   Expected indentation of 18 spaces but found 20  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 235:1:</b>   Expected indentation of 18 spaces but found 20  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 244:1:</b>   Expected indentation of 30 spaces but found 32  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 245:1:</b>   Expected indentation of 32 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 246:1:</b>   Expected indentation of 32 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 246:61:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 247:1:</b>   Expected indentation of 30 spaces but found 32  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 247:34:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 258:1:</b>   Expected indentation of 30 spaces but found 32  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 259:1:</b>   Expected indentation of 32 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 260:1:</b>   Expected indentation of 32 spaces but found 36  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 260:59:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 261:1:</b>   Expected indentation of 30 spaces but found 32  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 261:34:</b>  Unexpected trailing comma                       <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 313:58:</b>  Expected &apos;===&apos; and instead saw &apos;==&apos;             <font color="#A2734C"><u style="text-decoration-style:single">eqeqeq</u></font>
  <b>Line 319:1:</b>   Expected indentation of 2 spaces but found 4    <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 319:6:</b>   Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 322:26:</b>  Newline required at end of file but not found   <font color="#A2734C"><u style="text-decoration-style:single">eol-last</u></font>
  <b>Line 322:26:</b>  Missing semicolon                               <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>

src/StoneApp.js
  <b>Line 1:40:</b>    Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 2:36:</b>    Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 3:68:</b>    Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 4:73:</b>    Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 6:48:</b>    Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 11:37:</b>   Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 13:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 14:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 15:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 16:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 17:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 18:8:</b>    Strings must use singlequote                                                                               <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 19:42:</b>   Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 21:1:</b>    Import in body of module; reorder to top                                                                   <font color="#A2734C"><u style="text-decoration-style:single">import/first</u></font>
  <b>Line 21:19:</b>   Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 23:14:</b>   Missing space before function parentheses                                                                  <font color="#A2734C"><u style="text-decoration-style:single">space-before-function-paren</u></font>
  <b>Line 24:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 25:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 26:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 31:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 36:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 46:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 48:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 48:6:</b>    Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 50:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 51:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 53:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 54:1:</b>    Expected indentation of 4 spaces but found 8                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 55:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 57:1:</b>    Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 64:21:</b>   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  <font color="#A2734C"><u style="text-decoration-style:single">jsx-a11y/alt-text</u></font>
  <b>Line 84:101:</b>  A space is required before &apos;}&apos;                                                                             <font color="#A2734C"><u style="text-decoration-style:single">object-curly-spacing</u></font>
  <b>Line 106:1:</b>   Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 106:6:</b>   Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 109:33:</b>  Missing space before function parentheses                                                                  <font color="#A2734C"><u style="text-decoration-style:single">space-before-function-paren</u></font>
  <b>Line 110:1:</b>   Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 114:1:</b>   Expected indentation of 2 spaces but found 4                                                               <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 114:6:</b>   Missing semicolon                                                                                          <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 115:2:</b>   Newline required at end of file but not found                                                              <font color="#A2734C"><u style="text-decoration-style:single">eol-last</u></font>

src/Transaction.js
  <b>Line 4:37:</b>    Missing semicolon                              <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 7:21:</b>    Missing space before function parentheses      <font color="#A2734C"><u style="text-decoration-style:single">space-before-function-paren</u></font>
  <b>Line 8:1:</b>     Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 9:1:</b>     Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 11:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 12:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 14:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 15:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 16:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 17:1:</b>    Expected indentation of 6 spaces but found 12  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 18:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 19:1:</b>    Expected indentation of 6 spaces but found 12  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 20:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 22:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 23:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 25:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 33:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 33:6:</b>    Missing semicolon                              <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 36:24:</b>   Missing space before function parentheses      <font color="#A2734C"><u style="text-decoration-style:single">space-before-function-paren</u></font>
  <b>Line 37:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 38:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 39:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 40:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 41:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 42:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 43:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 43:82:</b>   Missing semicolon                              <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 45:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 46:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 47:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 48:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 49:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 50:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 51:1:</b>    Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 52:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 53:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 54:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 55:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 56:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 57:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 58:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 59:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 60:1:</b>    Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 61:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 62:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 64:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 65:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 66:1:</b>    Expected indentation of 6 spaces but found 10  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 67:1:</b>    Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 68:1:</b>    Expected indentation of 6 spaces but found 10  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 69:1:</b>    Expected indentation of 8 spaces but found 12  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 70:1:</b>    Expected indentation of 6 spaces but found 10  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 71:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 72:1:</b>    Expected indentation of 6 spaces but found 10  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 73:1:</b>    Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 74:1:</b>    Expected indentation of 2 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 75:1:</b>    Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 76:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 77:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 78:1:</b>    Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 79:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 80:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 82:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 83:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 84:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 85:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 86:1:</b>    Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 87:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 88:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 89:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 90:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 91:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 92:1:</b>    Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 93:1:</b>    Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 94:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 96:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 97:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 98:1:</b>    Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 99:1:</b>    Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 100:1:</b>   Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 101:1:</b>   Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 102:1:</b>   Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 103:1:</b>   Expected indentation of 6 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 104:1:</b>   Expected indentation of 4 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 105:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 107:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 108:1:</b>   Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 109:1:</b>   Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 110:1:</b>   Expected indentation of 6 spaces but found 10  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 111:1:</b>   Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 112:1:</b>   Expected indentation of 6 spaces but found 10  <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 113:1:</b>   Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 114:1:</b>   Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 115:1:</b>   Expected indentation of 4 spaces but found 8   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 116:1:</b>   Expected indentation of 2 spaces but found 6   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 118:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 135:34:</b>  Trailing spaces not allowed                    <font color="#A2734C"><u style="text-decoration-style:single">no-trailing-spaces</u></font>
  <b>Line 158:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 158:6:</b>   Missing semicolon                              <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
  <b>Line 161:27:</b>  Newline required at end of file but not found  <font color="#A2734C"><u style="text-decoration-style:single">eol-last</u></font>
  <b>Line 161:27:</b>  Missing semicolon                              <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>

src/config/coin.js
  <b>Line 2:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 2:5:</b>   Strings must use singlequote                   <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 3:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 3:5:</b>   Strings must use singlequote                   <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 4:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 4:5:</b>   Strings must use singlequote                   <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 5:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 5:5:</b>   Strings must use singlequote                   <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 6:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 6:5:</b>   Strings must use singlequote                   <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 7:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 7:5:</b>   Strings must use singlequote                   <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 8:1:</b>   Expected indentation of 2 spaces but found 4   <font color="#A2734C"><u style="text-decoration-style:single">indent</u></font>
  <b>Line 8:5:</b>   Strings must use singlequote                   <font color="#A2734C"><u style="text-decoration-style:single">quotes</u></font>
  <b>Line 8:11:</b>  Unexpected trailing comma                      <font color="#A2734C"><u style="text-decoration-style:single">comma-dangle</u></font>
  <b>Line 9:2:</b>   Newline required at end of file but not found  <font color="#A2734C"><u style="text-decoration-style:single">eol-last</u></font>
  <b>Line 9:2:</b>   Missing semicolon                              <font color="#A2734C"><u style="text-decoration-style:single">semi</u></font>
</pre>