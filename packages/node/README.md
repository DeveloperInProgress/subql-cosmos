# @subql-node

## Description

Indexer service in our @subql toolkit, can load user's subquery then fetch, process and persist to db accordingly.

## Installation

```bash
$ npm i -g @subql/node-terra
```

## Running the app

```
$> subql-node-terra
Options:
      --help                Show help                                  [boolean]
      --version             Show version number                        [boolean]
  -f, --subquery            Local path or IPFS cid of the subquery project
       [string] [required] [default: process.cwd()]
      --subquery-name       Name of the subquery project   [deprecated] [string]
  -c, --config              Specify configuration file                  [string]
      --local               Use local mode                [deprecated] [boolean]
      --force-clean         Force clean the database, dropping project schemas
                            and tables                                 [boolean]
      --db-schema           Db schema name of the project               [string]
      --unsafe              Allows usage of any built-in module within the
                            sandbox                                    [boolean]
      --subscription        Enable subscription by create notification triggers
                                                      [boolean] [default: false]
      --batch-size          Batch size of blocks to fetch in one round  [number]
      --scale-batch-size    scale batch size based on memory usage
                                                      [boolean] [default: false]
      --timeout             Timeout for indexer sandbox to execute the mapping
                            functions                                   [number]
      --debug               Show debug information to console output. will
                            forcefully set log level to debug
                                                      [boolean] [default: false]
      --profiler            Show profiler information to console output
                                                      [boolean] [default: false]
      --network-endpoint    Blockchain network endpoint to connect      [string]
      --output-fmt          Print log as json or plain text
                                           [string] [choices: "json", "colored"]
      --log-level           Specify log level to print. Ignored when --debug is
                            used
          [string] [choices: "fatal", "error", "warn", "info", "debug", "trace",
                                                                       "silent"]
      --migrate             Migrate db schema (for management tables only)
                                                      [boolean] [default: false]
      --timestamp-field     Enable/disable created_at and updated_at in schema
                                                      [boolean] [default: false]
  -d, --network-dictionary  Specify the dictionary api for this network [string]
      --dictionary-timeout  Max timeout for dictionary query            [number]
  -m, --mmr-path            Local path of the merkle mountain range (.mmr) file
                                                                        [string]
      --proof-of-index      Enable/disable proof of index
                                                      [boolean] [default: false]
      --ipfs                IPFS gateway endpoint                       [string]
  -p, --port                The port the service will bind to           [number]
      --disable-historical  Disable storing historical state entities
                                                       [boolean] [default: true]
      --reindex             Reindex to specified block height           [number]
  -w, --workers             Number of worker threads to use for fetching and
                            processing blocks. Disabled by default.     [number]
```

## License

Apache-2.0
