# General Notes

Solana program builds successfully with Anchor

```rust
   Compiling anchor-attribute-access-control v0.31.1
   Compiling anchor-derive-serde v0.31.1
   Compiling anchor-attribute-account v0.31.1
   Compiling anchor-derive-space v0.31.1
   Compiling base64 v0.21.7
   Compiling anchor-attribute-program v0.31.1
   Compiling anchor-lang v0.31.1
   Compiling counter v0.1.0 (/home/ubuntu/sbpf-on-polkavm/solana-programs/counter/programs/counter)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 45.79s
     Running unittests src/lib.rs (/home/ubuntu/sbpf-on-polkavm/solana-programs/counter/target/debug/deps/counter-4965141007b339d4)
```
Program successfully runs now with an expected error:
```rust
cargo run -p client
   Compiling client v0.1.0 (/home/ubuntu/sbpf-on-polkavm/client)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 19.03s
     Running `target/debug/client`
[client/src/main.rs:26:5] program_keypair.pubkey() = EoXDvKpyju8yYcV5MP7BAULnffvKoRfXGxVriDg7MCJy
counter_pda F7aPUh4QmJMXKRU8KyJvWZbgNVBDPiLcP8mYcrmra1Co
Calling counter Initialize instruction...
[level=2][]accumulate is called. slot: deadbeef, service id: beefdead, items' size: 1

thread 'main' panicked at sbpf-polkavm/src/lib.rs:170:14:
called `Result::unwrap()` on an `Err` value: Trap
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
AccountsDB dropped and RocksDB closed
```
