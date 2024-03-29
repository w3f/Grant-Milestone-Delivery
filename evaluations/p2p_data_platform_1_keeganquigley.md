# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/data_platform_with_deep_indexed_data_and_staking_reports.md
- **Milestone:** 1
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Installation Doc](https://github.com/p2p-org/polkadot-grant#installation) | Ok. |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | - | Would be better to be able to run tests separately. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Infrastructure repo](https://github.com/p2p-org/polkadot-grant)| Docker compose successfully spins up all nodes/apps. Terraform works.|
| 1. | Develop the ETL component | <ul><li>[x] </li></ul> |[DAG for ETL from Indexer to DWH](https://github.com/p2p-org/polkadot-grant-dags)| Ok. | 
| 2. | Publish DWH data | <ul><li>[x] </li></ul> |[Published data in Google open datasets](https://console.cloud.google.com/)| Ok. | 
| 3. | Forking Superset | <ul><li>[x] </li></ul> |[Public data platform on Polkadot](https://polkadot-rfp-superset.tool.p2p.org/superset/welcome/)| Ok. |

# General Notes

Dashboard looks good but there could be better documentation on how to use and test it. Also with Terraform I would expect more e2e tests. I'm hoping it will continue to be improved! Python code looks good but could probably use more inline comments. Overall good work!

# Evaluation v2

## DAGS

Dags successfully run with Docker compose:
```
CONTAINER ID   IMAGE                  COMMAND                  CREATED         STATUS                                 PORTS                    NAMES
744cc7984c9f   apache/airflow:2.5.3   "/usr/bin/dumb-init …"   2 minutes ago   Up About a minute (healthy)            8080/tcp                 polkadot-grant-dags-airflow-triggerer-1
207d6e509128   apache/airflow:2.5.3   "/usr/bin/dumb-init …"   2 minutes ago   Up About a minute (healthy)            0.0.0.0:8080->8080/tcp   polkadot-grant-dags-airflow-webserver-1
d3a40f4de110   apache/airflow:2.5.3   "/usr/bin/dumb-init …"   2 minutes ago   Up About a minute (healthy)            8080/tcp                 polkadot-grant-dags-airflow-worker-1
0acbcca33e67   apache/airflow:2.5.3   "/usr/bin/dumb-init …"   2 minutes ago   Up About a minute (health: starting)   8080/tcp                 polkadot-grant-dags-airflow-scheduler-1
5e02c21bf59a   postgres:13            "docker-entrypoint.s…"   2 minutes ago   Up About a minute                      0.0.0.0:5432->5432/tcp   polkadot-grant-dags-postgres_indexer_db-1
e0157a8de4ef   postgres:13            "docker-entrypoint.s…"   2 minutes ago   Up About a minute (healthy)            5432/tcp                 polkadot-grant-dags-postgres-1
71a0103e160b   redis:latest           "docker-entrypoint.s…"   2 minutes ago   Up About a minute (healthy)            6379/tcp                 polkadot-grant-dags-redis-1
```
DAG workflows work but there is one import error:

<img width="1434" alt="dags" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/602c23b1-533d-456b-925d-805291876a5f">

Triggered 8 datasets and all ran successfully:

<img width="1434" alt="datasets" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/9e8279fb-7f95-41fd-892a-805f899d0f67">

`mbelt3_public_bigloader.py` runs successfully.

## Tests

Tests can't be run separately; they have to be run during installation, however they all passed.

Was able to build and run the terraform module successfully:

```sh
Terraform has created a lock file .terraform.lock.hcl to record the provider
selections it made above. Include this file in your version control repository
so that Terraform can guarantee to make the same selections by default when
you run "terraform init" in the future.

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```
<details>
  <summary>Output</summary>

```
                                      type: string
                                    key:
                                      description: Key is the taint key that the toleration applies
                                        to. Empty means match all taint keys. If the key is empty,
                                        operator must be Exists; this combination means to match
                                        all values and all keys.
                                      type: string
                                    operator:
                                      description: Operator represents a key's relationship to
                                        the value. Valid operators are Exists and Equal. Defaults
                                        to Equal. Exists is equivalent to wildcard for value,
                                        so that a pod can tolerate all taints of a particular
                                        category.
                                      type: string
                                    tolerationSeconds:
                                      description: TolerationSeconds represents the period of
                                        time the toleration (which must be of effect NoExecute,
                                        otherwise this field is ignored) tolerates the taint.
                                        By default, it is not set, which means tolerate the taint
                                        forever (do not evict). Zero and negative values will
                                        be treated as 0 (evict immediately) by the system.
                                      format: int64
                                      type: integer
                                    value:
                                      description: Value is the taint value the toleration matches
                                        to. If the operator is Exists, the value should be empty,
                                        otherwise just a regular string.
                                      type: string
                                  type: object
                                type: array
                              topologySpreadConstraints:
                                description: TopologySpreadConstraints embedded kubernetes pod
                                  configuration option, controls how pods are spread across your
                                  cluster among failure-domains such as regions, zones, nodes,
                                  and other user-defined topology domains https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
                                items:
                                  description: TopologySpreadConstraint specifies how to spread
                                    matching pods among the given topology.
                                  required:
                                  - maxSkew
                                  - topologyKey
                                  - whenUnsatisfiable
                                  type: object
                                  x-kubernetes-preserve-unknown-fields: true
                                type: array
                              volumeMounts:
                                description: VolumeMounts allows configuration of additional VolumeMounts
                                  on the output Deployment definition. VolumeMounts specified
                                  will be appended to other VolumeMounts in the VMSelect container,
                                  that are generated as a result of StorageSpec objects.
                                items:
                                  description: VolumeMount describes a mounting of a Volume within
                                    a container.
                                  properties:
                                    mountPath:
                                      description: Path within the container at which the volume
                                        should be mounted.  Must not contain ':'.
                                      type: string
                                    mountPropagation:
                                      description: mountPropagation determines how mounts are
                                        propagated from the host to container and the other way
                                        around. When not set, MountPropagationNone is used. This
                                        field is beta in 1.10.
                                      type: string
                                    name:
                                      description: This must match the Name of a Volume.
                                      type: string
                                    readOnly:
                                      description: Mounted read-only if true, read-write otherwise
                                        (false or unspecified). Defaults to false.
                                      type: boolean
                                    subPath:
                                      description: Path within the volume from which the container's
                                        volume should be mounted. Defaults to "" (volume's root).
                                      type: string
                                    subPathExpr:
                                      description: Expanded path within the volume from which
                                        the container's volume should be mounted. Behaves similarly
                                        to SubPath but environment variable references $(VAR_NAME)
                                        are expanded using the container's environment. Defaults
                                        to "" (volume's root). SubPathExpr and SubPath are mutually
                                        exclusive.
                                      type: string
                                  required:
                                  - mountPath
                                  - name
                                  type: object
                                type: array
                              volumes:
                                description: Volumes allows configuration of additional volumes
                                  on the output Deployment definition. Volumes specified will
                                  be appended to other volumes that are generated as a result
                                  of StorageSpec objects.
                                items:
                                  description: Volume represents a named volume in a pod that
                                    may be accessed by any container in the pod.
                                  required:
                                  - name
                                  type: object
                                  x-kubernetes-preserve-unknown-fields: true
                                type: array
                            required:
                            - replicaCount
                            type: object
                          vmstorage:
                            properties:
                              affinity:
                                description: Affinity If specified, the pod's scheduling constraints.
                                type: object
                                x-kubernetes-preserve-unknown-fields: true
                              claimTemplates:
                                description: ClaimTemplates allows adding additional VolumeClaimTemplates
                                  for StatefulSet
                                items:
                                  description: PersistentVolumeClaim is a user's request for and
                                    claim to a persistent volume
                                  properties:
                                    apiVersion:
                                      description: 'APIVersion defines the versioned schema of
                                        this representation of an object. Servers should convert
                                        recognized schemas to the latest internal value, and may
                                        reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
                                      type: string
                                    kind:
                                      description: 'Kind is a string value representing the REST
                                        resource this object represents. Servers may infer this
                                        from the endpoint the client submits requests to. Cannot
                                        be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
                                      type: string
                                    metadata:
                                      description: 'Standard object''s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata'
                                      type: object
                                      x-kubernetes-preserve-unknown-fields: true
                                    spec:
                                      description: 'spec defines the desired characteristics of
                                        a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims'
                                      properties:
                                        accessModes:
                                          description: 'accessModes contains the desired access
                                            modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1'
                                          items:
                                            type: string
                                          type: array
                                        dataSource:
                                          description: 'dataSource field can be used to specify
                                            either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                                            * An existing PVC (PersistentVolumeClaim) If the provisioner
                                            or an external controller can support the specified
                                            data source, it will create a new volume based on
                                            the contents of the specified data source. If the
                                            AnyVolumeDataSource feature gate is enabled, this
                                            field will always have the same contents as the DataSourceRef
                                            field.'
                                          properties:
                                            apiGroup:
                                              description: APIGroup is the group for the resource
                                                being referenced. If APIGroup is not specified,
                                                the specified Kind must be in the core API group.
                                                For any other third-party types, APIGroup is required.
                                              type: string
                                            kind:
                                              description: Kind is the type of resource being
                                                referenced
                                              type: string
                                            name:
                                              description: Name is the name of resource being
                                                referenced
                                              type: string
                                          required:
                                          - kind
                                          - name
                                          type: object
                                          x-kubernetes-map-type: atomic
                                        dataSourceRef:
                                          description: 'dataSourceRef specifies the object from
                                            which to populate the volume with data, if a non-empty
                                            volume is desired. This may be any local object from
                                            a non-empty API group (non core object) or a PersistentVolumeClaim
                                            object. When this field is specified, volume binding
                                            will only succeed if the type of the specified object
                                            matches some installed volume populator or dynamic
                                            provisioner. This field will replace the functionality
                                            of the DataSource field and as such if both fields
                                            are non-empty, they must have the same value. For
                                            backwards compatibility, both fields (DataSource and
                                            DataSourceRef) will be set to the same value automatically
                                            if one of them is empty and the other is non-empty.
                                            There are two important differences between DataSource
                                            and DataSourceRef: * While DataSource only allows
                                            two specific types of objects, DataSourceRef allows
                                            any non-core object, as well as PersistentVolumeClaim
                                            objects. * While DataSource ignores disallowed values
                                            (dropping them), DataSourceRef preserves all values,
                                            and generates an error if a disallowed value is specified.
                                            (Beta) Using this field requires the AnyVolumeDataSource
                                            feature gate to be enabled.'
                                          properties:
                                            apiGroup:
                                              description: APIGroup is the group for the resource
                                                being referenced. If APIGroup is not specified,
                                                the specified Kind must be in the core API group.
                                                For any other third-party types, APIGroup is required.
                                              type: string
                                            kind:
                                              description: Kind is the type of resource being
                                                referenced
                                              type: string
                                            name:
                                              description: Name is the name of resource being
                                                referenced
                                              type: string
                                          required:
                                          - kind
                                          - name
                                          type: object
                                          x-kubernetes-map-type: atomic
                                        resources:
                                          description: 'resources represents the minimum resources
                                            the volume should have. If RecoverVolumeExpansionFailure
                                            feature is enabled users are allowed to specify resource
                                            requirements that are lower than previous value but
                                            must still be higher than capacity recorded in the
                                            status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources'
                                          properties:
                                            limits:
                                              additionalProperties:
                                                anyOf:
                                                - type: integer
                                                - type: string
                                                pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                                                x-kubernetes-int-or-string: true
                                              description: 'Limits describes the maximum amount
                                                of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
                                              type: object
                                            requests:
                                              additionalProperties:
                                                anyOf:
                                                - type: integer
                                                - type: string
                                                pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                                                x-kubernetes-int-or-string: true
                                              description: 'Requests describes the minimum amount
                                                of compute resources required. If Requests is
                                                omitted for a container, it defaults to Limits
                                                if that is explicitly specified, otherwise to
                                                an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
                                              type: object
                                          type: object
                                        selector:
                                          description: selector is a label query over volumes
                                            to consider for binding.
                                          properties:
                                            matchExpressions:
                                              description: matchExpressions is a list of label
                                                selector requirements. The requirements are ANDed.
                                              items:
                                                description: A label selector requirement is a
                                                  selector that contains values, a key, and an
                                                  operator that relates the key and values.
                                                properties:
                                                  key:
                                                    description: key is the label key that the
                                                      selector applies to.
                                                    type: string
                                                  operator:
                                                    description: operator represents a key's relationship
                                                      to a set of values. Valid operators are
                                                      In, NotIn, Exists and DoesNotExist.
                                                    type: string
                                                  values:
                                                    description: values is an array of string
                                                      values. If the operator is In or NotIn,
                                                      the values array must be non-empty. If the
                                                      operator is Exists or DoesNotExist, the
                                                      values array must be empty. This array is
                                                      replaced during a strategic merge patch.
                                                    items:
                                                      type: string
                                                    type: array
                                                required:
                                                - key
                                                - operator
                                                type: object
                                              type: array
                                            matchLabels:
                                              additionalProperties:
                                                type: string
                                              description: matchLabels is a map of {key,value}
                                                pairs. A single {key,value} in the matchLabels
                                                map is equivalent to an element of matchExpressions,
                                                whose key field is "key", the operator is "In",
                                                and the values array contains only "value". The
                                                requirements are ANDed.
                                              type: object
                                          type: object
                                          x-kubernetes-map-type: atomic
                                        storageClassName:
                                          description: 'storageClassName is the name of the StorageClass
                                            required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1'
                                          type: string
                                        volumeMode:
                                          description: volumeMode defines what type of volume
                                            is required by the claim. Value of Filesystem is implied
                                            when not included in claim spec.
                                          type: string
                                        volumeName:
                                          description: volumeName is the binding reference to
                                            the PersistentVolume backing this claim.
                                          type: string
                                      type: object
                                    status:
                                      description: 'status represents the current information/status
                                        of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims'
                                      properties:
                                        accessModes:
                                          description: 'accessModes contains the actual access
                                            modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1'
                                          items:
                                            type: string
                                          type: array
                                        allocatedResources:
                                          additionalProperties:
                                            anyOf:
                                            - type: integer
                                            - type: string
                                            pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                                            x-kubernetes-int-or-string: true
                                          description: allocatedResources is the storage resource
                                            within AllocatedResources tracks the capacity allocated
                                            to a PVC. It may be larger than the actual capacity
                                            when a volume expansion operation is requested. For
                                            storage quota, the larger value from allocatedResources
                                            and PVC.spec.resources is used. If allocatedResources
                                            is not set, PVC.spec.resources alone is used for quota
                                            calculation. If a volume expansion capacity request
                                            is lowered, allocatedResources is only lowered if
                                            there are no expansion operations in progress and
                                            if the actual volume capacity is equal or lower than
                                            the requested capacity. This is an alpha field and
                                            requires enabling RecoverVolumeExpansionFailure feature.
                                          type: object
                                        capacity:
                                          additionalProperties:
                                            anyOf:
                                            - type: integer
                                            - type: string
                                            pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                                            x-kubernetes-int-or-string: true
                                          description: capacity represents the actual resources
                                            of the underlying volume.
                                          type: object
                                        conditions:
                                          description: conditions is the current Condition of
                                            persistent volume claim. If underlying persistent
                                            volume is being resized then the Condition will be
                                            set to 'ResizeStarted'.
                                          items:
                                            description: PersistentVolumeClaimCondition contails
                                              details about state of pvc
                                            properties:
                                              lastProbeTime:
                                                description: lastProbeTime is the time we probed
                                                  the condition.
                                                format: date-time
                                                type: string
                                              lastTransitionTime:
                                                description: lastTransitionTime is the time the
                                                  condition transitioned from one status to another.
                                                format: date-time
                                                type: string
                                              message:
                                                description: message is the human-readable message
                                                  indicating details about last transition.
                                                type: string
                                              reason:
                                                description: reason is a unique, this should be
                                                  a short, machine understandable string that
                                                  gives the reason for condition's last transition.
                                                  If it reports "ResizeStarted" that means the
                                                  underlying persistent volume is being resized.
                                                type: string
                                              status:
                                                type: string
                                              type:
                                                description: PersistentVolumeClaimConditionType
                                                  is a valid value of PersistentVolumeClaimCondition.Type
                                                type: string
                                            required:
                                            - status
                                            - type
                                            type: object
                                          type: array
                                        phase:
                                          description: phase represents the current phase of PersistentVolumeClaim.
                                          type: string
                                        resizeStatus:
                                          description: resizeStatus stores status of resize operation.
                                            ResizeStatus is not set by default but when expansion
                                            is complete resizeStatus is set to empty string by
                                            resize controller or kubelet. This is an alpha field
                                            and requires enabling RecoverVolumeExpansionFailure
                                            feature.
                                          type: string
                                      type: object
                                  type: object
                                type: array
                              configMaps:
                                description: ConfigMaps is a list of ConfigMaps in the same namespace
                                  as the VMSelect object, which shall be mounted into the VMSelect
                                  Pods. The ConfigMaps are mounted into /etc/vm/configs/<configmap-name>.
                                items:
                                  type: string
                                type: array
                              containers:
                                description: Containers property allows to inject additions sidecars
                                  or to patch existing containers. It can be useful for proxies,
                                  backup, etc.
                                items:
                                  description: A single application container that you want to
                                    run within a pod.
                                  required:
                                  - name
                                  type: object
                                  x-kubernetes-preserve-unknown-fields: true
                                type: array
                              dnsConfig:
                                description: Specifies the DNS parameters of a pod. Parameters
                                  specified here will be merged to the generated DNS configuration
                                  based on DNSPolicy.
                                items:
                                  x-kubernetes-preserve-unknown-fields: true
                                properties:
                                  nameservers:
                                    description: A list of DNS name server IP addresses. This
                                      will be appended to the base nameservers generated from
                                      DNSPolicy. Duplicated nameservers will be removed.
                                    items:
                                      type: string
                                    type: array
                                  options:
                                    description: A list of DNS resolver options. This will be
                                      merged with the base options generated from DNSPolicy. Duplicated
                                      entries will be removed. Resolution options given in Options
                                      will override those that appear in the base DNSPolicy.
                                    items:
                                      description: PodDNSConfigOption defines DNS resolver options
                                        of a pod.
                                      properties:
                                        name:
                                          description: Required.
                                          type: string
                                        value:
                                          type: string
                                      type: object
                                    type: array
                                  searches:
                                    description: A list of DNS search domains for host-name lookup.
                                      This will be appended to the base search paths generated
                                      from DNSPolicy. Duplicated search paths will be removed.
                                    items:
                                      type: string
                                    type: array
                                type: object
                              dnsPolicy:
                                description: DNSPolicy sets DNS policy for the pod
                                type: string
                              extraArgs:
                                additionalProperties:
                                  type: string
                                type: object
                              extraEnvs:
                                description: ExtraEnvs that will be added to VMSelect pod
                                items:
                                  description: EnvVar represents an environment variable present
                                    in a Container.
                                  properties:
                                    name:
                                      description: Name of the environment variable. Must be a
                                        C_IDENTIFIER.
                                      type: string
                                    value:
                                      description: 'Variable references $(VAR_NAME) are expanded
                                        using the previously defined environment variables in
                                        the container and any service environment variables. If
                                        a variable cannot be resolved, the reference in the input
                                        string will be unchanged. Double $$ are reduced to a single
                                        $, which allows for escaping the $(VAR_NAME) syntax: i.e.
                                        "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
                                        Escaped references will never be expanded, regardless
                                        of whether the variable exists or not. Defaults to "".'
                                      type: string
                                  required:
                                  - name
                                  type: object
                                  x-kubernetes-preserve-unknown-fields: true
                                type: array
                              hostNetwork:
                                description: HostNetwork controls whether the pod may use the
                                  node network namespace
                                type: boolean
                              image:
                                description: Image - docker image settings for VMStorage
                                properties:
                                  pullPolicy:
                                    description: PullPolicy describes how to pull docker image
                                    type: string
                                  repository:
                                    description: Repository contains name of docker image + it's
                                      repository if needed
                                    type: string
                                  tag:
                                    description: Tag contains desired docker image version
                                    type: string
                                type: object
                              initContainers:
                                description: 'InitContainers allows adding initContainers to the
                                  pod definition. Those can be used to e.g. fetch secrets for
                                  injection into the VMSelect configuration from external sources.
                                  Any errors during the execution of an initContainer will lead
                                  to a restart of the Pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
                                  Using initContainers for any use case other then secret fetching
                                  is entirely outside the scope of what the maintainers will support
                                  and by doing so, you accept that this behaviour may break at
                                  any time without notice.'
                                items:
                                  description: A single application container that you want to
                                    run within a pod.
                                  required:
                                  - name
                                  type: object
                                  x-kubernetes-preserve-unknown-fields: true
                                type: array
                              livenessProbe:
                                description: LivenessProbe that will be added CRD pod
                                type: object
                                x-kubernetes-preserve-unknown-fields: true
                              logFormat:
                                description: LogFormat for VMSelect to be configured with. default
                                  or json
                                enum:
                                - default
                                - json
                                type: string
                              logLevel:
                                description: LogLevel for VMSelect to be configured with.
                                enum:
                                - INFO
                                - WARN
                                - ERROR
                                - FATAL
                                - PANIC
                                type: string
                              maintenanceInsertNodeIDs:
                                description: 'MaintenanceInsertNodeIDs - excludes given node ids
                                  from insert requests routing, must contain pod suffixes - for
                                  pod-0, id will be 0 and etc. lets say, you have pod-0, pod-1,
                                  pod-2, pod-3. to exclude pod-0 and pod-3 from insert routing,
                                  define nodeIDs: [0,3]. Useful at storage expanding, when you
                                  want to rebalance some data at cluster.'
                                items:
                                  format: int32
                                  type: integer
                                type: array
                              maintenanceSelectNodeIDs:
                                description: MaintenanceInsertNodeIDs - excludes given node ids
                                  from select requests routing, must contain pod suffixes - for
                                  pod-0, id will be 0 and etc.
                                items:
                                  format: int32
                                  type: integer
                                type: array
                              name:
                                description: Name is deprecated and will be removed at 0.22.0
                                  release
                                type: string
                              nodeSelector:
                                additionalProperties:
                                  type: string
                                description: NodeSelector Define which Nodes the Pods are scheduled
                                  on.
                                type: object
                              podDisruptionBudget:
                                description: PodDisruptionBudget created by operator
                                properties:
                                  maxUnavailable:
                                    anyOf:
                                    - type: integer
                                    - type: string
                                    description: An eviction is allowed if at most "maxUnavailable"
                                      pods selected by "selector" are unavailable after the eviction,
                                      i.e. even in absence of the evicted pod. For example, one
                                      can prevent all voluntary evictions by specifying 0. This
                                      is a mutually exclusive setting with "minAvailable".
                                    x-kubernetes-int-or-string: true
                                  minAvailable:
                                    anyOf:
                                    - type: integer
                                    - type: string
                                    description: An eviction is allowed if at least "minAvailable"
                                      pods selected by "selector" will still be available after
                                      the eviction, i.e. even in the absence of the evicted pod.  So
                                      for example you can prevent all voluntary evictions by specifying
                                      "100%".
                                    x-kubernetes-int-or-string: true
                                  selectorLabels:
                                    additionalProperties:
                                      type: string
                                    description: replaces default labels selector generated by
                                      operator it's useful when you need to create custom budget
                                    type: object
                                type: object
                              podMetadata:
                                description: PodMetadata configures Labels and Annotations which
                                  are propagated to the VMSelect pods.
                                properties:
                                  annotations:
                                    additionalProperties:
                                      type: string
                                    description: 'Annotations is an unstructured key value map
                                      stored with a resource that may be set by external tools
                                      to store and retrieve arbitrary metadata. They are not queryable
                                      and should be preserved when modifying objects. More info:
                                      http://kubernetes.io/docs/user-guide/annotations'
                                    type: object
                                  labels:
                                    additionalProperties:
                                      type: string
                                    description: 'Labels Map of string keys and values that can
                                      be used to organize and categorize (scope and select) objects.
                                      May match selectors of replication controllers and services.
                                      More info: http://kubernetes.io/docs/user-guide/labels'
                                    type: object
                                  name:
                                    description: 'Name must be unique within a namespace. Is required
                                      when creating resources, although some resources may allow
                                      a client to request the generation of an appropriate name
                                      automatically. Name is primarily intended for creation idempotence
                                      and configuration definition. Cannot be updated. More info:
                                      http://kubernetes.io/docs/user-guide/identifiers#names'
                                    type: string
                                type: object
                              port:
                                description: Port for health check connetions
                                type: string
                              priorityClassName:
                                description: Priority class assigned to the Pods
                                type: string
                              readinessGates:
                                description: ReadinessGates defines pod readiness gates
                                items:
                                  description: PodReadinessGate contains the reference to a pod
                                    condition
                                  properties:
                                    conditionType:
                                      description: ConditionType refers to a condition in the
                                        pod's condition list with matching type.
                                      type: string
                                  required:
                                  - conditionType
                                  type: object
                                type: array
                              readinessProbe:
                                description: ReadinessProbe that will be added CRD pod
                                type: object
                                x-kubernetes-preserve-unknown-fields: true
                              replicaCount:
                                description: ReplicaCount is the expected size of the VMStorage
                                  cluster. The controller will eventually make the size of the
                                  running cluster equal to the expected size.
                                format: int32
                                type: integer
                              resources:
                                description: Resources container resource request and limits,
                                  https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                                properties:
                                  limits:
                                    additionalProperties:
                                      anyOf:
                                      - type: integer
                                      - type: string
                                      pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                                      x-kubernetes-int-or-string: true
                                    description: 'Limits describes the maximum amount of compute
                                      resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
                                    type: object
                                  requests:
                                    additionalProperties:
                                      anyOf:
                                      - type: integer
                                      - type: string
                                      pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                                      x-kubernetes-int-or-string: true
                                    description: 'Requests describes the minimum amount of compute
                                      resources required. If Requests is omitted for a container,
                                      it defaults to Limits if that is explicitly specified, otherwise
                                      to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
                                    type: object
                                type: object
                              rollingUpdateStrategy:
                                description: RollingUpdateStrategy defines strategy for application
                                  updates Default is OnDelete, in this case operator handles update
                                  process Can be changed for RollingUpdate
                                type: string
                              runtimeClassName:
                                description: RuntimeClassName - defines runtime class for kubernetes
                                  pod. https://kubernetes.io/docs/concepts/containers/runtime-class/
                                type: string
                              schedulerName:
                                description: SchedulerName - defines kubernetes scheduler name
                                type: string
                              secrets:
                                description: Secrets is a list of Secrets in the same namespace
                                  as the VMSelect object, which shall be mounted into the VMSelect
                                  Pods. The Secrets are mounted into /etc/vm/secrets/<secret-name>.
                                items:
                                  type: string
                                type: array
                              securityContext:
                                description: SecurityContext holds pod-level security attributes
                                  and common container settings. This defaults to the default
                                  PodSecurityContext.
                                type: object
                                x-kubernetes-preserve-unknown-fields: true
                              serviceScrapeSpec:
                                description: ServiceScrapeSpec that will be added to vmstorage
                                  VMServiceScrape spec
                                required:
                                - endpoints
                                type: object
                                x-kubernetes-preserve-unknown-fields: true
                              serviceSpec:
                                description: ServiceSpec that will be create additional service
                                  for vmstorage
                                properties:
                                  metadata:
                                    description: EmbeddedObjectMetadata defines objectMeta for
                                      additional service.
                                    properties:
                                      annotations:
                                        additionalProperties:
                                          type: string
                                        description: 'Annotations is an unstructured key value
                                          map stored with a resource that may be set by external
                                          tools to store and retrieve arbitrary metadata. They
                                          are not queryable and should be preserved when modifying
                                          objects. More info: http://kubernetes.io/docs/user-guide/annotations'
                                        type: object
                                      labels:
                                        additionalProperties:
                                          type: string
                                        description: 'Labels Map of string keys and values that
                                          can be used to organize and categorize (scope and select)
                                          objects. May match selectors of replication controllers
                                          and services. More info: http://kubernetes.io/docs/user-guide/labels'
                                        type: object
                                      name:
                                        description: 'Name must be unique within a namespace.
                                          Is required when creating resources, although some resources
                                          may allow a client to request the generation of an appropriate
                                          name automatically. Name is primarily intended for creation
                                          idempotence and configuration definition. Cannot be
                                          updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names'
                                        type: string
                                    type: object
                                  spec:
                                    description: 'ServiceSpec describes the attributes that a
                                      user creates on a service. More info: https://kubernetes.io/docs/concepts/services-networking/service/'
                                    type: object
                                    x-kubernetes-preserve-unknown-fields: true
                                required:
                                - spec
                                type: object
                              startupProbe:
                                description: StartupProbe that will be added to CRD pod
                                type: object
                                x-kubernetes-preserve-unknown-fields: true
                              storage:
                                description: Storage - add persistent volume for StorageDataPath
                                  its useful for persistent cache
                                properties:
                                  disableMountSubPath:
                                    description: 'Deprecated: subPath usage will be disabled by
                                      default in a future release, this option will become unnecessary.
                                      DisableMountSubPath allows to remove any subPath usage in
                                      volume mounts.'
                                    type: boolean
                                  emptyDir:
                                    description: 'EmptyDirVolumeSource to be used by the Prometheus
                                      StatefulSets. If specified, used in place of any volumeClaimTemplate.
                                      More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir'
                                    properties:
                                      medium:
                                        description: 'medium represents what type of storage medium
                                          should back this directory. The default is "" which
                                          means to use the node''s default medium. Must be an
                                          empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir'
                                        type: string
                                      sizeLimit:
                                        anyOf:
                                        - type: integer
                                        - type: string
                                        description: 'sizeLimit is the total amount of local storage
                                          required for this EmptyDir volume. The size limit is
                                          also applicable for memory medium. The maximum usage
                                          on memory medium EmptyDir would be the minimum value
                                          between the SizeLimit specified here and the sum of
                                          memory limits of all containers in a pod. The default
                                          is nil which means that the limit is undefined. More
                                          info: http://kubernetes.io/docs/user-guide/volumes#emptydir'
                                        pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                                        x-kubernetes-int-or-string: true
                                    type: object
                                  volumeClaimTemplate:
                                    description: A PVC spec to be used by the VMAlertManager StatefulSets.
                                    type: object
                                    x-kubernetes-preserve-unknown-fields: true
                                type: object
                              storageDataPath:
                                description: StorageDataPath - path to storage data
                                type: string
                              terminationGracePeriodSeconds:
                                description: TerminationGracePeriodSeconds period for container
                                  graceful termination
                                format: int64
                                type: integer
                              tolerations:
                                description: Tolerations If specified, the pod's tolerations.
                                items:
                                  description: The pod this Toleration is attached to tolerates
                                    any taint that matches the triple <key,value,effect> using
                                    the matching operator <operator>.
                                  properties:
                                    effect:
                                      description: Effect indicates the taint effect to match.
                                        Empty means match all taint effects. When specified, allowed
                                        values are NoSchedule, PreferNoSchedule and NoExecute.
                                      type: string
                                    key:
                                      description: Key is the taint key that the toleration applies
                                        to. Empty means match all taint keys. If the key is empty,
                                        operator must be Exists; this combination means to match
                                        all values and all keys.
                                      type: string
                                    operator:
                                      description: Operator represents a key's relationship to
                                        the value. Valid operators are Exists and Equal. Defaults
                                        to Equal. Exists is equivalent to wildcard for value,
                                        so that a pod can tolerate all taints of a particular
                                        category.
                                      type: string
                                    tolerationSeconds:
                                      description: TolerationSeconds represents the period of
                                        time the toleration (which must be of effect NoExecute,
                                        otherwise this field is ignored) tolerates the taint.
                                        By default, it is not set, which means tolerate the taint
                                        forever (do not evict). Zero and negative values will
                                        be treated as 0 (evict immediately) by the system.
                                      format: int64
                                      type: integer
                                    value:
                                      description: Value is the taint value the toleration matches
                                        to. If the operator is Exists, the value should be empty,
                                        otherwise just a regular string.
                                      type: string
                                  type: object
                                type: array
                              topologySpreadConstraints:
                                description: TopologySpreadConstraints embedded kubernetes pod
                                  configuration option, controls how pods are spread across your
                                  cluster among failure-domains such as regions, zones, nodes,
                                  and other user-defined topology domains https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
                                items:
                                  description: TopologySpreadConstraint specifies how to spread
                                    matching pods among the given topology.
                                  required:
                                  - maxSkew
                                  - topologyKey
                                  - whenUnsatisfiable
                                  type: object
                                  x-kubernetes-preserve-unknown-fields: true
                                type: array
                              vmBackup:
                                description: VMBackup configuration for backup
                                properties:
                                  acceptEULA:
                                    description: AcceptEULA accepts enterprise feature usage,
                                      must be set to true. otherwise backupmanager cannot be added
                                      to single/cluster version. https://victoriametrics.com/legal/eula/
                                    type: boolean
                                  concurrency:
                                    description: Defines number of concurrent workers. Higher
                                      concurrency may reduce backup duration (default 10)
                                    format: int32
                                    type: integer
                                  credentialsSecret:
                                    description: CredentialsSecret is secret in the same namespace
                                      for access to remote storage The secret is mounted into
                                      /etc/vm/creds.
                                    properties:
                                      key:
                                        description: The key of the secret to select from.  Must
                                          be a valid secret key.
                                        type: string
                                      name:
                                        description: 'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                                          TODO: Add other useful fields. apiVersion, kind, uid?'
                                        type: string
                                      optional:
                                        description: Specify whether the Secret or its key must
                                          be defined
                                        type: boolean
                                    required:
                                    - key
                                    type: object
                                    x-kubernetes-map-type: atomic
                                  customS3Endpoint:
                                    description: Custom S3 endpoint for use with S3-compatible
                                      storages (e.g. MinIO). S3 is used if not set
                                    type: string
                                  destination:
                                    description: Defines destination for backup
                                    type: string
                                  destinationDisableSuffixAdd:
                                    description: DestinationDisableSuffixAdd - disables suffix
                                      adding for cluster version backups each vmstorage backup
                                      must have unique backup folder so operator adds POD_NAME
                                      as suffix for backup destination folder.
                                    type: boolean
                                  disableDaily:
                                    description: Defines if daily backups disabled (default false)
                                    type: boolean
                                  disableHourly:
                                    description: Defines if hourly backups disabled (default false)
                                    type: boolean
                                  disableMonthly:
                                    description: Defines if monthly backups disabled (default
                                      false)
                                    type: boolean
                                  disableWeekly:
                                    description: Defines if weekly backups disabled (default false)
                                    type: boolean
                                  extraArgs:
                                    additionalProperties:
                                      type: string
                                    description: extra args like maxBytesPerSecond default 0
                                    type: object
                                  extraEnvs:
                                    items:
                                      description: EnvVar represents an environment variable present
                                        in a Container.
                                      properties:
                                        name:
                                          description: Name of the environment variable. Must
                                            be a C_IDENTIFIER.
                                          type: string
                                        value:
                                          description: 'Variable references $(VAR_NAME) are expanded
                                            using the previously defined environment variables
                                            in the container and any service environment variables.
                                            If a variable cannot be resolved, the reference in
                                            the input string will be unchanged. Double $$ are
                                            reduced to a single $, which allows for escaping the
                                            $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce
                                            the string literal "$(VAR_NAME)". Escaped references
                                            will never be expanded, regardless of whether the
                                            variable exists or not. Defaults to "".'
                                          type: string
                                        valueFrom:
                                          description: Source for the environment variable's value.
                                            Cannot be used if value is not empty.
                                          properties:
                                            configMapKeyRef:
                                              description: Selects a key of a ConfigMap.
                                              properties:
                                                key:
                                                  description: The key to select.
                                                  type: string
                                                name:
                                                  description: 'Name of the referent. More info:
                                                    https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                                                    TODO: Add other useful fields. apiVersion,
                                                    kind, uid?'
                                                  type: string
                                                optional:
                                                  description: Specify whether the ConfigMap or
                                                    its key must be defined
                                                  type: boolean
                                              required:
                                              - key
                                              type: object
                                              x-kubernetes-map-type: atomic
                                            fieldRef:
                                              description: 'Selects a field of the pod: supports
                                                metadata.name, metadata.namespace, `metadata.labels[''<KEY>'']`,
                                                `metadata.annotations[''<KEY>'']`, spec.nodeName,
                                                spec.serviceAccountName, status.hostIP, status.podIP,
                                                status.podIPs.'
                                              properties:
                                                apiVersion:
                                                  description: Version of the schema the FieldPath
                                                    is written in terms of, defaults to "v1".
                                                  type: string
                                                fieldPath:
                                                  description: Path of the field to select in
                                                    the specified API version.
                                                  type: string
                                              required:
                                              - fieldPath
                                              type: object
                                              x-kubernetes-map-type: atomic
```
</details>

Also had to turn off Public Access Protection on the bucket in order to expose it publicly for authenticated users, might be useful to add this to instructions.

Another minor note: `infrastructure` folder is incorrectly spelled `infarstructure`.

# Evaluation v1

I made it down to step 5, but am getting an error when running `terraform init`:

```
Initializing the backend...
Initializing modules...
╷
│ Error: Failed to get existing workspaces: querying Cloud Storage failed: storage: bucket doesn't exist
```
Which is strange because it does exist:

<img width="849" alt="bucket" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/ab002cbc-5f2f-4f3e-95e8-a9bc02873f44">

I tried `terraform init -reconfigure` but no luck. Also tried [these solutions](https://stackoverflow.com/questions/59053993/failed-to-get-existing-workspaces-querying-cloud-storage-failed-storage-bucke) to no avail. My permissions are set the same as yours:

<img width="1146" alt="permissions" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/82a6b4c6-74a6-44d2-ac29-bd463c4df086">
