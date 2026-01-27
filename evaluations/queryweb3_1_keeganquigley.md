# General Notes

## Required to fix:
- Error handling is weak: silent failures, no retry logic, and network timeouts can stall the entire pipeline
- Data quality concerns: Batch ID based on Unix timestamp, no data validation before insertion, no duplicate detection between runs
- No health checks or monitoring

## Nice to have but not a showstopper:
- RPC endpoints are hardcoded. (README.txt warns about this). Fine for now but please fix for next milestone
- .env file must be manually created with credentials. Please create a .env.example file for this
- no integration tests, please add for next milestone

## Testing

- No integration tests: All tests mock external dependencies (APIs, databases)
◦  Tests don't verify actual data flows end-to-end
◦  No verification that mock data matches real API response formats
◦  API format changes wouldn't be caught until runtime
- No E2E pipeline tests: all_data_jobs.py orchestrator has minimal testing
◦  Only 61 lines of tests for the main orchestration script
◦  Doesn't test: subprocess management, signal handling, proper cleanup
◦  Long-running process semantics not validated
- Coverage is misleading: 81% coverage doesn't mean 81% behavior validation
◦  Tests like test_certified_80.py are explicitly "booster" tests to hit coverage targets, not functional tests
◦  Many test methods just call functions without asserting meaningful output
- No real database validation: Tests don't verify:
◦  Data is correctly written to MySQL
◦  Schema migrations work properly
◦  Batch IDs are properly tracked across runs
◦  Duplicate detection works
