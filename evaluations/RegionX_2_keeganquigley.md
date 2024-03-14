# Evaluation


- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RegionX.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [CoreHub](https://github.com/RegionX-Labs/CoreHub/blob/master/LICENSE) [RegionX contracts](https://github.com/RegionX-Labs/RegionX/blob/main/LICENSE) | GPLV3 License | 
| **0b.**  | Documentation | <ul><li>[x] </li></ul> | [White Paper](https://github.com/RegionX-Labs/Docs/blob/main/RegionX-Core.pdf) [Wiki](https://regionx.gitbook.io/wiki) |  | 
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Simulated Environment](https://github.com/RegionX-Labs/Coretime-Mock) [Contract Tests](https://github.com/RegionX-Labs/RegionX?tab=readme-ov-file#3-develop) [Local frontend testing](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#set-up-development-environment) |  | 
| **0d.** | Docker | <ul><li>[ ] </li></ul> | [Frontend Docker](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#run-with-docker) |  | 
| **0e.** | Article | <ul><li>[ ] </li></ul> | [Medium Article](https://medium.com/@regionx/the-regionx-coretime-market-17c713cad755) |  | 
| **1.** | Cross-chain Transfer UI | <ul><li>[ ] </li></ul> | [Code](https://github.com/RegionX-Labs/CoreHub/tree/master/src/pages/transfer) |  | 
| **2.** | Coretime Market Dashboard UI | <ul><li>[ ] </li></ul> | [Code](https://github.com/RegionX-Labs/CoreHub/blob/master/src/pages/market/marketplace.tsx)  | | 
| **3.** | Coretime Market contract | <ul><li>[ ] </li></ul> | [Code](https://github.com/RegionX-Labs/RegionX/tree/main/contracts/coretime_market), [e2e-tests](https://github.com/RegionX-Labs/RegionX/tree/main/tests) |  | 
| **4.** | Coretime Market developer documentation | <ul><li>[ ] </li></ul> | [Wiki: Integration with the market](https://regionx.gitbook.io/wiki/build/integration-with-the-coretime-market) |  | 

# General Notes

## UI

Fails to compile locally with a lot of warnings:

<details>
  <summary>Output</summary>

```js
https://nextjs.org/telemetry


./src/components/Modals/Partition/index.tsx
85:6  Warning: React Hook useEffect has missing dependencies: 'regionMetadata.region' and 'timeslicePeriod'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/Modals/TaskAssign/index.tsx
120:6  Warning: React Hook useEffect has a missing dependency: 'tasks'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/elements/ListingCard/index.tsx
103:6  Warning: React Hook useEffect has missing dependencies: 'api', 'apiState', 'region', and 'timeslicePeriod'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/elements/RegionCard/index.tsx
116:6  Warning: React Hook useEffect has missing dependencies: 'api', 'apiState', 'region', and 'timeslicePeriod'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/elements/SaleInfo/index.tsx
54:6  Warning: React Hook useEffect has a missing dependency: 'saleInfo.saleStart'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/apis/CoretimeApi/index.tsx
43:6  Warning: React Hook useEffect has a missing dependency: 'toastError'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
48:6  Warning: React Hook useEffect has a missing dependency: 'toastSuccess'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/apis/RelayApi/index.tsx
32:6  Warning: React Hook useEffect has a missing dependency: 'toastError'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
37:6  Warning: React Hook useEffect has a missing dependency: 'toastSuccess'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
52:6  Warning: React Hook useEffect has a missing dependency: 'state'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/common/index.tsx
52:6  Warning: React Hook useEffect has a missing dependency: 'collectContextData'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/market/index.tsx
194:6  Warning: React Hook useEffect has a missing dependency: 'fetchMarket'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/regions/index.tsx
146:6  Warning: React Hook useEffect has a missing dependency: 'fetchRegions'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
150:6  Warning: React Hook useEffect has a missing dependency: 'fetchRegions'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/sales/index.tsx
109:6  Warning: React Hook useEffect has a missing dependency: 'fetchSaleInfo'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/pages/purchase.tsx
59:6  Warning: React Hook useEffect has missing dependencies: 'fetchBalance', 'fetchCurreentPrice', and 'fetchCurrentPhase'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/pages/transfer/ChainSelector.tsx
26:1  Warning: Assign arrow function to a variable before exporting as module default  import/no-anonymous-default-export

./src/pages/transfer/RegionSelector.tsx
36:1  Warning: Assign arrow function to a variable before exporting as module default  import/no-anonymous-default-export

./src/pages/transfer/index.tsx
86:6  Warning: React Hook useEffect has a missing dependency: 'handleNonWrappedRegions'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
   Linting and checking validity of types  ...Failed to compile.

./src/components/Modals/TaskAssign/index.tsx:132:15
Type error: Type 'string | number' is not assignable to type 'string | undefined'.
  Type 'number' is not assignable to type 'string'.

  130 |             </Typography>
  131 |             <Select
> 132 |               value={taskSelected || ''}
      |               ^
  133 |               onChange={(e) => selectTask(Number(e.target.value))}
  134 |             >
  135 |               {tasks.map(({ name, id }, index) => (
```
</details>
