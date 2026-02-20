# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/relaycode.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
|--------|-------------|------|-------|-------|
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE.md](https://github.com/itsyogesh/relaycode/blob/master/LICENSE.md) | Apache 2.0 license |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/itsyogesh/relaycode/tree/master/docs) |  |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/itsyogesh/relaycode/blob/master/docs/testing-guide.md) / [Tests](https://github.com/itsyogesh/relaycode/tree/master/__tests__) |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/itsyogesh/relaycode/blob/master/Dockerfile) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium Article Draft](https://github.com/itsyogesh/relaycode/blob/master/docs/medium-article.md) |  |
| 1. | UI Refinement | <ul><li>[x] </li></ul> | [Builder](https://github.com/itsyogesh/relaycode/tree/master/components/builder) / [Site Pages](https://github.com/itsyogesh/relaycode/tree/master/app) / [Demo](https://relaycode.org/builder) |  |
| 2. | Wallet Integration | <ul><li>[x] </li></ul> | [Wallet Config](https://github.com/itsyogesh/relaycode/blob/master/config/wallet.ts) / [Wallet Provider](https://github.com/itsyogesh/relaycode/blob/master/context/wallet-provider.tsx) |  |
| 3. | Error Handling and Validation | <ul><li>[x] </li></ul> | [Validation](https://github.com/itsyogesh/relaycode/blob/master/lib/validation.ts) / [Input Components](https://github.com/itsyogesh/relaycode/tree/master/components/params/inputs) |  |
| 4. | Performance Optimization | <ul><li>[x] </li></ul> | [Input Map](https://github.com/itsyogesh/relaycode/blob/master/lib/input-map.ts) / [Codec](https://github.com/itsyogesh/relaycode/blob/master/lib/codec.ts) |  |
| 5. | Production Deployment | <ul><li>[x] </li></ul> | [Demo](https://relaycode.org/) |  |

# General Notes

## Testing

Unit tests now all passing w/ good coverage.

<details>
  <summary>Output</summary>

```ts
yarn test --coverage
yarn run v1.22.19
warning ../package.json: No license field
$ jest --coverage
 ⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
 We detected multiple lockfiles and selected the directory of /Users/keeganquigley/pnpm-lock.yaml as the root directory.
 To silence this warning, set `outputFileTracingRoot` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
   See https://nextjs.org/docs/app/api-reference/config/next-config-js/output#caveats for more information.
 Detected additional lockfiles: 
   * /Users/keeganquigley/relaycode/yarn.lock

 ⚠ Mismatching @next/swc version, detected: 15.5.7 while Next.js is on 15.5.11. Please ensure these match
[MDX] generated files in 15.042666000000054ms
 PASS  __tests__/lib/pallet-context/staking.test.ts
 PASS  __tests__/lib/validation.test.ts
 PASS  __tests__/lib/pallet-context-index.test.ts
 PASS  __tests__/lib/pallet-overrides.test.ts
 PASS  __tests__/lib/parser.test.ts
 PASS  __tests__/lib/codec.test.ts
 PASS  __tests__/input-map.test.ts
 PASS  __tests__/components/params/selectors/selector-fallback.test.tsx
 PASS  __tests__/components/params/selectors/era-selector.test.tsx
 PASS  __tests__/components/params/selectors/proxy-type-selector.test.tsx
 PASS  __tests__/components/params/selectors/pool-selector.test.tsx
 PASS  __tests__/hooks/use-scroll.test.ts
 PASS  __tests__/components/params/selectors/core-selector.test.tsx
 PASS  __tests__/components/params/selectors/destination-chain-selector.test.tsx
 PASS  __tests__/config/get-supported-chains.test.ts
 PASS  __tests__/components/params/selectors/validator-selector.test.tsx
 PASS  __tests__/components/params/selectors/asset-selector.test.tsx
 PASS  __tests__/utils/truncate-hash.test.ts
 PASS  __tests__/components/params/selectors/track-selector.test.tsx
 PASS  __tests__/components/builder/combobox.test.tsx
 PASS  __tests__/components/params/selectors/bounty-selector.test.tsx
 PASS  __tests__/components/shared/coming-soon.test.tsx
 PASS  __tests__/components/shared/status-badge.test.tsx
 PASS  __tests__/components/params/inputs/text.test.tsx
 PASS  __tests__/components/params/selectors/referendum-selector.test.tsx
 PASS  __tests__/components/params/selectors/multisig-call-selector.test.tsx
 PASS  __tests__/components/params/inputs/call.test.tsx
 PASS  __tests__/components/params/inputs/vote.test.tsx
 PASS  __tests__/lib/api/subscan.test.ts
 PASS  __tests__/components/ui/input-with-addon.test.tsx
 PASS  __tests__/components/builder/information-pane.test.tsx
 PASS  __tests__/components/params/inputs/vector.test.tsx
 PASS  __tests__/components/params/inputs/balance.test.tsx
 PASS  __tests__/components/params/inputs/boolean.test.tsx
 PASS  __tests__/hooks/use-pallet-context.test.ts
 PASS  __tests__/components/params/shared/mode-toggle.test.tsx
 PASS  __tests__/lib/pallet-context-utils.test.ts
 PASS  __tests__/lib/pallet-context/vesting.test.ts
 PASS  __tests__/components/params/inputs/account-combobox.test.tsx
 PASS  __tests__/components/builder/extrinsic-builder.test.tsx
 PASS  __tests__/components/shared/connect-button.test.tsx
 PASS  __tests__/components/params/selectors/context-combobox.test.tsx
 PASS  __tests__/hooks/use-mobile.test.ts
 PASS  __tests__/hooks/use-interval.test.ts
 PASS  __tests__/components/params/inputs/enum.test.tsx
  ● Console

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      62 | describe("Enum", () => {
      63 |   it("renders variant select dropdown from explicit variants", () => {
    > 64 |     render(<Enum {...baseProps} variants={simpleVariants} />);
         |           ^
      65 |     expect(screen.getByText("Reward Destination")).toBeInTheDocument();
      66 |     // The select trigger should be rendered
      67 |     expect(screen.getByRole("combobox")).toBeInTheDocument();

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:64:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      70 |   it("auto-selects first variant and emits for no-field variant", () => {
      71 |     const onChange = jest.fn();
    > 72 |     render(<Enum {...baseProps} variants={simpleVariants} onChange={onChange} />);
         |           ^
      73 |     // First variant "Staked" should be auto-selected and emitted (since no fields)
      74 |     expect(onChange).toHaveBeenCalledWith({ type: "Staked" });
      75 |   });

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:72:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      77 |   it("emits {type: 'VariantName'} for no-field variants", () => {
      78 |     const onChange = jest.fn();
    > 79 |     render(<Enum {...baseProps} variants={simpleVariants} onChange={onChange} />);
         |           ^
      80 |     expect(onChange).toHaveBeenCalledWith({ type: "Staked" });
      81 |   });
      82 |

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:79:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      93 |
      94 |     const onChange = jest.fn();
    > 95 |     render(<Enum {...baseProps} client={client} typeId={42} variants={[]} onChange={onChange} />);
         |           ^
      96 |     // Should auto-select first variant from metadata
      97 |     expect(onChange).toHaveBeenCalledWith({ type: "Staked" });
      98 |   });

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:95:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

       99 |
      100 |   it("shows sub-component when variant with single field is selected via external value", () => {
    > 101 |     render(
          |           ^
      102 |       <Enum
      103 |         {...baseProps}
      104 |         variants={fieldVariants}

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:101:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      112 |
      113 |   it("multi-field variant renders nested components with field labels", () => {
    > 114 |     render(
          |           ^
      115 |       <Enum
      116 |         {...baseProps}
      117 |         variants={fieldVariants}

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:114:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      127 |   it("external value with missing variant gracefully falls back", () => {
      128 |     // Set external value with a variant that doesn't exist in the list
    > 129 |     render(
          |           ^
      130 |       <Enum
      131 |         {...baseProps}
      132 |         variants={simpleVariants}

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:129:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      145 |
      146 |   it("renders required asterisk", () => {
    > 147 |     render(<Enum {...baseProps} variants={simpleVariants} isRequired />);
          |           ^
      148 |     expect(screen.getByText("*")).toBeInTheDocument();
      149 |   });
      150 |

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:147:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      150 |
      151 |   it("renders description when provided", () => {
    > 152 |     render(
          |           ^
      153 |       <Enum {...baseProps} variants={simpleVariants} description="Choose destination" />
      154 |     );
      155 |     expect(screen.getByText("Choose destination")).toBeInTheDocument();

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:152:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      157 |
      158 |   it("renders error when provided", () => {
    > 159 |     render(<Enum {...baseProps} variants={simpleVariants} error="Select a variant" />);
          |           ^
      160 |     expect(screen.getByText("Select a variant")).toBeInTheDocument();
      161 |   });
      162 |

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:159:11)

    console.warn
      Select is changing from uncontrolled to controlled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.

      163 |   it("single-field variant emits onChange with type and value", () => {
      164 |     const onChange = jest.fn();
    > 165 |     render(
          |           ^
      166 |       <Enum
      167 |         {...baseProps}
      168 |         variants={fieldVariants}

      at node_modules/@radix-ui/react-use-controllable-state/src/use-controllable-state.tsx:42:17
      at Object.react_stack_bottom_frame (node_modules/react-dom/cjs/react-dom-client.development.js:25989:20)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:874:13)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom-client.development.js:13249:29)
      at commitHookPassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:13336:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15484:13)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15718:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15476:11)
      at recursivelyTraversePassiveMountEffects (node_modules/react-dom/cjs/react-dom-client.development.js:15439:11)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:15519:11)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18432:9)
      at flushPendingEffects (node_modules/react-dom/cjs/react-dom-client.development.js:18358:14)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18323:44)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:18972:7)
      at flushSyncWorkAcrossRoots_impl (node_modules/react-dom/cjs/react-dom-client.development.js:18814:21)
      at flushSpawnedWork (node_modules/react-dom/cjs/react-dom-client.development.js:18334:9)
      at commitRoot (node_modules/react-dom/cjs/react-dom-client.development.js:17955:9)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:16667:15)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:18957:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:590:34)
      at Object.<anonymous>.process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:884:10)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:189:26)
      at render (node_modules/@testing-library/react/dist/pure.js:291:10)
      at Object.<anonymous> (__tests__/components/params/inputs/enum.test.tsx:165:11)

 PASS  __tests__/components/ui/identicon.test.tsx
 PASS  __tests__/components/params/inputs/moment.test.tsx
 PASS  __tests__/components/wallet/wallet-provider.test.tsx
 PASS  __tests__/components/params/inputs/hash.test.tsx
 PASS  __tests__/components/params/selectors/vesting-info-display.test.tsx
 PASS  __tests__/hooks/use-chain-token.test.ts
 PASS  __tests__/config/get-url.test.ts
 PASS  __tests__/components/ui/badge.test.tsx
 PASS  __tests__/components/params/inputs/amount.test.tsx
 PASS  __tests__/components/params/inputs/key-value.test.tsx
 PASS  __tests__/components/params/inputs/btree-map.test.tsx
 PASS  __tests__/components/params/inputs/vote-threshold.test.tsx
 PASS  __tests__/lib/pallet-context-types.test.ts
 PASS  __tests__/components/params/inputs/struct.test.tsx
 PASS  __tests__/components/params/inputs/option.test.tsx
 PASS  __tests__/components/builder/field-hex-display.test.tsx
 PASS  __tests__/components/shared/chain-selector.test.tsx
 PASS  __tests__/hooks/use-recent-addresses.test.ts
 PASS  __tests__/components/params/inputs/bytes.test.tsx
 PASS  __tests__/lib/codec-decompose.test.ts
 PASS  __tests__/components/ui/skeleton.test.tsx
 PASS  __tests__/hooks/use-ss58.test.ts
 PASS  __tests__/lib/api/polkassembly.test.ts
 PASS  __tests__/components/params/selectors/context-hint.test.tsx
 PASS  __tests__/components/params/inputs/tuple.test.tsx
 PASS  __tests__/hooks/use-lock-body.test.ts
 PASS  __tests__/hooks/use-wallet-safe.test.ts
 PASS  __tests__/components/params/inputs/vector-fixed.test.tsx
 PASS  __tests__/hooks/use-toast.test.ts
 PASS  __tests__/lib/pallet-overrides-extended.test.ts
 PASS  __tests__/components/params/inputs/account.test.tsx
 PASS  __tests__/lib/byte-utils.test.ts
 PASS  __tests__/lib/pallet-context/multisig.test.ts
 PASS  __tests__/lib/pallet-context/governance.test.ts
 PASS  __tests__/lib/api/wisesama.test.ts
 PASS  __tests__/lib/pallet-context/xcm.test.ts
 PASS  __tests__/lib/paste-utils.test.ts
 PASS  __tests__/lib/bulk-parse.test.ts
 PASS  __tests__/lib/pallet-context/assets.test.ts
 PASS  __tests__/lib/pallet-context/coretime.test.ts
 PASS  __tests__/lib/pallet-context/proxy.test.ts
 PASS  __tests__/lib/denominations.test.ts
 PASS  __tests__/lib/utils.test.ts
---------------------------------|---------|----------|---------|---------|----------------------------------------------------------------------------------------------------
File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                  
---------------------------------|---------|----------|---------|---------|----------------------------------------------------------------------------------------------------
All files                        |   66.42 |    80.47 |   76.19 |   66.42 |                                                                                                    
 components/builder              |   82.39 |    66.66 |   60.86 |   82.39 |                                                                                                    
  combobox.tsx                   |     100 |      100 |     100 |     100 |                                                                                                    
  extrinsic-builder.tsx          |   80.63 |    56.25 |   66.66 |   80.63 | 72-78,85-90,94-136,194-196,234-235                                                                 
  field-hex-display.tsx          |     100 |    69.56 |   55.55 |     100 | 68,94-97,151,186,204-207                                                                           
  information-pane.tsx           |   73.26 |    65.45 |   55.55 |   73.26 | ...160,174-175,200-213,220-268,275-291,296-306,311-320,327-329,334-338,341-345,352-361,461,475-481 
 components/docs                 |       0 |        0 |       0 |       0 |                                                                                                    
  component-preview.tsx          |       0 |        0 |       0 |       0 | 1-25                                                                                               
 components/docs/demos           |       0 |        0 |       0 |       0 |                                                                                                    
  account-demo.tsx               |       0 |        0 |       0 |       0 | 1-69                                                                                               
  balance-demo.tsx               |       0 |        0 |       0 |       0 | 1-17                                                                                               
  composite-demos.tsx            |       0 |        0 |       0 |       0 | 1-46                                                                                               
  docs-selector-preview.tsx      |       0 |        0 |       0 |       0 | 1-72                                                                                               
  enum-demo.tsx                  |       0 |        0 |       0 |       0 | 1-33                                                                                               
  selector-demos.tsx             |       0 |        0 |       0 |       0 | 1-102                                                                                              
  simple-demos.tsx               |       0 |        0 |       0 |       0 | 1-74                                                                                               
 components/icons                |       0 |        0 |       0 |       0 |                                                                                                    
  block-icon.tsx                 |       0 |        0 |       0 |       0 | 1-23                                                                                               
  nova-wallet-icon.tsx           |       0 |        0 |       0 |       0 | 1-14                                                                                               
  polkadot-icon.tsx              |       0 |        0 |       0 |       0 | 1-10                                                                                               
  relaycode-logo.tsx             |       0 |        0 |       0 |       0 | 1-7                                                                                                
  subwallet-icon.tsx             |       0 |        0 |       0 |       0 | 1-11                                                                                               
  talisman-icon.tsx              |       0 |        0 |       0 |       0 | 1-18                                                                                               
 components/layout               |       0 |        0 |       0 |       0 |                                                                                                    
  aurora-background.tsx          |       0 |        0 |       0 |       0 | 1-77                                                                                               
  main-nav.tsx                   |       0 |        0 |       0 |       0 | 1-104                                                                                              
  mobile-nav.tsx                 |       0 |        0 |       0 |       0 | 1-48                                                                                               
  mode-toggle.tsx                |       0 |        0 |       0 |       0 | 1-50                                                                                               
  site-footer.tsx                |       0 |        0 |       0 |       0 | 1-129                                                                                              
  site-header.tsx                |       0 |        0 |       0 |       0 | 1-44                                                                                               
 components/params               |       0 |        0 |       0 |       0 |                                                                                                    
  types.ts                       |       0 |        0 |       0 |       0 | 1-27                                                                                               
 components/params/inputs        |   86.83 |    76.31 |      80 |   86.83 |                                                                                                    
  account-combobox.tsx           |   86.55 |    73.52 |   42.85 |   86.55 | 83-98,108-110,113-127,178,190-193,227,237                                                          
  account.tsx                    |    87.8 |    64.28 |      50 |    87.8 | 17-23,64-68,76-78                                                                                  
  amount.tsx                     |   73.33 |    73.68 |     100 |   73.33 | 69-71,110,123-146,164-189,195-207,224-233,247-248,256-271,282-283,285-291                          
  balance.tsx                    |   76.76 |    68.29 |      75 |   76.76 | 25-31,59,73-82,107-110,126-154,160-174,187-188,200                                                 
  boolean.tsx                    |     100 |      100 |     100 |     100 |                                                                                                    
  btree-map.tsx                  |   91.05 |       75 |   84.61 |   91.05 | 64-67,107-113,115-123,132-134                                                                      
  bytes.tsx                      |   76.45 |    73.17 |   63.63 |   76.45 | 23-24,52-74,78-80,109-111,126-129,153-156,163-168,172-187,193-208                                  
  call.tsx                       |   85.58 |       75 |      50 |   85.58 | 76-78,101-104,107-131                                                                              
  enum.tsx                       |   85.27 |       70 |   71.42 |   85.27 | 65-68,73-75,102-110,125-130,174-176,183-185,202,236-244                                            
  hash.tsx                       |     100 |    96.87 |      75 |     100 | 90                                                                                                 
  key-value.tsx                  |   89.89 |    73.33 |     100 |   89.89 | 56-58,82-89,126-133                                                                                
  moment.tsx                     |   98.29 |    91.66 |     100 |   98.29 | 69-70                                                                                              
  option.tsx                     |   96.71 |    85.18 |     100 |   96.71 | 51-53,88-89                                                                                        
  struct.tsx                     |   97.41 |    69.23 |     100 |   97.41 | 47,93-94                                                                                           
  text.tsx                       |     100 |      100 |     100 |     100 |                                                                                                    
  tuple.tsx                      |   96.09 |    77.77 |     100 |   96.09 | 57-61                                                                                              
  vector-fixed.tsx               |   86.64 |    71.11 |    87.5 |   86.64 | 51-62,78-83,96-99,120-123,127-129,134-137,147-148,155-156                                          
  vector.tsx                     |   82.16 |     73.8 |   86.66 |   82.16 | 67-69,76-80,103-104,120,161-166,174-181,183-197,206-208,218-230,239-251,269-270                    
  vote-threshold.tsx             |     100 |      100 |     100 |     100 |                                                                                                    
  vote.tsx                       |   99.22 |      100 |   71.42 |   99.22 | 105-106                                                                                            
 components/params/selectors     |   97.48 |    92.27 |   78.94 |   97.48 |                                                                                                    
  asset-selector.tsx             |   95.77 |      100 |   66.66 |   95.77 | 33-35                                                                                              
  bounty-selector.tsx            |   95.29 |      100 |   66.66 |   95.29 | 43-46                                                                                              
  context-combobox.tsx           |     100 |      100 |     100 |     100 |                                                                                                    
  context-hint.tsx               |     100 |      100 |     100 |     100 |                                                                                                    
  core-selector.tsx              |     100 |      100 |   66.66 |     100 |                                                                                                    
  destination-chain-selector.tsx |   98.41 |      100 |      75 |   98.41 | 34                                                                                                 
  era-selector.tsx               |     100 |      100 |     100 |     100 |                                                                                                    
  multisig-call-selector.tsx     |   97.18 |      100 |   66.66 |   97.18 | 39-40                                                                                              
  pool-selector.tsx              |   97.14 |    94.44 |      80 |   97.14 | 18-19,51                                                                                           
  proxy-type-selector.tsx        |   97.91 |      100 |   66.66 |   97.91 | 32                                                                                                 
  referendum-selector.tsx        |   93.33 |    76.31 |      75 |   93.33 | 18-22,25-26,75-77                                                                                  
  selector-fallback.tsx          |     100 |      100 |     100 |     100 |                                                                                                    
  track-selector.tsx             |   98.18 |     87.5 |   66.66 |   98.18 | 32                                                                                                 
  validator-selector.tsx         |   97.34 |     88.7 |    92.3 |   97.34 | 46-51,106-107,173                                                                                  
  vesting-info-display.tsx       |     100 |      100 |      50 |     100 |                                                                                                    
 components/params/shared        |     100 |      100 |     100 |     100 |                                                                                                    
  mode-toggle.tsx                |     100 |      100 |     100 |     100 |                                                                                                    
 components/sections             |       0 |        0 |       0 |       0 |                                                                                                    
  connected-steps.tsx            |       0 |        0 |       0 |       0 | 1-74                                                                                               
  dapp-builders.tsx              |       0 |        0 |       0 |       0 | 1-300                                                                                              
  extrinsic-builder.tsx          |       0 |        0 |       0 |       0 | 1-544                                                                                              
  hero-section.tsx               |       0 |        0 |       0 |       0 | 1-99                                                                                               
  loading-skeleton.tsx           |       0 |        0 |       0 |       0 | 1-58                                                                                               
  substrate-utilities.tsx        |       0 |        0 |       0 |       0 | 1-256                                                                                              
  testimonials.tsx               |       0 |        0 |       0 |       0 | 1-160                                                                                              
  why-developers.tsx             |       0 |        0 |       0 |       0 | 1-277                                                                                              
 components/shared               |   64.68 |    88.23 |   85.71 |   64.68 |                                                                                                    
  chain-selector.tsx             |     100 |       80 |     100 |     100 | 36                                                                                                 
  coming-soon.tsx                |     100 |      100 |     100 |     100 |                                                                                                    
  connect-button.tsx             |     100 |      100 |     100 |     100 |                                                                                                    
  icons.tsx                      |       0 |        0 |       0 |       0 | 1-119                                                                                              
  status-badge.tsx               |     100 |      100 |     100 |     100 |                                                                                                    
 components/ui                   |    38.7 |    60.71 |   33.33 |    38.7 |                                                                                                    
  badge.tsx                      |     100 |      100 |     100 |     100 |                                                                                                    
  button.tsx                     |     100 |       50 |     100 |     100 | 45                                                                                                 
  card.tsx                       |     100 |      100 |     100 |     100 |                                                                                                    
  command.tsx                    |   85.16 |      100 |       0 |   85.16 | 29-38,130-142                                                                                      
  dialog.tsx                     |     100 |      100 |     100 |     100 |                                                                                                    
  drawer.tsx                     |       0 |        0 |       0 |       0 | 1-118                                                                                              
  dropdown-menu.tsx              |       0 |        0 |       0 |       0 | 1-205                                                                                              
  dropdrawer.tsx                 |       0 |        0 |       0 |       0 | 1-696                                                                                              
  form.tsx                       |   73.59 |       80 |     100 |   73.59 | 52-53,93-103,110-125,149-166                                                                       
  identicon.tsx                  |   96.29 |    83.33 |     100 |   96.29 | 17-18                                                                                              
  input-with-addon.tsx           |     100 |      100 |     100 |     100 |                                                                                                    
  input.tsx                      |     100 |      100 |     100 |     100 |                                                                                                    
  label.tsx                      |     100 |      100 |     100 |     100 |                                                                                                    
  popover.tsx                    |     100 |      100 |     100 |     100 |                                                                                                    
  select.tsx                     |     100 |      100 |     100 |     100 |                                                                                                    
  separator.tsx                  |     100 |      100 |     100 |     100 |                                                                                                    
  sheet.tsx                      |       0 |        0 |       0 |       0 | 1-140                                                                                              
  skeleton.tsx                   |     100 |      100 |     100 |     100 |                                                                                                    
  sonner.tsx                     |       0 |        0 |       0 |       0 | 1-31                                                                                               
  switch.tsx                     |     100 |      100 |     100 |     100 |                                                                                                    
  textarea.tsx                   |     100 |      100 |     100 |     100 |                                                                                                    
  toast.tsx                      |       0 |        0 |       0 |       0 | 1-129                                                                                              
  toaster.tsx                    |       0 |        0 |       0 |       0 | 1-35                                                                                               
  tooltip.tsx                    |     100 |      100 |     100 |     100 |                                                                                                    
  use-toast.ts                   |       0 |        0 |       0 |       0 | 1-194                                                                                              
 components/wallet               |     100 |      100 |     100 |     100 |                                                                                                    
  wallet-provider.tsx            |     100 |      100 |     100 |     100 |                                                                                                    
 config                          |   57.33 |    83.33 |      50 |   57.33 |                                                                                                    
  environment.ts                 |       0 |        0 |       0 |       0 | 1-15                                                                                               
  get-supported-chains.ts        |     100 |      100 |     100 |     100 |                                                                                                    
  get-url.ts                     |     100 |      100 |     100 |     100 |                                                                                                    
  site.ts                        |     100 |      100 |     100 |     100 |                                                                                                    
  wallet.ts                      |       0 |        0 |       0 |       0 | 1-17                                                                                               
 context                         |       0 |        0 |       0 |       0 |                                                                                                    
  client.tsx                     |       0 |        0 |       0 |       0 | 1-89                                                                                               
 hooks                           |   98.67 |    93.15 |     100 |   98.67 |                                                                                                    
  use-chain-token.ts             |     100 |      100 |     100 |     100 |                                                                                                    
  use-interval.ts                |     100 |      100 |     100 |     100 |                                                                                                    
  use-lock-body.ts               |     100 |      100 |     100 |     100 |                                                                                                    
  use-mobile.tsx                 |     100 |      100 |     100 |     100 |                                                                                                    
  use-pallet-context.ts          |     100 |    85.18 |     100 |     100 | 31-32,62,69                                                                                        
  use-recent-addresses.ts        |   96.39 |    78.57 |     100 |   96.39 | 27-28,64-65                                                                                        
  use-scroll.ts                  |     100 |      100 |     100 |     100 |                                                                                                    
  use-ss58.ts                    |     100 |      100 |     100 |     100 |                                                                                                    
  use-toast.ts                   |   97.42 |      100 |     100 |   97.42 | 67-71                                                                                              
  use-wallet-safe.ts             |     100 |      100 |     100 |     100 |                                                                                                    
 lib                             |   98.58 |    92.22 |   97.72 |   98.58 |                                                                                                    
  bulk-parse.ts                  |     100 |      100 |     100 |     100 |                                                                                                    
  byte-utils.ts                  |     100 |      100 |     100 |     100 |                                                                                                    
  codec.ts                       |   97.39 |    83.85 |     100 |   97.39 | 32-34,73-74,132-133,356-358,448,470-471,509-510,535-536                                            
  denominations.ts               |     100 |      100 |     100 |     100 |                                                                                                    
  input-map.ts                   |   99.21 |    93.54 |     100 |   99.21 | 228-229                                                                                            
  pallet-overrides.ts            |     100 |      100 |     100 |     100 |                                                                                                    
  parser.ts                      |     100 |      100 |     100 |     100 |                                                                                                    
  paste-utils.ts                 |     100 |      100 |     100 |     100 |                                                                                                    
  source.ts                      |       0 |        0 |       0 |       0 | 1-7                                                                                                
  utils.ts                       |     100 |      100 |     100 |     100 |                                                                                                    
  validation.ts                  |     100 |    98.59 |     100 |     100 | 235                                                                                                
 lib/api                         |     100 |    75.92 |     100 |     100 |                                                                                                    
  polkassembly.ts                |     100 |    63.15 |     100 |     100 | 50-52,75-79                                                                                        
  subscan.ts                     |     100 |    78.57 |     100 |     100 | 74-75,82                                                                                           
  wisesama.ts                    |     100 |    85.71 |     100 |     100 | 41-42                                                                                              
 lib/pallet-context              |   98.85 |    71.17 |     100 |   98.85 |                                                                                                    
  assets.ts                      |   95.23 |    53.84 |     100 |   95.23 | 67-68,75-76                                                                                        
  coretime.ts                    |   97.72 |    86.66 |     100 |   97.72 | 62-63                                                                                              
  governance.ts                  |     100 |    65.78 |     100 |     100 | 36,58,66,70-72,95-96,111-112,131-138                                                               
  multisig.ts                    |   98.24 |    71.42 |     100 |   98.24 | 39                                                                                                 
  proxy.ts                       |     100 |    54.83 |     100 |     100 | 24-27,39-55,57-58                                                                                  
  staking.ts                     |     100 |    73.17 |     100 |     100 | 45,52,72-76,95,115-128                                                                             
  utils.ts                       |   93.33 |     92.3 |     100 |   93.33 | 6-7                                                                                                
  vesting.ts                     |     100 |    83.33 |     100 |     100 | 26                                                                                                 
  xcm.ts                         |     100 |     87.5 |     100 |     100 | 104-105                                                                                            
---------------------------------|---------|----------|---------|---------|----------------------------------------------------------------------------------------------------

=============================== Coverage summary ===============================
Statements   : 66.42% ( 10795/16251 )
Branches     : 80.47% ( 1500/1864 )
Functions    : 76.19% ( 288/378 )
Lines        : 66.42% ( 10795/16251 )
================================================================================

Test Suites: 88 passed, 88 total
Tests:       970 passed, 970 total
Snapshots:   0 total
Time:        14.062 s, estimated 16 s
Ran all test suites.
✨  Done in 15.60s.
```
</details>
