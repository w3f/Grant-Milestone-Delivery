# Evaluation

> Don't remove any of the mandatory parts presented in bold letters or as headlines!
> When evaluating the last milestone of a grant, check if the finished grant refers to an [RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/README.md) and move the corresponding RFP to [implemented](https://github.com/w3f/Grants-Program/tree/master/rfps/implemented).
> Lines starting with `>`, such as this one, can be removed.

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/c%2B%2Bpolkadot-light-client.md 
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | Cryptography |<ul><li>[] </li></ul>|...| Missing a clear comparison of required components between Light-Client and Full Node.  Ideally describe a spectrum of functionalities that a light-client can support. 
| 2.  | Runtime Environment Requirements |<ul><li>[ ] </li></ul>|...| No discussion of embedding runtime environments  to run on-chain wasm blobs.  How would the compiled targets (for different platforms) interface with the embedded runtime environments.
| 3. | Multichain Support |<ul><li>[] </li></ul>|...| No mention of chains to be supported (e.g. Polkadot, Kusama, Parachains)
| 4. | JSON-RPC APIs |<ul><li>[x] </li></ul>|...| Mentions three initial RPC methods to be implemented. Would this suffice? Justification would be appreciated.
| 5. | Dependencies |<ul><li>[] </li></ul>|...| Details of the required crypto libs missing; nice to have: assessment of using the heavy crypto libs in a resource constrained light-client. 

## General Remarks

Overall, the spec seems to be sparse and lacks details on several key components of the light-client. Components like Runtime/execution environments, local host storage, light-weight interactions with GRANDPA and BABE (and Sassafras in future) for the light client have not been addressed. 
It would also be interesting to gain insights into the disadvantages of implementing in C++ and the major pain points the team expects. Furthermore, the document could be improved by adding justification to the design choices. For example, 
> *"We will use hash_map with serialization/deserialization to hold the blockchain state."* in Implementation.md

Missing details, especially on the limits of using a hashmap. What were the other options considered? would there not be any non-persistence issues? AFAIK, other node implementations use a Database for similar tasks. 

Similarly, it is mentioned:
> *“Boost::asio used as the main event loop”* - Diagram

Why does ASIO satisfy the requirements at hand? What would the Callback Graph of the event-driven system look like? What are the event triggers?
