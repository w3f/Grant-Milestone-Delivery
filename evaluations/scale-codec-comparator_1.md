1 Test is currently failing when running `cd polkadot-js && npm install && npm run test`

```php
ts-jest[versions] (WARN) Version 29.0.1 of jest installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=28.0.0 <29.0.0-0). Please do not report issues in ts-jest if you are using unsupported versions.
ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 FAIL  test/base.spec.ts
  base ffi codec
    ✓ encodes compact<u32> (81 ms)
    ✓ decode compact<u32> (1 ms)
    ✕ encodes option<bool> (46 ms)
    ✓ decode option<bool> (46 ms)
    ✓ encodes bool (54 ms)
    ✓ decode bool (1 ms)
    ✓ encode result<u32,string> (51 ms)
    ✓ decode result<u32,string> (135 ms)
    ✓ encode struct (86 ms)
    ✓ decode struct (59 ms)
    ✓ encode enum (69 ms)
    ✓ decode enum (56 ms)
    ✓ encode (u32,u32) (50 ms)
    ✓ decode (u32,u32) (51 ms)
    ✓ encodes string (63 ms)
    ✓ decode string (93 ms)
    ✓ encode [u32;6] (52 ms)
    ✓ decode [u32;6] (11 ms)
    ✓ encode vec<u32> (52 ms)
    ✓ decode <u32> (44 ms)

  ● base ffi codec › encodes option<bool>

    expect(received).toEqual(expected) // deep equality

    Expected: "01"
    Received: "0101"

      80 |     it('encodes option<bool>', (): void => {
      81 |         expect(tohex(new Option(registry, bool, null).toU8a())).toEqual(libm.option_bool_encode("NONE"));
    > 82 |         expect(tohex(new Option(registry, bool, true).toU8a())).toEqual(libm.option_bool_encode("true"));
         |                                                                 ^
      83 |         expect(tohex(new Option(registry, bool, false).toU8a())).toEqual(libm.option_bool_encode("false"));
      84 |     });
      85 |     it('decode option<bool>', (): void => {

      at Object.<anonymous> (test/base.spec.ts:82:65)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 19 passed, 20 total
Snapshots:   0 total
Time:        3.984 s
Ran all test suites.
```
