#!/bin/bash

set -ex

now dist --name time --local-config=now.json --debug --force --public --no-clipboard

now alias --local-config=now.json --debug

now rm time --debug --yes --safe
