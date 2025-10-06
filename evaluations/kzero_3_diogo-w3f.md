# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License |<ul><li>[ ]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service | GPLv3 file missing from the repository; please add the license as committed in the application. |
| 0b. | Documentation |<ul><li>[ ]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service#readme | README covers Docker usage but does not document salt derivation flow or explain how to keep JWT/JWKS fixtures valid; the linked tutorial is not referenced from the codebase. |
| 0c. | Testing and Testing Guide |<ul><li>[ ]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service#readme | `./bin/app --test` only exercises helper utilities; no automated test covers `verify_jwt_for_provider`, `process_jwt_token`, or the enclave ECALL, and no guide explains the testing gap. |
| 0d. | Docker |<ul><li>[ ]</li></ul>| https://hub.docker.com/r/kzeroxyz/kzero-salt-enclave-service | Container builds, yet POSTing the supplied JWT to `/get_salt` returns 500 (`No matching key found for JWT`) because the live Google JWKS no longer provides that `kid`. |
| 1. | Salt Service Code |<ul><li>[ ]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service | SGX host and enclave sources are present, but the documented demo flow fails due to the stale JWKS dependency. |
| 2. | docs |<ul><li>[ ]</li></ul>| https://github.com/kzero-xyz/kzero-grant-docs/blob/main/m3-docker-tutorial.md | External tutorial not validated; repository does not make it discoverable nor address the JWT/JWKS mismatch encountered during evaluation. |
| 3. | Docker |<ul><li>[ ]</li></ul>| https://hub.docker.com/r/kzeroxyz/kzero-salt-enclave-service | Published image inherits the same failing `/get_salt` behaviour; please update the image or instructions so evaluators can observe a successful salt response. |

# General Notes

- Docker build succeeds but the runtime service cannot validate the provided JWT because Google rotated the matching key.
- Coverage instrumentation shows only 23.32% execution of `App.cpp` and no enclave coverage, confirming that core functionality lacks automated tests.
- Recommend bundling deterministic JWKS fixtures or issuing fresh JWT samples, and extending the `TEST_MODE` suite to exercise the enclave salt derivation path before resubmission.


# Coverage

- To be able to measure the testing coverage apply the patch below and build the docker container.

```
diff --git a/Dockerfile b/Dockerfile
index 692991d..059be6e 100644
--- a/Dockerfile
+++ b/Dockerfile
@@ -18,6 +18,7 @@ RUN apt-get update && apt-get install -y \
     libjson-c-dev \
     libjwt-dev \
     libmicrohttpd-dev \
+    lcov \
     python3 \
     python3-pip \
     python-is-python3 \
@@ -76,8 +77,9 @@ RUN cd /opt/intel/sgxsdk/lib64 && \
    rm -f libsgx_urts.so.2 && \
    ln -s libsgx_urts_sim.so libsgx_urts.so.2
 
-# Build entire project using XARGO_SGX=1 make
-RUN make TEST_MODE=1
+# Build entire project with test mode and optional coverage support
+ARG COVERAGE=0
+RUN make TEST_MODE=1 COVERAGE=${COVERAGE}
 
 # Expose port
 EXPOSE 8080
diff --git a/Makefile b/Makefile
index c3ae94a..28854b8 100644
--- a/Makefile
+++ b/Makefile
@@ -79,6 +79,11 @@ endif
 App_Cpp_Flags := $(App_C_Flags)
 App_Link_Flags := -L$(SGX_LIBRARY_PATH) -l$(Urts_Library_Name) -lpthread -lcurl -ljson-c -lssl -lcrypto -lmicrohttpd
 
+ifeq ($(COVERAGE), 1)
+    App_Cpp_Flags += --coverage
+    App_Link_Flags += --coverage
+endif
+
 App_Cpp_Objects := $(App_Cpp_Files:.cpp=.o)
 App_Name := bin/app
 
diff --git a/README.md b/README.md
index 88533eb..2b97160 100644
--- a/README.md
+++ b/README.md
@@ -42,6 +42,19 @@ docker run -d -p 8080:8080 --name test-enclave-new -e SGX_MODE=SIM kzeroxyz/kzer
+++ b/README.md
@@ -42,6 +42,19 @@ docker run -d -p 8080:8080 --name test-enclave-new -e SGX_MODE=SIM kzeroxyz/kzer
 docker run --rm --name test-enclave-test -e SGX_MODE=SIM kzeroxyz/kzero-salt-enclave-service:v0.1.1 ./bin/app --test
 ```
 
To collect coverage with the Docker image built locally:

```bash
# Build with coverage instrumentation enabled
docker build --build-arg COVERAGE=1 -t kzero-salt-enclave-service:coverage .

# Run the test suite to generate coverage data
docker run --rm -e SGX_MODE=SIM kzero-salt-enclave-service:coverage ./bin/app --test

# Extract coverage information
docker run --rm kzero-salt-enclave-service:coverage gcov -o App/App.o App/App.cpp
```
